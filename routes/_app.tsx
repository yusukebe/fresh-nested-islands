import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <title>fresh-project</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
