import Image from 'next/image';

const YCombinatorLogo = () => (
  <div className="flex shrink-0 items-center justify-center rounded-sm bg-[#FF6347] w-6 h-6">
    <span className="text-lg font-bold leading-none text-white">Y</span>
  </div>
);

const HeroSection = () => {
  return (
    <section id="home" className="bg-background-primary pt-40 pb-20 md:pb-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10 md:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <h1 className="text-hero-heading font-medium leading-tight text-text-white">
              Test Websites
              <br />
              in Artificial Societies
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-body text-text-gray lg:mx-0">
              Artificial Societies are collectives of AI personas that allow you to run experiments in minutes, not months.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="https://app.societies.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-lg bg-primary py-3 px-7 text-center font-medium text-primary-foreground text-button transition-colors hover:bg-gray-200 sm:w-auto"
              >
                Try Free
              </a>
              <a
                href="#features"
                className="inline-block w-full rounded-lg border border-border-gray py-3 px-7 text-center font-medium text-text-white text-button transition-colors hover:bg-secondary sm:w-auto"
              >
                Explore Features
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-3 lg:justify-start">
              <p className="text-small text-text-white">Backed by</p>
              <YCombinatorLogo />
            </div>
          </div>

          {/* Right Column */}
          <div className="relative h-full w-full min-h-[300px] md:min-h-[500px]">
            <Image
              src="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686a8cedb53ea4e1a50c4f74_hero-illustration.avif"
              alt="3D geometric shapes including spheres, cubes, and cylinders in blue, teal, orange, and purple"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;