import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { APP_DESCRIPTION, APP_NAME } from "@/constants/app.constant";

import appCss from "@/styles/App.css?url";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TanStackDevtools from "@/integrations/tanstack-devtools/provider";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: APP_NAME,
      },
      {
        name: "description",
        content: APP_DESCRIPTION,
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <main className="grid grid-rows-[auto_1fr_auto] min-h-svh w-svw">
        <Header />
        <Outlet />
        <Footer />
      </main>
      <TanStackDevtools />
    </RootDocument>
  );
}

type RootDocumentProps = Readonly<{
  children: ReactNode;
}>;

function RootDocument({ children }: RootDocumentProps) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
