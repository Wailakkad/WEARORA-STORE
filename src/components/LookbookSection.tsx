'use client';
import React, { useState, useRef, useEffect } from 'react';

const LookbookSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const lookbookItems = [
    {
      id: 1,
      title: "Ethereal Minimalism",
      subtitle: "Spring Collection 2024",
      description: "Where light meets fabric in perfect harmony",
      image: "/look3.jpeg",
      category: "Editorial"
    },
    {
      id: 2,
      title: "Urban Luxe",
      subtitle: "Metropolitan Series",
      description: "Sophistication redefined for the modern urbanite",
      image: "/look7.jpeg",
      category: "Lifestyle"
    },
    {
      id: 3,
      title: "Timeless Elegance",
      subtitle: "Heritage Collection",
      description: "Classic silhouettes with contemporary vision",
      image: "/look6.jpeg",
      category: "Editorial"
    },
    {
      id: 4,
      title: "Avant-Garde Vision",
      subtitle: "Future Forms",
      description: "Pushing boundaries of fashion and art",
      image: "/look4.jpeg",
      category: "Conceptual"
    },
    {
      id: 5,
      title: "Serene Moments",
      subtitle: "Quiet Luxury",
      description: "Understated opulence in every detail",
      image: "/look10.jpeg",
      category: "Lifestyle"
    },
    {
      id: 6,
      title: "Bold Statements",
      subtitle: "Power Dressing",
      description: "Confidence woven into every thread",
      image: "/look9.jpeg",
      category: "Editorial"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 197, 253, 0.1) 0%, rgba(30, 41, 59, 0.8) 50%, rgba(15, 23, 42, 0.95) 100%)`
      }}
    >
      {/* Ambient glow effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <span className="text-xs font-light tracking-[0.2em] text-slate-400 uppercase mb-4 block">
              Lookbook
            </span>
            <h2 className="text-4xl lg:text-6xl font-extralight text-white mb-6 tracking-tight">
              Visual
              <span className="block font-thin bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Narratives
              </span>
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto"></div>
          </div>
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {lookbookItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative cursor-pointer transition-all duration-700 ease-out
                ${index % 2 === 0 ? 'lg:mt-12' : ''}
                ${index === 1 || index === 4 ? 'lg:col-span-2' : 'lg:col-span-1'}
              `}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-cyan-500/20 rounded-2xl transition-opacity duration-500 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-6 left-6">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-light tracking-wider uppercase text-white/80 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className={`transform transition-all duration-500 ${
                    hoveredItem === item.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-90'
                  }`}>
                    <p className="text-xs font-light tracking-[0.15em] text-slate-300 uppercase mb-2">
                      {item.subtitle}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-light text-white mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 font-light leading-relaxed mb-4 opacity-90">
                      {item.description}
                    </p>
                    
                    {/* View more link */}
                    <div className={`flex items-center text-xs font-light tracking-wider uppercase text-blue-400 transition-all duration-300 ${
                      hoveredItem === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}>
                      <span>Explore Collection</span>
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover glow border */}
                <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                  hoveredItem === item.id 
                    ? 'shadow-2xl shadow-blue-500/25 ring-1 ring-blue-400/30' 
                    : 'shadow-lg shadow-black/25'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-20">
          <button className="group relative inline-flex items-center px-8 py-4 text-sm font-light tracking-[0.1em] uppercase text-white bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-full border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
            <span className="relative z-10">View Complete Lookbook</span>
            <svg className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-violet-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
    </section>
  );
};

export default LookbookSection;