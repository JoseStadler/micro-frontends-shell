export interface ClientDTO {
  id: number;
  entityId: number;
  creatorId: number;
  membershipId: number;
  salesResponsibleId: number;
  transactionalFeeStartDateFree: Date;
  transactionalFeeEndDateFree: Date;
  membershipFeeStartDateFree: Date;
  membershipFeeEndDateFree: Date;
}
