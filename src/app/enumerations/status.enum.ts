export enum StatusEnum {
  PENDING = 'pending',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}
export const StatusList: { id: string; name: string }[] = [
  {
    id: StatusEnum.PENDING,
    name: 'Pending',
  },
  {
    id: StatusEnum.SUCCEEDED,
    name: 'Successful',
  },
  {
    id: StatusEnum.FAILED,
    name: 'Failed',
  },
];

export enum StatusLoadingBulkContractResult {
  SUCCESS = 'Success',
  FAIL = 'Fail',
}
