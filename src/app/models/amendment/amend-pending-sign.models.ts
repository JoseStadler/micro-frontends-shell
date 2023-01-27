export class AmendmentPendigSign {
  moreThanOne: boolean;
  message: string;
  pendingAmds: boolean;
  references: Reference[];
}

class Reference {
  contractReference: string;
  contractId: number;
  name: string;
}
