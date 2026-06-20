"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${window.innerHeight * 2}`,
          pin: true,
          scrub: 1,
        }
      });

      const textElements = gsap.utils.toArray(".text-block") as HTMLElement[];
      
      textElements.forEach((el, index) => {
        // Animate in (overlap with previous animation out, if not first)
        tl.fromTo(
          el, 
          { opacity: 0, y: 50 }, 
          { opacity: 1, y: 0, duration: 1 }, 
          index === 0 ? undefined : "-=0.5"
        );
        
        // Hold slightly longer for readability
        tl.to(el, { opacity: 1, duration: 1 });

        // Animate out (unless last)
        if (index !== textElements.length - 1) {
          tl.to(el, { opacity: 0, y: -50, duration: 1 });
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
      <div
        ref={textContainerRef}
        className="relative z-10 flex w-full flex-col items-center justify-center lg:w-1/2"
      >
        <div className="relative h-full w-full max-w-xl">
          {blocks.map((block, index) => (
            <div
              key={block.title}
              className="text-block absolute inset-0 flex flex-col justify-center px-8 text-ivory opacity-0"
              style={{ pointerEvents: 'none' }}
            >
              <h3 className="font-serif text-5xl md:text-7xl mb-6 text-brick">{block.title}</h3>
              <p className="font-sans text-xl md:text-2xl leading-relaxed text-ivory/80">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
