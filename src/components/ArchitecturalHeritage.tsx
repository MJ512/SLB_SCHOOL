"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const blocks = [
  {
    title: "Heritage",
    description: "Built on a foundation of timeless architectural beauty, preserving the echoes of generations past.",
  },
  {
    title: "Identity",
    description: "A symbol of prestige and educational excellence in Nagercoil, shaping the minds of the future.",
  },
  {
    title: "Community",
    description: "More than just walls—a thriving ecosystem where diverse minds meet, learn, and grow together.",
  },
  {
    title: "Legacy",
    description: "Enduring through the decades, leaving an indelible mark on the educational landscape of Tamil Nadu.",
  },
];

export function ArchitecturalHeritage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${window.innerHeight * blocks.length}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          // self.progress goes from 0 to 1
          // We divide the progress evenly among the blocks
          const progress = self.progress;
          const index = Math.min(
            blocks.length - 1,
            Math.floor(progress * blocks.length)
          );
          
          setActiveIndex((prev) => {
            if (prev !== index) {
              console.log(`Scroll progress: ${progress.toFixed(2)}, Active Index: ${index}`);
            }
            return index;
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative flex h-screen w-full bg-charcoal overflow-hidden">
      {/* Pinned Image on Left */}
      <div className="relative hidden w-1/2 lg:block">
        <Image
          src="/images/school1.jpg"
          alt="Architectural Heritage"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal" />
      </div>

      {/* Background Image for Mobile */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image
          src="/images/school1.jpg"
          alt="Architectural Heritage"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      {/* Scrolling Text on Right */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center lg:w-1/2">
        <div className="relative h-full w-full max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col justify-center px-8 text-ivory"
            >
              <h3 className="font-serif text-5xl md:text-7xl mb-6 text-brick">{blocks[activeIndex].title}</h3>
              <p className="font-sans text-xl md:text-2xl leading-relaxed text-ivory/80">
                {blocks[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
