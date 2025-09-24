'use client';
import Image from 'next/image';
import Button from '../components/ui/Button';
import Link from 'next/link';

const HeroSection = () => {
  const contactLinks = [
    {
      src: '/images/img_item_link_blue_gray_100.svg', // Email icon
      alt: 'Email',
      href: 'https://wa.me/916204021876',
    },
    {
      src: '/images/img_vector_blue_gray_100.svg', // WhatsApp icon
      alt: 'WhatsApp',
      href: 'mailto:kumarshubham@viralnest.co',
    },
    {
      src: '/images/img_item_link_28x28.svg', // Instagram icon
      alt: 'Instagram',
      href: 'https://www.linkedin.com/company/theviralnest/',
    },
    {
      src: '/images/img_item_link_blue_gray_100_28x28.svg', // LinkedIn icon
      alt: 'LinkedIn',
      href: 'https://www.instagram.com/theviralnest.co/',
    },
  ];

  return (
    <section
      id="home"
      className="w-full bg-[linear-gradient(270deg,#1f2937_0%,#183763_50%,#000000_100%)] shadow-[0px_0px_20px_#2c2b2b] px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-[1440px] mx-auto h-fit md:h-[100vh] flex items-center justify-center md:py-0 py-10">
        {/* Hero Content */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-[46%] flex flex-col items-center md:items-start md:my-0 my-2">
            <h1
              className="text-[28px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-bold leading- lg:leading-[80px] text-center md:text-left capitalize mb-2 lg:mb-6"
              style={{ fontFamily: 'Oswald' }}
            >
              <span className="text-[#d9d9d9]">Where </span>
              <span className="text-[#4169e1]">Brands Fly High</span>
              <span className="text-[#d9d9d9]"> at the Best</span>
            </h1>

            <p
              className="text-base font-semibold leading-relaxed lg:leading-[25px] text-center md:text-left text-[#bfbfbf] mb-4 lg:mb-6 w-full lg:w-[84%]"
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
              padding="px-6 lg:px-[32px] py-2.5 lg:py-[8px]"
              position="static"
              margin="mt-8 lg:mt-[50px]"
              layout_gap="0"
              variant="primary"
              size="large"
              onClick={(e) => {
                e.preventDefault(); // stop full page reload
                const target = document.querySelector('#contact');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
            />
          </div>

          {/* Right Content - Services Visualization */}
          <div className="w-full lg:w-[44%] flex justify-center lg:justify-end md:mt-0 mt-10">
            <div className="relative w-full max-w-[540px] lg:max-w-[600px] px-8 lg:px-[56px]">
              <Image src="/images/SVG.png" alt="Viral Nest Image" width={1000} height={1000} />

              {/* Navigation Dots */}
              <div className="hidden md:flex absolute right-0 lg:right-[-12px] top-[120px] lg:top-[207px] flex-col gap-4 lg:gap-[28px]">
                {contactLinks.map((icon, index) => (
                  <Link key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={28}
                      height={28}
                      className="w-6 h-6 p-1 opacity-80 hover:opacity-100 rounded-sm transition-colors duration-200"
                    />
                  </Link>
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
