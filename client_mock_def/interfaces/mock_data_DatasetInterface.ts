export interface DatasetOption {
    name: string;
    desc: string;
    tags: any;
    type: string;
    id: string;
}
export interface Dataset {
    id: string;
    name: string;
    company: {
        name: string;
    };
    environment: {
        name: string;
    }
    source: {
        name: string;
        type: string;
    }
    creator: {
        name: string;
        type: string;
        icon: string;
    }
    description: string;
    status: string;
    lastUpdated: string;
    createdAt: string;
    updatedAt: string;
    lastRunAt: string;
}