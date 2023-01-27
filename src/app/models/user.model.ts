export class UserModel {
  email: string;
  name: string;
  password: string;
  resetEmail: string;
  token: string;
  roles: Role[];
  teamId?: number;
  recaptchaToken?: string;
  clientToken?: string;
}

class Role {
  id: string;
  name: string;
}
