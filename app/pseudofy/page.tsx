"use client";

import React, { useState, useRef, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import langDetector from "lang-detector";
import Footer from "@/components/Footer";
import NavbarComponent from "@/components/NavbarComponent"; // Added import
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
  });
  
  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
  });
  
const languages = ["C", "C++", "Java", "Python", "JavaScript"];

// Error messages
const ERROR_MESSAGES = {
  missingSemicolon: "Missing semicolon.",
  unclosedBrackets: "Unclosed brackets or parentheses detected.",
  invalidSyntax: "Invalid syntax detected. Please check your code.",
};

// Helper Functions
const formatCode = (code: string) => {
  // Simple code formatting function (can be expanded)
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
      { name: "Graph", regex: /adj|graph|vertex/ }
    ],
    algorithms: [
      { name: "Merge Sort", regex: /merge\(|mergeSort\(/ },
      { name: "Quick Sort", regex: /partition\(|quickSort\(/ },
      { name: "Bubble Sort", regex: /bubbleSort\(/ },
      { name: "Binary Search", regex: /binarySearch\(/ },
      { name: "DFS", regex: /dfs\(/ },
      { name: "BFS", regex: /bfs\(/ },
      { name: "Dijkstra", regex: /dijkstra/ }
    ]
  };

  patterns.structures.forEach(({ name, regex }) => {
    if (regex.test(code)) dataStructures.push(name);
  });
  patterns.algorithms.forEach(({ name, regex }) => {
    if (regex.test(code)) algorithms.push(name);
  });

  return { dataStructures, algorithms };
};

const formatPseudocode = (code: string) => {
  return code
    .replace(/;/g, "")
    .replace(/\{/g, "BEGIN")
    .replace(/\}/g, "END")
    .replace(/\bfor\b/g, "FOR")
    .replace(/\bif\b/g, "IF")
    .replace(/\belse\b/g, "ELSE")
    .replace(/\bwhile\b/g, "WHILE")
    .replace(/\/\/.*$/gm, "")
    .replace(/function\s*(\w+)/g, "FUNCTION $1")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
};

// Complexity
const detectComplexity = (algorithm: string) => {
  const complexities: { [key: string]: { best: string, avg: string, worst: string } } = {
    "Merge Sort": { best: "O(n log n)", avg: "O(n log n)", worst: "O(n log n)" },
    "Quick Sort": { best: "O(n log n)", avg: "O(n log n)", worst: "O(n^2)" },
    "Bubble Sort": { best: "O(n)", avg: "O(n^2)", worst: "O(n^2)" },
    "Binary Search": { best: "O(1)", avg: "O(log n)", worst: "O(log n)" },
    "DFS": { best: "O(V+E)", avg: "O(V+E)", worst: "O(V+E)" },
    "BFS": { best: "O(V+E)", avg: "O(V+E)", worst: "O(V+E)" },
    "Dijkstra": { best: "O((V+E) log V)", avg: "O((V+E) log V)", worst: "O((V+E) log V)" },
  };
  return complexities[algorithm as keyof typeof complexities] || { best: "-", avg: "-", worst: "-" };
};

const Page = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("auto");
  const [pseudocode, setPseudocode] = useState("");
  const [dataStructures, setDataStructures] = useState<string[]>([]);  // Explicitly typed as string[]
  const [algorithms, setAlgorithms] = useState<string[]>([]);  // Explicitly typed as string[]
  const [complexity, setComplexity] = useState({ best: "-", avg: "-", worst: "-" });
  const [explanation, setExplanation] = useState("");
  const [selectedLang, setSelectedLang] = useState("Python"); // New language state
  const [showError, setShowError] = useState(""); // Error message state
  const exportRef = useRef(null);

  useEffect(() => {
    // Auto detect language on load
    const lang = langDetector(code);
    setLanguage(lang);
  }, []);

  const generatePseudocode = () => {
    setShowError("");

    try {
      const formattedCode = formatCode(code);
      setCode(formattedCode); // Auto format code

      const { dataStructures, algorithms } = detectStructuresAndAlgorithms(formattedCode);
      const mainAlgo = algorithms[0] || "Unknown";
      setPseudocode(formatPseudocode(formattedCode));
      setDataStructures(Array.from(new Set(dataStructures)));
      setAlgorithms(Array.from(new Set(algorithms)));
      setComplexity(detectComplexity(mainAlgo));
      setExplanation(mainAlgo !== "Unknown" ? `${mainAlgo} is a classic algorithm. The pseudocode describes its core steps clearly.` : "Algorithm not recognized. The pseudocode shows general control flow.");
    } catch (e) {
      setShowError(ERROR_MESSAGES.invalidSyntax);
    }
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLang(event.target.value);
  };

  const handleExampleCodeChange = (exampleCode: string) => {
    setCode(exampleCode);
  };

  const exampleCodes = {
    "Merge Sort": "def merge_sort(arr):\n    if len(arr) > 1:\n        mid = len(arr) // 2\n        left = arr[:mid]\n        right = arr[mid:]\n        merge_sort(left)\n        merge_sort(right)\n        i = j = k = 0\n        while i < len(left) and j < len(right):\n            if left[i] < right[j]:\n                arr[k] = left[i]\n                i += 1\n            else:\n                arr[k] = right[j]\n                j += 1\n            k += 1\n        while i < len(left):\n            arr[k] = left[i]\n            i += 1\n            k += 1\n        while j < len(right):\n            arr[k] = right[j]\n            j += 1\n            k += 1",
    // Add more examples as needed
  };

  return (
    <div className="p-4 min-h-screen bg-black text-white flex flex-col">
      <NavbarComponent /> {/* Added NavbarComponent */}

      <h1 className="text-3xl font-bold text-center mb-6">Code to Pseudocode Converter</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-semibold">Select Language</label>
          <select
            value={selectedLang}
            onChange={handleLanguageChange}
            className="w-full mb-4 p-2 border text-black"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>

          <Textarea
            className="w-full h-60 text-white bg-black"
            placeholder="Paste your code here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <Button onClick={generatePseudocode} className="mt-4">
            Convert to Pseudocode
          </Button>

          <p className="text-red-500 mt-2">{showError && showError}</p>
        </div>

        <div ref={exportRef} className="relative p-4 rounded-md shadow-md bg-black text-white">
          <Tabs defaultValue="pseudocode">
            <TabsList className="mb-2 z-10 relative">
              <TabsTrigger value="pseudocode">Pseudocode</TabsTrigger>
              <TabsTrigger value="diff">Diff</TabsTrigger>
              <TabsTrigger value="info">Info</TabsTrigger>
            </TabsList>

            <TabsContent value="pseudocode">
              <Card>
                <CardContent className="p-4 whitespace-pre-wrap font-mono text-white bg-black">
                  {pseudocode}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="diff">
              <Card>
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
              <Card>
                <CardContent className="p-4">
                  <p><strong>Detected Data Structures:</strong> {dataStructures.join(", ") || "None"}</p>
                  <p><strong>Detected Algorithms:</strong> {algorithms.join(", ") || "None"}</p>
                  <p><strong>Best Case:</strong> {complexity.best}</p>
                  <p><strong>Average Case:</strong> {complexity.avg}</p>
                  <p><strong>Worst Case:</strong> {complexity.worst}</p>
                  <p><strong>Explanation:</strong> {explanation}</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <section
        id="about"
        className={`relative bg-black text-white px-6 py-16 overflow-hidden ${geistSans.variable} ${geistMono.variable} antialiased pattern`}
      >
        <h2 className="text-3xl font-bold text-center mb-6">About This Project</h2>
        <p className="text-lg text-center">
          This tool converts code into pseudocode, helping developers quickly
          understand algorithms and data structures. Select a language, paste
          your code, and get the pseudocode instantly!
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
