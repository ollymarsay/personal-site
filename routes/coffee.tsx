import * as FeatureIcons from "../components/FeatureIcons.tsx";
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

const TITLE = "Olly Marsay | Coffee";
const DESCRIPTION = "Olly's Coffee Setup - built using fresh framework";

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
            Let me tell you a little more about my{" "}
            <span class="text-red-500">coffee</span>{"  "}setup.
          </h2>

          <div class="mt-4 flex gap-2 items-center justify-center md:justify-start text-blue-600">
            <a href="./" class="hover:underline focus:underline">
              Go Home
            </a>
            <Icons.ArrowRight />
          </div>
          <div class="mt-4 flex gap-2 items-center justify-center md:justify-start text-blue-600">
            <a
              href="https://prz.io/k5zDEaAuB"
              class="hover:underline focus:underline"
              target="_blank"
            >
              £5 Off Coffee
            </a>
            <Icons.ArrowRight />
          </div>

          <p class="mt-4 text-gray-600">
            “I must offer a word of caution here: don't invest in an espresso
            machine at home unless you want a new hobby.” <b>- James Hoffman</b>
          </p>
        </div>
        <picture class="block mt-4 md:mt-0">
          <img
            src="/coffee-flower.svg"
            class="w-80 mx-auto"
            width={800}
            height={678}
            alt="a happy orange flower smiling and drinking coffee from a purple mug"
          />
        </picture>
      </div>
    </section>
  );
}

function Paragraph() {
  return (
    <section class="max-w-screen-md mx-auto my-12 px(4 sm:6 md:8) space-y-4">
      <h2 id="showcase" class="text(3xl gray-600) font-bold">
        <p>What's Brewing?</p>
      </h2>
      <p class="text-gray-600">
        I've bought <s>too much</s>{" "}
        many coffee based things over the last 10 years...
        <br /> <br />
        My coffee journey stated in 2012 when I discovered a coffee shop in
        Sunderland selling a brown liquid that they called coffee... but it
        really didn't taste anything like what I expected, or knew coffee could
        even taste like.
        <br /> <br />
        So, I started down the online rabbit hole that is/was Specialty Coffee.
        10 years ago there wasn't much lighter than 'medium roast', V60 sounded
        like an car engine from the future, and James Hoffman was just a guy in
        London doing coffee stuff offline.
        <br /> <br />
        Let's cut this story short and just go into what I am using currently:
        <dl>
          <div class="flex gap-2 items-center justify-start text-blue-600">
            <Icons.ArrowRight />
            <a
              href="https://fellowproducts.com/products/ode-brew-grinder?variant=39859573817444"
              class="hover:underline focus:underline"
            >
              Fellow Ode + SSP MP Burrs
            </a>
          </div>
          <div class="flex gap-2 items-center justify-start text-blue-600">
            <Icons.ArrowRight />
            <a
              href="https://flairespresso.com/product/flair-58/"
              class="hover:underline focus:underline"
            >
              Flair 58 Manual Espresso Machine
            </a>
          </div>
          <div class="flex gap-2 items-center justify-start text-blue-600">
            <Icons.ArrowRight />
            <a
              href="https://fellowproducts.com/products/stagg-ekg-electric-pour-over-kettle?variant=18635551080563"
              class="hover:underline focus:underline"
            >
              Fellow Stagg Pour Over Kettle
            </a>
          </div>
          <div class="flex gap-2 items-center justify-start text-blue-600">
            <Icons.ArrowRight />
            <a
              href="https://www.hario.co.uk/products/simply-hario-v60-glass-brewing-kit"
              class="hover:underline focus:underline"
            >
              Simply Hario V60 Glass Brewer
            </a>
          </div>
          <div class="flex gap-2 items-center justify-start text-blue-600">
            <Icons.ArrowRight />
            <a
              href="https://1zpresso.coffee/product/jxpro/"
              class="hover:underline focus:underline"
            >
              1Zpresso JX-Pro Hand Grinder
            </a>
          </div>
          <div class="flex gap-2 items-center justify-start text-blue-600">
            <Icons.ArrowRight />
            <a
              href="https://us.timemore.com/collections/coffee-scale/products/timemore-black-mirror-nano-espresso-coffee-weighing-timing-black"
              class="hover:underline focus:underline"
            >
              Timemore Black Mirror Nano Scales
            </a>
          </div>
        </dl>
      </p>
      {/* <Projects items={projects.slice(0, 3)} class="gap-8" /> */}
    </section>
  );
}
