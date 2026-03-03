"use client";

import { useEffect, useRef, useState } from "react";

type UseTypewriterOptions = {
  charDelay?: number;
  lineDelay?: number;
};

export function useTypewriter(
  lines: string[],
  { charDelay = 22, lineDelay = 300 }: UseTypewriterOptions = {},
) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let isCancelled = false;
    let shouldInsertNewLine = false;

    const typeNext = () => {
      if (isCancelled) return;

      if (lineIndex >= lines.length) {
        return;
      }

      const currentLine = lines[lineIndex];
      if (!currentLine) {
        lineIndex += 1;
        charIndex = 0;
        timeoutRef.current = window.setTimeout(typeNext, lineDelay);
        return;
      }

      if (shouldInsertNewLine) {
        setDisplayText((prev) => prev + "\n");
        shouldInsertNewLine = false;
        timeoutRef.current = window.setTimeout(typeNext, lineDelay);
        return;
      }

      if (charIndex < currentLine.length) {
        const nextChar = currentLine.charAt(charIndex);
        if (nextChar) {
          setDisplayText((prev) => prev + nextChar);
        }
        charIndex += 1;
        timeoutRef.current = window.setTimeout(typeNext, charDelay);
        return;
      }

      lineIndex += 1;
      charIndex = 0;

      if (lineIndex < lines.length) {
        shouldInsertNewLine = true;
        timeoutRef.current = window.setTimeout(typeNext, 1);
      }
    };

    timeoutRef.current = window.setTimeout(() => {
      setDisplayText("");
      typeNext();
    }, 420);

    return () => {
      isCancelled = true;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [lines, charDelay, lineDelay]);

  useEffect(() => {
    const blink = window.setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(blink);
  }, []);

  return { displayText, showCursor };
}
