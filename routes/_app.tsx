import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Max Schmidt - Full Stack Web Developer</title>
        <meta
          name="description"
          content="Full Stack Web Developer and TypeScript enthusiast"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component />
    </>
  );
}
