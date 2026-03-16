import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TerminalLine = {
  prompt?: string;
  command: string;
  output?: string;
};

type AnimatedTerminalProps = {
  title?: string;
  lines: readonly TerminalLine[];
  typingSpeed?: number;
  lineDelay?: number;
};

export function AnimatedTerminal({
  title = "vlad@dev:~",
  lines,
  typingSpeed = 38,
  lineDelay = 600,
}: AnimatedTerminalProps) {
  const [visibleLines, setVisibleLines] = useState<
    { prompt: string; text: string; output?: string; done: boolean }[]
  >([]);
  const [cursorLineIdx, setCursorLineIdx] = useState(0);
  const [cursorCharIdx, setCursorCharIdx] = useState(0);
  const [showOutput, setShowOutput] = useState<boolean[]>([]);

  useEffect(() => {
    if (cursorLineIdx >= lines.length) return;

    const currentLine = lines[cursorLineIdx];
    const prompt = currentLine.prompt ?? "$";
    const fullText = currentLine.command;

    // Initialize the line if needed
    if (!visibleLines[cursorLineIdx]) {
      setVisibleLines((prev) => [
        ...prev,
        { prompt, text: "", output: currentLine.output, done: false },
      ]);
      setShowOutput((prev) => [...prev, false]);
      return;
    }

    // Still typing the current line
    if (cursorCharIdx < fullText.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) =>
          prev.map((line, i) =>
            i === cursorLineIdx
              ? { ...line, text: fullText.slice(0, cursorCharIdx + 1) }
              : line,
          ),
        );
        setCursorCharIdx((c) => c + 1);
      }, typingSpeed + Math.random() * 25);
      return () => clearTimeout(timeout);
    }

    // Line is fully typed — show output, then advance
    const finishTimeout = setTimeout(() => {
      setVisibleLines((prev) =>
        prev.map((line, i) =>
          i === cursorLineIdx ? { ...line, done: true } : line,
        ),
      );
      setShowOutput((prev) =>
        prev.map((v, i) => (i === cursorLineIdx ? true : v)),
      );

      setTimeout(() => {
        setCursorLineIdx((l) => l + 1);
        setCursorCharIdx(0);
      }, lineDelay);
    }, 120);

    return () => clearTimeout(finishTimeout);
  }, [cursorLineIdx, cursorCharIdx, visibleLines, lines, typingSpeed, lineDelay]);

  const allDone = cursorLineIdx >= lines.length;

  return (
    <div className="overflow-hidden rounded-[28px] border border-primary/15 bg-[hsl(270_40%_4%)] shadow-panel">
      {/* ── title bar ── */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-3.5">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-400/90" />
          <span className="h-3 w-3 rounded-full bg-amber-300/90" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
        </div>
        <span className="font-mono text-xs text-white/30">{title}</span>
      </div>

      {/* ── terminal body ── */}
      <div className="min-h-[280px] px-5 py-5 font-mono text-[13px] leading-7 text-purple-100/90 sm:text-sm sm:leading-7">
        <AnimatePresence mode="sync">
          {visibleLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* command line */}
              <div className="flex gap-2">
                <span className="select-none text-[hsl(270_85%_68%)]">
                  {line.prompt}
                </span>
                <span className="whitespace-pre-wrap break-all">
                  {line.text}
                  {/* blinking cursor */}
                  {cursorLineIdx === i && !line.done && (
                    <motion.span
                      className="ml-px inline-block h-[1.1em] w-[7px] translate-y-[2px] bg-[hsl(270_85%_68%)]"
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  )}
                </span>
              </div>

              {/* output (appears after typing finishes) */}
              {line.output && showOutput[i] && (
                <motion.div
                  className="ml-5 mt-0.5 text-white/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {line.output}
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* idle cursor after all lines are done */}
        {allDone && (
          <motion.div
            className="flex gap-2 pt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="select-none text-[hsl(270_85%_68%)]">$</span>
            <motion.span
              className="inline-block h-[1.1em] w-[7px] translate-y-[2px] bg-[hsl(270_85%_68%)]"
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
