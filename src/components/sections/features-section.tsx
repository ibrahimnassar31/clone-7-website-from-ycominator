"use client";

import Image from "next/image";

const featuresData = [
  {
    number: "1",
    title: "Create Any Society",
    description: "Use plain english to describe your target audience, or create a personal society based on your real social media interactions.",
    videoWebm: "https://societies.b-cdn.net/Artificial%20Societies%20website/%5B1%5D%20Create%20Any%20Society%20(2x%20Original%20size).webm",
    videoMp4: "https://societies.b-cdn.net/Artificial%20Societies%20website/%5B1%5D%20Create%20Any%20Society%20(2x%20Original%20size).mp4",
  },
  {
    number: "2",
    title: "Run Rapid Experiments",
    description: "Execute simulations in minutes to find the optimal form of your content or idea.",
    videoWebm: "https://societies.b-cdn.net/Artificial%20Societies%20website/%5B2%5D%20Run%20Rapid%20Experiments%20(2x%20Original%20size)_2.webm",
    videoMp4: "https://societies.b-cdn.net/Artificial%20Societies%20website/%5B2%5D%20Run%20Rapid%20Experiments%20(2x%20Original%20size)_2.mp4",
  },
  {
    number: "3",
    title: "Get Instant Insights",
    description: "Evaluate the performance of your experiment with scores, comments, and summaries.",
    videoWebm: "https://societies.b-cdn.net/Artificial%20Societies%20website/%5B3%5D%20Get%20Instant%20Insights%20(2x%20Original%20size)_3.webm",
    videoMp4: "https://societies.b-cdn.net/Artificial%20Societies%20website/%5B3%5D%20Get%20Instant%20Insights%20(2x%20Original%20size)_3.mp4",
  },
  {
    number: "4",
    title: "Forecast Every Outcome",
    description: "Artificial Societies uses your style to generate and test variations of your original post every time you run a simulation.",
    videoWebm: "https://societies.b-cdn.net/Artificial%20Societies%20website/%5B4%5D%20Forecast%20Every%20Outcome%20(2%D1%85%20Original%20size)_2.webm",
    videoMp4: "https://societies.b-cdn.net/Artificial%20Societies%20website/%5B4%5D%20Forecast%20Every%20Outcome%20(2%D1%85%20Original%20size)_2.mp4",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-background-primary py-20 lg:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-20">
        <div className="text-center mb-16 lg:mb-20">
          <p className="font-body text-base font-normal text-primary-teal mb-4">Features</p>
          <h2 className="text-section-heading font-display text-text-white">
            Explore, validate, and refine content
          </h2>
        </div>
        <div className="flex flex-col gap-20 lg:gap-[120px]">
          {featuresData.map((feature) => (
            <div key={feature.number} className="relative bg-background-secondary border border-border-gray rounded-3xl p-6 md:p-10 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686a676745a4568ba909a53d_footer%20dots.avif"
                  alt="Decorative background dots pattern"
                  fill
                  className="object-cover"
                />
                <Image
                  src="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686a6768aa59a5cd6db0b3f6_Footer%20noise.avif"
                  alt="Decorative background noise texture"
                  fill
                  className="object-cover opacity-60"
                />
              </div>
              <div className="relative z-10 flex flex-col">
                <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8">
                  <div className="flex w-full lg:w-auto items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border border-border-gray rounded-full font-display text-2xl md:text-3xl font-medium text-text-white">
                      {feature.number}
                    </div>
                    <h3 className="text-subsection-heading font-display text-text-white mt-1.5 md:mt-1">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-body text-text-gray max-w-md flex-shrink-0">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-10 rounded-2xl border border-border-gray overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={feature.videoWebm} type="video/webm" />
                    <source src={feature.videoMp4} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;