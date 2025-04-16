"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Logos from "@/components/Logos";

const Home = () => {
  const router = useRouter();

  return (
    <div className="z-10 flex flex-col items-center justify-center min-h-screen px-4">
      {/* GitHub Link Button */}
      <a
        href="https://github.com/mmahesh09/PseudoFY"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Introducing PseudoFY"
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-black transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing PseudoFY</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </a>

      <main className="pt-24 flex flex-col items-center justify-center text-center w-full max-w-5xl">
        <div className="max-w-4xl w-full">
          <TextGenerateEffect
            words="Bridge the gap between logic and language. Code-to-pseudocode made simple."
            className="text-[40px] md:text-5xl lg:text-6xl"
          />

          {/* Buttons */}
          <div className="flex flex-row items-center justify-center gap-x-6 mt-12">
            {/* About Us Button */}
            <div className="relative group">
              <button
                onClick={() => router.push("/about")}
                className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      About Us
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      />
                    </svg>
                  </div>
                </span>
              </button>
            </div>

            {/* Try PseudoFY Button */}
            <div className="relative group">
              <button
                onClick={() => router.push("/pseudofy")}
                className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
              >
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                  <div className="relative z-10 flex items-center space-x-3">
                    <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
                      Try PseudoFY
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                    >
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </div>

          <Logos />
        </div>
      </main>
    </div>
  );
};

export default Home;
