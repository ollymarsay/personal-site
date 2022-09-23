import * as Icons from "../components/Icons.tsx";

import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <section class="max-w-screen-md mx-auto mt-16 px(4 sm:6 md:8) space-y-12">
      <div class="md:flex items-center">
        <div class="flex-1 text-center md:text-left">
          <h2 class="py-2 text(5xl sm:5xl lg:5xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
            Awwwh shucks this page does not {" "}<span class="text-red-500">exist.</span>
          </h2>

          <div class="mt-4 flex gap-2 items-center justify-start text-blue-600">
            <a href="./" class="hover:underline focus:underline">
              Let's Go Home
            </a>
            <Icons.ArrowRight />
          </div>

          <p class="mt-4 text-gray-600">
          “True adventure begins when everything goes wrong.” <b>- Yvon Chouinard</b>
          </p>
        </div>
        <picture class="block mt-4 md:mt-0">
          <img
            src="/sad-flower.svg"
            class="w-80 mx-auto"
            width={800}
            height={678}
            alt="a happy red flower smiling"
          />
        </picture>
      </div>
      {/* <Features /> */}
    </section>
  )
}