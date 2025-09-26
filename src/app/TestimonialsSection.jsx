'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const testimonials = [
    {
      quote:
        'Viral Nest completely changed our online game. They handled our content and social media perfectly, helping Mellow Luxury grow organically from zero online presence to real customer engagement. The team understood our premium incense brand and created content that truly represents us. Professional, reliable, and results-driven. Highly recommend Viral Nest for anyone serious about building their brand online!',
      author: 'Ansh Gupta',
      position: 'Founder, Mellow Luxury',
    },
    {
      quote:
        "Viral Nest transformed my Instagram in just 3 months. My posts went from getting a few likes to millions of views, and my sales doubled! The team understood my brand and made everything simple. They don't just promise results – they actually deliver them. If you want real growth, go with Viral Nest. Best decision I made for my business!",
      author: 'Prashant Maurya',
      position: 'Founder, VMbecauseofyou',
    },
    {
      quote:
        'Viral Nest delivered exactly what we needed for Campus Binge. They built our entire website from scratch – both frontend and backend – and made it look professional and function perfectly. Their technical expertise and attention to detail turned our vision into reality without any hassle. The team was responsive, delivered on time, and the website performs flawlessly.',
      author: 'Rishitabh Thapliyal',
      position: 'Founder, Campus Binge',
    },
    {
      quote:
        'Viral Nest built our entire website for Puzzles Living from scratch and it turned out amazing! They also manage our LinkedIn company page, which helped us establish a professional online presence. The website is user-friendly, professional, and perfectly showcases our PG services in Bangalore. The team was responsive, understood our requirements, and delivered exactly what we needed.',
      author: 'Devansh',
      position: 'Co-founder, Puzzles Living',
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

  const totalSlides = testimonials.length - itemsPerPage + 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="w-full bg-[#1b1e22] py-12 lg:py-[78px]">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="testimonials"
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
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="flex flex-col items-center justify-center bg-[#2a2e33] rounded-xl p-6 shadow-md h-full">
                  <blockquote
                    className="text-[16px] lg:text-[18px] font-normal leading-relaxed lg:leading-[28px] text-center text-[#bfbfbf] mb-6"
                    style={{ fontFamily: 'Lato' }}
                  >
                    “{testimonial.quote}”
                  </blockquote>
                  <div className="text-center mt-auto">
                    <cite
                      className="text-[18px] lg:text-[20px] font-semibold text-[#bfbfbf] not-italic block mb-1"
                      style={{ fontFamily: 'Lato' }}
                    >
                      {testimonial.author}
                    </cite>
                    <p
                      className="text-[12px] lg:text-[14px] text-[#4169e1]"
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
