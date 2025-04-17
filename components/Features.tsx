import React from "react";
import { useId } from "react";

export function FeaturesSectionDemo() {
  return (
    <div className="py-20 lg:py-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Multi-Language Support",
    description:
      "Supports a wide range of programming languages such as Python, Java, C, JavaScript, and more. Paste your code in any supported language, and get a clear, structured pseudocode output.",
  },
  {
    title: "Real-Time Pseudocode Preview",
    description:
      "See your pseudocode update instantly as you paste or modify your code. No need to refresh or wait—get immediate feedback on how your code translates into a human-readable format.",
  },
  {
    title: "Customizable Pseudocode Detail Levels",
    description:
      "Choose between various levels of pseudocode detail: Basic (just the logic), Detailed (with conditions, loops), or Fully Commented (explains each block of code step-by-step).",
  },
  {
    title: "AI-Powered Line-by-Line Explanation",
    description:
      "Hover over any line in the pseudocode and get an AI-generated explanation of what it does. Perfect for beginners and those who want to learn the why behind each line of code.",
  },
  {
    title: "Export Your Work",
    description:
      "Once you've generated your pseudocode, you can easily export it to popular formats such as PDF, Markdown, or plain text. Share your pseudocode or embed it in documentation effortlessly.",
  },
  {
    title: "Algorithm Detection & Complexity Breakdown",
    description:
      "Automatically detects the algorithm type (e.g., Sorting, Binary Search, Graph Traversal) and provides a breakdown of its time and space complexity to give you deeper insights.",
  },
  {
    title: "Syntax Highlighting for Code",
    description:
      "Highlights code syntax with distinct colors for keywords, variables, and functions, enhancing readability before conversion..",
  },
  {
    title: "Mobile-Friendly Interface",
    description:
      "Access the tool on-the-go with a fully responsive, mobile-friendly design. Whether you're working on a tablet or phone, you can easily convert code to pseudocode from anywhere.",
  },
];

type SquareCoords = [number, number];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: SquareCoords[];
  size?: number;
}) => {
  const p: SquareCoords[] = pattern ?? Array.from({ length: 5 }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ]);

  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width: number;
  height: number;
  x: string | number;
  y: string | number;
  squares?: SquareCoords[];
}

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: GridPatternProps) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], index) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${index}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
