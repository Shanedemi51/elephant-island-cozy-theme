"use client";

import { useEffect, useState } from "react";

export default function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/94777072265"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`fixed right-4 z-[1000] flex items-center gap-3 rounded-full bg-[#0ca332] px-4 py-3 pr-3 text-white shadow-[0_14px_36px_rgba(12,163,50,0.35)] transition-all duration-300 ease-out hover:bg-[#0a912d] md:hidden ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-8 opacity-0"
      }`}
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
    >
      <span className="font-jost text-[14px] font-semibold uppercase tracking-[0.06em]">
        Chat With Us
      </span>
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-current"
        >
          <path d="M19.05 4.94A9.9 9.9 0 0 0 12.02 2c-5.5 0-9.98 4.48-9.98 9.98 0 1.76.46 3.48 1.32 5L2 22l5.15-1.35a9.94 9.94 0 0 0 4.87 1.24h.01c5.5 0 9.98-4.48 9.98-9.98 0-2.66-1.04-5.15-2.96-7.02Zm-7.03 15.26h-.01a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.06.8.82-2.98-.2-.31a8.27 8.27 0 0 1-1.27-4.39c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.28.86 5.84 2.42a8.21 8.21 0 0 1 2.42 5.85c0 4.56-3.71 8.27-8.27 8.27Zm4.54-6.18c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.2a7.31 7.31 0 0 1-1.37-1.69c-.14-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.47-.4-.41-.56-.42h-.48c-.17 0-.43.06-.65.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.41 1.01 2.58.12.17 1.75 2.68 4.24 3.75.59.26 1.05.41 1.41.53.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.29Z" />
        </svg>
      </span>
    </a>
  );
}
