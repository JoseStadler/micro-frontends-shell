export const ContractTypesEnum = {
  types: {
    TRADITIONAL: {
      id: 1,
      name: 'Traditional',
      description:
        'Pay the same amount recurrently (week, twice a week, month)',
      showGalery: true,
      contractTemplateId: null,
    },
    PERTIME: {
      id: 2,
      name: 'Pay per task/time',
      description: 'Pay a fixed rate per time worked (hours, days)',
      showGalery: true,
      contractTemplateId: null,
    },
    RESULTS: {
      id: 3,
      name: 'Results Driven',
      description: 'Pay per project, task or assignment delivered.',
      showGalery: true,
      contractTemplateId: null,
    },
  },
};

export const ContractPlugAndPlayEnum = {
  types: {
    YOU_HIRE: {
      plugPlayType: 1,
      name: 'You Hire',
      displayName: 'You Sign',
    },
    WE_HIRE: {
      plugPlayType: 2,
      name: 'We Hire',
      displayName: 'Ontop Signs',
    },
  },
};
