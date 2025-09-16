'use client';
const TechnologiesSection = () => {
  const technologies = [
    { name: 'JavaScript', src: '/images/img_javascript.png' },
    { name: 'Python', src: '/images/img_python.png' },
    { name: 'React.js', src: '/images/img_reactjs.png' },
    { name: 'Next.js', src: '/images/img_nextjs.png' },
    { name: 'Node.js', src: '/images/img_nodejs.png' },
    { name: 'AWS', src: '/images/img_aws.png' },
    { name: 'Flutter', src: '/images/img_flutter.png' },
    { name: 'Qt', src: '/images/img_qt.png' },
    { name: 'Django', src: '/images/img_django.png' },
    { name: 'Godot', src: '/images/img_godot.png' },
    { name: 'GitHub', src: '/images/img_github.png' }
  ]

  return (
    <section className="w-full bg-[#1b1e22] py-16 lg:py-[120px] mt-32 lg:mt-[216px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-[18px] lg:text-[22px] font-medium leading-tight lg:leading-[35px] text-center capitalize text-[#d9d9d9] mb-12 lg:mb-[58px]"
          style={{ fontFamily: 'Saira' }}
        >
          We Work With
        </h2>

        <div className="overflow-x-auto">
          <div className="flex gap-4 lg:gap-[20px] min-w-max px-2 lg:px-[10px]">
            {technologies?.map((tech, index) => (
              <div 
                key={index}
                className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] border border-[#2730359e] p-3 lg:p-[16px] flex items-center justify-center flex-shrink-0 hover:border-[#4169e1] transition-colors duration-200"
              >
                <img 
                  src={tech?.src} 
                  alt={tech?.name}
                  className="w-[52px] lg:w-[68px] h-[52px] lg:h-[68px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologiesSection