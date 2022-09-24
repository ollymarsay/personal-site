import * as Icons from '../components/Icons.tsx';

import GalleryImages from "../components/GalleryImages.tsx";
import gallery from "../data/gallery.json" assert { type: "json" };

export default function Gallery() {
    return (
      <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
        <h2 id="showcase" class="text(3xl gray-600) font-bold">
          <a href="#showcase" class="hover:underline">
            What did you make!?
          </a>
        </h2>
        <p class="text-gray-600">
          Some painting, pottery, DIY-y things I have done:
        </p>
        <GalleryImages items={gallery.slice(0, 9)} class="gap-8" />
        {/* <div class="flex gap-2 items-center justify-end text-blue-600">
          <Icons.ArrowRight />
          <a href="./showcase" class="hover:underline focus:underline">
            View more
          </a>
        </div> */}
      </section>
    );
  }