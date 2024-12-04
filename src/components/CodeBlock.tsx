"use client";
import React, { useRef, useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import CopyIcon from "@/assets/CopyIcon";
import TickIcon from "@/assets/TickIcon";

const CodeBlock = ({
  lang,
  codeChildren,
}: {
  lang: string;
  codeChildren: string;
}) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [codeChildren]);

  return (
    <div className="bg-[#2d2d2d] rounded-md mb-4">
      <CodeBar lang={lang} codeRef={codeRef} />
      <div className="p-4 overflow-y-auto">
        <pre className="!m-0">
          <code ref={codeRef} className={`language-${lang} text-green-600`}>
            {codeChildren}
          </code>
        </pre>
      </div>
    </div>
  );
};

const CodeBar = React.memo(
  ({
    lang,
    codeRef,
  }: {
    lang: string;
    codeRef: React.RefObject<HTMLElement>;
  }) => {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    return (
      <div className="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans">
        <span className="">{lang}</span>
        <button
          className="flex ml-auto gap-2"
          aria-label="copy codeblock"
          onClick={async () => {
            const codeString = codeRef.current?.textContent;
            if (codeString)
              navigator.clipboard.writeText(codeString).then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 3000);
              });
          }}
        >
          {isCopied ? (
            <>
              <TickIcon />
              Copied!
            </>
          ) : (
            <>
              <CopyIcon />
              Copy code
            </>
          )}
        </button>
      </div>
    );
  }
);

CodeBar.displayName = "CodeBar";

export default CodeBlock;
