import Image from "next/image";

const ViralChartAnimation = () => {
  const keyframes = `
    @keyframes draw { 
      to { stroke-dashoffset: 0; } 
    }
    @keyframes fadeIn { 
      to { opacity: 1; } 
    }
    @keyframes pulse { 
      0%, 100% { transform: scale(1); opacity: 0.3; } 
      50% { transform: scale(1.5); opacity: 0.15; } 
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1032 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient
            id="line-gradient"
            x1="994"
            y1="112"
            x2="38"
            y2="412"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#40E0D0" />
            <stop offset="1" stopColor="#4169E1" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M 38 482 C 200 482, 450 300, 850 310"
          stroke="#333333"
          strokeWidth="2"
          pathLength="1"
          className="[stroke-dasharray:1] [stroke-dashoffset:1] animate-[draw_2s_ease-out_0.5s_forwards]"
        />
        <path
          d="M 38 412 C 218 412, 418 92, 994 112"
          stroke="url(#line-gradient)"
          strokeWidth="3"
          pathLength="1"
          filter="url(#glow)"
          className="[stroke-dasharray:1] [stroke-dashoffset:1] animate-[draw_2s_ease-out_0.5s_forwards]"
        />
        <g className="opacity-0 animate-[fadeIn_0.5s_ease-in_2.5s_forwards]">
          <circle
            cx="994"
            cy="112"
            r="12"
            fill="#40E0D0"
            className="animate-[pulse_2s_infinite_2.5s]"
          />
          <circle cx="994" cy="112" r="6" fill="#40E0D0" />
        </g>
      </svg>
    </>
  );
};

const ViralContentSection = () => {
  return (
    <section className="bg-background-primary py-[120px]">
      <div className="max-w-[1200px] mx-auto px-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-5xl font-medium leading-[1.2] text-text-white">
            Imagine seeing your content go viral before you launch it
          </h2>
        </div>
        <div className="relative rounded-3xl border border-border-gray overflow-hidden bg-background-secondary shadow-2xl">
          <Image
            src="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/687615775142ecfb0a692e11_showreel-bg.avif"
            alt="Abstract background with blue and purple circular gradient"
            fill
            objectFit="cover"
            quality={100}
            unoptimized
          />
          <Image
            src="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/68761577ab44427b097ba3cb_showreel-bg2.avif"
            alt="Noise texture overlay"
            fill
            objectFit="cover"
            className="opacity-20"
            quality={100}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/50" />
          <div className="relative min-h-[520px]">
            <ViralChartAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViralContentSection;