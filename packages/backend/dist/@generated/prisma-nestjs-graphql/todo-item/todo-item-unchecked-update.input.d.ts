import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumItemStatusFieldUpdateOperationsInput } from '../prisma/enum-item-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class TodoItemUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput;
    body?: StringFieldUpdateOperationsInput;
    status?: EnumItemStatusFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
