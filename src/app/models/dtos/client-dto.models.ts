import { EntityV2 } from '@models/entity.models';
import { Person, PersonV2 } from '../person.model';

export class ClientDTO {
  entityId: number;
  person: Person;
  teamName: string;
}

export class ClientPersonDTO {
  entityId: number;
  person: PersonV2;
}

export class ClientEntityDto {
  entityId: number;
  client: ClientPersonDTO;
  entity: EntityV2;
}

export class ClientResponseDto {
  entityId: number;
  person: ClientPersonDTO;
  entity: EntityV2;
}

export interface PartialClientDto {
  entityId?: number;
  entity?: Partial<EntityV2>;
  client?: {
    person?: Partial<PersonV2>;
  };
}
