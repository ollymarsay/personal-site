import * as Icons from "../components/Icons.tsx";

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
            <Paragraph />
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
    <section class="max-w-screen-md mx-auto mt-16 px(4 sm:6 md:8) space-y-12">
      <div class="md:flex items-center">
        <div class="flex-1 text-center md:text-left">
          <h2 class="py-2 text(5xl sm:5xl lg:5xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
            Let me tell you a little <span class="text-red-500">more</span>{" "}
            about me.
          </h2>

          <div class="mt-4 flex gap-2 items-center justify-center md:justify-start text-blue-600">
            <a href="./" class="hover:underline focus:underline">
              Go Home
            </a>
            <Icons.ArrowRight />
          </div>

          <p class="mt-4 text-gray-600">
          “True adventure begins when everything goes wrong.” <b>- Yvon Chouinard</b>
          </p>
        </div>
        <picture class="block mt-4 md:mt-0">
          <img
            src="/red-flower.svg"
            class="w-80 mx-auto"
            width={800}
            height={678}
            alt="a happy red flower smiling"
          />
        </picture>
      </div>
      {/* <Features /> */}
    </section>
  );
}

function Paragraph() {
  return (
    <section class="max-w-screen-md mx-auto my-12 px(4 sm:6 md:8) space-y-4">
      <h2 id="showcase" class="text(3xl gray-600) font-bold">
        <p>Who's Olly?</p>
      </h2>
      <p class="text-gray-600">
        That's me - I was born in 1994, and I'm originally from Whitby, UK.
        {" "}
        <br /> <br />
        I moved to Newcastle-upon-Tyne after my MSc in Mechatronics and Robotics
        from Leeds and I live in here with my partner Rach and my Ragdoll cat
        Pickles. <br /> <br />
        I spend a bunch of my free time making things, this website, paintings, pots, drawings and more! 
        You can see more of that on {" "}
        <a href="./art" class="hover:underline focus:underline text-blue-600">
          my art page {" "}
          <span class="group-hover:underline">→</span>
        </a>
        <br /> <br />
        I work at Tharsus where I am a People & Culture Manager. In the 5 years I have worked at Tharsus I've had many roles across multiple departments:
        <div class="flex gap-2 items-center justify-end text-blue-600">
        <Icons.ArrowRight />
        <a href="./cv" class="hover:underline focus:underline">
          View my CV
        </a>
      </div>
      </p>
      {/* <Projects items={projects.slice(0, 3)} class="gap-8" /> */}
    </section>
  );
}
