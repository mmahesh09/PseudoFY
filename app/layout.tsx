import type { Metadata } from "next";
import { ClerkProvider} from '@clerk/nextjs'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

// Load fonts with CSS variables
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

// App metadata
export const metadata: Metadata = {
  title: "PseudoFY",
  description: "A Pseudo-Element Playground",
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <ClerkProvider>
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Py.png" sizes="any" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pattern`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="pattern">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  </ClerkProvider>
  );
}
