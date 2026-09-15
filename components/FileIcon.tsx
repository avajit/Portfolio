import React from "react";
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss, 
  SiPrettier,
  SiEslint
} from "react-icons/si";
import { 
  VscJson, 
  VscMarkdown, 
  VscFile,
  VscPlayCircle,
  VscRobot
} from "react-icons/vsc";

export function FileIcon({ name, className = "w-[14px] h-[14px]" }: { name: string; className?: string }) {
  const lowerName = name.toLowerCase();

  // Frameworks & Languages
  if (lowerName.endsWith(".tsx") || lowerName.endsWith(".jsx")) {
    return <SiReact className={className} color="#61DAFB" />;
  }
  if (lowerName.endsWith(".ts")) {
    return <SiTypescript className={className} color="#3178C6" />;
  }
  if (lowerName.endsWith(".js")) {
    return <SiJavascript className={className} color="#F7DF1E" />;
  }
  if (lowerName.endsWith(".html")) {
    return <SiHtml5 className={className} color="#E34F26" />;
  }
  if (lowerName.endsWith(".css")) {
    return <SiCss className={className} color="#1572B6" />;
  }
  if (lowerName.endsWith(".json")) {
    return <VscJson className={className} color="#CBCB41" />;
  }
  if (lowerName.endsWith(".md")) {
    return <VscMarkdown className={className} color="#42A5F5" />;
  }

  // Extensions / Special names
  if (lowerName === "prettier") {
    return <SiPrettier className={className} color="#F7B93E" />;
  }
  if (lowerName === "eslint") {
    return <SiEslint className={className} color="#4B32C3" />;
  }
  if (lowerName === "copilot") {
    return <VscRobot className={className} color="#E93CAC" />;
  }
  if (lowerName === "live server") {
    return <VscPlayCircle className={className} color="#A020F0" />;
  }
  
  if (lowerName.endsWith(".pdf")) {
    return <VscFile className={className} color="#E53935" />;
  }

  // Fallback
  return <VscFile className={className} color="#9ca3af" />;
}
