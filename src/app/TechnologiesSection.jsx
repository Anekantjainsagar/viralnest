'use client';
import { useEffect, useState } from 'react';

const TechnologiesSection = () => {
  const technologies = [
    { name: 'JavaScript', src: '/images/img_javascript.png' },
    { name: 'Python', src: '/images/img_python.png' },
    { name: 'React.js', src: '/images/img_reactjs.png' },
    { name: 'Next.js', src: '/images/img_nextjs.png' },
    { name: 'Node.js', src: '/images/img_nodejs.png' },
    { name: 'AWS', src: '/images/img_aws.png' },
    { name: 'Flutter', src: '/images/img_flutter.png' },
    { name: 'Qt', src: '/images/img_qt.png' },
    { name: 'Django', src: '/images/img_django.png' },
    { name: 'Godot', src: '/images/img_godot.png' },
    { name: 'GitHub', src: '/images/img_github.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 >= technologies.length ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [technologies.length]);

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
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 8)}%)`,
              width: `${(technologies.length / 8) * 100}%`,
            }}
          >
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="w-1/8 flex-shrink-0 flex justify-center"
                style={{ flex: '0 0 12.5%' }} // 100 / 8 = 12.5%
              >
                <div className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] border border-[#2730359e] p-3 lg:p-[16px] flex items-center justify-center hover:border-[#4169e1] transition-colors duration-200">
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-[52px] lg:w-[68px] h-[52px] lg:h-[68px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: technologies.length - 7 }).map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-colors duration-300 ${
                currentIndex === index ? 'bg-[#4169e1]' : 'bg-[#999999]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
