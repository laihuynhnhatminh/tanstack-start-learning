import {
  createRouter as createTanstackRouter,
  type AnyRouter,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import * as TanStackQuery from "@/integrations/tanstack-query/layout";

/**
 * @description Create a router instance for the application.
 * - Enables scroll restoration using `scrollRestoration: true`, allowing the page to return to the previous scroll position on navigation.
 * - Uses `defaultPreload: "intent"` to preload route data when the user shows intent to navigate (e.g., hovers over a link), improving perceived performance.
 *
 * アプリケーション用のルーターインスタンスを作成します。
 * - `scrollRestoration: true` を使用して、ナビゲーション時に前のスクロール位置を復元します。
 * - `defaultPreload: "intent"` を使用して、ユーザーがリンクにホバーするなど移動の意図を示したときにルートデータをプリロードし、パフォーマンスを向上させます。
 *
 * @link [Tanstack Router Preloading](https://tanstack.com/router/latest/docs/framework/react/guide/preloading)
 *
 * @export
 * @returns {AnyRouter} The created router instance.
 */
export function createRouter(): AnyRouter {
  const router = createTanstackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPreload: "intent",
    context: {
      ...TanStackQuery.getContext(),
    },
    Wrap: ({ children }) => (
      <TanStackQuery.Provider>{children}</TanStackQuery.Provider>
    ),
  });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
