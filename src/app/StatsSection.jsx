'use client';
const StatsSection = () => {
  const stats = [
    {
      number: "3+",
      label: "Years",
      description: "Working With Passion"
    },
    {
      number: "40+",
      label: "Clients",
      description: "Worked with Us"
    },
    {
      number: "120+",
      label: "Projects",
      description: "We Have Completed"
    },
    {
      number: "96%",
      label: "Brands",
      description: "brands satisfied with our on-time, high-quality results"
    }
  ]

  return (
    <section className="w-full bg-[#1b1e22]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 lg:py-[32px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {stats?.map((stat, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
                  <div className="flex items-end gap-2 lg:gap-[8px] mb-2 lg:mb-[0px]">
                    <span 
                      className="text-[28px] lg:text-[40px] font-semibold leading-tight lg:leading-[60px] capitalize text-[#d9d9d9]"
                      style={{ fontFamily: 'Oswald' }}
                    >
                      {stat?.number}
                    </span>
                    <span 
                      className="text-[16px] lg:text-[22px] font-normal lg:font-medium leading-tight lg:leading-[33px] capitalize text-[#d9d9d9] mb-1 lg:mb-[2px]"
                      style={{ fontFamily: 'Oswald' }}
                    >
                      {stat?.label}
                    </span>
                  </div>
                  <p 
                    className="text-base font-normal leading-tight lg:leading-[20px] capitalize text-[#cccccc] max-w-[200px] lg:max-w-none"
                    style={{ fontFamily: 'Lato' }}
                  >
                    {stat?.description}
                  </p>
                </div>
                
                {/* Vertical Line Separator - Hidden on mobile, shown on lg+ */}
                {index < stats?.length - 1 && (
                  <div className="hidden lg:block w-[2px] h-[74px] bg-[#ffffff19] ml-8 self-center"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection