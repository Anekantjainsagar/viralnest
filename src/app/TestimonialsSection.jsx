'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const testimonials = [
    {
      quote:
        'Viral Nest completely transformed our social media presence. In just 4 months, our Instagram engagement increased by 180% and we gained over 5,000 quality followers.',
      author: 'Sarah Chen',
      position: 'Marketing Director, EcoLiving Products',
    },
    {
      quote:
        'After struggling with page 3 rankings for months, Viral Nest got us to the first page within 6 months. Our organic traffic doubled and leads actually convert.',
      author: 'Rajesh Patel',
      position: 'Founder, TechSolutions India',
    },
    {
      quote:
        "Viral Nest's paid advertising campaigns delivered exactly what we needed—qualified leads at a lower cost. Our ROI improved by 250%.",
      author: 'Jennifer Martinez',
      position: 'VP Marketing, B2B Software Co.',
    },
    {
      quote:
        'Working with Viral Nest was seamless. Their creative team always delivers campaigns that exceed expectations.',
      author: 'Michael Brown',
      position: 'CEO, RetailWave',
    },
    {
      quote:
        'Viral Nest is more than just a marketing partner, they feel like part of our team. Communication is smooth and results are consistent.',
      author: 'Emily Davis',
      position: 'Head of Growth, StartupHub',
    },
  ];

  // Responsive items per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // mobile
      } else {
        setItemsPerPage(3); // desktop/tablet
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // totalSlides = max starting index (avoid sliding into empty space)
  const totalSlides = testimonials.length - itemsPerPage + 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="w-full bg-[#1b1e22] py-12 lg:py-[78px]">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-[40px] lg:text-[60px] font-bold leading-tight lg:leading-[89px] text-center text-[#d9d9d9]"
            style={{ fontFamily: 'Oswald' }}
          >
            Testimonials
          </h2>
        </div>

        {/* Slider container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerPage}%` }} // each card takes share of row
              >
                <div className="flex flex-col items-center justify-center bg-[#2a2e33] rounded-xl p-6 shadow-md h-full">
                  <blockquote
                    className="text-[16px] lg:text-[18px] font-normal leading-relaxed lg:leading-[28px] text-center capitalize text-[#bfbfbf] mb-6"
                    style={{ fontFamily: 'Lato' }}
                  >
                    “{testimonial.quote}”
                  </blockquote>
                  <div className="text-center mt-auto">
                    <cite
                      className="text-[18px] lg:text-[20px] font-semibold leading-relaxed text-[#bfbfbf] not-italic block mb-1"
                      style={{ fontFamily: 'Lato' }}
                    >
                      {testimonial.author}
                    </cite>
                    <p
                      className="text-[12px] lg:text-[14px] font-normal leading-tight text-[#4169e1]"
                      style={{ fontFamily: 'Lato' }}
                    >
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#ffffff10] hover:bg-[#ffffff30] transition"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#ffffff10] hover:bg-[#ffffff30] transition"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentIndex === index ? 'bg-[#4169e1]' : 'bg-[#999999]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
