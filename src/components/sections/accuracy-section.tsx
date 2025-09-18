import Image from "next/image";

const chartData = [
  {
    name: "Artificial Societies",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686b617c87270569bd0e4406_Brand-19.svg?",
    value: 82,
    isWinner: true,
  },
  {
    name: "Claude 3.7 Sonnet",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686b64ea5a81cc66e66fe1f9_claude-20.svg?",
    value: 64,
    isWinner: false,
  },
  {
    name: "Gemini 1.5 pro",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686b64ea055df95b7654c17d_gemini-21.svg?",
    value: 63,
    isWinner: false,
  },
  {
    name: "GPT-4o",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686b64ea3228e04108ab7adb_chatgpt-22.svg?",
    value: 62,
    isWinner: false,
  },
  {
    name: "GPT-3.5 Turbo",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4782f6f3-0345-4847-b260-791b62385ede-societies-io/assets/svgs/686b64ea3228e04108ab7adb_chatgpt-22.svg?",
    value: 61,
    isWinner: false,
  },
];

const AccuracySection = () => {
  return (
    <section id="accuracy" className="relative bg-background-primary py-[120px] overflow-hidden">
      <Image
        src="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686b5f4d67b6c78e6f7c8995_chart%20tl.avif"
        alt=""
        width={344}
        height={344}
        className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 z-0 pointer-events-none opacity-50"
        unoptimized
      />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-[20%] w-[600px] h-auto z-0 pointer-events-none lg:block hidden">
        <Image
          src="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686b68588b03dcd15d4354ba_dfa9221e68eae22587c0ef24650db8e5_Container.avif"
          alt="3D geometric shapes"
          width={683}
          height={683}
          className="w-full h-full"
          unoptimized
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-[615px]">
          <h2 className="text-section-heading text-text-white font-medium">
            Artificial Societies is{' '}
            <strong className="font-medium text-primary-teal">30%</strong> more
            accurate at predicting engagement than standard LLMs.
          </h2>
          <p className="mt-6 text-body text-text-gray">
            Success rate at picking winners from pairs of LinkedIn posts
          </p>
        </div>

        <div
          className="mt-12 p-10 border border-border-gray rounded-3xl max-w-3xl bg-cover bg-center"
          style={{
            backgroundImage: "url('https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/686b63ebc4a5891bbc89f7e3_Chart%20Background.avif')",
          }}
        >
          <div className="space-y-4">
            {chartData.map((item) => (
              <div key={item.name} className="grid grid-cols-[1fr_auto] items-center gap-4">
                <div className="relative h-12 rounded-lg bg-chart-background">
                  <div
                    className="absolute top-0 left-0 h-full rounded-lg"
                    style={{
                      width: `${item.value}%`,
                      background: item.isWinner
                        ? 'linear-gradient(to right, #e4e4e4, #fff)'
                        : '#3f3f3f',
                    }}
                  />
                  <div className="absolute inset-0 flex items-center px-4 gap-3 z-10">
                    <Image
                      src={item.logo}
                      alt={`${item.name} logo`}
                      width={20}
                      height={20}
                      className={item.isWinner ? 'brightness-0' : ''}
                      unoptimized
                    />
                    <p className={`text-base font-medium ${item.isWinner ? 'text-black' : 'text-white'}`}>
                      {item.name}
                    </p>
                  </div>
                </div>
                <span className="w-12 text-right text-base font-medium text-white">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 max-w-[615px]">
          <p className="text-body text-text-gray">
            By using real data to model individuals and their interactions,
            Artificial Societies can predict social outcomes at far greater
            accuracy than standard LLMs.
          </p>
          <a
            href="https://cdn.prod.website-files.com/686a45da3b2db2c31950e0a5/687e337f4bccb337e867a32c_Artificial%20Societies%20Evaluation.pdf"
            className="inline-block mt-4 text-primary-teal hover:underline font-medium text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Full Report
          </a>
        </div>
      </div>
    </section>
  );
};

export default AccuracySection;