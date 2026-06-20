"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function QuoteSection() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!container.current || !textRef.current) return;

    let ctx = gsap.context(() => {
      const words = textRef.current!.querySelectorAll(".word");

      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        anticipatePin: 1,
        animation: gsap.to(words, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power2.out",
        }),
        scrub: 0.5,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const quote = "Education is not merely preparation for life. Education is life itself.";
  const words = quote.split(" ");

  return (
    <section ref={container} className="flex h-screen w-full items-center justify-center bg-brick px-6 text-center">
      <div className="max-w-6xl">
        <h2 
          ref={textRef} 
          className="font-serif text-5xl md:text-7xl lg:text-9xl leading-tight text-ivory flex flex-wrap justify-center gap-x-4 gap-y-2 lg:gap-x-8 lg:gap-y-6"
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="word inline-block opacity-10 translate-y-8"
            >
              {word}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
