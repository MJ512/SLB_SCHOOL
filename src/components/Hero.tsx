"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!container.current || !imageContainer.current || !image.current) return;

    let ctx = gsap.context(() => {
      // Cinematic zoom on load
      gsap.fromTo(
        image.current,
        { scale: 1.2 },
        { scale: 1.05, duration: 4, ease: "power2.out" }
      );

      // Parallax effect on scroll
      gsap.to(imageContainer.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* Background Image */}
      <div ref={imageContainer} className="absolute inset-0 h-[120%] -top-[10%] w-full">
        <Image
          ref={image as any}
          src="/images/school3.jpg"
          alt="SLB School Campus"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-ivory">
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="font-serif text-6xl tracking-wider md:text-8xl lg:text-9xl font-semibold"
          >
            SETHU
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="font-serif text-6xl tracking-wider md:text-8xl lg:text-9xl font-semibold"
          >
            LAKSHMI BAYI
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 flex flex-col items-center gap-4"
        >
          <p className="font-sans text-lg tracking-widest uppercase text-ivory/80 md:text-xl">
            Government Higher Secondary School
          </p>
          <p className="font-sans text-sm tracking-widest text-ivory/60">
            Nagercoil, Tamil Nadu
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <p className="font-serif italic text-lg md:text-xl max-w-md text-center text-ivory/90">
            "Nearly a century of learning, heritage and excellence."
          </p>
          <div className="h-16 w-[1px] bg-gradient-to-b from-ivory/80 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
