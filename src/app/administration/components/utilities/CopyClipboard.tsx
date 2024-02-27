"use client";

import React, { useState } from "react";
import copy from "clipboard-copy";

export default function CopyClipboard({ text }: any) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await copy(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  return (
    <button
      onClick={handleCopy}
      className="text-xs font-semibold text-slate-800"
    >
      {copied ? "Copied!" : "Copy to Clipboard"}
    </button>
  );
}
