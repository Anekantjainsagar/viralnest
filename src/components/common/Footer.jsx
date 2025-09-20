'use client';
import EditText from '../ui/EditText';
import Link from '../ui/Link';
import IconButton from '../ui/IconButton';
import Ul from '../ui/Ul';

const Footer = () => {
  const serviceLinks = [
    'Web Design and Development',
    'Mobile App Development',
    'Cloud Services',
    'DevOps & CI/CD',
    'SaaS Development',
    'Digital Product Design',
  ];

  const companyLinks = ['About Us', 'Services', 'All Portfolio', 'News & Article', 'Contact Us'];

  const resourceLinks = [
    'Privacy Policy',
    'Terms & Conditions',
    'Payment & Refund Policy',
    'Shipping & Delivery',
  ];

  const socialIcons = [
    { src: '/images/img_vector_blue_gray_100.svg', alt: 'Facebook' },
    { src: '/images/img_item_link_blue_gray_100.svg', alt: 'Twitter' },
    { src: '/images/img_item_link_blue_gray_100_28x28.svg', alt: 'LinkedIn' },
    { src: '/images/img_item_link_28x28.svg', alt: 'Instagram' },
  ];

  return (
    <footer className="w-full bg-secondary-background mt-16 lg:mt-[68px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 lg:pt-[72px] pb-8 lg:pb-0">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 lg:mb-[78px]">
            {/* Contact Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-2 lg:mb-[6px]">
                <img
                  src="/images/img_svg_indigo_a400_20x20.svg"
                  alt="Contact icon"
                  className="w-5 h-5"
                />
                <h3
                  className="ml-2 lg:ml-[10px] text-lg lg:text-[23px] font-medium leading-tight lg:leading-[27px] text-secondary-foreground"
                  style={{ fontFamily: 'Saira' }}
                >
                  Say Hello
                </h3>
              </div>

              <div className="mb-8 lg:mb-[38px]">
                <p
                  className="text-base font-normal leading-tight lg:leading-[20px] text-text-muted"
                  style={{ fontFamily: 'Lato' }}
                >
                  kumarshubham@viralnest.co
                </p>
              </div>

              <h4
                className="text-base font-medium leading-tight lg:leading-[19px] text-secondary-foreground mb-4 lg:mb-[16px]"
                style={{ fontFamily: 'Saira' }}
              >
                See Our New updates
              </h4>

              <div className="flex">
                <EditText
                  placeholder="Email here..."
                  className="flex-1 px-4 lg:px-[20px] py-3 lg:py-[14px] text-sm lg:text-[13px] font-normal leading-normal lg:leading-[21px] text-text-placeholder bg-background-overlay border border-border-secondary rounded-l-sm"
                  style={{ fontFamily: 'Saira' }}
                />
                <button className="px-3 lg:px-[14px] py-3 lg:py-[16px] bg-primary-background rounded-r-sm hover:bg-primary-light transition-colors duration-200">
                  <img
                    src="/images/img_vector_gray_900_02.svg"
                    alt="Subscribe"
                    className="w-3 lg:w-[14px] h-3 lg:h-[14px]"
                  />
                </button>
              </div>
            </div>

            {/* Services Section */}
            <div className="lg:col-span-1">
              <h3
                className="text-xl lg:text-[25px] font-semibold leading-tight lg:leading-[38px] text-secondary-foreground mb-4 lg:mb-[14px]"
                style={{ fontFamily: 'Oswald' }}
              >
                Our Services
              </h3>
              <Ul
                spacing="large"
                className="space-y-3 lg:space-y-[16px]"
                layout_width="100%"
                padding="0"
                margin="0"
                position="static"
              >
                {serviceLinks.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-base font-medium leading-tight lg:leading-[20px] text-text-muted hover:text-secondary-foreground transition-colors duration-200"
                      style={{ fontFamily: 'Lato' }}
                      layout_width="100%"
                      padding="0"
                      position="static"
                      margin="0"
                      onClick={() => {}}
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </Ul>
            </div>

            {/* Company Section */}
            <div className="lg:col-span-1">
              <h3
                className="text-xl lg:text-[25px] font-semibold leading-tight lg:leading-[38px] text-secondary-foreground mb-4 lg:mb-[14px]"
                style={{ fontFamily: 'Oswald' }}
              >
                Company
              </h3>
              <Ul
                spacing="large"
                className="space-y-3 lg:space-y-[16px]"
                layout_width="100%"
                padding="0"
                margin="0"
                position="static"
              >
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-base font-medium leading-tight lg:leading-[20px] text-text-muted hover:text-secondary-foreground transition-colors duration-200"
                      style={{ fontFamily: 'Lato' }}
                      layout_width="100%"
                      padding="0"
                      position="static"
                      margin="0"
                      onClick={() => {}}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </Ul>
            </div>

            {/* Resources Section */}
            <div className="lg:col-span-1">
              <h3
                className="text-xl lg:text-[25px] font-semibold leading-tight lg:leading-[30px] text-secondary-foreground mb-4 lg:mb-[14px]"
                style={{ fontFamily: 'Saira' }}
              >
                Resources
              </h3>
              <Ul
                spacing="large"
                className="space-y-3 lg:space-y-[16px]"
                layout_width="100%"
                padding="0"
                margin="0"
                position="static"
              >
                {resourceLinks.map((resource, index) => (
                  <li key={index}>
                    <Link
                      href={`/${resource.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-base font-medium leading-relaxed lg:leading-[24px] text-text-muted hover:text-secondary-foreground transition-colors duration-200"
                      style={{ fontFamily: 'Saira' }}
                      layout_width="100%"
                      padding="0"
                      position="static"
                      margin="0"
                      onClick={() => {}}
                    >
                      {resource}
                    </Link>
                  </li>
                ))}
              </Ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-border-primary pt-6 lg:pt-[24px] pb-6 lg:pb-[24px]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="flex flex-wrap items-center justify-center md:justify-start text-center md:text-left">
                <span
                  className="text-sm font-normal leading-relaxed lg:leading-[25px] text-text-placeholder"
                  style={{ fontFamily: 'Saira' }}
                >
                  © Copyright 2025{' '}
                </span>
                <span
                  className="text-sm font-bold leading-relaxed lg:leading-[25px] text-secondary-foreground px-1"
                  style={{ fontFamily: 'Saira' }}
                >
                  Viral Nest
                </span>
                <span
                  className="text-sm font-normal leading-relaxed lg:leading-[25px] text-text-placeholder"
                  style={{ fontFamily: 'Saira' }}
                >
                  {' '}
                  All Rights Reserved
                </span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-3 lg:space-x-[14px]">
                {socialIcons.map((icon, index) => (
                  <IconButton
                    key={index}
                    src={icon.src}
                    alt={icon.alt}
                    className="w-7 h-7 lg:w-[28px] lg:h-[28px] p-1 lg:p-[6px] bg-secondary-dark rounded-sm hover:bg-primary-background transition-colors duration-200"
                    layout_width="28px"
                    padding="6px"
                    position="static"
                    margin="0"
                    variant="default"
                    size="medium"
                    onClick={() => {}}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
