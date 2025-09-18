import React from 'react';

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
  return (
    <section className="bg-background-primary py-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="font-display text-[64px] font-medium leading-[1.1] text-text-white">
                {stat.value}
              </h2>
              <p className="mt-2 font-body text-base text-text-gray">
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