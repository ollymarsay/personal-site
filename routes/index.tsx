import * as FeatureIcons from "../components/FeatureIcons.tsx";
import * as Icons from "../components/Icons.tsx";

import { Handlers, PageProps } from "$fresh/server.ts";
import { Head, asset } from "$fresh/runtime.ts";

import Footer from "../components/Footer.tsx";
import HelloBar from "../components/HelloBar.tsx";
import InteractiveHello from "../islands/InteractiveHello.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    const accept = req.headers.get("accept");
    if (accept && !accept.includes("text/html")) {
      const path = `https://localhost:8000`;
      return new Response(`Redirecting to ${path}`, {
        headers: { "Location": path },
        status: 307,
      });
    }
    return ctx.render();
  },
};

const TITLE = "Olly Marsay";
const DESCRIPTION =
  "The personal home page for Olly Marsay - built using fresh framework";

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
            <About />
            <Footer />
          </div>
        }
      </div>
    </>
  );
}

function Features() {
  const item = "flex md:flex-col items-center gap-5 group";
  const desc = "flex-1 md:text-center";

  return (
    <div class="grid md:grid-cols-3 gap-6 md:gap-14">
      <a class={item} href="/coffee">
        <FeatureIcons.Coffee />
        <div class={desc}>
          <b>Coffee things that I have spent</b> all my money on{"  "}
          <span class="group-hover:underline">→</span>
        </div>
      </a>

      <a class={item} href="/work">
        <FeatureIcons.Laptop />
        <div class={desc}>
          <b>Some examples of work</b> I've done during my time with Tharsus{"  "}
          <span class="group-hover:underline">→</span>
        </div>
      </a>

      <a class={item} href="/art">
        <FeatureIcons.Pallette />
        <div class={desc}>
          <b>Things I made</b> with paint, clay, pencils and... stuff{"  "}
          <span class="group-hover:underline">→</span>
        </div>
      </a>
    </div>
  );
}

function Intro() {
  return (
    <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-12">
      <div class="md:flex items-center">
        <div class="flex-1 text-center md:text-left">
          <h2 class="py-2 text(5xl sm:5xl lg:5xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
            <InteractiveHello />! <br /> Welcome to my little{" "}
            <span class="text-red-500">creative</span> space.
          </h2>

          <p class="mt-4 text-gray-600">
            I am a coffee enthusiast, climber, painter, potter, DIYer and the
            {" "}
            <b>People & Culture Lead</b> for the Digital Technologies team at
            {" "}
            <span class="text-blue-600">
              <a
                href="http://www.tharsus.co.uk"
                class="hover:underline focus:underline"
              >
                Tharsus{"  "}<span class="group-hover:underline">→</span>
              </a>
            </span>
          </p>
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
      <Features />
    </section>
  );
}

function About() {
  return (
    <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <h2 id="showcase" class="text(3xl gray-600) font-bold">
        <p>About Me</p>
      </h2>
      <p class="text-gray-600">
        My name is Olly - I'm 28 and originally from Whitby. I moved to
        Newcastle-upon-Tyne after my MSc in Mechatronics and Robotics from
        Leeds. I live in here still with my partner Rach and my Ragdoll cat
        Pickles.
      </p>
      {/* <Projects items={projects.slice(0, 3)} class="gap-8" /> */}
      <div class="flex gap-2 items-center justify-end text-blue-600">
        <Icons.ArrowRight />
        <a href="./about" class="hover:underline focus:underline">
          About Me
        </a>
      </div>
    </section>
  );
}