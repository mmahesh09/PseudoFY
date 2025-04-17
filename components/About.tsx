import React from 'react';

const About = () => {
  return (
    <section id="about" className="px-6 py-16 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center text-gray-900">About Us</h2>

        <p className="text-lg leading-relaxed">
          Welcome to <strong>Pseudofy</strong>, the innovative tool designed to simplify the world of programming by helping you convert your code into clear, easy-to-understand pseudocode. Whether you&apos;re a beginner trying to understand logic or an experienced developer explaining complex algorithms, Pseudofy is here to help.
        </p>

        <p className="text-lg leading-relaxed">
          At Pseudofy, we believe that understanding the logic behind a program is as important as writing it. Our tool uses AI to convert programming code into pseudocode, breaking it down into a simple, structured format—making it easier for everyone, no matter their experience level.
        </p>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
          <p className="text-lg leading-relaxed">
            Programming can be overwhelming—so many languages, paradigms, and syntax rules. Our mission is to bridge the gap between writing code and understanding it. Pseudofy makes code accessible and explainable by turning it into high-level pseudocode and providing AI-powered guidance.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">The Pseudofy Platform</h3>
          <ul className="space-y-4 text-lg list-disc pl-5">
            <li><strong>Multi-Language Support:</strong> Works with Python, Java, JavaScript, C++, and more.</li>
            <li><strong>Real-Time Pseudocode Preview:</strong> See your logic instantly as you code.</li>
            <li><strong>Customizable Detail Levels:</strong> Choose between simple and detailed logic views.</li>
            <li><strong>AI-Powered Explanations:</strong> Hover for clear explanations of each line.</li>
            <li><strong>Algorithm Detection &amp; Complexity Breakdown:</strong> Know what algorithm you&apos;re using and its efficiency.</li>
            <li><strong>Export &amp; Share:</strong> Save pseudocode as PDF, Markdown, or plain text.</li>
            <li><strong>Syntax Highlighting:</strong> Your original code is visually enhanced for clarity.</li>
            <li><strong>Mobile-Friendly Interface:</strong> Works perfectly on any device.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Why Choose Pseudofy?</h3>
          <p className="text-lg leading-relaxed">
            It&apos;s user-friendly, time-saving, versatile, and powered by AI. Whether you&apos;re learning, teaching, or explaining code, Pseudofy helps you focus on logic—not syntax.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Our Vision for the Future</h3>
          <p className="text-lg leading-relaxed">
            We&apos;re just getting started. We plan to support more languages, add new features, and refine the user experience. Our dream? A world where everyone can understand and explain code, no matter their background.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
