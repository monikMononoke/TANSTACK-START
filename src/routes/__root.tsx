import * as React from 'react';
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import normalizeCss from 'normalize.css?url';
import appCss from '../styles/global.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Laboratory',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: normalizeCss,
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <header className="header ">
          <Link to="/">
            <h1>Houses for rent</h1>
          </Link>
        </header>
        <main>{children}</main>
        <footer className="footer"></footer>
        <TanStackRouterDevtools />
        <Scripts />
      </body>
    </html>
  );
}
