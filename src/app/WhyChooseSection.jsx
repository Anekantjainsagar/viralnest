'use client';
const WhyChooseSection = () => {
  const features = [
    {
      icon: "/images/img_svg.svg",
      title: "Strategic Growth Partner",
      description: "We take the time to understand your brand, uncover what matters most, and craft strategies that deliver measurable results."
    },
    {
      icon: "/images/img_svg_indigo_a400.svg",
      title: "Comprehensive Services, Seamless Scale",
      description: "From social media marketing, SEO, growth advertising, AI integration, branding & design, lead generation, to web design & development and mobile app development, we cover every angle so your business can scale effortlessly."
    },
    {
      icon: "/images/img_svg_indigo_a400_40x40.svg",
      title: "Fresh Ideas & Impactful Innovation",
      description: "We combine creativity with smart technology and the latest tools, ensuring your brand stands out, adapts quickly, and thrives in today's fast-paced market."
    }
  ]

  return (
    <section className="w-full mt-12 lg:mt-[48px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[48px] items-center">
          {/* Left Content */}
          <div className="w-full lg:w-[42%]">
            <h2 className="text-[28px] lg:text-[40px] font-medium lg:font-semibold leading-tight lg:leading-[92px] text-left capitalize mb-2 lg:mb-[8px]" style={{ fontFamily: 'Oswald' }}>
              <span className="text-white">Why Choose<br /></span>
              <span className="text-[#4169e1] text-[48px] lg:text-[82px] font-semibold">Viral Nest?</span>
            </h2>

            <div className="space-y-6 lg:space-y-[44px] mt-8 lg:mt-[282px]">
              {features?.map((feature, index) => (
                <div key={index} className="flex gap-4 lg:gap-[24px] items-start">
                  <div className="w-[60px] lg:w-[98px] h-[60px] lg:h-[98px] border border-[#ffffff33] rounded-full flex items-center justify-center flex-shrink-0 p-4 lg:p-[22px]">
                    <img 
                      src={feature?.icon} 
                      alt={feature?.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-[18px] lg:text-[25px] font-semibold leading-tight lg:leading-[38px] text-left capitalize text-[#d9d9d9] mb-2 lg:mb-[5px]"
                      style={{ fontFamily: 'Oswald' }}
                    >
                      {feature?.title}
                    </h3>
                    <p 
                      className="text-[12px] lg:text-[13px] font-normal leading-relaxed lg:leading-[25px] text-left text-[#cccccc]"
                      style={{ fontFamily: 'Lato' }}
                    >
                      {feature?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[58%] relative">
            <div className="bg-[#1b1e22] rounded-lg p-6 lg:p-8 relative">
              {/* Background decorative elements */}
              <div className="absolute top-4 lg:top-[117px] left-4 lg:left-[84px] w-[120px] lg:w-[174px] h-[120px] lg:h-[174px] border-2 lg:border-[3px] border-white rounded-full flex items-center justify-center">
                <img 
                  src="/images/img_shape_2_1.png" 
                  alt="Viral Nest"
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="absolute top-0 right-0 w-[60px] lg:w-[80px] h-[60px] lg:h-[80px]">
                <img 
                  src="/images/img_choose_vec_btm_l_svg.svg" 
                  alt="Decoration"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="pt-[180px] lg:pt-[242px] text-center lg:text-left">
                <h3 
                  className="text-[24px] lg:text-[36px] font-semibold leading-tight lg:leading-[67px] text-white mb-4 lg:mb-[24px]"
                  style={{ fontFamily: 'Oswald' }}
                >
                  Transform your business with Viral Nest
                </h3>
                
                <p 
                  className="text-[14px] lg:text-[18px] font-normal leading-normal lg:leading-[22px] text-left capitalize text-[#4169e1] mb-4 lg:mb-[24px]"
                  style={{ fontFamily: 'Lato' }}
                >
                  your ultimate growth and technology partner
                </p>
                
                <p 
                  className="text-[14px] lg:text-[16px] font-normal leading-relaxed lg:leading-[30px] text-left text-[#cccccc] mb-8 lg:mb-[68px]"
                  style={{ fontFamily: 'Lato' }}
                >
                  We don't just market brands; we create meaningful experiences that connect people with your story. From building strong online visibility with SEO, targeted ad campaigns, and performance marketing to crafting powerful impact through content creation, social media management, and engaging storytelling — we're here to make your brand unforgettable.
                </p>

                <div className="flex justify-between items-end">
                  <div className="w-[60px] lg:w-[94px] h-[60px] lg:h-[94px]">
                    <img 
                      src="/images/img_choose_vec_top_r_svg.svg" 
                      alt="Decoration"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <span 
                    className="text-[32px] lg:text-[50px] font-bold leading-tight lg:leading-[50px] tracking-wider text-right text-[#e3e3e34c]"
                    style={{ fontFamily: 'Saira', letterSpacing: '2px' }}
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
}

export default WhyChooseSection