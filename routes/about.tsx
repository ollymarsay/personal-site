import { Handlers, PageProps } from "$fresh/server.ts";
import { Head, asset } from "https://deno.land/x/fresh@1.1.1/runtime.ts";

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
            <Intro />
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

function Intro() {
  return (
    <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-12">
      <div class="md:flex items-center">
        <div class="flex-1 text-center md:text-left">
          <h2 class="py-2 text(5xl sm:5xl lg:5xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
            Hello, I'm Olly{" "}
            <span class="text-red-500">Marsay</span>.
          </h2>

          {/* <p class="mt-4 text-gray-600">
            I am a coffee enthusiast, climber, painter, potter, DIYer and the
            People & Culture Lead for the Digital Technologies team at{" "}
            <a class="underline" href="http://tharsus.co.uk" target="$1">
              Tharsus.
            </a>
          </p> */}
        </div>

        <picture class="block mt-4 md:mt-0">
          <img
            src="/flower.svg"
            class="w-80 mx-auto"
            width={800}
            height={678}
            alt="olly the happy purple flower smiling"
          />
        </picture>
      </div>
      {/* <Features /> */}
    </section>
  );
}