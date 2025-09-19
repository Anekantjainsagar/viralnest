'use client';
const StatsSection = () => {
  const stats = [
    {
      number: '3+',
      label: 'Years',
      description: 'Working With Passion',
    },
    {
      number: '40+',
      label: 'Clients',
      description: 'Worked With Us',
    },
    {
      number: '120+',
      label: 'Projects',
      description: 'We Have Completed',
    },
    {
      number: '96%',
      label: 'Brands',
      description: 'Brands Satisfied With Our On-Time, High-Quality Results',
    },
  ];

  return (
    <section className="w-full bg-[#1b1e22]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 lg:py-[32px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">
            {stats?.map((stat, index) => (
              <div key={index} className="flex items-center justify-center relative">
                {/* Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="flex items-baseline gap-2 lg:gap-[8px]">
                    <span
                      className="text-[28px] lg:text-[40px] font-semibold leading-tight capitalize text-[#d9d9d9]"
                      style={{ fontFamily: 'Oswald' }}
                    >
                      {stat?.number}
                    </span>
                    <span
                      className="text-[16px] lg:text-[22px] font-medium leading-tight capitalize text-[#d9d9d9]"
                      style={{ fontFamily: 'Oswald' }}
                    >
                      {stat?.label}
                    </span>
                  </div>
                  <p
                    className="text-sm lg:text-base font-normal leading-tight text-[#cccccc] max-w-[220px] lg:max-w-none mt-3.5"
                    style={{ fontFamily: 'Lato' }}
                  >
                    {stat?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
