'use client';
import { useState } from 'react';
import Button from '../components/ui/Button';
import EditText from '../components/ui/EditText';
import TextArea from '../components/ui/TextArea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    message: '',
    agreeToSMS: false
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className="w-full mt-16 lg:mt-[106px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[48px]">
          {/* Left Content */}
          <div className="w-full lg:w-[42%]">
            <h2 
              className="text-[40px] lg:text-[62px] font-bold leading-tight lg:leading-[92px] text-left text-[#d9d9d9] mb-2 lg:mb-[6px]"
              style={{ fontFamily: 'Oswald' }}
            >
              Contact
            </h2>
            
            <p 
              className="text-[15px] lg:text-[17px] font-normal leading-relaxed lg:leading-[28px] text-left text-[#cccccc] mb-6 lg:mb-[30px]"
              style={{ fontFamily: 'Lato' }}
            >
              We're here to answer your questions and help determine which<br />
              of our services best fits your needs.
            </p>

            <div className="border border-[#4169e1] p-2 lg:p-[10px] inline-flex items-center gap-2 mb-4 lg:mb-[16px]">
              <span 
                className="text-[16px] lg:text-[18px] font-medium leading-normal lg:leading-[22px] text-left text-[#4169e1]"
                style={{ fontFamily: 'Lato' }}
              >
                Call Us Now:
              </span>
              <span 
                className="text-[16px] lg:text-[18px] font-medium leading-normal lg:leading-[22px] text-left text-[#d9d9d9]"
                style={{ fontFamily: 'Lato' }}
              >
                +91 6386174003
              </span>
            </div>

            {/* Steps */}
            <div className="space-y-4 lg:space-y-[22px]">
              <div className="border-t border-[#ffffff0c] pt-4 lg:pt-[16px] pb-4 lg:pb-[16px] px-4 lg:px-[20px]">
                <div className="flex justify-between items-end mb-4 lg:mb-[26px]">
                  <span 
                    className="text-[18px] lg:text-[20px] font-semibold leading-relaxed lg:leading-[24px] text-left capitalize text-[#4169e1]"
                    style={{ fontFamily: 'Lato' }}
                  >
                    Step 01
                  </span>
                  <img 
                    src="/images/img_icon.svg" 
                    alt="Step 1"
                    className="w-4 lg:w-[20px] h-4 lg:h-[20px]"
                  />
                </div>
                <p 
                  className="text-[14px] lg:text-[16px] font-normal leading-relaxed lg:leading-[30px] text-left text-[#cccccc]"
                  style={{ fontFamily: 'Lato' }}
                >
                  Write to us by filling the form with your query and contact<br />
                  details. 💡
                </p>
              </div>

              <div className="border-t border-[#ffffff0c] pt-4 lg:pt-[16px] pb-4 lg:pb-[16px] px-4 lg:px-[20px]">
                <div className="flex justify-between items-end">
                  <span 
                    className="text-[18px] lg:text-[20px] font-semibold leading-relaxed lg:leading-[24px] text-left capitalize text-[#d9d9d9]"
                    style={{ fontFamily: 'Lato' }}
                  >
                    Step 02
                  </span>
                  <img 
                    src="/images/img_icon_white_a700.svg" 
                    alt="Step 2"
                    className="w-4 lg:w-[20px] h-4 lg:h-[20px]"
                  />
                </div>
              </div>

              <div className="border-t border-[#ffffff0c] pt-4 lg:pt-[16px] pb-4 lg:pb-[16px] px-4 lg:px-[20px]">
                <div className="flex justify-between items-start">
                  <span 
                    className="text-[18px] lg:text-[20px] font-semibold leading-relaxed lg:leading-[24px] text-left capitalize text-[#d9d9d9]"
                    style={{ fontFamily: 'Lato' }}
                  >
                    Step 03
                  </span>
                  <img 
                    src="/images/img_icon_white_a700.svg" 
                    alt="Step 3"
                    className="w-4 lg:w-[20px] h-4 lg:h-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="w-full lg:w-[58%]">
            <div className="bg-[#1b1e22] rounded-lg p-6 lg:p-[20px]">
              <h3 
                className="text-[24px] lg:text-[28px] font-medium leading-tight lg:leading-[31px] text-center text-[#d9d9d9] mb-8 lg:mb-[40px]"
                style={{ fontFamily: 'Oswald' }}
              >
                Make a Free Consulting
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-[20px] px-4 lg:px-[44px] pb-8 lg:pb-[40px]">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[20px]">
                  <div>
                    <label 
                      className="block text-[12px] lg:text-[14px] font-medium leading-snug lg:leading-[17px] text-left capitalize text-[#d9d9d9] mb-2 lg:mb-[8px]"
                      style={{ fontFamily: 'Lato' }}
                    >
                      Full Name *
                    </label>
                    <EditText
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full px-3 lg:px-[12px] py-2 lg:py-[12px] text-[12px] lg:text-[14px] font-normal leading-snug text-left text-[#ffffff66] bg-[#ffffff0a] border border-[#ffffff0c] rounded-sm"
                      style={{ fontFamily: 'Lato' }}
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-[12px] lg:text-[14px] font-medium leading-snug lg:leading-[17px] text-left capitalize text-[#d9d9d9] mb-2 lg:mb-[8px]"
                      style={{ fontFamily: 'Lato' }}
                    >
                      Email Address *
                    </label>
                    <EditText
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 lg:px-[12px] py-2 lg:py-[12px] text-[12px] lg:text-[14px] font-normal leading-snug text-left text-[#ffffff66] bg-[#ffffff0a] border border-[#ffffff0c] rounded-sm"
                      style={{ fontFamily: 'Lato' }}
                    />
                  </div>
                </div>

                {/* Phone Numbers Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[20px]">
                  <div>
                    <label 
                      className="block text-[12px] lg:text-[14px] font-medium leading-snug lg:leading-[17px] text-left capitalize text-[#d9d9d9] mb-2 lg:mb-[8px]"
                      style={{ fontFamily: 'Lato' }}
                    >
                      Phone Number
                    </label>
                    <div className="flex border border-[#a6a6a633] rounded-sm bg-[#ffffff05]">
                      <div className="flex items-center px-2 lg:px-[8px] py-3 lg:py-[18px] border-r border-[#a6a6a633] bg-[#ffffff05]">
                        <img 
                          src="/images/img_background.png" 
                          alt="India flag"
                          className="w-3 lg:w-[16px] h-2 lg:h-[10px] mr-2"
                        />
                        <span 
                          className="text-[12px] lg:text-[14px] font-normal leading-snug text-left text-[#dddddd]"
                          style={{ fontFamily: 'Lato' }}
                        >
                          +91
                        </span>
                      </div>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="flex-1 px-3 lg:px-[10px] py-3 lg:py-[18px] text-[12px] lg:text-[14px] font-normal leading-snug text-left text-[#dddddd] bg-transparent border-0 focus:outline-none"
                        style={{ fontFamily: 'Lato' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label 
                      className="block text-[12px] lg:text-[14px] font-medium leading-snug lg:leading-[17px] text-left capitalize text-[#d9d9d9] mb-2 lg:mb-[6px]"
                      style={{ fontFamily: 'Lato' }}
                    >
                      WhatsApp Number
                    </label>
                    <div className="flex border border-[#a6a6a633] rounded-sm bg-[#ffffff05]">
                      <div className="flex items-center px-2 lg:px-[8px] py-3 lg:py-[18px] border-r border-[#a6a6a633] bg-[#ffffff05]">
                        <img 
                          src="/images/img_background.png" 
                          alt="India flag"
                          className="w-3 lg:w-[16px] h-2 lg:h-[10px] mr-2"
                        />
                        <span 
                          className="text-[12px] lg:text-[14px] font-normal leading-snug text-left text-[#dddddd]"
                          style={{ fontFamily: 'Lato' }}
                        >
                          +91
                        </span>
                      </div>
                      <input
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                        className="flex-1 px-3 lg:px-[10px] py-3 lg:py-[18px] text-[12px] lg:text-[14px] font-normal leading-snug text-left text-[#dddddd] bg-transparent border-0 focus:outline-none"
                        style={{ fontFamily: 'Lato' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label 
                    className="block text-[12px] lg:text-[14px] font-medium leading-snug lg:leading-[17px] text-left capitalize text-[#d9d9d9] mb-2 lg:mb-[6px]"
                    style={{ fontFamily: 'Lato' }}
                  >
                    Message or Query
                  </label>
                  <TextArea
                    placeholder="Tell us about your project or ask us any query.."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    className="w-full px-3 lg:px-[12px] py-2 lg:py-[12px] text-[12px] lg:text-[14px] font-normal leading-snug text-left text-[#ffffff66] bg-[#ffffff0a] border border-[#ffffff0c] rounded-sm resize-vertical"
                    style={{ fontFamily: 'Lato' }}
                  />
                </div>

                {/* Agreement Checkbox */}
                <div className="flex items-start gap-3 lg:gap-[12px]">
                  <div className="w-4 lg:w-[18px] h-4 lg:h-[18px] border border-[#ffffff4c] rounded-sm bg-[#ffffff0c] mt-1 flex-shrink-0"></div>
                  <div>
                    <p 
                      className="text-[12px] lg:text-[14px] font-medium leading-snug lg:leading-[17px] text-left capitalize text-[#ffffffcc]"
                      style={{ fontFamily: 'Lato' }}
                    >
                      I agree to receive SMS notifications about my consultation appointments
                    </p>
                    <p 
                      className="text-[10px] lg:text-[11px] font-medium leading-tight lg:leading-[14px] text-left capitalize text-[#ffffff99] mt-1"
                      style={{ fontFamily: 'Lato' }}
                    >
                      (Message & data rates may apply. Reply STOP to opt out.)
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  className="w-full px-8 lg:px-[52px] py-3 lg:py-[12px] text-base font-bold leading-tight lg:leading-[20px] text-center text-white bg-[#4169e1] rounded-lg hover:bg-[#5a7ae8] transition-all duration-200 flex items-center justify-center gap-2 lg:gap-[10px] mt-8 lg:mt-[36px]"
                  style={{ fontFamily: 'Lato' }}
                >
                  <span>Send Message</span>
                  <img 
                    src="/images/img_svg_white_a700.svg" 
                    alt="Send"
                    className="w-4 lg:w-[18px] h-4 lg:h-[18px]"
                  />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection