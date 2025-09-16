'use client';
import IconButton from '../components/ui/IconButton';
import Link from '../components/ui/Link';

const FeaturedProjectsSection = () => {
  const projects = [
    {
      category: "3D Design & Development",
      title: "Tuffle - Our 3D Animation Website",
      description: "Tuffle's 3D animated website featuring design and development.",
      image: "/images/img_image.png",
      link: "/projects/tuffle"
    },
    {
      category: "Mobile App and Website", 
      title: "GiniGigs - Freelancing Platform",
      description: "Comprehensive freelancing platform delivered as native mobile apps for Android and iOS, complemented by an elegant landing page. The platform connects clients with skilled freelancers, featuring real-time notifications, secure payments, and intuitive project management. Built with Flutter and Node.js for robust performance across all devices.",
      image: "/images/img_image_216x340.png",
      link: "/projects/ginigigs"
    },
    {
      category: "Web Application",
      title: "Tick Your Tour Web App", 
      description: "B2B tour package quotation system with dynamic pricing calculator. Includes OTP verification, quote history and automated notifications.",
      image: "/images/img_image_212x340.png",
      link: "/projects/tick-your-tour"
    }
  ]

  return (
    <section className="w-full mt-16 lg:mt-[112px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-[40px] lg:text-[60px] font-bold leading-tight lg:leading-[89px] text-center text-[#d9d9d9] mb-8 lg:mb-[26px]"
          style={{ fontFamily: 'Oswald' }}
        >
          Featured Projects
        </h2>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-0 py-8 lg:py-[50px] ${
                index < projects.length - 1 ? 'border-b border-[#a6a6a633]' : ''
              } ${index === projects.length - 1 ? 'border-t border-[#a6a6a633] border-b border-[#a6a6a633]' : 'border-t border-[#a6a6a633]'}`}
            >
              {/* Project Info */}
              <div className={`w-full ${index === 1 ? 'lg:w-[44%]' : 'lg:w-[42%]'} ${index === 0 ? 'lg:mt-[40px]' : index === 1 ? 'lg:mb-[16px]' : 'lg:mt-[22px]'}`}>
                <p 
                  className="text-[15px] lg:text-[17px] font-normal leading-relaxed lg:leading-[25px] text-left capitalize text-[#4169e1] mb-2 lg:mb-[6px]"
                  style={{ fontFamily: 'Saira' }}
                >
                  {project.category}
                </p>
                
                <h3 
                  className="text-[24px] lg:text-[30px] font-semibold leading-tight lg:leading-[42px] text-left capitalize text-[#d9d9d9] mb-3 lg:mb-[12px]"
                  style={{ fontFamily: 'Saira' }}
                >
                  {project.title}
                </h3>
                
                <p 
                  className="text-[13px] lg:text-[15px] font-light leading-relaxed lg:leading-[28px] text-left text-[#cccccc]"
                  style={{ fontFamily: 'Saira' }}
                >
                  {project.description}
                </p>
              </div>

              {/* Project Image and CTA */}
              <div className={`w-full ${index === 1 ? 'lg:w-[56%]' : 'lg:w-[58%]'} flex flex-col lg:flex-row items-center gap-4 lg:gap-0`}>
                <div className={`${index === 1 ? 'lg:px-[42px]' : 'lg:px-[54px]'} flex justify-center w-full lg:flex-1`}>
                  <div className={`${index === 1 ? 'w-[280px] lg:w-[340px] h-[180px] lg:h-[216px]' : 'w-[280px] lg:w-[340px] h-[180px] lg:h-[218px]'} rounded-sm overflow-hidden`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={`${index === 1 ? 'lg:px-[30px]' : index === 2 ? 'lg:px-[56px] lg:pr-[74px]' : 'lg:px-[18px]'} flex items-center gap-2 lg:gap-0`}>
                  <IconButton
                    src="/images/img_group_3.svg"
                    className="w-[32px] lg:w-[40px] h-[32px] lg:h-[38px] p-2 lg:p-[12px] bg-[#ffffff33] hover:bg-[#ffffff4d] transition-colors duration-200"
                    layout_width="auto"
                    padding="sm"
                    position="relative"
                    margin="none"
                    variant="default"
                    size="md"
                    onClick={() => {}}
                  />
                  <Link
                    href={project.link}
                    className="text-[11px] lg:text-[13px] font-semibold leading-normal lg:leading-[21px] text-left uppercase text-[#e5e5e5] hover:text-white transition-colors duration-200 ml-1 lg:ml-[-6px]"
                    style={{ fontFamily: 'Saira' }}
                    layout_width="auto"
                    padding="none"
                    position="relative"
                    margin="none"
                    onClick={() => {}}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjectsSection