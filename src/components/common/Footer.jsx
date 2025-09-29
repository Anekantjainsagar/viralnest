'use client';
import EditText from '../ui/EditText';
import Link from '../ui/Link';
import IconButton from '../ui/IconButton';
import Ul from '../ui/Ul';
import toast from 'react-hot-toast';

const Footer = () => {
  const contactInfo = {
    phone: '+916204021876',
    email: 'kumarshubham@viralnest.co',
    instagram: 'https://www.instagram.com/theviralnest.co/',
    linkedin: 'https://www.linkedin.com/company/theviralnest/',
  };

  const serviceLinks = [
    'Social Media Marketing',
    'Branding & Design',
    'Lead Generation',
    'Web Design & Development',
    'Growth Advertising',
    'Mobile App Development',
  ];

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      toast.success('Email copied!');
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}`, '_blank');
    } catch (err) {
      toast.error('Failed to copy email!');
    }
  };

  const companyLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialIcons = [
    {
      src: '/images/img_vector_blue_gray_100.svg',
      alt: 'WhatsApp',
      action: handleEmailClick, // custom click for email
    },
    {
      src: '/images/img_item_link_blue_gray_100.svg',
      alt: 'Email',
      href: `https://wa.me/${contactInfo.phone.replace('+', '')}`, // WhatsApp chat
    },
    {
      src: '/images/img_item_link_blue_gray_100_28x28.svg',
      alt: 'LinkedIn',
      href: contactInfo.instagram,
    },
    {
      src: '/images/img_item_link_28x28.svg',
      alt: 'Instagram',
      href: contactInfo.linkedin,
    },
  ];

  return (
    <footer className="w-full bg-secondary-background mt-16 lg:mt-[68px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 lg:pt-[72px] pb-8 lg:pb-0">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:gap-x-16 lg:gap-x-24 mb-16 lg:mb-[78px]">
            {/* Contact Section */}
            <div className="flex flex-col min-h-[260px]">
              <div className="flex items-center mb-3">
                <img
                  src="/images/img_svg_indigo_a400_20x20.svg"
                  alt="Contact icon"
                  className="w-5 h-5"
                />
                <h3
                  className="ml-2 text-lg lg:text-[23px] font-semibold text-secondary-foreground"
                  style={{ fontFamily: 'Saira' }}
                >
                  Say Hello
                </h3>
              </div>

              <p className="mb-6 text-base text-text-muted" style={{ fontFamily: 'Lato' }}>
                kumarshubham@viralnest.co
              </p>

              {/* Address */}
              <p className="mb-6 text-base text-text-muted" style={{ fontFamily: 'Lato' }}>
                Bengaluru, Karnataka 560001
              </p>
              <h4
                className="text-base font-medium text-secondary-foreground mb-3"
                style={{ fontFamily: 'Saira' }}
              >
                See Our New Updates
              </h4>

              <div className="flex">
                <EditText
                  placeholder="Email here..."
                  className="flex-1 px-4 py-3 text-sm text-text-placeholder bg-background-overlay border border-border-secondary rounded-l-sm"
                  style={{ fontFamily: 'Saira' }}
                />
                <button className="px-3 py-3 bg-primary-background rounded-r-sm hover:bg-primary-light transition-colors duration-200">
                  <img
                    src="/images/img_vector_gray_900_02.svg"
                    alt="Subscribe"
                    className="w-3 h-3"
                  />
                </button>
              </div>
            </div>

            {/* Services Section */}
            <div className="flex flex-col min-h-[260px]">
              <h3
                className="text-xl lg:text-[25px] font-semibold text-secondary-foreground mb-4"
                style={{ fontFamily: 'Oswald' }}
              >
                Our Services
              </h3>
              <Ul className="space-y-3">
                {serviceLinks.map((service, index) => (
                  <li key={index}>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.querySelector('#services');
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                      }}
                      className="text-base font-medium text-text-muted hover:text-secondary-foreground transition-colors duration-200"
                      style={{ fontFamily: 'Lato' }}
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </Ul>
            </div>

            {/* Company Section */}
            <div className="flex flex-col min-h-[260px]">
              <h3
                className="text-xl lg:text-[25px] font-semibold text-secondary-foreground mb-4"
                style={{ fontFamily: 'Oswald' }}
              >
                Company
              </h3>
              <nav className="flex flex-col space-y-3">
                {companyLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-base font-medium text-text-muted hover:text-secondary-foreground transition-colors duration-200"
                    style={{ fontFamily: 'Saira' }}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(item.href);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-border-primary pt-6 pb-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-sm text-text-placeholder flex flex-wrap justify-center md:justify-start">
                © 2025 <span className="font-bold text-secondary-foreground px-1">Viral Nest</span>
                All Rights Reserved
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-3">
                {socialIcons.map((icon, index) =>
                  icon.action ? (
                    <button key={index} onClick={icon.action}>
                      <IconButton
                        src={icon.src}
                        alt={icon.alt}
                        className="w-7 h-7 p-1 bg-secondary-dark rounded-sm hover:bg-primary-background transition-colors duration-200"
                      />
                    </button>
                  ) : (
                    <Link key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
                      <IconButton
                        src={icon.src}
                        alt={icon.alt}
                        className="w-7 h-7 p-1 bg-secondary-dark rounded-sm hover:bg-primary-background transition-colors duration-200"
                      />
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
