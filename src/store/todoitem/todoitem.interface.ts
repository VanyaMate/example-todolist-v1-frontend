export interface ITodoItemTag {
    id: number;
    color: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    todo_items?: ITodoItem[];
}

export interface ITodoItem {
    id: number;
    title: string;
    description: string;
    status: boolean;
    completion_date: string | null;
    todo_list_id: number;
    createdAt: string;
    updatedAt: string;
    tags?: ITodoItemTag[];
}

export interface ITodoItemCreate {
    title: string;
    description: string;
    completion_date?: string | null;
    todo_list_id?: number;
    status?: boolean;
}