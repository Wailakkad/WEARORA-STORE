"use client";
import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Star, ArrowRight, Shirt, Watch, Glasses, Crown, Gem, Palette, LucideIcon } from 'lucide-react';

// Interface for form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  privacyAccepted: boolean;
}

// Interface for form validation errors
interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  privacyAccepted?: string;
}

// Interface for team member data
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

// Interface for floating icon configuration
interface FloatingIcon {
  Icon: LucideIcon;
  delay: string;
  side: 'left' | 'right';
  top: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    privacyAccepted: false
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.privacyAccepted) newErrors.privacyAccepted = 'You must accept the privacy policy';
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Handle form submission here
      alert('Thank you for reaching out! We\'ll get back to you soon.');
      setFormData({ firstName: '', lastName: '', email: '', message: '', privacyAccepted: false });
    } else {
      setErrors(newErrors);
    }
  };

  const teamMembers: TeamMember[] = [
    { id: 1, name: "Sarah Chen", role: "Style Consultant", image: "/men/aura1.png" },
    { id: 2, name: "Marcus Rivera", role: "Fashion Director", image: "/men/back.png" },
    { id: 3, name: "Elena Kozlov", role: "Personal Stylist", image: "/men/blue4.png" },
    { id: 4, name: "James Park", role: "Brand Consultant", image: "/men/cemter2.png" },
    { id: 5, name: "Aria Thompson", role: "Creative Lead", image: "/men/auraHoodi4.png" },
    { id: 6, name: "David Kumar", role: "Style Advisor", image: "/men/front2.jpeg" },
  ];

  const floatingIcons: FloatingIcon[] = [
    { Icon: Shirt, delay: '0s', side: 'left', top: '10%' },
    { Icon: Watch, delay: '2s', side: 'right', top: '20%' },
    { Icon: Glasses, delay: '4s', side: 'left', top: '40%' },
    { Icon: Crown, delay: '1s', side: 'right', top: '50%' },
    { Icon: Gem, delay: '3s', side: 'left', top: '70%' },
    { Icon: Palette, delay: '5s', side: 'right', top: '80%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 py-12 relative overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.side === 'left' ? '-left-0' : '-right-0'} opacity-10 text-black`}
          style={{ 
            top: item.top,
            animation: `float 6s ease-in-out infinite`,
            animationDelay: item.delay,
          } as React.CSSProperties}
        >
          <item.Icon size={120} />
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) translateX(-5px) rotate(-3deg);
          }
          75% {
            transform: translateY(-15px) translateX(8px) rotate(2deg);
          }
        }
      `}</style>

      {/* Main Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">Contact us</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                We'd love to hear from you. Please let us know how we can help you 
                discover and embrace your personal style.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-xl">
                    <Mail className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Reach out via email for style consultations and personalized advice.
                    </p>
                    <a href="mailto:style@wearora.com" 
                       className="text-gray-900 font-medium hover:text-gray-700 transition-colors">
                      style@wearora.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-xl">
                    <Phone className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Call us for immediate styling advice from 9 AM to 6 PM EST.
                    </p>
                    <a href="tel:+12125551001" 
                       className="text-gray-900 font-medium hover:text-gray-700 transition-colors">
                      +1 (212) 555 1001
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Mobile</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Text us for quick style tips or to schedule virtual consultations.
                    </p>
                    <a href="tel:+12125551002" 
                       className="text-gray-900 font-medium hover:text-gray-700 transition-colors">
                      +1 (212) 555 1002
                    </a>
                  </div>
                </div>
              </div>

              {/* Office */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-xl">
                    <MapPin className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Visit us at our showroom for in-person styling sessions.
                    </p>
                    <address className="text-gray-900 font-medium not-italic leading-relaxed">
                      42 Style Street, Fashion<br />
                      District,<br />
                      New York, NY 10001
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Write us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors ${
                      errors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-200'
                    }`}
                    placeholder="John"
                    aria-describedby={errors.firstName ? "firstName-error" : undefined}
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors ${
                      errors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-200'
                    }`}
                    placeholder="Doe"
                    aria-describedby={errors.lastName ? "lastName-error" : undefined}
                  />
                  {errors.lastName && (
                    <p id="lastName-error" className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
                  }`}
                  placeholder="john@example.com"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors resize-none ${
                    errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200'
                  }`}
                  placeholder="Tell us about your style goals and how we can help you express your unique aura..."
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Privacy Policy */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacyAccepted"
                  name="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500"
                />
                <label htmlFor="privacyAccepted" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-gray-900 hover:underline font-medium">
                    Privacy Policy
                  </a>
                </label>
              </div>
              {errors.privacyAccepted && (
                <p className="text-sm text-red-600 -mt-2">{errors.privacyAccepted}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-medium hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all duration-200 group"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Send</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section with Team */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Team Member Cards in Circular Layout */}
            <div className="relative mb-16 h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                {teamMembers.map((member, index) => {
                  const angle = (index * 60 - 90) * (Math.PI / 180);
                  const radius = 180;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={member.id}
                      className="absolute w-36 h-38 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      } as React.CSSProperties}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-2xl object-cover group-hover:shadow-xl transition-shadow"
                      />
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap">
                        <div className="font-medium">{member.name}</div>
                        <div className="text-gray-300 text-xs">{member.role}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-gray-600 text-sm">4.9 average</span>
            </div>

            {/* Main CTA Text */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ready to Elevate<br />
              Your Style?
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our community embracing confidence through clothing, premium styling,<br />
              and authentic self-expression.
            </p>

            {/* CTA Button */}
            <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all duration-200 group">
              <span className="flex items-center space-x-2">
                <span>Get Started for Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;