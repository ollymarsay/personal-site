import * as Icons from "../components/Icons.tsx";

export default function ComingSoon() {
  return (
    <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-12">
      <div class="md:flex items-center">
        <div class="flex-1 text-center md:text-left">
          <h2 class="py-2 text(5xl sm:5xl lg:5xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
            Coming <span class="text-red-500">Soon...</span>
          </h2>
          <div class="mt-4 flex gap-2 items-center justify-center md:justify-start text-blue-600">
              <a href="./" class="hover:underline focus:underline">
                Go Home
              </a>
              <Icons.ArrowRight />
            </div>
        </div>
      </div>
    </section>
  );
}
