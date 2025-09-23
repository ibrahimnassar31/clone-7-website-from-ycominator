"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  {
    value: '1,000,000+',
    label: 'Persona Database',
  },
  {
    value: '100,000+',
    label: 'Simulations Run',
  },
  {
    value: '15,000+',
    label: 'Platform Users',
  },
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);
  const valueRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const labelRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
    tl.from(valueRefs.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power4.out',
    })
      .from(labelRefs.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      }, '-=0.4');


    gsap.to(sectionRef.current, {
      backgroundPositionY: '20px',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-background-primary py-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              ref={(el) => { statRefs.current[index] = el; }}
              className="flex flex-col items-center"
              onMouseEnter={() => {
                gsap.to(valueRefs.current[index], {
                  scale: 1.1,
                  filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))',
                  duration: 0.3,
                  ease: 'power2.out',
                });
                gsap.to(labelRefs.current[index], {
                  color: '#ffffff',
                  borderBottom: '2px solid #ffffff',
                  duration: 0.3,
                  ease: 'power2.out',
                });
              }}
              onMouseLeave={() => {
                gsap.to(valueRefs.current[index], {
                  scale: 1,
                  filter: 'none',
                  duration: 0.3,
                  ease: 'power2.out',
                });
                gsap.to(labelRefs.current[index], {
                  color: '#9ca3af',
                  borderBottom: 'none',
                  duration: 0.3,
                  ease: 'power2.out',
                });
              }}
            >
              <h2
                ref={(el) => { valueRefs.current[index] = el; }}
                className="font-display text-[64px] font-medium leading-[1.1] text-text-white"
              >
                {stat.value}
              </h2>
              <p
                ref={(el) => { labelRefs.current[index] = el; }}
                className="mt-2 font-body text-base text-text-gray"
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;