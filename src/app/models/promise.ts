/**
 * These are helper types in case you pass promise's functions (resolve and reject)
 * into funtions that are executed inside a promise instance
 * new Promise((resolve, reject) => {
 *  someFunction(resolve, reject)
 * }
 */

export type Resolve<T = unknown> = (value: T) => void;
export type Reject<T = any> = (value?: T) => void;
