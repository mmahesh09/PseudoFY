import Image from "next/image";

export function ClientSection() {
  return (
    <section
      id="clients"
      className="mx-auto max-w-7xl px-6 text-center md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center  font-semibold text-white-600">
            BUILT WITH
          </h2>
          <div className="mt-6 overflow-x-auto">
            <ul className="flex flex-nowrap items-center justify-start gap-x-10 [&>li]:shrink-0">
              <li className="flex flex-col items-center">
                <Image
                  alt="Next.js"
                  src="/nextjs.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  width={112}
                  height={32}
                />
                <span className="mt-2 text-sm">Next.js</span>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  alt="Tailwind CSS"
                  src="/tailwindcss.svg"
                  className="h-8 w-28 px-2"
                  width={112}
                  height={32}
                />
                <span className="mt-2 text-sm">Tailwind CSS</span>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  alt="Framer Motion"
                  src="/framer.svg"
                  className="h-8 w-28 px-2"
                  width={112}
                  height={32}
                />
                <span className="mt-2 text-sm">Framer Motion</span>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  alt="Vercel"
                  src="/vercel.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  width={112}
                  height={32}
                />
                <span className="mt-2 text-sm">Vercel</span>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  alt="OpenAI"
                  src="/openai.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  width={112}
                  height={32}
                />
                <span className="mt-2 text-sm">OpenAI</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientSection;
