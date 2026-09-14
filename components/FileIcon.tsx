import React from "react";

export function FileIcon({ name, className = "w-[14px] h-[14px]" }: { name: string; className?: string }) {
  if (name.endsWith(".tsx") || name.endsWith(".ts")) {
    return (
      <svg className={className} viewBox="0 0 32 32">
        <rect x="2" y="2" width="28" height="28" fill="#3178c6" />
        <path d="M12.9 23.5h-2.3v-9h-2.8v-2.3h8v2.3h-2.9v9zm7.3 0c-1.3 0-2.3-.3-3.2-.8l1-1.9c.7.4 1.5.7 2.3.7.8 0 1.2-.3 1.2-.8 0-.4-.4-.6-1.5-.8-1.5-.3-2.5-.9-2.5-2.2 0-1.4 1.1-2.4 2.8-2.4 1 0 1.9.2 2.8.7l-1 2c-.6-.4-1.3-.5-2.1-.5-.6 0-1 .2-1 .7 0 .4.3.6 1.4.8 1.6.3 2.5 1 2.5 2.3 0 1.5-1.1 2.2-2.7 2.2z" fill="#fff" />
      </svg>
    );
  }
  if (name.endsWith(".js") || name.endsWith(".jsx")) {
    return (
      <svg className={className} viewBox="0 0 32 32">
        <rect x="2" y="2" width="28" height="28" fill="#f7df1e" />
        <path d="M14.6 23.8c-.8.8-1.8 1.1-3.2 1.1-1.6 0-2.7-.4-3.6-1.2l1.5-2.1c.6.6 1.3.9 2 .9.8 0 1.2-.3 1.2-.8 0-.5-.3-.7-1.5-.9-1.9-.4-2.8-1.1-2.8-2.6 0-1.4 1.1-2.4 3-2.4 1.2 0 2.3.4 3 1.1l-1.4 2c-.5-.5-1.1-.7-1.7-.7-.6 0-1 .2-1 .6 0 .4.3.6 1.4.8 2 .4 3 1.1 3 2.5 0 1.6-1 2.5-2.9 2.5v-.8zm6.5 1.1c-1.2 0-2-.3-2.7-1l1.5-2.1c.5.5 1.1.7 1.8.7.6 0 1-.2 1-.6 0-.4-.3-.6-1.4-.8-1.9-.4-2.8-1.1-2.8-2.5 0-1.4 1.1-2.4 3-2.4 1.2 0 2.3.4 3 1.1l-1.4 2c-.5-.5-1.1-.7-1.7-.7-.6 0-1 .2-1 .6 0 .4.3.6 1.4.8 2 .4 3 1.1 3 2.5 0 1.6-1.1 2.4-3.7 2.4v-1z" fill="#000" />
      </svg>
    );
  }
  if (name.endsWith(".html")) {
    return (
      <svg className={className} viewBox="0 0 32 32">
        <path d="M3.7 2L2 28.5 16 32l14-3.5L28.3 2H3.7zm21.4 24.3l-9.1 2.3-9.1-2.3L5.4 4.3h21.2l-1.5 22z" fill="#e34f26" />
        <path d="M16 27.5v-23h9.8l-1.3 20.8-8.5 2.2z" fill="#f06529" />
        <path d="M16 11.2h4.5l.3-3.6H16V4.4h9.1l-.8 11H16v-4.2zm0 8.2l3.4-.9.2-2.5h3.6l-.5 5.5-6.7 1.9v-4z" fill="#ebebeb" />
        <path d="M16 15.4H9.1l-.3-3.6H16v4.2zM7.2 4.4h8.8v3.2H7.5l-.3-3.2zm1.6 13.9l.4 4.3 6.8 1.9v-4l-3.5-.9-.1-1.3h-3.6z" fill="#fff" />
      </svg>
    );
  }
  if (name.endsWith(".css")) {
    return (
      <svg className={className} viewBox="0 0 32 32">
        <path d="M3.7 2L2 28.5 16 32l14-3.5L28.3 2H3.7zm21.4 24.3l-9.1 2.3-9.1-2.3L5.4 4.3h21.2l-1.5 22z" fill="#1572b6" />
        <path d="M16 27.5v-23h9.8l-1.3 20.8-8.5 2.2z" fill="#33a9dc" />
        <path d="M16 11.2h4.5l.3-3.6H16V4.4h9.1l-.8 11H16v-4.2zm0 8.2l3.4-.9.2-2.5h3.6l-.5 5.5-6.7 1.9v-4z" fill="#ebebeb" />
        <path d="M16 15.4H9.1l-.3-3.6H16v4.2zM7.2 4.4h8.8v3.2H7.5l-.3-3.2zm1.6 13.9l.4 4.3 6.8 1.9v-4l-3.5-.9-.1-1.3h-3.6z" fill="#fff" />
      </svg>
    );
  }
  if (name.endsWith(".json")) {
    return (
      <svg className={className} viewBox="0 0 32 32">
        <path d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm0 25.5c-6.4 0-11.5-5.1-11.5-11.5S9.6 4.5 16 4.5 27.5 9.6 27.5 16 22.4 27.5 16 27.5z" fill="#cbd5e1" />
        <path d="M13.7 10h-2.1c0 3.2-2 4.8-4 5.3v1.4c2 .5 4 2.1 4 5.3h2.1c-.5-3.3-2.6-5-5-5.8v-.4c2.4-.8 4.5-2.5 5-5.8zm4.6 0h2.1c0 3.2 2 4.8 4 5.3v1.4c-2 .5-4 2.1-4 5.3h-2.1c.5-3.3 2.6-5 5-5.8v-.4c-2.4-.8-4.5-2.5-5-5.8z" fill="#cbd5e1" />
      </svg>
    );
  }
  if (name.endsWith(".md")) {
    return (
      <svg className={className} viewBox="0 0 32 32">
        <path d="M2 5v22h28V5H2zm13 16h-2.5v-6.5l-3 4-3-4V21H4v-11h2.5l4 5.5 4-5.5H15v11zm13 0h-4v-4h-2.5l4.5-6 4.5 6H28v4z" fill="#083fa1" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 32 32">
      <path d="M6 2v28h20V10l-8-8H6zm2 2h8v8h8v16H8V4zm10 1.5L22.5 10H18V5.5z" fill="#94a3b8" />
    </svg>
  );
}
