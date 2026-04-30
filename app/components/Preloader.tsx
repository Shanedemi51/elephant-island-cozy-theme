"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

type Rect = { left: number; top: number; width: number; height: number };

function getRect(el: Element | null): Rect | null {
  if (!el) return null;
  const r = (el as HTMLElement).getBoundingClientRect();
  return { left: r.left, top: r.top, width: r.width, height: r.height };
}

export default function Preloader({
  show,
  onDone,
  mobileVideoSrc = "/video-mobile.mp4",
  desktopVideoSrc = "/video-desktop.mp4",
  logoTextTop = "ELEPHANT",
  logoTextBottom = "ISLAND",
}: {
  show: boolean;
  onDone: () => void;
  mobileVideoSrc?: string;
  desktopVideoSrc?: string;
  logoTextTop?: string;
  logoTextBottom?: string;
}) {
  const overlay = useAnimationControls();
  const logo = useAnimationControls();
  const windowAnim = useAnimationControls();

  const [navLogoRect, setNavLogoRect] = useState<Rect | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  // Measure the navbar logo position (target)
  useEffect(() => {
    if (!show) return;

    const measure = () => {
      const target = document.getElementById("nav-logo");
      setNavLogoRect(getRect(target));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [show]);

  // Prevent scroll while preloader runs
  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [show]);

  // Colors similar to the Damai preloader vibe (warm beige)
  const bg = useMemo(() => "#e9e3da", []);

  useEffect(() => {
    if (!show) return;

    let cancelled = false;

    (async () => {
      // Initial states
      await overlay.set({ opacity: 1 });
      await windowAnim.set({
        width: 320,
        height: 0,
        bottom: 0,
        left: "50%",
        x: "-50%",
        overflow: "hidden",
      });
      await logo.set({
        opacity: 1,
        scale: 1,
        x: "-50%",
        left: "50%",
        top: "50%",
        y: "-50%",
      });

      // Hold a beat (logo centered on beige)
      await new Promise((r) => setTimeout(r, 450));
      if (cancelled) return;

      // Show video and start window growth
      setShowVideo(true);

      // Stage 1: reveal window grows upward from bottom center and logo moves up simultaneously
      await Promise.all([
        windowAnim.start({
          height: "58vh",
          transition: { duration: 1.15, ease: [0.22, 1, 0.36, 1] },
        }),
        logo.start({
          top: "35%",
          y: "-50%",
          transition: { duration: 1.15, ease: [0.22, 1, 0.36, 1] },
        }),
      ]);
      if (cancelled) return;

      // Stage 2: expand window to full screen (and square corners)
      const expandPromise = windowAnim.start({
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] },
      });

      // Stage 2b: move logo into navbar logo position (top center)
      // If we can measure nav rect, animate logo to that exact spot.
      if (navLogoRect) {
        const targetCenterX = navLogoRect.left + navLogoRect.width / 2;
        const targetCenterY = navLogoRect.top + navLogoRect.height / 2;

        await logo.start({
          left: targetCenterX,
          top: targetCenterY,
          x: "-50%",
          y: "-50%",
          scale: 0.9,
          transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] },
        });
      } else {
        // fallback: move near top center
        await logo.start({
          top: 34,
          y: 0,
          scale: 0.9,
          transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] },
        });
      }

      await expandPromise;
      if (cancelled) return;

      // Fade out overlay so the real page is fully interactive
      await overlay.start({
        opacity: 0,
        transition: { duration: 0.35 },
      });

      if (cancelled) return;
      onDone();
    })();

    return () => {
      cancelled = true;
    };
  }, [show, navLogoRect, overlay, logo, windowAnim, onDone]);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-9999"
      style={{ backgroundColor: bg }}
      animate={overlay}
    >
      {/* The growing "video window" */}
      <motion.div
        className="absolute overflow-hidden"
        style={{ backgroundColor: "#000", overflow: "hidden" }}
        animate={windowAnim}
      >
        {showVideo && (
          <>
            <video
              className="h-full w-full object-cover md:hidden"
              src={mobileVideoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <video
              className="hidden h-full w-full object-cover md:block"
              src={desktopVideoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-black/20" />
          </>
        )}
      </motion.div>

      {/* Center logo (moves to navbar) */}
      <motion.div
        className="absolute text-center select-none"
        animate={logo}
        initial={{
          opacity: 1,
          scale: 1,
          x: "-50%",
          left: "50%",
          top: "50%",
          y: "-50%",
        }}
      >
        <div className="font-marcellus text-lg tracking-[0.22em] text-black/90">
          {logoTextTop} {logoTextBottom}
        </div>
      </motion.div>
    </motion.div>
  );
}
