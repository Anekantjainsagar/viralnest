'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const TechnologiesSection = () => {
  const technologies = [
    { src: '/images/companies/1.png' },
    { src: '/images/companies/2.png' },
    { src: '/images/companies/3.png' },
    { src: '/images/companies/4.png' },
    { src: '/images/companies/6.png' },
    { src: '/images/companies/Image 5.png' },
  ];

  const itemsPerView = 3;
  const [currentIndex, setCurrentIndex] = useState(itemsPerView);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Clone list for infinite loop
  const clonedList = [
    ...technologies.slice(-itemsPerView),
    ...technologies,
    ...technologies.slice(0, itemsPerView),
  ];

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Reset to real slides when hitting edges
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

  // Calculate the translate percentage - each step moves by the width of one item
  const itemWidth = 100 / clonedList.length; // Each item takes this % of container
  const translateX = -(currentIndex * itemWidth);

  return (
    <section className="w-full bg-[#1b1e22] py-16 lg:py-[120px] mt-4 lg:mt-[216px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-[18px] lg:text-[22px] font-medium leading-tight lg:leading-[35px] text-center capitalize text-[#d9d9d9] mb-12 lg:mb-[58px]"
          style={{ fontFamily: 'Saira' }}
        >
          We Work With
        </h2>

        {/* Slider Container */}
        <div className="overflow-hidden relative w-full">
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{
              transform: `translateX(${translateX}%)`,
              width: `${clonedList.length * (100 / itemsPerView)}%`,
            }}
          >
            {clonedList.map((tech, index) => (
              <div
                key={index}
                className="flex justify-center items-center"
                style={{
                  width: `${100 / clonedList.length}%`,
                  flexShrink: 0,
                }}
              >
                <div className="w-[120px] h-[120px] flex items-center justify-center bg-[#dedede] rounded-xl shadow-md border border-[#2730359e] hover:border-[#4169e1] transition">
                  <Image
                    width={1000}
                    height={1000}
                    src={tech.src}
                    alt={`Company-${index}`}
                    className="w-[80%] h-[80%] object-contain"
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
