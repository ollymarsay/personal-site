const LINKS = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/ollymarsay/",
    },
    {
      title: "Twitter",
      href: "https://twitter.com/marsayolly",
    },
  ];
  
  export default function Footer() {
    return (
      <footer class="border(t-2 gray-200) bg-gray-100 h-32 flex flex-col gap-4 justify-center">
        <div class="mx-auto max-w-screen-lg flex items-center justify-center gap-8">
          {LINKS.map((link) => (
            <a href={link.href} class="text-gray-600 hover:underline">
              {link.title}
            </a>
          ))}
        </div>
        <div class="text(gray-600 center)">
          <span>Olly Marsay • {new Date().getFullYear()}</span>
        </div>
      </footer>
    );
  }