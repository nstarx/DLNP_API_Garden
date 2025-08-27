import { DatasetOption, Dataset} from '@/interfaces/DatasetInterface';
import { ref } from 'vue';

export const prodMinioOptions = ref<DatasetOption[]>([
    { id: "1", type: "minio", name: 'Apple Iphone Product Manuals', desc: "Official documentations of Iphone", tags: [{name: 'Minio', severity: 'info'}, {name: 'Prod', severity: 'success'}] },
    { id: "2", type: "minio", name: 'Scraped Iphone Reviews Data', desc: "Blogs, Vlogs as reviews of Iphones by famous techies", tags: [{name: 'Minio', severity: 'info'}, {name: 'Prod', severity: 'success'}] },
    { id: "3", type: "minio", name: 'Apple Iphone Product Manuals[Archived]', desc: "Archived documentations of Iphone", tags: [{name: 'Minio', severity: 'info'}, {name: 'Prod', severity: 'success'}] }
])

export const datasets = ref<Dataset[]>([
    {
        id: '1',
        name: 'Apple Iphone Product Manuals',
        environment: {
            name: 'Prod'
        },
        creator: {
            name: 'CFN Template- 8ec4dQ',
            type: 'minio',
            icon: '💢'
        },
        company: {
            name: 'Nstarx',
        },
        source: {
            name: "My Minio",
            type: "minio"
        },
        description: "Official documentations of Iphone",
        status: 'Running',
        lastUpdated: '2024-03-15 14:30',
        createdAt: '2024-03-10 09:00',
        updatedAt: '2024-03-15 14:30',
        lastRunAt: '2024-03-15 14:30',
    },
]);