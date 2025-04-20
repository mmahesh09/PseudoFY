import React from "react";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import NavbarComponent from "@/components/NavbarComponent";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

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

const About = () => {
  return (
    <section
      id="about"
      className={`relative bg-black text-white px-6 py-16 overflow-hidden ${geistSans.variable} ${geistMono.variable} antialiased pattern`}
    >
      <NavbarComponent />
      <ScrollProgress className="top-[65px] z-50" />

      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 opacity-10 select-none"></div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-12 animate-fade-up animate-on-scroll" data-animate>
        <h2 className="text-4xl font-bold text-center text-white">About Us</h2>

        <p className="text-lg leading-relaxed">
          Welcome to <strong>Pseudofy</strong> — an AI-powered platform created to make the logic behind code clear, accessible, and beautifully understandable. Whether you&apos;re just beginning your journey into programming or you&apos;re an expert looking to explain complex logic, <strong>Pseudofy empowers you to bridge the gap between code and clarity</strong>.
        </p>

        <p className="text-lg leading-relaxed">
          In today&apos;s fast-paced development world, <strong>understanding the logic behind code is just as important as writing it</strong>. Syntax can be learned, but grasping the flow of a program—that&apos;s what truly builds skill. That&apos;s where Pseudofy steps in. By converting source code into clean, structured pseudocode, we help you focus on the core ideas.
        </p>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
          <p className="text-lg leading-relaxed">
            <strong>Programming shouldn&apos;t feel intimidating.</strong> With so many languages, styles, and tools, it&apos;s easy to feel overwhelmed. Our mission is simple yet powerful: <strong>Make code universally understandable</strong>. Whether you&apos;re debugging a legacy project or teaching a classroom full of new developers, Pseudofy helps you explain logic—not syntax.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">The Pseudofy Platform</h3>
          <ul className="space-y-4 text-lg list-disc pl-5">
            <li><strong>Multi-Language Support:</strong> Convert code written in Python, Java, JavaScript, C++, and more.</li>
            <li><strong>Real-Time Pseudocode Preview:</strong> Get immediate feedback as you type.</li>
            <li><strong>Customizable Detail Levels:</strong> Toggle between beginner-friendly or in-depth logic descriptions.</li>
            <li><strong>AI-Powered Explanations:</strong> Hover over lines to get a natural-language breakdown of what the code does.</li>
            <li><strong>Algorithm Detection:</strong> Automatically identifies algorithms and shows you time/space complexity.</li>
            <li><strong>Export & Share:</strong> Share pseudocode as PDF, Markdown, or raw text with one click.</li>
            <li><strong>Syntax Highlighting:</strong> Enjoy colorful and clear code display, even before translation.</li>
            <li><strong>Mobile-Friendly Interface:</strong> Whether on desktop, tablet, or phone — Pseudofy adapts to your workflow.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Why Choose Pseudofy?</h3>
          <p className="text-lg leading-relaxed">
            <strong>It&apos;s not just a tool — it&apos;s your coding companion.</strong> Pseudofy is designed to fit into the way you work and learn. It&apos;s fast, intuitive, and built to handle both small snippets and entire functions. Educators love it for simplifying lessons. Students rely on it to understand concepts. Developers use it to communicate better with non-tech stakeholders.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            With Pseudofy, <strong>you save time, reduce misunderstandings, and gain confidence in your logic</strong>. The platform is continuously evolving, and we&apos;re obsessed with making it even better.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Our Vision for the Future</h3>
          <p className="text-lg leading-relaxed">
            We envision a world where <strong>everyone—from students to CEOs—can understand the logic behind code</strong>. Our roadmap includes:
          </p>
          <ul className="list-disc pl-5 text-lg space-y-2 mt-2">
            <li>Support for additional programming languages and frameworks.</li>
            <li>Collaborative pseudocode editing for teams and classrooms.</li>
            <li>Voice input and natural language to code translation.</li>
            <li>Interactive tutorials powered by real code examples.</li>
            <li>Deep integration with learning platforms and IDEs.</li>
          </ul>
          <p className="text-lg leading-relaxed mt-4">
            <strong>Pseudofy isn&apos;t just a product — it&apos;s a movement.</strong> We&apos;re building a future where code isn&apos;t a barrier, but a bridge.
          </p>
        </div>
      </div>

      <div className="mt-16 relative z-10">
        <Footer />
      </div>
    </section>
  );
};

export default About;
