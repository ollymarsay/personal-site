import * as FeatureIcons from "../components/FeatureIcons.tsx";
import * as Icons from "../components/Icons.tsx";

import { Handlers, PageProps } from "$fresh/server.ts";
import { Head, asset } from "https://deno.land/x/fresh@1.1.1/runtime.ts";

import Footer from "../components/Footer.tsx";
import Gallery from "../components/Gallery.tsx";
import HelloBar from "../components/HelloBar.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

const TITLE = "Olly Marsay | Art";
const DESCRIPTION = "Olly's Art - built using fresh framework";

export default function Coffee(props: PageProps) {
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
            {/* <Paragraph /> */}
            <Gallery />
            <Footer />
          </div>
        }
      </div>
    </>
  );
}

function Intro() {
  return (
    <section class="max-w-screen-md mx-auto mt-16 px(4 sm:6 md:8) space-y-12">
      <div class="md:flex items-center">
        <div class="flex-1 text-center md:text-left">
          <h2 class="py-2 text(5xl sm:5xl lg:5xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
            Let me show you some of my{" "}
            <span class="text-red-500">art</span>{"  "} and stuff.
          </h2>

          <div class="mt-4 flex gap-2 items-center justify-center md:justify-start text-blue-600">
            <a href="./" class="hover:underline focus:underline">
              Go Home
            </a>
            <Icons.ArrowRight />
          </div>

          <p class="mt-4 text-gray-600">
            “If my art has nothing to do with people's pain and sorrow, what is
            'art' for?” <b>- Ai Weiwei</b>
          </p>
        </div>
        <picture class="block mt-4 md:mt-0">
          <img
            src="/paint3-flower.svg"
            class="w-80 mx-auto"
            width={800}
            height={678}
            alt="a happy purple flower smiling and painting themselves red"
          />
        </picture>
      </div>
    </section>
  );
}