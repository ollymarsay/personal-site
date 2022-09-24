export interface Gallery {
  image: string;
  title: string;
}

interface GalleryProps {
  items: Gallery[];
  class?: string;
}

export default function Projects(props: GalleryProps) {
  return (
    <div
      class={`pt-8 grid grid-cols-1 md:grid-cols-3 items-center ${
        props.class ?? ""
      }`}
    >
      {props.items.map((gallery) => (
        <div class="w-full max-w-sm mx-auto group">
          <img
            loading="lazy"
            src={`/gallery/${gallery.image}.jpg`}
            alt={gallery.title}
            width={600}
            height={600}
            style={{ aspectRatio: "1/1" }}
            class="object-cover shadow-lg group-hover:(shadow-xl opacity-70) rounded-lg"
          />
          <div class="mt-4 flex items-center">
            <div class="text(xs gray-600) flex-1 group-hover:text-underline">
              <p>{gallery.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
