'use client';
import Image from 'next/image';
import IconButton from '../components/ui/IconButton';
import Link from '../components/ui/Link';

const FeaturedProjectsSection = () => {
  const projects = [
    {
      category: '3D Design & Development',
      title: 'Tuffle - Our 3D Animation Website',
      description: "Tuffle's 3D animated website featuring design and development.",
      image: '/images/img_image.png',
      link: '/projects/tuffle',
    },
    {
      category: 'Mobile App and Website',
      title: 'GiniGigs - Freelancing Platform',
      description:
        'Comprehensive freelancing platform delivered as native mobile apps for Android and iOS, complemented by an elegant landing page. The platform connects clients with skilled freelancers, featuring real-time notifications, secure payments, and intuitive project management. Built with Flutter and Node.js for robust performance across all devices.',
      image: '/images/img_image_216x340.png',
      link: '/projects/ginigigs',
    },
    {
      category: 'Web Application',
      title: 'Tick Your Tour Web App',
      description:
        'B2B tour package quotation system with dynamic pricing calculator. Includes OTP verification, quote history and automated notifications.',
      image: '/images/img_image_212x340.png',
      link: '/projects/tick-your-tour',
    },
  ];

  return (
    <section id="projects" className="w-full mt-16 lg:mt-[112px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-[32px] sm:text-[40px] lg:text-[60px] font-bold leading-tight lg:leading-[89px] text-center text-[#d9d9d9] mb-8 lg:mb-[26px]"
          style={{ fontFamily: 'Oswald' }}
        >
          Featured Projects
        </h2>

        <div className="divide-y divide-[#a6a6a633]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-12 py-10"
            >
              {/* Project Info */}
              <div className="w-full lg:w-[42%]">
                <p
                  className="text-[14px] sm:text-[15px] lg:text-[17px] font-normal leading-relaxed text-left capitalize text-[#4169e1] mb-2"
                  style={{ fontFamily: 'Saira' }}
                >
                  {project.category}
                </p>

                <h3
                  className="text-[20px] sm:text-[24px] lg:text-[30px] font-semibold leading-snug lg:leading-[42px] text-left capitalize text-[#d9d9d9] mb-3"
                  style={{ fontFamily: 'Saira' }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-[13px] sm:text-[14px] lg:text-[15px] font-light leading-relaxed lg:leading-[28px] text-left text-[#cccccc]"
                  style={{ fontFamily: 'Saira' }}
                >
                  {project.description}
                </p>
              </div>

              {/* Project Image + CTA */}
              <div className="w-full lg:w-[58%] flex flex-col lg:flex-row items-center lg:items-start gap-4">
                <div className="flex justify-center w-full lg:flex-1">
                  <div className="w-full sm:w-[280px] lg:w-[340px] h-fit sm:h-[180px] lg:h-[218px] rounded-sm overflow-hidden">
                    <Image
                      width={1000}
                      height={1000}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3">
                  <IconButton
                    src="/images/img_group_3.svg"
                    className="w-[32px] lg:w-[40px] h-[32px] lg:h-[38px] p-2 lg:p-[12px] bg-[#ffffff33] hover:bg-[#ffffff4d] transition-colors duration-200"
                  />
                  <Link
                    href={project.link}
                    className="text-[11px] sm:text-[12px] lg:text-[13px] font-semibold leading-normal lg:leading-[21px] text-left uppercase text-[#e5e5e5] hover:text-white transition-colors duration-200"
                    style={{ fontFamily: 'Saira' }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
