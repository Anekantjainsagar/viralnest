'use client';
import { useState } from 'react';
import IconButton from '../components/ui/IconButton';

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1)

  const services = [
    {
      icon: "/images/img_svg_indigo_a400_60x60.svg",
      title: "SaaS Development",
      description: "Build scalable software-as-a-service solutions tailored to your business needs. We develop cloud-based applications with secure multi-tenancy, subscription management, and seamless third-party integrations.",
      features: [
        "Multi-tenant Architecture",
        "Subscription Systems", 
        "API Development",
        "Integration Services",
        "Analytics Dashboard"
      ]
    },
    {
      icon: "/images/img_svg_60x60.svg",
      title: "Mobile App Development",
      description: "Bring your app ideas to life with our comprehensive mobile development expertise. We craft intuitive, high-performance applications using Flutter and React Native, ensuring seamless user experiences across iOS and Android platforms.",
      features: [
        "Cross-platform Development",
        "Native App Solutions",
        "App Store Optimization", 
        "UI/UX Implementation",
        "App Security & Testing"
      ]
    },
    {
      icon: "/images/img_svg_1.svg",
      title: "AI Integration",
      description: "Enhance your applications with AI capabilities. We integrate basic AI functionalities like chatbots, image recognition, and voice processing using established APIs and frameworks to add smart features to your existing systems.",
      features: [
        "ChatGPT Integration",
        "Computer Vision",
        "Voice Recognition",
        "Custom Chatbots", 
        "API Implementation"
      ]
    }
  ]

  const totalSlides = 9
  const slides = Array.from({ length: totalSlides }, (_, i) => ({
    id: i,
    active: i === currentSlide
  }))

  return (
    <section className="w-full bg-[#1b1e22] py-12 lg:py-[64px] mt-12 lg:mt-[54px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-[40px] lg:text-[60px] font-bold leading-tight lg:leading-[89px] text-center text-[#d9d9d9] mb-8 lg:mb-[42px]"
          style={{ fontFamily: 'Oswald' }}
        >
          Our Services
        </h2>

        <div className="mb-8 lg:mb-[34px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px]">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-[#202328] rounded-sm p-6 lg:p-[30px] h-auto"
              >
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

                <div className="space-y-2 lg:space-y-[8px]">
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
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 lg:gap-[12px]">
          <IconButton
            src="/images/img_border.svg"
            className="w-[34px] h-[34px] p-2 lg:p-[10px] border border-[#4169e1] rounded-lg hover:bg-[#4169e1] transition-colors duration-200"
            layout_width="34px"
            padding="2"
            position="relative"
            margin="0"
            variant="primary"
            size="medium"
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          />
          
          <div className="flex items-center gap-2 lg:gap-[12px] px-8 lg:px-[56px]">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-sm transition-colors duration-200 ${
                  slide.active ? 'bg-[#4169e1]' : 'bg-[#999999]'
                }`}
              />
            ))}
          </div>

          <IconButton
            src="/images/img_border.svg"
            className="w-[34px] h-[34px] p-2 lg:p-[10px] border border-[#4169e1] rounded-lg hover:bg-[#4169e1] transition-colors duration-200"
            layout_width="34px"
            padding="2"
            position="relative"
            margin="0"
            variant="primary"
            size="medium"
            onClick={() => setCurrentSlide(Math.min(totalSlides - 1, currentSlide + 1))}
          />
        </div>
      </div>
    </section>
  )
}

export default ServicesSection