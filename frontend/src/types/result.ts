export type Result<T> = SuccessResult<T> | ErrorResult;

export type SuccessResult<T> = {
  ok: true;
  data: T;
};

export type ErrorData = {
  code?: string;
  message: string;
  messageParams?: { [key: string]: string };
};

export type ErrorResult = {
  ok: false;
  status: number;
  data: ErrorData;
};

export class ResponseError extends Error {
  status: number;
  code?: string;
  messageParams?: { [key: string]: string };

  constructor(status: number, data: ErrorData) {
    super();
    this.status = status;
    this.code = data.code;
    this.message = data.message || '予期しないエラーが発生しました';
    this.messageParams = data.messageParams;
  }
}