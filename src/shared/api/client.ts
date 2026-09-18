const BASE_URL = "https://www.freetogame.com/api";

export type QueryParams = Record<string, string | number | undefined>;

export async function get<T>(path: string, params: QueryParams = {}): Promise<T> {
  const url = new URL(`${BASE_URL}${path}`);

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}