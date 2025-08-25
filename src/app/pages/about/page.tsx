'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const handeRouter = ()=>{
    router.push("/pages/men")

  }

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideWidth {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-scale-in {
          animation: scaleIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-slide-width {
          animation: slideWidth 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s forwards;
          transform-origin: left;
        }

        .stagger-1 {
          animation-delay: 0.1s;
        }
        
        .stagger-2 {
          animation-delay: 0.2s;
        }
        
        .stagger-3 {
          animation-delay: 0.3s;
        }
        
        .stagger-4 {
          animation-delay: 0.4s;
        }

        .hover-lift:hover {
          transform: translateY(-2px);
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .group:hover .group-hover-transform {
          transform: scale(1.02);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 py-16 lg:py-24">
            {/* Left Content */}
            <div className={`flex flex-col justify-center order-2 lg:order-1 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className={`mb-6 ${isLoaded ? 'animate-fade-in-up' : ''}`}>
                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium tracking-wider uppercase rounded-full">
                  About WEARORA
                </span>
              </div>
              
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 ${isLoaded ? 'animate-fade-in-up stagger-1' : ''}`}>
                Express Your{' '}
                <span className="relative">
                  True Aura
                  <div className={`absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 to-gray-600 ${isLoaded ? 'animate-slide-width' : 'scale-x-0'}`} />
                </span>
              </h1>
              
              <p className={`text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg ${isLoaded ? 'animate-fade-in-up stagger-2' : ''}`}>
                Discover clothing that empowers your confidence and reflects your inner essence. 
                Each piece is designed to amplify your personal energy and authentic self.
              </p>
              
              <div className={`flex flex-wrap gap-4 ${isLoaded ? 'animate-fade-in-up stagger-3' : ''}`}>
                <button onClick={handeRouter} className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 hover-lift hover-scale hover:shadow-lg">
                  Discover Collection
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 hover-lift">
                  Our Story
                </button>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className={`order-1 lg:order-2 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="grid grid-cols-3 gap-4 h-full">
                {/* Large Main Image */}
                <div className={`col-span-2 relative overflow-hidden rounded-2xl bg-gray-100 min-h-[400px] lg:min-h-[500px] group ${isLoaded ? 'animate-scale-in' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent z-10" />
                  <Image
                    src="/men/large.jpg"
                    alt="WEARORA Fashion Hero Shot"
                    fill
                    className="object-cover group-hover-transform transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                  />
                </div>

                {/* Two Smaller Images Stacked */}
                <div className="space-y-4">
                  <div className={`relative overflow-hidden rounded-xl bg-gray-100 h-[190px] lg:h-[240px] group ${isLoaded ? 'animate-scale-in stagger-1' : ''}`}>
                    <Image
                      src="/men/smalrghit1.jpg"
                      alt="WEARORA Lifestyle Image 1"
                      fill
                      className="object-cover group-hover-transform transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                    />
                  </div>
                  
                  <div className={`relative overflow-hidden rounded-xl bg-gray-100 h-[190px] lg:h-[240px] group ${isLoaded ? 'animate-scale-in stagger-2' : ''}`}>
                    <Image
                      src="/men/girlabout.png"
                      alt="WEARORA Lifestyle Image 2"
                      fill
                      className="object-cover group-hover-transform transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
<section className="py-16 lg:py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left Image */}
      <div
        className={`relative overflow-hidden rounded-2xl bg-gray-200 min-h-[400px] lg:min-h-[500px] group ${
          isLoaded ? 'animate-fade-in-left' : ''
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/30 to-transparent z-10" />
        <img
          src="/men/vision.jpg"
          alt="Brand Vision"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div
        className={`space-y-6 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className={`${isLoaded ? 'animate-fade-in-right' : ''}`}>
          <span className="inline-block px-4 py-2 bg-white text-gray-700 text-sm font-medium tracking-wider uppercase rounded-full shadow-sm">
            Our Philosophy
          </span>
        </div>

        <h2
          className={`text-3xl lg:text-4xl font-bold text-gray-900 leading-tight ${
            isLoaded ? 'animate-fade-in-right stagger-1' : ''
          }`}
        >
          Our Vision:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
            Wear Your Aura
          </span>
        </h2>

        <p
          className={`text-lg text-gray-600 leading-relaxed ${
            isLoaded ? 'animate-fade-in-right stagger-2' : ''
          }`}
        >
          At WEARORA, we believe clothing is more than fabric - it's an expression
          of your inner confidence, your personal energy, and your unique aura. We
          create pieces that empower you to showcase your authentic self to the
          world.
        </p>

        <p
          className={`text-lg text-gray-600 leading-relaxed ${
            isLoaded ? 'animate-fade-in-right stagger-3' : ''
          }`}
        >
          Every thread tells a story of empowerment. Every design reflects the
          confidence within. When you wear WEARORA, you're not just dressed -
          you're armored with authenticity and radiating your true essence.
        </p>

        <div
          className={`pt-4 ${isLoaded ? 'animate-fade-in-right stagger-4' : ''}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Confidence</h4>
              <p className="text-sm text-gray-600">
                Designs that boost your inner strength
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Authenticity</h4>
              <p className="text-sm text-gray-600">
                Express your true self through style
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Quality</h4>
              <p className="text-sm text-gray-600">
                Premium materials and craftsmanship
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Innovation</h4>
              <p className="text-sm text-gray-600">
                Forward-thinking design philosophy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Banner CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/60" />
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 opacity-90" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`space-y-8 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className={`text-4xl lg:text-5xl font-bold text-white leading-tight ${isLoaded ? 'animate-fade-in-up' : ''}`}>
              Ready to Embrace Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Signature Style?
              </span>
            </h2>
            
            <p className={`text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto ${isLoaded ? 'animate-fade-in-up stagger-1' : ''}`}>
              Transform your wardrobe and unleash your inner confidence. 
              Discover pieces that speak to your soul and amplify your aura.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 ${isLoaded ? 'animate-fade-in-up stagger-2' : ''}`}>
              <button className="bg-white text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover-lift hover-scale hover:shadow-2xl min-w-[200px]">
                Explore Collection
              </button>
              
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover-lift hover-scale min-w-[200px]">
                Book Consultation
              </button>
            </div>
            
            <div className={`pt-8 border-t border-white/20 ${isLoaded ? 'animate-fade-in-up stagger-3' : ''}`}>
              <p className="text-sm text-gray-400 mb-4">Join thousands who've found their signature style</p>
              <div className="flex justify-center items-center space-x-8 text-white/60">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10K+</div>
                  <div className="text-xs">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-xs">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9★</div>
                  <div className="text-xs">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;