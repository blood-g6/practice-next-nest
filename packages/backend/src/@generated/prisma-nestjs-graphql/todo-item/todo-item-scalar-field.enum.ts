import { registerEnumType } from '@nestjs/graphql';

export enum TodoItemScalarFieldEnum {
    id = "id",
    body = "body",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TodoItemScalarFieldEnum, { name: 'TodoItemScalarFieldEnum', description: undefined })
