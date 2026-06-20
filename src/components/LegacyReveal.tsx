"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

export function LegacyReveal() {
  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true, margin: "-20%" });

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: i * 0.3,
      },
    }),
  };

  return (
    <section
      ref={container}
      className="relative flex min-h-screen items-center justify-center bg-ivory py-24 px-6 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
        {/* Left Side: Large Year */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-serif text-[120px] leading-none tracking-tighter text-brick md:text-[200px] lg:text-[280px]"
          >
            1920s
          </motion.h2>
        </div>

        {/* Right Side: Animated Text */}
        <div className="flex flex-1 flex-col justify-center gap-10">
          <motion.div
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="border-l-2 border-brick/30 pl-8"
          >
            <p className="font-serif text-3xl md:text-5xl text-charcoal">
              Born in an era of transformation.
            </p>
          </motion.div>

          <motion.div
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="border-l-2 border-brick/30 pl-8 ml-4 lg:ml-12"
          >
            <p className="font-serif text-3xl md:text-5xl text-charcoal/80">
              As generations changed, the school remained.
            </p>
          </motion.div>

          <motion.div
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="border-l-2 border-brick/30 pl-8 ml-8 lg:ml-24"
          >
            <p className="font-serif text-3xl md:text-5xl text-brick italic">
              The story continues.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
