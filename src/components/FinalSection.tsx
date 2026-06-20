"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function FinalSection() {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const y1 = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 1], [100, 0]);

  return (
    <section ref={container} className="relative flex h-screen w-full items-center justify-center bg-charcoal overflow-hidden">
      {/* Fading Background Image */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0 z-0 h-full w-full"
      >
        <Image
          src="/images/school3.jpg"
          alt="School Legacy"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60 mix-blend-multiply" />
      </motion.div>

      {/* Massive Typography */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <div className="overflow-hidden">
          <motion.h2
            style={{ y: y1 }}
            className="font-serif text-[10vw] leading-none text-ivory md:text-[8vw] lg:text-[120px]"
          >
            FROM HERITAGE
          </motion.h2>
        </div>
        <div className="overflow-hidden mt-4">
          <motion.h2
            style={{ y: y2 }}
            className="font-serif text-[10vw] leading-none text-brick italic md:text-[8vw] lg:text-[120px]"
          >
            TO THE FUTURE
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
