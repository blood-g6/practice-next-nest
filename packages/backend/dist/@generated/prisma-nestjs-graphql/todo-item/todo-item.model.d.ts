import { ItemStatus } from '../prisma/item-status.enum';
export declare class TodoItem {
    id: number;
    body: string;
    status: keyof typeof ItemStatus;
    createdAt: Date;
    updatedAt: Date;
}
