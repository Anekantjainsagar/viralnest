'use client';

import Image from 'next/image';

const WhyChooseSection = () => {
  const features = [
    {
      icon: '/images/img_svg.svg',
      title: 'Strategic Growth Partner',
      description:
        'We take the time to understand your brand, uncover what matters most, and craft strategies that deliver measurable results.',
    },
    {
      icon: '/images/img_svg_indigo_a400.svg',
      title: 'Comprehensive Services, Seamless Scale',
      description:
        'From social media marketing, SEO, growth advertising, AI integration, branding & design, lead generation, to web design & development and mobile app development, we cover every angle so your business can scale effortlessly.',
    },
    {
      icon: '/images/img_svg_indigo_a400_40x40.svg',
      title: 'Fresh Ideas & Impactful Innovation',
      description:
        "We combine creativity with smart technology and the latest tools, ensuring your brand stands out, adapts quickly, and thrives in today's fast-paced market.",
    },
  ];

  return (
    <section className="w-full mt-12 lg:mt-[48px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[48px] items-start lg:items-center justify-between">
          {/* Left Content */}
          <div className="w-full lg:w-[42%]">
            <h2
              className="text-[26px] sm:text-[32px] lg:text-[40px] font-semibold lg:leading-[70px] text-left capitalize mb-4"
              style={{ fontFamily: 'Oswald' }}
            >
              <span className="text-white">
                Why Choose <br />
              </span>
              <span className="text-[#4169e1] text-[36px] sm:text-[48px] lg:text-[82px] font-bold">
                Viral Nest?
              </span>
            </h2>

            <div className="space-y-6 lg:space-y-[44px] mt-5">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 lg:gap-[24px] items-start">
                  <div className="w-[50px] sm:w-[60px] lg:w-[98px] h-[50px] sm:h-[60px] lg:h-[98px] border border-[#ffffff33] rounded-full flex items-center justify-center flex-shrink-0 p-3 sm:p-4 lg:p-[22px]">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-[16px] sm:text-[18px] lg:text-[25px] font-semibold leading-snug lg:leading-[38px] text-left capitalize text-[#d9d9d9] mb-2"
                      style={{ fontFamily: 'Oswald' }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-[12px] sm:text-[13px] lg:text-[14px] font-normal leading-relaxed sm:leading-[20px] lg:leading-[25px] text-left text-[#cccccc]"
                      style={{ fontFamily: 'Lato' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[50%] relative">
            <div className="bg-[#1b1e22] p-5 sm:p-6 lg:p-8 relative overflow-hidden">
              {/* Viral Nest logo */}
              <div className="absolute top-4 sm:top-6 lg:top-[40px] left-4 sm:left-6 lg:left-[34px] w-[80px] sm:w-[100px] lg:w-[124px] h-[80px] sm:h-[100px] lg:h-[124px]">
                <Image
                  width={400}
                  height={400}
                  alt="Viral Nest"
                  src="/images/viralnest.png"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Top right decoration */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:top-0 lg:right-0 w-[40px] sm:w-[50px] lg:w-[80px] h-[40px] sm:h-[50px] lg:h-[80px]">
                <img
                  src="/images/img_choose_vec_btm_l_svg.svg"
                  alt="Decoration"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text content */}
              <div className="pt-[85px] sm:pt-[160px] lg:pt-[212px] text-left">
                <h3
                  className="text-[20px] sm:text-[26px] lg:text-[36px] font-semibold sm:leading-[50px] lg:leading-[60px] text-white"
                  style={{ fontFamily: 'Oswald' }}
                >
                  Transform your business with Viral Nest
                </h3>

                <p
                  className="text-[13px] sm:text-[15px] lg:text-[18px] font-medium leading-normal text-left capitalize text-[#4169e1] mt-2 mb-4"
                  style={{ fontFamily: 'Lato' }}
                >
                  your ultimate growth and technology partner
                </p>

                <p
                  className="text-[13px] sm:text-[14px] lg:text-[16px] font-normal leading-relaxed sm:leading-[22px] lg:leading-[30px] text-left text-[#cccccc] mb-6 lg:mb-[50px]"
                  style={{ fontFamily: 'Lato' }}
                >
                  We don't just market brands; we create meaningful experiences that connect people
                  with your story. From building strong online visibility with SEO, targeted ad
                  campaigns, and performance marketing to crafting powerful impact through content
                  creation, social media management, and engaging storytelling — we're here to make
                  your brand unforgettable.
                </p>
                <div className="w-[40px] sm:w-[60px] lg:w-[94px] h-[40px] sm:h-[60px] lg:h-[94px] absolute left-0 bottom-0">
                  <img
                    src="/images/img_choose_vec_top_r_svg.svg"
                    alt="Decoration"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex w-full justify-end items-center relative">
                  {/* Bottom left decoration */}

                  {/* Badge */}
                  <span
                    className="text-[26px] sm:text-[36px] lg:text-[50px] font-bold leading-tight lg:leading-[50px] tracking-wide text-right text-[#e3e3e34c]"
                    style={{ fontFamily: 'Saira' }}
                  >
                    #1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
