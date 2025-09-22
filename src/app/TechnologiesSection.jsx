'use client';
import { useEffect, useState } from 'react';

const TechnologiesSection = () => {
  const technologies = [
    { src: '/images/companies/1.png' },
    { src: '/images/companies/2.jpg' },
    { src: '/images/companies/3.png' },
    { src: '/images/companies/4.jpg' },
  ];

  const itemsPerView = 3; // show 3 items at a time
  const [currentIndex, setCurrentIndex] = useState(itemsPerView);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Clone list for infinite scroll
  const clonedList = [
    ...technologies.slice(-itemsPerView),
    ...technologies,
    ...technologies.slice(0, itemsPerView),
  ];

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Reset transition when hitting cloned edges
  useEffect(() => {
    if (currentIndex === clonedList.length - itemsPerView) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(itemsPerView);
      }, 700);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(clonedList.length - 2 * itemsPerView);
      }, 700);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, clonedList.length]);

  return (
    <section className="w-full bg-[#1b1e22] py-16 lg:py-[120px] mt-4 lg:mt-[216px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-[18px] lg:text-[22px] font-medium leading-tight lg:leading-[35px] text-center capitalize text-[#d9d9d9] mb-12 lg:mb-[58px]"
          style={{ fontFamily: 'Saira' }}
        >
          We Work With
        </h2>

        {/* Slider */}
        <div className="overflow-hidden relative">
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{
              transform: `translateX(-${(currentIndex * 100) / clonedList.length}%)`,
              width: `${clonedList.length * (100 / itemsPerView)}%`,
            }}
          >
            {clonedList.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex justify-center px-4"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] border border-[#2730359e] p-3 lg:p-[16px] flex items-center justify-center hover:border-[#4169e1] transition-colors duration-200">
                  <img
                    src={tech.src}
                    alt={`Company-${index}`}
                    className="w-[52px] lg:w-[68px] h-[52px] lg:h-[68px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
