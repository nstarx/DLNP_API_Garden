import { LlmModel } from '@/interfaces/LlmModelInterface';

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
    {
        key: 'cost_efficiency',
        label: 'Cost Efficiency',
        unit: 'score',
        calculate: (model: LlmModel) => {
            const baseCost = model.pricing?.inputTokens || 0;
            return baseCost > 0 ? 100 - Math.min(baseCost * 10000, 90) : 50;
        },
        color: '#10B981',
        icon: 'pi-dollar'
    },
    {
        key: 'capabilities',
        label: 'Capabilities',
        unit: 'count',
        calculate: (model: LlmModel) => model.capabilities.length,
        color: '#F59E0B',
        icon: 'pi-star'
    },
    {
        key: 'context_size',
        label: 'Context Size',
        unit: 'tokens',
        format: (value: number) => `${(value / 1000).toFixed(0)}K`,
        calculate: (model: LlmModel) => model.contextLength,
        color: '#EF4444',
        icon: 'pi-file'
    },
    {
        key: 'deployment_flexibility',
        label: 'Deployment Flexibility',
        unit: 'score',
        calculate: (model: LlmModel) => {
            switch (model.deploymentType) {
                case 'cloud':
                    return 90;
                case 'hybrid':
                    return 70;
                case 'on-premise':
                    return 50;
                default:
                    return 40;
            }
        },
        color: '#8B5CF6',
        icon: 'pi-cloud'
    },
    {
        key: 'reliability',
        label: 'Reliability',
        unit: 'score',
        calculate: (model: LlmModel) => {
            switch (model.status) {
                case 'active':
                    return 95;
                case 'inactive':
                    return 60;
                case 'deprecated':
                    return 30;
                default:
                    return 50;
            }
        },
        color: '#EC4899',
        icon: 'pi-shield'
    }
];

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
): 'low' | 'medium' | 'high' => {
    if (score >= thresholds.high) return 'high';
    if (score >= thresholds.medium) return 'medium';
    return 'low';
};

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
