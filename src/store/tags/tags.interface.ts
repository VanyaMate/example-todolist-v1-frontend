export interface ITag {
    id: number;
    user_id: number;
    title: string;
    color: string;
    updatedAt: string;
    createdAt: string;
}

export interface ITagCreate {
    title: string;
    color: string;
}