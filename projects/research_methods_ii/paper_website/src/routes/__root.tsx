import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Just One More Scroll — Erik Menchaca" },
      {
        name: "description",
        content:
          "A literature review on social media addiction, academic procrastination, anxiety, and GPA in college students by Erik Menchaca, RIT/NTID.",
      },
      { name: "author", content: "Erik Menchaca" },
      { property: "og:title", content: "Just One More Scroll — Erik Menchaca" },
      { property: "og:description", content: "Paper to Pixel transforms research papers into interactive, navigable websites with distinct sections." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Just One More Scroll — Erik Menchaca" },
      { name: "description", content: "Paper to Pixel transforms research papers into interactive, navigable websites with distinct sections." },
      { name: "twitter:description", content: "Paper to Pixel transforms research papers into interactive, navigable websites with distinct sections." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4b72fb85-5828-4c72-9f59-99d95518f96f/id-preview-c83d8825--69121fc7-6691-4202-b1b6-c423d43a84d9.lovable.app-1777061897655.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4b72fb85-5828-4c72-9f59-99d95518f96f/id-preview-c83d8825--69121fc7-6691-4202-b1b6-c423d43a84d9.lovable.app-1777061897655.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
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

function RootComponent() {
  return <Outlet />;
}
