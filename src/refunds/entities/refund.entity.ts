import { CoreEntity } from "src/common/entities/core.entity";
import { Order } from "src/orders/entities/order.entity";
import { User } from "src/users/entities/user.entity";

export enum RefundStatus {
  APPROVED = "Approved",
  PENDING = "Pending",
  REJECTED = "Rejected",
  PROCESSING = "Processing",
}

export class Refund extends CoreEntity {
  amount: string;
  status: RefundStatus;
  order: Order; 
  customer: User;
}
 