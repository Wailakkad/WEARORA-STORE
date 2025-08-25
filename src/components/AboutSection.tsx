"use client"

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface AboutSectionProps {
  imageUrl: string;
  imageAlt: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  imageUrl,
  imageAlt
}) => {
  const router = useRouter();
  
  const handleNavigate = () => {
    router.push('/pages/about');
  };
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden rounded-lg shadow-2xl">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              className="object-cover object-center"
              priority
            />
          </div>
          
          {/* Right Column - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
              About WEARORA
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-700 max-w-prose">
              <p>
                At WEARORA, we believe clothing is more than fabric - it's an expression of your inner confidence, your personal energy, and your unique aura. We create pieces that empower you to showcase your authentic self to the world.
              </p>
              
              <p>
                Our carefully curated collections blend contemporary design with timeless elegance, ensuring that every piece not only looks exceptional but feels like an extension of who you are. From bold statement pieces to versatile everyday essentials, each garment is crafted to enhance your natural radiance.
              </p>
              
              <p>
                We're more than a fashion brand - we're a community of individuals who understand that true style comes from within. When you wear WEARORA, you're not just wearing clothes; you're wearing confidence, creativity, and the courage to be authentically you.
              </p>
            </div>
            
            <div className="pt-4">
              <button 
                onClick={handleNavigate}
                className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-300"
              >
                MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;