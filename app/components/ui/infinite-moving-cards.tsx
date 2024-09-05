"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const images = [
    "images/memberships/argus-logo.png",
    "images/memberships/easa-logo.png",
    "images/memberships/eurami-logo.png",
    "images/memberships/IAG-logo.png",
    "images/memberships/MEBAA-logo.png",
    "images/memberships/NBAA-logo.png",
  ];

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  overflow-hidden bg-white bg-opacity-0 [mask-image:linear-gradient(to_right,transparent,white_2%,white_98%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex  shrink-0 gap-10  flex-nowrap ",
          start && "animate-scroll ",
        )}
      >
        {images.map((image, idx) => (
          <li
            className="w-[210px] h-full relative flex-shrink-0 "
            style={
              {
                //   background:
                // "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
              }
            }
            key={idx}
          >
            <blockquote>
              <img src={image} alt={`Image ${idx + 1}`} />
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
