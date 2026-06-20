"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "Academics",
    desc: "A rigorous curriculum designed to challenge and inspire.",
    className: "top-[10%] left-[5%] md:left-[10%]",
    speed: 0.2,
    rotate: -2,
  },
  {
    title: "Sports",
    desc: "State-of-the-art facilities fostering teamwork and physical excellence.",
    className: "top-[30%] right-[5%] md:right-[15%]",
    speed: 0.35,
    rotate: 3,
  },
  {
    title: "Culture",
    desc: "Celebrating diversity and heritage through vibrant arts and events.",
    className: "top-[55%] left-[10%] md:left-[20%]",
    speed: 0.15,
    rotate: -4,
  },
  {
    title: "Leadership",
    desc: "Empowering students to become the visionaries of tomorrow.",
    className: "top-[75%] right-[10%] md:right-[25%]",
    speed: 0.4,
    rotate: 2,
  },
];

export function CampusShowcase() {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={container} className="relative h-[150vh] w-full overflow-hidden bg-charcoal">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]) }}
          className="absolute inset-0 h-[120%] -top-[10%] w-full"
        >
          <Image
            src="/images/school2.jpg"
            alt="Campus Showcase"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-charcoal/40" />
        </motion.div>

        {/* Center Title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="font-serif text-5xl md:text-8xl text-ivory opacity-30 text-center tracking-widest">
            VIBRANT<br />CAMPUS
          </h2>
        </div>

        {/* Layered Parallax Cards */}
        <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto">
          {cards.map((card, idx) => {
            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [`${100 * card.speed}vh`, `-${100 * card.speed}vh`]
            );

            return (
              <motion.div
                key={card.title}
                style={{ y, rotate: card.rotate }}
                className={`absolute w-64 md:w-80 rounded-2xl bg-ivory/10 backdrop-blur-md border border-ivory/20 p-8 text-ivory shadow-2xl ${card.className}`}
              >
                <div className="mb-4 h-1 w-12 bg-brick rounded-full" />
                <h3 className="font-serif text-2xl md:text-3xl mb-3">{card.title}</h3>
                <p className="font-sans text-sm md:text-base text-ivory/80 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
