import Image from "next/image";

export function ClientSection() {
  return (
    <section
      id="clients"
      className="mx-auto max-w-7xl px-6 text-center md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold text-gray-600">
            TRUSTED BY DEVELOPERS & DESIGNERS WORLDWIDE
          </h2>
          <div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
              <li>
                <Image
                  alt="Next.js"
                  src="https://raw.githubusercontent.com/vercel/vercel/main/packages/frameworks/logos/nextjs.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  width={112}
                  height={32}
                />
              </li>
              <li>
                <Image
                  alt="Tailwind CSS"
                  src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss.com/master/public/img/logomark.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  width={112}
                  height={32}
                />
              </li>
              <li>
                <Image
                  alt="Framer Motion"
                  src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  width={112}
                  height={32}
                />
              </li>
              <li>
                <Image
                  alt="Vercel"
                  src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  width={112}
                  height={32}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
