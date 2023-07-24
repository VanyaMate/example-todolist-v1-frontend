export interface ITodoList {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export interface ITodoListCreate {
    title: string;
    description?: string;
}