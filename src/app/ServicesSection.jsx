'use client';
import { useState, useEffect, useRef } from 'react';
import IconButton from '../components/ui/IconButton';

const ServicesSection = () => {
  const services = [
    {
      icon: '/images/img_svg_indigo_a400_60x60.svg',
      title: 'Social Media Marketing',
      description:
        'Transform social channels into revenue-generating, loyalty-building engines with campaigns that capture attention and drive action.',
      features: [
        'Viral Content',
        'Platform-Specific Strategy',
        'Audience Engagement',
        'Influencer Collaborations',
        'Real-Time Analytics',
      ],
    },
    {
      icon: '/images/img_svg_60x60.svg',
      title: 'Branding & Design',
      description:
        'Define a brand narrative and position that ensures instant recognition, trust, and commercial relevance, while crafting visual experiences that enhance conversions and leave a lasting impression.',
      features: [
        'UI/UX Design',
        'Storytelling Strategy',
        'Market Positioning',
        'Logo Identity',
        'Brand Guidelines',
      ],
    },
    {
      icon: '/images/img_svg_1.svg',
      title: 'Lead Generation',
      description:
        'We build content systems that turn your brand into a magnet for high-intent leads, effectively converting your audience into qualified customers.',
      features: [
        'Content Funnels that Convert',
        'SEO-Driven Leads',
        'Personal Brand Magnetism',
        'Community Building',
        'Social Engagement Conversion',
      ],
    },
    {
      icon: '/images/img_svg_indigo_a400_60x60.svg',
      title: 'Web Design & Development',
      description:
        'Transform your digital presence with our end-to-end web solutions. Our experts combine stunning design with powerful development to create fast, scalable, and visually impressive websites.',
      features: [
        'Custom Website Solutions',
        'E-commerce & Web Applications',
        'Responsive UI/UX Design',
        'SEO & Performance Optimization',
        'Brand-focused Development',
      ],
    },
    {
      icon: '/images/img_svg_60x60.svg',
      title: 'Growth Advertising',
      description:
        "We amplify your brand's reach and accelerate growth using targeted paid ads and strategic partnerships. Our campaigns are designed for maximum ROI, converting clicks into loyal customers.",
      features: [
        'Paid Social Campaigns',
        'Search Engine Marketing (SEM)',
        'Influencer & Brand Collaborations',
        'Ad Creative & Copywriting',
        'Performance Analytics & ROI Tracking',
      ],
    },
    {
      icon: '/images/img_svg_1.svg',
      title: 'Mobile App Development',
      description:
        'Bring your app ideas to life with our comprehensive mobile development expertise. We craft intuitive, high-performance applications using Flutter and React Native.',
      features: [
        'Cross-platform Development',
        'Native App Solutions',
        'App Store Optimization',
        'UI/UX Implementation',
        'App Security & Testing',
      ],
    },
  ];

  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(itemsPerSlide);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  const extendedServices = [
    ...services.slice(-itemsPerSlide),
    ...services,
    ...services.slice(0, itemsPerSlide),
  ];

  const totalSlides = services.length;

  // Responsive itemsPerSlide
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // tablet
      } else {
        setItemsPerSlide(3); // desktop
      }
    };

    updateItems();
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, []);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsTransitioning(true);
  };

  // Reset after transition ends
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex >= totalSlides + itemsPerSlide) {
        setIsTransitioning(false);
        setCurrentIndex(itemsPerSlide); // jump back to start
      } else if (currentIndex < itemsPerSlide) {
        setIsTransitioning(false);
        setCurrentIndex(totalSlides + (currentIndex % totalSlides));
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('transitionend', handleTransitionEnd);
    }
    return () => {
      if (slider) {
        slider.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [currentIndex, totalSlides, itemsPerSlide]);

  return (
    <section className="w-full bg-[#1b1e22] py-12 lg:py-[64px] mt-12 lg:mt-[54px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-[40px] lg:text-[60px] font-bold leading-tight lg:leading-[89px] text-center text-[#d9d9d9] mb-8 lg:mb-[42px]"
          style={{ fontFamily: 'Oswald' }}
          id="services"
        >
          Our Services
        </h2>

        {/* Slider container */}
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)`,
            }}
          >
            {extendedServices.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerSlide}%` }}
              >
                <div className="bg-[#202328] rounded-sm p-6 lg:p-[30px] h-full flex flex-col">
                  <div className="w-[60px] h-[60px] mb-6 lg:mb-[30px]">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3
                    className="text-[20px] lg:text-[24px] font-bold leading-tight lg:leading-[28px] text-left text-[#cccccc] mb-2 lg:mb-[10px]"
                    style={{ fontFamily: 'Saira' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-[12px] lg:text-[14px] font-light leading-relaxed lg:leading-[25px] text-left text-[#cccccc] mb-4 lg:mb-[18px]"
                    style={{ fontFamily: 'Saira' }}
                  >
                    {service.description}
                  </p>
                  <div className="space-y-2 lg:space-y-[8px] mt-auto">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 lg:gap-[12px]">
                        <div className="w-2 h-2">
                          <img
                            src="/images/img_vector_indigo_a400_8x8.svg"
                            alt="Feature"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span
                          className="text-[13px] lg:text-[15px] font-medium leading-relaxed lg:leading-[24px] text-left text-[#cccccc]"
                          style={{ fontFamily: 'Saira' }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 lg:gap-[12px] mt-6">
          <IconButton
            src="/images/img_border.svg"
            className="w-[34px] h-[34px] p-2 lg:p-[10px] border border-[#4169e1] rounded-lg hover:bg-[#4169e1] transition-colors duration-200"
            onClick={prevSlide}
          />
          <IconButton
            src="/images/img_border.svg"
            className="w-[34px] h-[34px] rotate-180 p-2 lg:p-[10px] border border-[#4169e1] rounded-lg hover:bg-[#4169e1] transition-colors duration-200"
            onClick={nextSlide}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
