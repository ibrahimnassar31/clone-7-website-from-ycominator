"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { name: 'Runway', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e60c19c7a56a406950f65_ranway_logo-2.svg?', width: 104, height: 26 },
  { name: 'Toward Data Science', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e60c13ab84a06e87e6943_towards_logo-3.svg?', width: 177, height: 25 },
  { name: 'Boardy.ai', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/images/686e60c2b5d69a99415ef85b_boardy_ai_logo-1.avif?', width: 120, height: 24 },
  { name: 'Lovable', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e60c16ee5fc7f4d955e7e_lavable_logo-4.svg?', width: 111, height: 26 },
  { name: '11x.ai', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e60c283b8f5cf570c456d_11x_logo-5.svg?', width: 73, height: 26 },
  { name: 'Weave', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e60c28ad64f8d5170a5f9_weave_logo-6.svg?', width: 95, height: 24 },
  { name: 'Pulsar', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e60c1daf9394fc96d36df_pulsar_logo-7.svg?', width: 94, height: 26 },
  { name: 'Remade', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e60c2ba45d34d54130744_remade_logo-8.svg?', width: 104, height: 23 },
  { name: 'SEO monitor', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e60c187bc0cb6c0c024b6_seo_monitor_logo-9.svg?', width: 147, height: 26 },
  { name: 'The Agentic', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e60c1ba45d34d541306e3_agentic_logo-10.svg?', width: 142, height: 28 },
  { name: 'Dex', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e60c131cf1a1d230e9cd0_dex_logo-11.svg?', width: 73, height: 26 },
  { name: 'Rokt', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e60c1c56c2ead5d84ce11_rokt_logo-12.svg?', width: 71, height: 27 },
  { name: 'Mastra', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e60c2e5d09901cc575ca0_mastra_logo-13.svg?', width: 106, height: 26 },
  { name: 'Platformed', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e60c23ef8788fbb491d77_platformed_logo-14.svg?', width: 129, height: 24 },
  { name: 'Leena AI', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e60c21b5e5d1e1f50dfd0_leena_ai_logo-15.svg?', width: 106, height: 26 },
  { name: 'ZenCheck', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e60c207378b7db525aef1_zencheck_ai_logo-16.svg?', width: 127, height: 25 },
  { name: 'CoLoop', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e60c23c09a14b834a4c25_coloop_logo-17.svg?', width: 103, height: 26 },
  { name: 'Valyu', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686e60c2ed233feb01dd29df_value_logo-18.svg?', width: 84, height: 26 },
];

const LogoSet = ({ logoRefs, labelRefs }: { logoRefs: React.MutableRefObject<(HTMLDivElement | null)[]>; labelRefs: React.MutableRefObject<(HTMLParagraphElement | null)[]> }) => (
  <div className="flex flex-shrink-0 items-center gap-x-12 px-6">
    {logos.map((logo, index) => (
      <div
        key={logo.name}
        ref={(el) => { logoRefs.current[index] = el; }}
        className="flex h-[100px] w-[178px] flex-col items-center justify-center gap-5"
      >
        <div className="flex h-[28px] items-center justify-center">
          <Image
            src={logo.src}
            alt={`${logo.name} logo`}
            width={logo.width}
            height={logo.height}
            className="h-full w-auto object-contain brightness-0 invert"
          />
        </div>
        <p
          ref={(el) => { labelRefs.current[index] = el; }}
          className="text-center text-sm text-text-gray"
        >
          {logo.name}
        </p>
      </div>
    ))}
  </div>
);

const TrustedBySection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const labelRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headingWords = headingRef.current!.querySelectorAll('.word');
    gsap.from(headingWords, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    const marqueeElement = marqueeRef.current!;
    const logoSets = marqueeElement.children;
    const marqueeTween = gsap.to(logoSets, {
      xPercent: -100,
      duration: 20,
      repeat: -1,
      ease: 'linear',
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0), 
      },
    });

    const handleMarqueeEnter = () => {
      gsap.to(marqueeTween, {
        timeScale: 0.25,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto',
      });
      gsap.to(logoRefs.current, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out',
        stagger: 0.05,
      });
    };

    const handleMarqueeLeave = () => {
      gsap.to(marqueeTween, {
        timeScale: 1,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto',
      });
      gsap.to(logoRefs.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    marqueeElement.addEventListener('mouseenter', handleMarqueeEnter);
    marqueeElement.addEventListener('mouseleave', handleMarqueeLeave);

    gsap.from(logoRefs.current, {
      x: (i) => (i % 2 === 0 ? -100 : 100),
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
    gsap.from(labelRefs.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });

    logoRefs.current.forEach((logo, index) => {
      if (logo) {
        logo.addEventListener('mouseenter', () => {
        gsap.to(logo, {
          scale: 1.2,
          filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))',
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(labelRefs.current[index], {
          color: '#ffffff',
          letterSpacing: '1px',
          duration: 0.3,
          ease: 'power2.out',
        });
        const neighbors = logoRefs.current.filter((_, i) => Math.abs(i - index) === 1);
        gsap.to(neighbors, {
          opacity: 0.7,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
      logo.addEventListener('mouseleave', () => {
        gsap.to(logo, {
          scale: 1,
          filter: 'none',
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(labelRefs.current[index], {
          color: '#9ca3af',
          letterSpacing: '0px',
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(logoRefs.current, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
      }
    });

    gsap.to(sectionRef.current, {
      backgroundPositionY: '50px',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      marqueeTween.kill();
      if (marqueeElement) {
        marqueeElement.removeEventListener('mouseenter', handleMarqueeEnter);
        marqueeElement.removeEventListener('mouseleave', handleMarqueeLeave);
      }
      logoRefs.current.forEach((logo) => {
        if (logo) {
         
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-background-primary py-20 md:py-32">
      <div className="container mx-auto px-5 md:px-20">
        <h2
          ref={headingRef}
          className="text-2xl font-medium leading-tight text-text-white text-center md:text-[32px] mb-12"
        >
          <span className="word inline-block">Trusted</span>{' '}
          <span className="word inline-block">by</span>{' '}
          <span className="word inline-block">marketers</span>{' '}
          <span className="word inline-block">and</span>{' '}
          <span className="word inline-block">creators</span>{' '}
          <span className="word inline-block">associated</span>{' '}
          <span className="word inline-block">with</span>
        </h2>
      </div>
      <div
        ref={marqueeRef}
        className="relative flex overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="flex will-change-transform">
          <LogoSet logoRefs={logoRefs} labelRefs={labelRefs} />
          <LogoSet logoRefs={logoRefs} labelRefs={labelRefs} />
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;