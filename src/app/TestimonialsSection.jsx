'use client';
import { useState } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "Viral Nest completely transformed our social media presence. In just 4 months, our Instagram engagement increased by 180% and we gained over 5,000 quality followers. Their content strategy actually connects with our audience instead of just posting random content. The team understands our brand voice perfectly.",
      author: "Sarah Chen",
      position: "Marketing Director, EcoLiving Products"
    },
    {
      quote: "After struggling with page 3 rankings for months, Viral Nest got us to the first page for our main keywords within 6 months. Our organic traffic doubled, and more importantly, we're getting leads that actually convert. Their SEO approach is thorough and results-driven.",
      author: "Rajesh Patel", 
      position: "Founder, TechSolutions India"
    },
    {
      quote: "Viral Nest's paid advertising campaigns delivered exactly what we needed—qualified leads at a lower cost. Our Google Ads ROI improved by 250% and our Meta ads finally started generating real business. They know how to spend ad budgets wisely.",
      author: "Jennifer Martinez",
      position: "VP Marketing, B2B Software Co."
    }
  ]

  const totalSlides = 11
  const slides = Array.from({ length: totalSlides }, (_, i) => ({
    id: i,
    active: i === currentTestimonial
  }))

  return (
    <section className="w-full bg-[#1b1e22] py-12 lg:py-[78px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-[10px]">
          <h2 
            className="text-[40px] lg:text-[60px] font-bold leading-tight lg:leading-[89px] text-center text-[#d9d9d9] mb-8 lg:mb-[36px]"
            style={{ fontFamily: 'Oswald' }}
          >
            Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-[44px] mb-8 lg:mb-[28px]">
          {testimonials?.map((testimonial, index) => (
            <div key={index} className="flex flex-col">
              <blockquote 
                className="text-[16px] lg:text-[18px] font-normal leading-relaxed lg:leading-[34px] text-center capitalize text-[#bfbfbf] mb-6 lg:mb-[56px] flex-1"
                style={{ fontFamily: 'Lato' }}
              >
                "{testimonial?.quote}"
              </blockquote>
              
              <div className="text-center">
                <cite 
                  className="text-[18px] lg:text-[20px] font-semibold leading-relaxed lg:leading-[24px] text-center text-[#bfbfbf] not-italic block mb-1 lg:mb-[2px]"
                  style={{ fontFamily: 'Lato' }}
                >
                  {testimonial?.author}
                </cite>
                <p 
                  className="text-[12px] lg:text-[14px] font-normal leading-tight lg:leading-[20px] text-center text-[#4169e1]"
                  style={{ fontFamily: 'Lato' }}
                >
                  {testimonial?.position}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 lg:gap-[12px]">
          {slides?.map((slide, index) => (
            <button
              key={slide?.id}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-sm transition-colors duration-200 ${
                slide?.active ? 'bg-[#4169e1]' : 'bg-[#999999]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection