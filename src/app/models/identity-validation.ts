export interface IdentifyValidation {
  isKybVerified: boolean;
  hasCompletedAllSignUpSteps: boolean;
  isRejected: boolean;
  isValid: boolean;
}

export type IdentifyValidationAction = () => void;
