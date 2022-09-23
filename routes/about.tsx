import { Handlers, PageProps } from "$fresh/server.ts";
import { Head, asset } from "https://deno.land/x/fresh@1.1.1/runtime.ts";

import ComingSoon from "../components/ComingSoon.tsx";
import HelloBar from "../components/HelloBar.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

const TITLE = "Olly Marsay | About";
const DESCRIPTION =
  "The about page for Olly Marsay - built using fresh framework";

export default function Home(props: PageProps) {
  const ogImageUrl = new URL(asset("/home-og.png"), props.url).href;
  const origin = `${props.url.protocol}//${props.url.host}`;

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url.href} />
        <meta property="og:image" content={ogImageUrl} />
      </Head>
      <div class="flex flex-col min-h-screen">
        <HelloBar />
        {
          <div class="flex-1">
            <ComingSoon />
            {/* <GettingStarted origin={origin} /> */}
            {/* <Example /> */}
            {/* <Showcase /> */}
            {/* <Footer /> */}
          </div>
        }
      </div>
    </>
  );
}