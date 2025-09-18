import React from 'react';

type UseCase = {
  category: string;
  title: string;
  description: string;
  colorClass: string;
};

const useCasesData: UseCase[] = [
  {
    category: 'PR & Comms',
    title: 'Craft Narratives',
    description: 'Test different communication strategies to deliver the right reaction',
    colorClass: 'text-primary-teal',
  },
  {
    category: 'Product',
    title: 'Decide Features',
    description: 'Test how your target customers react to product ideas and new features',
    colorClass: 'text-primary-blue',
  },
  {
    category: 'Branding',
    title: 'Stand Out',
    description: 'Test how different brand and voice ideas resonate with your ideal buyer.',
    colorClass: 'text-primary-purple',
  },
  {
    category: 'Marketing',
    title: 'Generate Leads',
    description: 'Test marketing content in a simulation of your target customers',
    colorClass: 'text-primary-orange',
  },
  {
    category: 'Social Media',
    title: 'Make Content',
    description: 'Test social content in simulations of your network and audience',
    colorClass: 'text-accent-orange',
  },
  {
    category: 'Journalism',
    title: 'Capture Attention',
    description: 'Test headlines, thumbnails, and article content to maximise reader attention',
    colorClass: 'text-primary-blue', // Re-using for visual balance
  },
];

const UseCaseCard: React.FC<UseCase> = ({ category, title, description, colorClass }) => (
  <div className="bg-background-secondary border border-border-gray rounded-2xl p-10 flex flex-col h-full">
    <p className={`font-medium text-base ${colorClass}`}>{category}</p>
    <h3 className="text-[32px] font-medium text-text-white mt-4">{title}</h3>
    <p className="text-text-gray text-base mt-2">{description}</p>
  </div>
);

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="bg-background-primary py-[120px]">
      <div className="max-w-[1200px] mx-auto px-20">
        <div className="text-center mb-16">
          <p className="text-base text-text-gray mb-4">Use Cases</p>
          <h2 className="text-[48px] font-medium leading-[1.2] text-text-white">
            Optimize any kind of message
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCasesData.map((useCase) => (
            <UseCaseCard
              key={useCase.title}
              category={useCase.category}
              title={useCase.title}
              description={useCase.description}
              colorClass={useCase.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;