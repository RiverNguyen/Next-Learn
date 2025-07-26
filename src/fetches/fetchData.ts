/* eslint-disable @typescript-eslint/no-explicit-any */

import envConfig from "@/config/config-env";

export type RequestPostGuest = {
  api: string;
  headers?: any;
  option?: any;
  method?: "POST" | "GET" | "PUT" | "DELETE" | "PATCH";
};

export default async function fetchData(request: RequestPostGuest) {
  try {
    const res = await fetch(
      `${envConfig.NEXT_PUBLIC_API_ENDPOINT}${request.api}`,
      {
        method: request.method || "GET",
        headers: {
          "Content-Type": "application/json",
          ...request.headers,
        },
        ...request.option,
      }
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      // throw new Error('Failed to fetch data')
      return res.json();
    }

    return res.json();
  } catch (error: unknown) {
    // Convert the error to a string or handle based on its type
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(
      `${envConfig.NEXT_PUBLIC_API_ENDPOINT}${request.api}: ${errorMessage}`
    );
  }
}
