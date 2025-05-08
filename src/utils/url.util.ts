/**
 * @description Get the base URL for the API.
 *
 * @export
 * @return {string}
 */
export function getUrl(): string {
  const base = (() => {
    if (typeof window !== "undefined") return "";
    return `http://localhost:${process.env.PORT ?? 3000}`;
  })();
  return `${base}/api`;
}
