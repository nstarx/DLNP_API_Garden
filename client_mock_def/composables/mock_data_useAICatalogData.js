export const useAICatalogData = () => {
    // Core data
    const datasets = ref(datasetsData);
    const models = ref(modelsData);
    const experiments = ref(experimentsData);
    const pipelines = ref(pipelinesData);
    const featureSets = ref(featureSetsData);
    const endpoints = ref(endpointsData);
    const policies = ref(policiesData);
    const aiCompanyModels = ref(aiCompanyModelsData);
    const provenance = ref(provenanceData);

    // Filter options
    const modelCategories = ref(filterOptions.modelCategories);
    const modelProviders = ref(filterOptions.modelProviders);
    const sortOptions = ref(filterOptions.sortOptions);
    const datasetTypes = ref(filterOptions.datasetTypes);
    const modelTypes = ref(filterOptions.modelTypes);
    const modelFrameworks = ref(filterOptions.modelFrameworks);
    const provenanceTypes = ref(filterOptions.provenanceTypes);
    const provenanceUsers = ref(filterOptions.provenanceUsers);
    const provenanceActions = ref(filterOptions.provenanceActions);

    // Marketplace filters
    const marketplaceSearch = ref('');
    const marketplaceCategory = ref(null);
    const marketplaceProvider = ref(null);
    const marketplaceSorting = ref(null);

    // Provenance filters
    const provenanceSearch = ref('');
    const provenanceType = ref(null);
    const provenanceUser = ref(null);
    const provenanceAction = ref(null);

    // Computed properties
    const trendingModels = computed(() => {
        return [...aiCompanyModels.value].sort((a, b) => b.rating - a.rating).slice(0, 5);
    });

    const filteredModels = computed(() => {
        let result = [...aiCompanyModels.value];

        if (marketplaceCategory.value) {
            result = result.filter((model) => model.category === marketplaceCategory.value.value);
        }

        if (marketplaceProvider.value) {
            result = result.filter((model) => model.provider === marketplaceProvider.value.value);
        }

        if (marketplaceSearch.value) {
            const searchLower = marketplaceSearch.value.toLowerCase();
            result = result.filter((model) => model.name.toLowerCase().includes(searchLower) || model.category.toLowerCase().includes(searchLower) || model.provider.toLowerCase().includes(searchLower));
        }

        if (marketplaceSorting.value) {
            const sortValue = marketplaceSorting.value.value;

            switch (sortValue) {
                case 'name-asc':
                    result.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'name-desc':
                    result.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'rating-desc':
                    result.sort((a, b) => b.rating - a.rating);
                    break;
                case 'rating-asc':
                    result.sort((a, b) => a.rating - b.rating);
                    break;
                case 'date-desc':
                    result.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
                    break;
                case 'date-asc':
                    result.sort((a, b) => new Date(a.lastUpdated) - new Date(b.lastUpdated));
                    break;
            }
        }

        return result;
    });

    const filteredProvenance = computed(() => {
        let result = [...provenance.value];

        if (provenanceType.value) {
            result = result.filter((item) => item.type === provenanceType.value.value);
        }

        if (provenanceUser.value) {
            result = result.filter((item) => item.user === provenanceUser.value.value);
        }

        if (provenanceAction.value) {
            result = result.filter((item) => item.action === provenanceAction.value.value);
        }

        if (provenanceSearch.value) {
            const searchLower = provenanceSearch.value.toLowerCase();
            result = result.filter(
                (item) =>
                    item.artifact.toLowerCase().includes(searchLower) ||
                    item.user.toLowerCase().includes(searchLower) ||
                    item.action.toLowerCase().includes(searchLower) ||
                    item.type.toLowerCase().includes(searchLower) ||
                    (item.description && item.description.toLowerCase().includes(searchLower))
            );
        }

        return result;
    });

    const toggleFavorite = (model) => {
        model.isFavorite = !model.isFavorite;
    };

    const clearMarketplaceFilters = () => {
        marketplaceSearch.value = '';
        marketplaceCategory.value = null;
        marketplaceProvider.value = null;
        marketplaceSorting.value = null;
    };

    return {
        // Core data
        datasets,
        models,
        experiments,
        pipelines,
        featureSets,
        endpoints,
        policies,
        aiCompanyModels,
        provenance,

        // Filter options
        modelCategories,
        modelProviders,
        sortOptions,
        datasetTypes,
        modelTypes,
        modelFrameworks,
        provenanceTypes,
        provenanceUsers,
        provenanceActions,

        // Marketplace state
        marketplaceSearch,
        marketplaceCategory,
        marketplaceProvider,
        marketplaceSorting,

        // Provenance state
        provenanceSearch,
        provenanceType,
        provenanceUser,
        provenanceAction,

        // Computed
        trendingModels,
        filteredModels,
        filteredProvenance,

        // Methods
        toggleFavorite,
        clearMarketplaceFilters
    };
};