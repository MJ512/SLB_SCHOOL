"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

function Counter({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-10%" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const node = nodeRef.current;
      if (node) {
        animate(from, to, {
          duration,
          ease: "easeOut",
          onUpdate(value) {
            node.textContent = Math.round(value).toString() + suffix;
          },
        });
      }
    }
  }, [from, to, duration, suffix, isInView, hasAnimated]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

export function ImpactSection() {
  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true, margin: "-20%" });

  return (
    <section ref={container} className="py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <h3 className="font-serif text-7xl md:text-8xl text-brick">
              <Counter from={0} to={100} suffix="+" />
            </h3>
            <p className="font-sans text-xl text-charcoal/80 uppercase tracking-widest">
              Years of Heritage
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <h3 className="font-serif text-7xl md:text-8xl text-brick">
              <Counter from={0} to={1000} suffix="+" />
            </h3>
            <p className="font-sans text-xl text-charcoal/80 uppercase tracking-widest">
              Students Currently
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <h3 className="font-serif text-7xl md:text-8xl text-brick">
              ∞
            </h3>
            <p className="font-sans text-xl text-charcoal/80 uppercase tracking-widest">
              Generations of Graduates
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
