import { ItemStatus } from '../../../@generated/prisma-nestjs-graphql/prisma/item-status.enum';
export declare class Todo {
    id: number;
    body: string;
    status: keyof typeof ItemStatus;
    createdAt: Date;
    updatedAt: Date;
}
