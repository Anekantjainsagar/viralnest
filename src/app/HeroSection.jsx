'use client';
import { useState } from 'react';
import Button from '../components/ui/Button';
import Image from 'next/image';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
  ];

  return (
    <section className="w-full bg-[linear-gradient(270deg,#1f2937_0%,#183763_50%,#000000_100%)] shadow-[0px_0px_20px_#2c2b2b] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1440px] mx-auto h-[100vh] flex items-center justify-center">
        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-[46%] flex flex-col items-start">
            <h1
              className="text-[28px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-bold leading-tight lg:leading-[80px] text-left capitalize mb-4 lg:mb-6"
              style={{ fontFamily: 'Oswald' }}
            >
              <span className="text-[#d9d9d9]">Where </span>
              <span className="text-[#4169e1]">Brands Fly High at the Best</span>
            </h1>

            <p
              className="text-base font-semibold leading-relaxed lg:leading-[25px] text-left text-[#bfbfbf] mb-4 lg:mb-6 w-full lg:w-[84%]"
              style={{ fontFamily: 'Lato' }}
            >
              Transform your business with Viral Nest — your all-in-one growth partner. We go beyond
              marketing to craft experiences that connect people with your brand. From targeted
              social campaigns and SEO to paid ads, content marketing, and branding, our team
              empowers ambitious startups and established brands to rise above the competition.
            </p>

            <Button
              text="Start a project with us"
              className="px-6 lg:px-[32px] py-2 lg:py-[8px] text-lg font-semibold leading-tight lg:leading-[27px] text-white bg-[#4169e1] rounded-sm shadow-[3px_2px_28px_#4169e187] hover:bg-[#5a7ae8] transition-all duration-200"
              style={{ fontFamily: 'Oswald' }}
              fill_background_color="#4169e1"
              layout_width="auto"
              padding="px-6 lg:px-[32px] py-2 lg:py-[8px]"
              position="static"
              margin="mt-8 lg:mt-[50px]"
              layout_gap="0"
              variant="primary"
              size="large"
              onClick={() => {}}
            />
          </div>

          {/* Right Content - Services Visualization */}
          <div className="w-full lg:w-[44%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] lg:max-w-[722px] px-8 lg:px-[56px]">
              <Image src="/images/SVG.png" alt="Viral Nest Image" width={1000} height={1000} />

              {/* Navigation Dots */}
              <div className="absolute right-0 lg:right-[-12px] top-[120px] lg:top-[207px] flex flex-col gap-4 lg:gap-[28px]">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    className="w-4 lg:w-[20px] h-6 lg:h-[32px] transition-opacity duration-200 hover:opacity-80"
                  >
                    <img
                      src={index === 0 ? '/images/img_item_link.svg' : '/images/img_item.svg'}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
