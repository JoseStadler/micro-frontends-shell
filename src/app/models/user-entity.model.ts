import { Role } from './role';

export class UserEntity {
  id: number;
  stateId: number;
  email: string;
  password: string;
  activationToken: string;
  loginAttempts: number;
  creationDate: Date;
  roles?: Role[];
  enabled: boolean;
  nonLocked: boolean;
}
