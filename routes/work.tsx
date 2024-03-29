import * as Icons from "../components/Icons.tsx";

import { Handlers, PageProps } from "$fresh/server.ts";
import { Head, asset } from "https://deno.land/x/fresh@1.1.1/runtime.ts";

import Footer from "../components/Footer.tsx";
import HelloBar from "../components/HelloBar.tsx";
import Showcase from "../components/Showcase.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

const TITLE = "Olly Marsay | Work";
const DESCRIPTION =
  "The work page for Olly Marsay - built using fresh framework";

export default function Work(props: PageProps) {
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
            <Paragraph />
            <Showcase />
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
            Let me tell you a little <span class="text-red-500">more</span>{" "}
            about my work.
          </h2>

          <div class="mt-4 flex gap-2 items-center justify-center md:justify-start text-blue-600">
            <a href="./" class="hover:underline focus:underline">
              Go Home
            </a>
            <Icons.ArrowRight />
          </div>

          <p class="mt-4 text-gray-600">
            “True adventure begins when everything goes wrong.”{" "}
            <b>- Yvon Chouinard</b>
          </p>
        </div>
        <picture class="block mt-4 md:mt-0">
          <img
            src="/dev-flower.svg"
            class="w-80 mx-auto"
            width={800}
            height={678}
            alt="a happy red flower working on a project"
          />
        </picture>
      </div>
    </section>
  );
}

function Paragraph() {
  return (
    <section class="max-w-screen-md mx-auto my-12 px(4 sm:6 md:8) space-y-4">
      <p class="text-gray-600">
        Some of the work listed below will have a (T) which indicates work done
        at/with Tharsus. Some of this may have the title "IP Protected" as some
        of the work I do is confidential customer IP which must be protected.
      </p>
    </section>
  );
}
