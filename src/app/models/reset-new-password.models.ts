export class ResetNewPassword {
  activationToken: string;
  password: string;
}

export class SetNewPassword {
  oldPassword: string;
  newPassword: string;
}
