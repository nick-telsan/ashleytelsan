import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html data-custom="data">
      <Head>
        <title>Ashley Telsan</title>
        <link href={asset("base.css")} rel="stylesheet" />
      </Head>
      <body class="h-full w-full">
        <Component />
      </body>
    </html>
  );
}
