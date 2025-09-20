'use client';
import Image from 'next/image';

const TeamSection = () => {
  const founder = {
    name: 'Shubham Kumar',
    role: 'Founder & CEO',
    image: '/images/founder.jpeg',
    bio: 'Experienced leader with a strong background in driving business growth and innovation through technology. Proven ability to develop and implement effective solutions that meet business needs. Skilled in strategic planning, team leadership, and collaboration. Passionate about leveraging technology to drive business success and empower teams.',
  };

  return (
    <section id="team" className="w-full py-12 lg:py-[80px] bg-[#1b1e22]">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-20">
        {/* Image */}
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-start">
          <div className="w-[320px] h-[360px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-4 border-[#4169e1]">
            <Image
              src={founder.image}
              alt={founder.name}
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-[60%] text-center lg:text-left">
          <h2
            className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold text-white mb-1 md:mb-4"
            style={{ fontFamily: 'Oswald' }}
          >
            Meet Our Founder
          </h2>
          <h3
            className="text-[20px] sm:text-[24px] lg:text-[28px] font-semibold text-[#4169e1] mb-1 md:mb-4"
            style={{ fontFamily: 'Saira' }}
          >
            {founder.name} — {founder.role}
          </h3>
          <p
            className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#bfbfbf] leading-relaxed"
            style={{ fontFamily: 'Lato' }}
          >
            {founder.bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
