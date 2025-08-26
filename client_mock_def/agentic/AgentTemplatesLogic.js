// Logic for Agent Templates
import { computed, ref } from 'vue';
import { agentTemplates, categories, sortOptions } from './AgentTemplatesMockData';

// Reactive state
export const useAgentTemplates = () => {
    const templateSearchQuery = ref('');
    const viewMode = ref('grid');
    const selectedCategory = ref(null);
    const sortOption = ref({ name: 'Popularity', value: 'popularity', direction: 'desc' });

    // Computed properties
    const filteredTemplates = computed(() => {
        let result = agentTemplates;

        if (templateSearchQuery.value) {
            const query = templateSearchQuery.value.toLowerCase();
            result = result.filter(
                (template) => template.name.toLowerCase().includes(query) || template.description.toLowerCase().includes(query) || template.category.toLowerCase().includes(query) || template.tags.some((tag) => tag.label.toLowerCase().includes(query))
            );
        }

        if (selectedCategory.value) {
            result = result.filter((template) => template.category === selectedCategory.value.name);
        }

        return result;
    });

    const filteredAndSortedTemplates = computed(() => {
        const templates = [...filteredTemplates.value];

        if (sortOption.value) {
            templates.sort((a, b) => {
                const valueA = a[sortOption.value.value] || 0;
                const valueB = b[sortOption.value.value] || 0;

                if (sortOption.value.direction === 'asc') {
                    return typeof valueA === 'string' ? valueA.localeCompare(valueB) : valueA - valueB;
                } else {
                    return typeof valueA === 'string' ? valueB.localeCompare(valueA) : valueB - valueA;
                }
            });
        }

        return templates;
    });

    // Methods
    const clearFilters = () => {
        templateSearchQuery.value = '';
        selectedCategory.value = null;
    };

    const preview = (template) => {
        // Placeholder for preview functionality
        console.log('Preview template:', template);
    };

    const useTemplate = (template) => {
        // Placeholder for use template functionality
        console.log('Use template:', template);
    };

    return {
        // State
        templateSearchQuery,
        viewMode,
        selectedCategory,
        sortOption,
        categories,
        sortOptions,

        // Computed
        filteredTemplates,
        filteredAndSortedTemplates,

        // Methods
        clearFilters,
        preview,
        useTemplate
    };
};
