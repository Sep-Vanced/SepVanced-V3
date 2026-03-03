"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { useTypewriter } from "@/hooks/useTypewriter";
import { cn } from "@/lib/utils";

const codeLines = [
  "const joseph = {",
  '  name: "Joseph M. Mangubat",',
  '  role: "Frontend / Backend Developer",',
  '  location: "Sta. Cruz, Zambales",',
  '  techStack: ["Next.js", "Laravel API", "TypeScript", "Postgres", "Docker"]',
  "};",
];

function renderToken(token: string, key: string): ReactNode {
  if (token === "const") {
    return (
      <span key={key} className="font-semibold text-blue-300">
        {token}
      </span>
    );
  }

  if (token === "joseph") {
    return (
      <span key={key} className="font-semibold text-indigo-300">
        {token}
      </span>
    );
  }

  if (/^".*"$/.test(token)) {
    return (
      <span key={key} className="text-amber-300">
        {token}
      </span>
    );
  }

  if (/^(true|false|null|\d+)$/.test(token)) {
    return (
      <span key={key} className="text-violet-300">
        {token}
      </span>
    );
  }

  return <span key={key}>{token}</span>;
}

function renderHighlightedCode(source: string) {
  const lines = source.split("\n");

  return lines.map((line, lineIndex) => {
    const tokens = line.split(/(".*?"|\bconst\b|\bjoseph\b|\btrue\b|\bfalse\b|\bnull\b|\b\d+\b)/g);
    return (
      <span key={`line-${lineIndex}`}>
        {tokens.filter(Boolean).map((token, tokenIndex) =>
          renderToken(token, `line-${lineIndex}-token-${tokenIndex}`),
        )}
        {lineIndex < lines.length - 1 ? "\n" : ""}
      </span>
    );
  });
}

export function AnimatedCode() {
  const { displayText, showCursor } = useTypewriter(codeLines, {
    charDelay: 36,
    lineDelay: 520,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      className="overflow-hidden rounded-lg border border-white/12 bg-[#091327]/88 shadow-2xl shadow-blue-950/40"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-xs text-white/55">joseph.ts</span>
      </div>

      <div className="scrollbar-terminal overflow-x-auto p-3 sm:p-4">
        <pre className="min-w-[520px] font-mono text-xs leading-6 text-slate-200 sm:min-w-[640px] sm:text-sm sm:leading-7">
          <code>{renderHighlightedCode(displayText)}</code>
          <span
            className={cn(
              "ml-0.5 inline-block h-5 w-2 translate-y-1 bg-blue-300",
              showCursor ? "opacity-100" : "opacity-0",
            )}
          />
        </pre>
      </div>
    </motion.div>
  );
}
