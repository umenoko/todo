import { type ErrorData, ResponseError, type Result } from "@/types/result";

export async function fetchGet<T = any>(
  endpoint: RequestInfo | URL,
  options?: {
    params?: string | string[][] | Record<string, string> | URLSearchParams;
    cache?:
      | "default"
      | "force-cache"
      | "no-cache"
      | "no-store"
      | "only-if-cached"
      | "reload";
  },
): Promise<Result<T>> {
  try {
    const query = new URLSearchParams(options?.params);
    const cache = options?.cache || "no-store";
    const res = await fetcher(`${endpoint}?${query}`, {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      cache,
    });
    const data: T = await res.json();
    return { ok: true, data };
  } catch (error: any) {
    if (error instanceof ResponseError) errorHandler(error);
    return {
      ok: false,
      status: error.status,
      data: {
        code: error.code,
        message: error.message,
        messageParams: error.messageParams,
      },
    };
  }
}

export async function fetchPost<T = any>(
  endpoint: RequestInfo | URL,
  options?: {
    data?: { [key: string]: any };
  },
): Promise<Result<T>> {
  try {
    const res = await fetcher(endpoint, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: options?.data ? JSON.stringify(options.data) : null,
    });
    const data: T = await res.json();
    return { ok: true, data };
  } catch (error: any) {
    if (error instanceof ResponseError) errorHandler(error);
    return {
      ok: false,
      status: error.status,
      data: {
        code: error.code,
        message: error.message,
        messageParams: error.messageParams,
      },
    };
  }
}

export async function fetchPut<T = any>(
  endpoint: RequestInfo | URL,
  options?: {
    data?: { [key: string]: any };
  },
): Promise<Result<T>> {
  try {
    const res = await fetcher(endpoint, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: options?.data ? JSON.stringify(options.data) : null,
    });
    const data: T = await res.json();
    return { ok: true, data };
  } catch (error: any) {
    if (error instanceof ResponseError) errorHandler(error);
    return {
      ok: false,
      status: error.status,
      data: {
        code: error.code,
        message: error.message,
        messageParams: error.messageParams,
      },
    };
  }
}

export async function fetchDelete<T = any>(
  endpoint: RequestInfo | URL,
  options?: {
    params?: string | string[][] | Record<string, string> | URLSearchParams;
  },
): Promise<Result<T>> {
  try {
    const query = new URLSearchParams(options?.params);
    const res = await fetcher(`${endpoint}?${query}`, {
      method: "DELETE",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
    const data: T = await res.json();
    return { ok: true, data };
  } catch (error: any) {
    if (error instanceof ResponseError) errorHandler(error);
    return {
      ok: false,
      status: error.status,
      data: {
        code: error.code,
        message: error.message,
        messageParams: error.messageParams,
      },
    };
  }
}

async function fetcher(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) {
  const res = await fetch(input, init);
  // APIのコールは成功したが、200番台以外のステータスが返ってきた場合は例外処理を投げる
  if (!res.ok) {
    const data: ErrorData = await res.json();
    throw new ResponseError(res.status, data);
  }
  return res;
}

function errorHandler(error: ResponseError) {
  switch (error.status) {
    case 400:
      /* Handle */ break;
    case 401:
      /* Handle */ break;
    case 403:
      /* Handle */ break;
    case 404:
      /* Handle */ break;
    case 409:
      /* Handle */ break;
    case 500:
      /* Handle */ break;
    case 503:
      /* Handle */ break;
    default:
      /* Handle */ break;
  }
}
