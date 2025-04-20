import { Codesandbox } from "lucide-react";
import React from "react";
import {
  GiAnkh,
  GiEyeOfHorus,
  GiHorus,
  GiPharoah,
  GiSheikahEye,
} from "react-icons/gi";
import { SiNpm } from "react-icons/si";
import { AiFillCodepenSquare } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";

//header props
interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  code?: boolean;
  install?: boolean;
}
export default function H({ children, className, code, install }: HeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="p-1 bg-foreground text-accent rounded text-xl">
        {code ? <FaCode /> : install ? <SiNpm /> : <GiSheikahEye />}
      </div>
      <h2 className={`font-semibold text-xl ${className}`}>{children}</h2>
    </div>
  );
}
