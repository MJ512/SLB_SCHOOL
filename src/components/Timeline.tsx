"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "1920s",
    title: "The Genesis",
    description: "Founded with a vision to bring quality education to Nagercoil, establishing a tradition of excellence.",
  },
  {
    year: "1950s",
    title: "Post-Independence Growth",
    description: "Expanding campus and curriculum, adapting to the needs of a newly independent nation.",
  },
  {
    year: "1980s",
    title: "Modernization",
    description: "Introducing advanced science labs and sports facilities, fostering holistic student development.",
  },
  {
    year: "2000s",
    title: "Digital Era",
    description: "Embracing technology in classrooms and achieving state-level academic accolades.",
  },
  {
    year: "Today",
    title: "A Century of Legacy",
    description: "Continuing to be a beacon of knowledge, empowering the next generation of leaders.",
  },
];

export function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !scrollContainerRef.current) return;

    let ctx = gsap.context(() => {
      const scrollWidth = scrollContainerRef.current!.scrollWidth;
      const windowWidth = window.innerWidth;

      gsap.to(scrollContainerRef.current, {
        x: -(scrollWidth - windowWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full bg-ivory overflow-hidden">
      <div className="absolute top-12 left-12 lg:top-24 lg:left-24 z-10">
        <h2 className="font-serif text-3xl md:text-5xl text-charcoal">Through the Decades</h2>
        <div className="mt-4 h-[2px] w-24 bg-brick" />
      </div>

      <div
        ref={scrollContainerRef}
        className="flex h-full w-max items-center px-[20vw]"
      >
        {timelineData.map((item, index) => (
          <div
            key={item.year}
            className="flex h-[60vh] w-[80vw] md:w-[50vw] lg:w-[40vw] flex-col justify-center px-8 lg:px-16 border-l border-charcoal/20 relative"
          >
            {/* Timeline Line indicator */}
            <div className="absolute -left-[5px] top-1/2 h-2 w-2 rounded-full bg-brick transform -translate-y-1/2" />
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-charcoal/10 transform -translate-y-1/2 -z-10" />

            <h3 className="font-serif text-[80px] md:text-[120px] lg:text-[160px] leading-none text-brick opacity-20 -mb-6 md:-mb-10 pointer-events-none">
              {item.year}
            </h3>
            <div className="pl-4 md:pl-8 border-l-4 border-brick mt-8">
              <h4 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
                {item.title}
              </h4>
              <p className="font-sans text-lg md:text-xl text-charcoal/70 max-w-md">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
