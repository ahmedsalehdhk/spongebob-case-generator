"use client";

import { useMemo, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

function toSpongebobCase(input: string): string {
  let result = "";
  let makeLower = Math.random() < 0.5;

  for (const char of input) {
    if (/\s/.test(char)) {
      // Reset pattern at word boundaries (whitespace) with random start case
      result += char;
      makeLower = Math.random() < 0.5;
      continue;
    }

    if (!/[a-z]/i.test(char)) {
      // Non-letters don't affect the alternating pattern
      result += char;
      continue;
    }

    result += makeLower ? char.toLowerCase() : char.toUpperCase();
    makeLower = !makeLower;
  }

  return result;
}

export default function Home() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const spongebobText = useMemo(() => {
    if (!text) return "";
    setCopied(false);
    return toSpongebobCase(text);
  }, [text]);

  return (
    <div
      className={`${poppins.className} min-h-screen flex items-center justify-center px-4 bg-[url('/spongebob-meme.gif')] bg-cover bg-center`}
    >
      <main className="w-full max-w-2xl bg-yellow-100/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-yellow-200">
        <h1 className="text-3xl font-extrabold text-yellow-900 text-center mb-6">
          sPoNgEbOb TeXt GeNeRaToR
        </h1>

        <label className="block text-sm font-semibold text-yellow-800 mb-2">
          Enter your text:
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type anything to mock..."
          className="w-full rounded-lg border border-yellow-300 bg-white/80 px-4 py-2 text-yellow-900 placeholder:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
        />

        <div className="mt-8">
          <p className="text-sm font-semibold text-yellow-800 mb-2">
            sPoNgEbOb cAsE:
          </p>
          <div className="min-h-[4rem] rounded-lg bg-yellow-200/80 border border-yellow-300 flex flex-col sm:flex-row sm:items-center gap-3 px-4 py-3">
            <p className="flex-1 text-2xl font-bold text-yellow-900 break-words text-center sm:text-left">
              {spongebobText || "yOuR tExT wIlL aPpEaR HeRe"}
            </p>
            <button
              type="button"
              onClick={async () => {
                if (!spongebobText) return;
                try {
                  await navigator.clipboard.writeText(spongebobText);
                  setCopied(true);
                } catch {
                  setCopied(false);
                }
              }}
              className="shrink-0 inline-flex items-center justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold text-yellow-950 shadow hover:bg-yellow-400 active:scale-95 transition-transform duration-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-200"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
        <p className="mt-4 text-xs text-yellow-800 text-center">
          created by{" "}
          <a
            href="https://github.com/ahmedsalehdhk"
            target="_blank"
            rel="noreferrer"
            className="underline font-semibold"
          >
            ahmedsalehdhk
          </a>
        </p>
      </main>
    </div>
  );
}
