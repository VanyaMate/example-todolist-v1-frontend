export interface ITodoItem {
    id: number;
    title: string;
    description: string;
    status: boolean;
    completion_date: string;
    todo_list_id: number;
    createdAt: string;
    updatedAt: string;
}

export interface ITodoItemCreate {
    title: string;
    description: string;
    completion_date?: string;
    todo_list_id?: number;
    status?: boolean;
}