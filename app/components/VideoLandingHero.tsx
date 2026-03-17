"use client";

import Image from "next/image";
import { useState } from "react";
import ContactModal from "./ContactModal";

type VideoLandingHeroProps = {
  mobileSrc?: string;
  desktopSrc?: string;
};

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.replace(/^www\./, "");
    let videoId = "";

    if (hostname === "youtu.be") {
      videoId = parsedUrl.pathname.slice(1);
    } else if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      if (parsedUrl.pathname === "/watch") {
        videoId = parsedUrl.searchParams.get("v") ?? "";
      } else if (parsedUrl.pathname.startsWith("/shorts/")) {
        videoId = parsedUrl.pathname.split("/")[2] ?? "";
      } else if (parsedUrl.pathname.startsWith("/embed/")) {
        videoId = parsedUrl.pathname.split("/")[2] ?? "";
      }
    }

    if (!videoId) {
      return url;
    }

    const params = new URLSearchParams({
      autoplay: "1",
      controls: "0",
      disablekb: "1",
      fs: "0",
      loop: "1",
      modestbranding: "1",
      mute: "1",
      playsinline: "1",
      playlist: videoId,
      rel: "0",
    });

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  } catch {
    return url;
  }
}

export default function VideoLandingHero({
  mobileSrc = "https://www.youtube.com/shorts/afN9yIyr8wQ",
  desktopSrc = "https://www.youtube.com/watch?v=Aqk3N642eLw",
}: VideoLandingHeroProps) {
  const mobileEmbedSrc = getYouTubeEmbedUrl(mobileSrc);
  const desktopEmbedSrc = getYouTubeEmbedUrl(desktopSrc);
  const [isContactModalOpen , setIsContactModalOpen] = useState(false);

  return (
    <section className="relative h-screen md:h-[75dvh] lg:h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 md:hidden pointer-events-none overflow-hidden">
        <iframe
          className="absolute left-1/2 top-1/2 h-[130vh] min-h-full w-[230vw] min-w-full -translate-x-1/2 -translate-y-1/2"
          src={mobileEmbedSrc}
          title="Elephant Island mobile hero video"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="absolute inset-0 hidden md:block pointer-events-none overflow-hidden">
        <iframe
          className="absolute left-1/2 top-1/2 h-[125vh] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
          src={desktopEmbedSrc}
          title="Elephant Island desktop hero video"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-8 text-white text-center px-6">
        <Image
          src="/main-logo.png"
          className="w-16 grayscale"
          alt=""
          width={64}
          height={64}
        />
        <h3 className="mb-8 font-marcellus">Elephant Island</h3>

        <button className="mt-4 px-8 py-4 bg-custom-pink text-black rounded-full" onClick={()=>setIsContactModalOpen(true)}>
          Enquire
        </button>

        <h1 className="font-marcellus text-2xl mt-12">Sri Lanka Holidays</h1>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={()=>setIsContactModalOpen(false)}/>
    </section>
  );
}
