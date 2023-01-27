import { Observable } from 'rxjs';

interface BaseLoad {
  status: LoadStatus;
}

export enum LoadStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  FAILED = 'FAILED',
}

export interface LoadPending extends BaseLoad {
  loaded: number;
  progress: number | undefined;
}

export interface LoadInProgress extends BaseLoad {
  loaded: number;
  progress: number | undefined;
}

export interface LoadDone<T> extends BaseLoad {
  data: T;
  progress: number | undefined;
}

export interface LoadFailed extends BaseLoad {
  progress?: number | undefined;
  data: {
    status: boolean;
    statusCode: number;
    error: any | null;
  };
}

export type LoadRequestFile<T = any> =
  | LoadPending
  | LoadInProgress
  | LoadDone<T>
  | LoadFailed;

export type LoadResponse<T = any> = Observable<LoadRequestFile<T>>;
