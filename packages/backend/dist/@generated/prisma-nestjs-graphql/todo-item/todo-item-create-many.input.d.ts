import { ItemStatus } from '../prisma/item-status.enum';
export declare class TodoItemCreateManyInput {
    id?: number;
    body: string;
    status?: keyof typeof ItemStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
