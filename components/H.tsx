import { Codesandbox } from "lucide-react";
import React from "react";
import { GiSheikahEye } from "react-icons/gi";
import { SiNpm } from "react-icons/si";
import { FaCode, FaRegFolderOpen } from "react-icons/fa6";

//header props
interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "code" | "install" | "assets" | "preview";
}
export default function H({ children, className, variant }: HeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="p-1 bg-foreground text-accent rounded text-xl">
        {variant === "code" ? (
          <Codesandbox />
        ) : variant === "install" ? (
          <SiNpm />
        ) : variant === "assets" ? (
          <FaRegFolderOpen />
        ) : variant === "preview" ? (
          <GiSheikahEye />
        ) : (
          <FaCode />
        )}
      </div>
      <h2 className={`font-semibold text-xl ${className}`}>{children}</h2>
    </div>
  );
}
