'use client';

const StatsSection = () => {
  const stats = [
    { number: '3+', label: 'Years', description: 'Working With Passion' },
    { number: '40+', label: 'Clients', description: 'Worked With Us' },
    { number: '120+', label: 'Projects', description: 'We Have Completed' },
    { number: '96%', label: 'Brands', description: 'Satisfied With Us' },
  ];

  return (
    <section className="w-full bg-[#1b1e22] py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#d9d9d9]"
                style={{ fontFamily: 'Oswald' }}
              >
                {stat.number}
              </span>
              <span
                className="text-lg sm:text-xl font-medium text-[#d9d9d9]"
                style={{ fontFamily: 'Oswald' }}
              >
                {stat.label}
              </span>
              <p
                className="text-sm text-[#cccccc] mt-1 max-w-[150px]"
                style={{ fontFamily: 'Lato' }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
