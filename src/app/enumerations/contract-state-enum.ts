export const ContractStateEnum = {
  types: {
    PAYMENT_SETUP: {
      id: 1,
      name: 'Pending payment set up',
    },

    SIGNATURE_PENDING: {
      id: 2,
      name: 'Pending client signature',
    },

    CONTRACTOR_INVITATION: {
      id: 3,
      name: 'Pending contractor invitation',
    },

    CONTRACTOR_SIGNATURE_PENDING: {
      id: 4,
      name: 'Pending contractor signature',
    },

    WAITING_STARTING_DATE: {
      id: 5,
      name: 'Pending for starting date',
    },

    ONTOP_SIGNATURE_PENDING: {
      id: 6,
      name: 'Pending for Ontop signature',
    },

    WAITING_FOR_CONTRACTOR: {
      id: 10,
      name: 'Pending for contractor',
    },

    ACTIVE: {
      id: 7,
      name: 'Active',
    },

    ENDED: {
      id: 8,
      name: 'Ended',
    },

    DELETED: {
      id: 9,
      name: 'Deleted',
    },
  },
};
