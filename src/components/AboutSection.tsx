import React from 'react';
import Image from 'next/image';

interface AboutSectionProps {
  imageUrl: string;
  imageAlt: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  imageUrl,
  imageAlt
}) => {
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
              About The Band
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-700 max-w-prose">
              <p>
                We are a passionate collective of musicians united by our love for creating unforgettable sonic experiences. Born from late-night jam sessions and a shared vision of pushing musical boundaries, our band has evolved into something truly special.
              </p>
              
              <p>
                Our sound is a unique fusion that draws from classic rock foundations while embracing modern electronic elements and world music influences. Each member brings their own musical heritage and expertise, creating a rich tapestry of sound that resonates with audiences across generations.
              </p>
              
              <p>
                From intimate acoustic sets to high-energy stadium performances, we pride ourselves on delivering authentic, emotionally charged music that connects with people on a deeper level. Every song tells a story, every performance is a journey.
              </p>
            </div>
            
            <div className="pt-4">
              <button className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-300">
                Discover Our Music
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;