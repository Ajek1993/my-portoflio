"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

const RESET_MS = 2000;

export default function CopyButton({ value, label, copyText, copiedText, failedText }) {
  const [state, setState] = useState("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timer = setTimeout(() => setState("idle"), RESET_MS);
    return () => clearTimeout(timer);
  }, [state]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("failed");
    }
  }

  const text =
    state === "copied" ? copiedText : state === "failed" ? failedText : copyText;

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={label}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-border-strong px-4 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
    >
      <Icon name={state === "copied" ? "check" : "copy"} className="size-4" />
      <span aria-live="polite">{text}</span>
    </button>
  );
}
