export interface Notification {
  userId: number;
  objectId: number;
  notificationTypeId: number;
  message: string;
  checkDate: Date;
  creationDate: Date;
  checked: boolean;
  reviewDate: Date;
  review: boolean;
  id: number;
}
