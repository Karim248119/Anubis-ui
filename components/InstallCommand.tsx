"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import H from "./H";

type PackageManager = "npm" | "yarn" | "pnpm";

type InstallCommandPreviewProps = {
  packages: string | string[];
  dev?: boolean;
  className?: string;
};

export default function InstallCommand({
  packages,
  dev = false,
  className,
}: InstallCommandPreviewProps) {
  const [manager, setManager] = useState<PackageManager>("npm");
  const [copied, setCopied] = useState(false);

  const pkg = Array.isArray(packages) ? packages.join(" ") : packages;

  const commands: Record<PackageManager, string> = {
    npm: `npm install ${dev ? "--save-dev " : ""}${pkg}`,
    yarn: `yarn add ${dev ? "--dev " : ""}${pkg}`,
    pnpm: `pnpm add ${dev ? "-D " : ""}${pkg}`,
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(commands[manager]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className=" mb-5 ">
      <H install>Installation</H>
      <div
        className={`rounded-lg border shadow-sm w-1/2 overflow-hidden ${className}`}
      >
        {/* Tabs & Copy */}
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <div className="flex gap-2">
            {(["npm", "yarn", "pnpm"] as PackageManager[]).map((pm) => (
              <button
                key={pm}
                className={`px-3 py-1.5 text-sm font-medium rounded ${
                  manager === pm ? "bg-foreground/15 " : "text-foreground/50"
                }`}
                onClick={() => setManager(pm)}
              >
                {pm}
              </button>
            ))}
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 border rounded hover:bg-black/10 dark:hover:bg-white/10"
          >
            {copied ? (
              <Check size={16} className="text-green-400" />
            ) : (
              <Copy size={16} />
            )}
          </button>
        </div>

        {/* Command Display */}
        <div className="px-4 py-3 bg-zinc-900 text-sm font-mono text-white whitespace-nowrap overflow-x-auto">
          <code>{commands[manager]}</code>
        </div>
      </div>
    </div>
  );
}
