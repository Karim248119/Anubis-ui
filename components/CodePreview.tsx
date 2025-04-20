"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Check, Copy } from "lucide-react";

type CodePreviewProps = {
  component?: React.ReactNode;
  code: string;
  language?: string;
  componentClassName?: string;
  codeClassName?: string;
  background?: string;
  className?: string;
  codeOnly?: boolean;
};

export default function CodePreview({
  component,
  code,
  language = "tsx",
  componentClassName,
  codeClassName,
  background,
  className,
  codeOnly,
}: CodePreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">(
    codeOnly ? "code" : "preview"
  );
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      className={`rounded-lg border shadow-sm w-full overflow-hidden mx-auto ${className}`}
    >
      {/* Tabs */}
      <div className="flex px-4 py-2 justify-between items-center w-full  border-b">
        {!codeOnly ? (
          <div className="flex  ">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                tab === "preview"
                  ? "bg-foreground/15 rounded"
                  : "text-secondary"
              }`}
              onClick={() => setTab("preview")}
            >
              Preview
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                tab === "code" ? "bg-foreground/15 rounded" : "text-secondary"
              }`}
              onClick={() => setTab("code")}
            >
              Code
            </button>
          </div>
        ) : (
          <div></div>
        )}

        <button
          onClick={handleCopy}
          className="  z-10 p-1.5  border hover:bg-black/30 rounded transition-all"
        >
          {copied ? (
            <Check size={14} className="text-green-400" />
          ) : (
            <Copy size={14} />
          )}
        </button>
      </div>
      {/* Content */}
      <div
        className={`relative dark:bg-zinc-950 h-[30vh] overflow-y-auto rounded-b ${componentClassName}`}
      >
        {tab === "preview" ? (
          <div
            style={{
              backgroundColor: background,
            }}
            className="flex-1 flex w-full h-full  justify-center items-center p-5"
          >
            {component}
          </div>
        ) : (
          <div className={`relative bg-[#1e1e1e] ${codeClassName}`}>
            <SyntaxHighlighter
              language={language}
              style={oneDark}
              wrapLines
              customStyle={{
                margin: 0,
                padding: "1rem",
                fontSize: "0.875rem",
                lineHeight: "1.5",
                backgroundColor: "transparent",
              }}
            >
              {code.trim()}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
}
