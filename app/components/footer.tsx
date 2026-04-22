import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaPinterest } from "react-icons/fa";

import Link from "next/link";

type FooterProps = {
  address?: string;
  phone?: string;
  email?: string;
};

export default function SiteFooter({
  address = "Nugegoda Business Center 80 Nawala Road, Nugegoda, Sri Lanka",
  phone = "+94 77 707 2265",
  email = "info@elephant-island.com",
}: FooterProps) {
  return (
    <footer data-site-footer className="bg-[#0a0a0a] text-white/80">
      {/* Top grid */}
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-6 md:grid-cols-4">
          {/* Address */}
          <div className="border-white/10 py-10 md:border-r md:px-8">
            <div className="text-xs font-semibold tracking-[0.25em] text-white/40">
              ADDRESS
            </div>
            <div className="mt-4 text-sm text-white/85">{address}</div>
          </div>

          {/* Phone */}
          <div className="border-white/10 py-10 md:border-r md:px-8">
            <div className="text-xs font-semibold tracking-[0.25em] text-white/40">
              PHONE | WHATSAPP
            </div>
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="mt-4 block text-sm text-white/85 hover:text-white"
            >
              {phone}
            </a>
          </div>

          {/* Email */}
          <div className="border-white/10 py-10 md:border-r md:px-8">
            <div className="text-xs font-semibold tracking-[0.25em] text-white/40">
              EMAIL
            </div>
            <a
              href={`mailto:${email}`}
              className="mt-4 block text-sm text-white/85 hover:text-white"
            >
              {email}
            </a>
          </div>

          {/* Social */}
          <div className="py-10 md:px-8">
            <div className="text-xs font-semibold tracking-[0.25em] text-white/40">
              SOCIAL
            </div>

            <div className="mt-6 flex items-center gap-5">
              <SocialIcon
                label="Facebook"
                href="https://www.facebook.com/elephant.island.lk/"
                icon="facebook"
              />
              <SocialIcon
                label="Instagram"
                href="https://www.instagram.com/elephantisland.lk/"
                icon="instagram"
              />
              <SocialIcon
                label="Pinterest"
                href="https://www.pinterest.com/elephantislandlk/_pins/"
                icon="pinterest"
              />
              <SocialIcon
                label="YouTube"
                href="https://www.youtube.com/@elephantislandholidays"
                icon="youtube"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/60">
            © Copyright Elephant Island 2026
          </div>

          <div className="flex items-center gap-8 text-xs font-semibold tracking-[0.25em] text-white/40">
            <Link className="hover:text-white" href="/privacy">
              PRIVACY
            </Link>
            <Link className="hover:text-white" href="/terms">
              TERMS OF USE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: "facebook" | "pinterest" | "youtube" | "instagram";
}) {
  const common = "h-5 w-5 text-white/80 hover:text-white transition-colors";
  const icons = {
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
  } as const;

  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon === "pinterest" ? (
        <FaPinterest className={common} />
      ) : (
        React.createElement(icons[icon], { className: common, strokeWidth: 1.8 })
      )}
    </a>
  );
}
