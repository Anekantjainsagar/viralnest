'use client';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Button from '../components/ui/Button';
import EditText from '../components/ui/EditText';
import TextArea from '../components/ui/TextArea';

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const ContactSection = () => {
  const [popup, setPopup] = useState({ visible: false, message: '', type: '' });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    message: '',
    agreeToSMS: false,
  });

  const [openStep, setOpenStep] = useState(0);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setFormData((prev) => ({
      ...prev,
      agreeToSMS: !prev.agreeToSMS,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, phone, whatsapp, message } = formData;

    if (!fullName || !email || !phone || !whatsapp || !message) {
      setPopup({
        visible: true,
        message: 'Please fill all fields before submitting.',
        type: 'error',
      });
      return;
    }

    const templateParams = { name: fullName, email, phone, whatsapp, message };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      (response) => {
        setPopup({
          visible: true,
          message: 'Your message has been sent successfully!',
          type: 'success',
        });

        setFormData({
          fullName: '',
          email: '',
          phone: '',
          whatsapp: '',
          message: '',
          agreeToSMS: false,
        });
      },
      (err) => {
        setPopup({
          visible: true,
          message: 'Oops! Something went wrong. Please try again later.',
          type: 'error',
        });
      }
    );
  };

  const steps = [
    {
      step: 'Step 01',
      text: 'Write to us by filling the form with your query and contact details. 💡',
    },
    {
      step: 'Step 02',
      text: 'Our team will review your request and get back to you with the best solution. 📞',
    },
    {
      step: 'Step 03',
      text: 'We’ll set up a free consultation and start transforming your business. 🚀',
    },
  ];

  return (
    <section className="w-full mt-16 lg:mt-[106px]">
      {/* Popup */}
      {popup.visible && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50`}
          onClick={() => setPopup({ ...popup, visible: false })}
        >
          <div
            className={`bg-[#1b1e22] text-white p-6 rounded-lg shadow-lg max-w-sm w-full ${
              popup.type === 'success' ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-center text-lg">{popup.message}</p>
            <button
              onClick={() => setPopup({ ...popup, visible: false })}
              className="mt-4 w-full py-2 bg-[#4169e1] rounded hover:bg-[#5a7ae8] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[48px]">
          {/* Left Section */}
          <div className="w-full lg:w-[42%]">
            <h2
              className="text-[36px] md:text-[48px] lg:text-[62px] font-bold text-[#d9d9d9] mb-4"
              style={{ fontFamily: 'Oswald' }}
            >
              Contact
            </h2>
            <p
              className="text-[15px] md:text-[16px] lg:text-[18px] text-[#cccccc] leading-relaxed mb-6"
              style={{ fontFamily: 'Lato' }}
            >
              We're here to answer your questions and help determine which of our services best fits
              your needs.
            </p>

            <div className="border border-[#4169e1] px-4 py-2 inline-flex items-center gap-2 mb-6">
              <span
                className="text-[16px] md:text-[18px] font-medium text-[#4169e1]"
                style={{ fontFamily: 'Lato' }}
              >
                Call Us Now:
              </span>
              <span
                className="text-[16px] md:text-[18px] font-medium text-[#d9d9d9]"
                style={{ fontFamily: 'Lato' }}
              >
                +91 6386174003
              </span>
            </div>

            {/* Accordion Steps */}
            <div className="space-y-6">
              {steps.map((s, i) => (
                <div key={i} className="border-t border-[#ffffff0c] pt-4 px-2 sm:px-4">
                  <div className="flex justify-between items-center mb-3">
                    <span
                      className={`text-[16px] md:text-[18px] font-semibold cursor-pointer ${
                        openStep === i ? 'text-[#4169e1]' : 'text-[#d9d9d9]'
                      }`}
                      style={{ fontFamily: 'Lato' }}
                      onClick={() => setOpenStep(openStep === i ? null : i)}
                    >
                      {s.step}
                    </span>
                    <button onClick={() => setOpenStep(openStep === i ? null : i)}>
                      <img
                        src={
                          openStep === i
                            ? '/images/img_icon.svg' // minus/active icon
                            : '/images/img_icon_white_a700.svg' // plus/inactive icon
                        }
                        alt={s.step}
                        className="w-4 h-4 md:w-5 md:h-5"
                      />
                    </button>
                  </div>

                  {openStep === i && (
                    <p
                      className="text-[14px] md:text-[15px] text-[#cccccc] leading-relaxed transition-all duration-300"
                      style={{ fontFamily: 'Lato' }}
                    >
                      {s.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="w-full lg:w-[58%]">
            <div className="bg-[#1b1e22] rounded-lg p-6 md:p-8 lg:p-10">
              <h3
                className="text-[22px] md:text-[24px] lg:text-[28px] font-medium text-center text-[#d9d9d9] mb-8"
                style={{ fontFamily: 'Oswald' }}
              >
                Make a Free Consulting
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 px-2 sm:px-6 md:px-8">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-[#d9d9d9] mb-2 block">Full Name *</label>
                    <EditText
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full px-3 py-2 text-sm text-[#ffffffcc] bg-[#ffffff0a] border border-[#ffffff0c] rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#d9d9d9] mb-2 block">Email Address *</label>
                    <EditText
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 text-sm text-[#ffffffcc] bg-[#ffffff0a] border border-[#ffffff0c] rounded-sm"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-[#d9d9d9] mb-2 block">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 text-sm text-[#ffffffcc] bg-[#ffffff0a] border border-[#ffffff0c] rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#d9d9d9] mb-2 block">WhatsApp Number</label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      className="w-full px-3 py-2 text-sm text-[#ffffffcc] bg-[#ffffff0a] border border-[#ffffff0c] rounded-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm text-[#d9d9d9] mb-2 block">Message or Query</label>
                  <TextArea
                    placeholder="Tell us about your project or ask us any query.."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 text-sm text-[#ffffffcc] bg-[#ffffff0a] border border-[#ffffff0c] rounded-sm resize-y"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={formData.agreeToSMS}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 mt-1 accent-[#4169e1]"
                  />
                  <div>
                    <p className="text-sm text-[#ffffffcc]">
                      I agree to receive SMS notifications about my consultation appointments
                    </p>
                    <p className="text-xs text-[#ffffff99] mt-1">
                      (Message & data rates may apply. Reply STOP to opt out.)
                    </p>
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full py-3 font-bold text-white bg-[#4169e1] rounded-lg hover:bg-[#5a7ae8] transition"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
