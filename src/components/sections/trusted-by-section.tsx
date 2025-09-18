"use client";

import React from 'react';
import Image from 'next/image';

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

const LogoSet = () => (
  <div className="flex flex-shrink-0 items-center gap-x-12 px-6">
    {logos.map((logo) => (
      <div key={logo.name} className="flex h-[100px] w-[178px] flex-col items-center justify-center gap-5">
        <div className="flex h-[28px] items-center justify-center">
          <Image
            src={logo.src}
            alt={`${logo.name} logo`}
            width={logo.width}
            height={logo.height}
            className="h-full w-auto object-contain brightness-0 invert"
          />
        </div>
        <p className="text-center text-sm text-text-gray">{logo.name}</p>
      </div>
    ))}
  </div>
);

const TrustedBySection = () => {
    return (
        <section className="bg-background-primary py-20 md:py-32">
            <div className="container mx-auto px-5 md:px-20">
                <h2 className="text-2xl font-medium leading-tight text-text-white text-center md:text-[32px] mb-12">
                    Trusted by marketers and creators associated with
                </h2>
            </div>
            <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                }}
            >
                <div className="will-change-transform flex animate-marquee-slow hover:[animation-play-state:paused]">
                    <LogoSet />
                    <LogoSet />
                </div>
            </div>
        </section>
    );
};

export default TrustedBySection;