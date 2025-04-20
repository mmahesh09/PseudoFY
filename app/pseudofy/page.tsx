"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import langDetector from "lang-detector";
import Footer from "@/components/Footer";
import NavbarComponent from "@/components/NavbarComponent";
import { Geist, Geist_Mono } from "next/font/google";
import { Download, RefreshCw, Play } from "lucide-react";
import { toast } from "sonner";
import Editor from "@monaco-editor/react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const languages = ["C", "C++", "Java", "Python", "JavaScript"];

const templates = {
  "Bubble Sort": `function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}`,
  "Binary Search": `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
};

const formatCode = (code: string): string => {
  return code
    .replace(/;/g, " ;")
    .replace(/{/g, "{\n")
    .replace(/}/g, "\n}")
    .replace(/\n/g, "\n  ");
};

const detectStructuresAndAlgorithms = (code: string) => {
  const dataStructures: string[] = [];
  const algorithms: string[] = [];

  const patterns = {
    structures: [
      { name: "Array", regex: /\[.*\]/ },
      { name: "Stack", regex: /push|pop/ },
      { name: "Queue", regex: /enqueue|dequeue/ },
      { name: "Linked List", regex: /next|Node/ },
      { name: "Hash Table", regex: /{.*}/ },
      { name: "Binary Tree", regex: /left|right/ },
      { name: "Graph", regex: /adj|graph|vertex/ },
    ],
    algorithms: [
      { name: "Merge Sort", regex: /merge\(|mergeSort\(/ },
      { name: "Quick Sort", regex: /partition\(|quickSort\(/ },
      { name: "Bubble Sort", regex: /bubbleSort\(/ },
      { name: "Binary Search", regex: /binarySearch\(/ },
      { name: "DFS", regex: /dfs\(/ },
      { name: "BFS", regex: /bfs\(/ },
      { name: "Dijkstra", regex: /dijkstra/ },
    ],
  };

  patterns.structures.forEach(({ name, regex }) => {
    if (regex.test(code)) dataStructures.push(name);
  });
  patterns.algorithms.forEach(({ name, regex }) => {
    if (regex.test(code)) algorithms.push(name);
  });

  return { dataStructures, algorithms };
};

const detectComplexity = (algorithm: string) => {
  const complexities = {
    "Merge Sort": { best: "O(n log n)", avg: "O(n log n)", worst: "O(n log n)" },
    "Quick Sort": { best: "O(n log n)", avg: "O(n log n)", worst: "O(n^2)" },
    "Bubble Sort": { best: "O(n)", avg: "O(n^2)", worst: "O(n^2)" },
    "Binary Search": { best: "O(1)", avg: "O(log n)", worst: "O(log n)" },
    DFS: { best: "O(V+E)", avg: "O(V+E)", worst: "O(V+E)" },
    BFS: { best: "O(V+E)", avg: "O(V+E)", worst: "O(V+E)" },
    Dijkstra: { best: "O((V+E) log V)", avg: "O((V+E) log V)", worst: "O((V+E) log V)" },
  };
  return complexities[algorithm as keyof typeof complexities] || { best: "-", avg: "-", worst: "-" };
};

const suggestFixes = (code: string) => {
  const suggestions: string[] = [];
  if (!code.includes(";")) suggestions.push("Consider adding missing semicolons.");
  if ((code.match(/{/g) || []).length !== (code.match(/}/g) || []).length)
    suggestions.push("Check for unmatched brackets.");
  if (!/for|if|def|function/.test(code)) suggestions.push("No control structures found. Did you mean to use a loop or conditional?");
  return suggestions;
};

const formatPseudocode = (code: string, lang: string): string => {
  const base = code
    .replace(/;/g, "")
    .replace(/\{/g, "START")
    .replace(/\}/g, "END")
    .replace(/\bfor\b/g, "FOR")
    .replace(/\bwhile\b/g, "WHILE")
    .replace(/\bif\b/g, "IF")
    .replace(/\belse\b/g, "ELSE")
    .replace(/function\s*(\w+)/g, "FUNCTION $1")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");

  if (lang === "Python") {
    return base.replace(/:/g, "").replace(/def/g, "FUNCTION");
  }
  return base;
};

const Page = () => {
  const [code, setCode] = useState("");
  const [pseudocode, setPseudocode] = useState("");
  const [dataStructures, setDataStructures] = useState<string[]>([]); // Explicitly typed as string[]
  const [algorithms, setAlgorithms] = useState<string[]>([]); // Explicitly typed as string[]
  const [complexity, setComplexity] = useState({ best: "-", avg: "-", worst: "-" });
  const [explanation, setExplanation] = useState("");
  const [selectedLang, setSelectedLang] = useState("Python");
  const [showModal, setShowModal] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]); // Explicitly typed as string[]

  const generatePseudocode = () => {
    if (!/\bdef\b|\bclass\b|\bfor\b|\bif\b|\bwhile\b/.test(code)) {
      const fixes = suggestFixes(code);
      toast.error("Invalid code entered.");
      setSuggestions(fixes);
      return;
    }

    try {
      const formattedCode = formatCode(code);
      setCode(formattedCode);

      const { dataStructures, algorithms } = detectStructuresAndAlgorithms(formattedCode);
      const mainAlgo = algorithms[0] || "Unknown";
      setPseudocode(formatPseudocode(formattedCode, selectedLang));
      setDataStructures([...new Set(dataStructures)]);
      setAlgorithms([...new Set(algorithms)]);
      setComplexity(detectComplexity(mainAlgo));
      setExplanation(
        mainAlgo !== "Unknown"
          ? `${mainAlgo} is a classic algorithm. The pseudocode describes its core steps clearly.`
          : "Algorithm not recognized. The pseudocode shows general control flow."
      );

      toast.success("Pseudocode generated successfully!");
      setShowModal(true);
      setSuggestions([]);
    } catch (err) {
      toast.error("Error while converting code.");
    }
  };

  const chartData = {
    labels: ["Best", "Average", "Worst"],
    datasets: [
      {
        label: "Time Complexity",
        backgroundColor: ["#16a34a", "#facc15", "#ef4444"],
        data: [complexity.best, complexity.avg, complexity.worst].map((val) => {
          if (val.includes("n^2")) return 100;
          if (val.includes("n log n")) return 70;
          if (val.includes("log n")) return 40;
          if (val.includes("n")) return 50;
          return 10;
        }),
      },
    ],
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white font-sans">
      <NavbarComponent />
      <h1 className="text-4xl font-bold text-center my-6">Code to Pseudocode Converter</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Code Editor Section */}
        <Card className="bg-zinc-800 p-6 rounded-lg shadow-lg">
          <label className="block text-sm font-semibold mb-1">Select Language</label>
          <select
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
            className="w-full rounded p-2 text-black mb-4"
          >
            {languages.map((lang) => (
              <option key={lang}>{lang}</option>
            ))}
          </select>

          <div className="flex gap-2 mb-4">
            {(Object.keys(templates) as Array<keyof typeof templates>).map((name) => (
              <Button key={name} onClick={() => setCode(templates[name])} className="text-sm">{name}</Button>
            ))}
          </div>

          <div className="h-64 border border-zinc-600 rounded overflow-hidden">
            <Editor
              height="100%"
              defaultLanguage={selectedLang.toLowerCase()}
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
              options={{ minimap: { enabled: false }, fontSize: 14 }}
            />
          </div>

          <div className="flex items-center gap-4 mt-6">
            <Button onClick={generatePseudocode}>Convert</Button>
            <Button variant="outline" onClick={() => setCode("")}>Clear</Button>
            <Button variant="default" onClick={() => toast.info("Step-by-step execution coming soon!")}>
              <Play className="w-4 h-4 mr-1" /> Play
            </Button>
          </div>

          {suggestions.length > 0 && (
            <div className="mt-4 bg-red-900 p-2 rounded">
              <p className="font-bold mb-1">Suggestions:</p>
              <ul className="list-disc list-inside text-sm">
                {suggestions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </Card>

        {/* Output Section */}
        <div className="space-y-6">
          <Tabs defaultValue="pseudocode">
            <TabsList className="mb-4">
              <TabsTrigger value="pseudocode">Pseudocode</TabsTrigger>
              <TabsTrigger value="diff">Diff</TabsTrigger>
              <TabsTrigger value="info">Info</TabsTrigger>
              <TabsTrigger value="chart">Chart</TabsTrigger>
            </TabsList>

            <TabsContent value="pseudocode">
              <Card className="bg-black border border-zinc-700">
                <CardContent className="p-4 whitespace-pre-wrap font-mono text-white">
                  {pseudocode}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="diff">
              <Card className="bg-black border border-zinc-700">
                <CardContent className="p-4">
                  <h2 className="font-semibold mb-2">Original Code</h2>
                  <SyntaxHighlighter language={selectedLang.toLowerCase()} style={atomDark}>
                    {code}
                  </SyntaxHighlighter>
                  <h2 className="font-semibold mt-4 mb-2">Pseudocode</h2>
                  <SyntaxHighlighter language="text" style={atomDark}>
                    {pseudocode}
                  </SyntaxHighlighter>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="info">
              <Card className="bg-black border border-zinc-700">
                <CardContent className="p-4">
                  <p><strong>Data Structures:</strong> {dataStructures.join(", ")}</p>
                  <p><strong>Algorithms:</strong> {algorithms.join(", ")}</p>
                  <p><strong>Explanation:</strong> {explanation}</p>
                  <p><strong>Complexity:</strong></p>
                  <ul>
                    <li>Best: {complexity.best}</li>
                    <li>Average: {complexity.avg}</li>
                    <li>Worst: {complexity.worst}</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="chart">
              <Card className="bg-black border border-zinc-700">
                <CardContent>
                  <Bar data={chartData} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
