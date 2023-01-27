export enum PlanEnum {
  WANDERLUST = 'Wanderlust plan',
  INFINITE = 'Infinite plan',
  FREEDOM = 'Freedom plan',
  BASIC = 'Basic plan',
  NO_PLAN = 'No plan',
}

export enum OntopPlans {
  WANDERLUST = 'WANDERLUST',
  INFINITE = 'INFINITE',
  FREEDOM = 'FREEDOM',
  BASIC = 'BASIC',
  NO_PLAN = 'NO_PLAN',
}

Object.keys(PlanEnum);

export type PlanCodeEnum = keyof typeof PlanEnum;
export const NO_PLAN_CODE: PlanCodeEnum = 'NO_PLAN';
export const BASIC_PLAN_CODE: PlanCodeEnum = 'BASIC';
