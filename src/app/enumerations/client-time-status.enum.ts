export const TimeSheetClientEnum = {
  status: {
    Pending: {
      id: 1,
      nameBackend: 'Waiting for approval',
      name: 'Pending',
    },
    Approved: {
      id: 2,
      name: 'Approved',
    },

    Rejected: {
      id: 3,
      name: 'Rejected',
    },
  },
};
