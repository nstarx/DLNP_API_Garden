import { ref, computed } from 'vue';
import { sparkJobsMockData } from '@/mocks/mock_data_sparkjobs';
import { getSparkJobs } from '@/service/SparkJobService';
import type { SparkJob } from '@/service/SparkJobService';

export function useSparkJobsData() {
    const jobs = ref<SparkJob[]>([]);
    const loading = ref(true);

    const fetchJobs = async () => {
        try {
            jobs.value = await getSparkJobs();
            loading.value = false;
        } catch (error) {
            console.error('Error loading jobs:', error);
            jobs.value = sparkJobsMockData;
            loading.value = false;
        }
    };

    const uniqueK8sNodes = computed(() => {
        const nodes: string[] = [];
        jobs.value.forEach((job: SparkJob) => {
            job.k8sNodes.forEach((node: string) => {
                if (!nodes.includes(node)) {
                    nodes.push(node);
                }
            });
        });
        return nodes;
    });

    const totalCPUCores = computed(() => {
        let total = 0;
        jobs.value.forEach((job) => {
            const cores = parseInt(job.resources.cpu.split(' ')[0]);
            if (!isNaN(cores)) {
                total += cores;
            }
        });
        return total;
    });

    const totalMemoryGB = computed(() => {
        let total = 0;
        jobs.value.forEach((job) => {
            const memory = job.resources.memory;
            if (memory.includes('Gi')) {
                const gb = parseInt(memory.replace('Gi', ''));
                if (!isNaN(gb)) {
                    total += gb;
                }
            }
        });
        return total;
    });

    const getJobsForNode = (nodeName: string) => {
        return jobs.value.filter((job) => job.k8sNodes.includes(nodeName));
    };

    const addJob = (job: SparkJob) => {
        jobs.value.push(job);
    };

    const updateJob = (updatedJob: SparkJob) => {
        const index = jobs.value.findIndex((j) => j.id === updatedJob.id);
        if (index !== -1) {
            jobs.value[index] = updatedJob;
        }
    };

    return {
        jobs,
        loading,
        fetchJobs,
        uniqueK8sNodes,
        totalCPUCores,
        totalMemoryGB,
        getJobsForNode,
        addJob,
        updateJob
    };
}