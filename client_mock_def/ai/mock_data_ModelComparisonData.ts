export interface ComparisonMetric {
    key: string;
    label: string;
    unit?: string;
    format?: (value: number) => string;
    calculate: (model: LlmModel) => number;
    color?: string;
    icon?: string;
}
export interface ModelScore {
    modelId: string;
    modelName: string;
    overallScore: number;
    scores: Record<string, number>;
    rankings: Record<string, number>;
}
export interface ComparisonConfig {
    metrics: ComparisonMetric[];
    weights: Record<string, number>;
    thresholds: Record<string, { low: number; medium: number; high: number }>;
}
export const defaultMetrics: ComparisonMetric[] = [
    {
        key: 'performance',
        label: 'Performance',
        unit: 'score',
        calculate: (model: LlmModel) => Math.min(model.parameters / 1000000000, 100),
        color: '#3B82F6',
        icon: 'pi-bolt'
    },
export const calculateOverallScore = (model: LlmModel, metrics: ComparisonMetric[], weights: Record<string, number>): number => {
    let totalScore = 0;
    let totalWeight = 0;

    metrics.forEach((metric) => {
        const score = metric.calculate(model);
        const weight = weights[metric.key] || 1;
        const normalizedScore = Math.min(score, 100);

        totalScore += normalizedScore * weight;
        totalWeight += weight;
    });

    return totalWeight > 0 ? totalScore / totalWeight : 0;
};
export const rankModels = (models: LlmModel[], metrics: ComparisonMetric[]): Map<string, Record<string, number>> => {
    const rankings = new Map<string, Record<string, number>>();

    metrics.forEach((metric) => {
        const scores = models
            .map((model) => ({
                id: model.id,
                score: metric.calculate(model)
            }))
            .sort((a, b) => b.score - a.score);

        scores.forEach((item, index) => {
            if (!rankings.has(item.id)) {
                rankings.set(item.id, {});
            }
            rankings.get(item.id)![metric.key] = index + 1;
        });
    });

    return rankings;
};
export const compareModels = (models: LlmModel[], config: ComparisonConfig): ModelScore[] => {
    const rankings = rankModels(models, config.metrics);

    return models.map((model) => {
        const scores: Record<string, number> = {};

        config.metrics.forEach((metric) => {
            scores[metric.key] = metric.calculate(model);
        });

        const overallScore = calculateOverallScore(model, config.metrics, config.weights);

        return {
            modelId: model.id,
            modelName: model.name,
            overallScore,
            scores,
            rankings: rankings.get(model.id) || {}
        };
    });
};
export const getScoreLevel = (
    score: number,
    thresholds: {
        low: number;
        medium: number;
        high: number;
    }
export const formatModelSize = (parameters: number): string => {
    if (parameters >= 1_000_000_000) {
        return `${(parameters / 1_000_000_000).toFixed(1)}B`;
    } else if (parameters >= 1_000_000) {
        return `${(parameters / 1_000_000).toFixed(1)}M`;
    } else if (parameters >= 1_000) {
        return `${(parameters / 1_000).toFixed(1)}K`;
    }
    return parameters.toString();
};
export const calculateCostPerMillion = (model: LlmModel): number => {
    if (!model.pricing?.inputTokens) return 0;
    return model.pricing.inputTokens * 1_000_000;
};
export const estimateInferenceSpeed = (model: LlmModel): number => {
    const baseSpeed = 100;
    const sizePenalty = Math.log10(model.parameters / 1_000_000) * 10;
    const deploymentBonus = model.deploymentType === 'cloud' ? 20 : 0;

    return Math.max(baseSpeed - sizePenalty + deploymentBonus, 10);
};
export const generateComparisonInsights = (models: ModelScore[]): string[] => {
    const insights: string[] = [];

    if (models.length === 0) return insights;

    const sortedByOverall = [...models].sort((a, b) => b.overallScore - a.overallScore);

    insights.push(`${sortedByOverall[0].modelName} has the highest overall score of ${sortedByOverall[0].overallScore.toFixed(1)}`);

    const costEfficient = [...models].sort((a, b) => b.scores.cost_efficiency - a.scores.cost_efficiency)[0];
    if (costEfficient) {
        insights.push(`${costEfficient.modelName} offers the best cost efficiency`);
    }

    const largestContext = [...models].sort((a, b) => b.scores.context_size - a.scores.context_size)[0];
    if (largestContext) {
        insights.push(`${largestContext.modelName} has the largest context window`);
    }

    return insights;
};