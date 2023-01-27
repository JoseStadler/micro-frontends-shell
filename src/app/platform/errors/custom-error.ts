type ErrorCode = string | number;

export interface CustomExceptionOptions<T> {
  errorCode?: ErrorCode;
  cause?: any;
  data?: T;
}

export class CustomError<T = any> extends Error {
  readonly errorCode: ErrorCode | undefined;

  constructor(
    public override message: string,
    public options: CustomExceptionOptions<T>
  ) {
    super(...([message, { cause: options.cause }] as any));

    this.errorCode = options.errorCode;
  }
}
