'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Search, Filter, X, ExternalLink, ShoppingBag, Star } from 'lucide-react';

// Import products from local file
import { products } from '@/lib/women';

// TypeScript interfaces
interface Product {
  id: number;
  name: string;
  category: string;
  aura: string;
  price: number;
  sizes: string[];
  mainImage: string;
  description: string;
  link: string;
  details: Array<{
    image: string;
    alt: string;
    description: string;
  }>;
}

interface FilterState {
  categories: string[];
  auras: string[];
  priceRange: [number, number];
}

const MensClothingShop: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    auras: [],
    priceRange: [0, 100]
  });

  // Get unique categories and auras
  const categories = [...new Set(products.map(p => p.category))];
  const auras = [...new Set(products.map(p => p.aura))];

  // Filter products based on search and filters
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filters.categories.length === 0 || 
                           filters.categories.includes(product.category);
    
    const matchesAura = filters.auras.length === 0 || 
                       filters.auras.includes(product.aura);
    
    const matchesPrice = product.price >= filters.priceRange[0] && 
                        product.price <= filters.priceRange[1];

    return matchesSearch && matchesCategory && matchesAura && matchesPrice;
  });

  // Handle category filter change
  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  // Handle aura filter change
  const handleAuraChange = (aura: string) => {
    setFilters(prev => ({
      ...prev,
      auras: prev.auras.includes(aura)
        ? prev.auras.filter(a => a !== aura)
        : [...prev.auras, aura]
    }));
  };

  // Open product modal
  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close product modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      categories: [],
      auras: [],
      priceRange: [0, 100]
    });
    setSearchTerm('');
  };

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle escape key for modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isModalOpen]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
          <p className="text-gray-600 text-lg">Loading premium collection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="h-8 w-8 text-gray-900" />
              <h1 className="text-2xl font-bold text-gray-900">AURA WEAR</h1>
            </div>
            
            {/* Mobile filter button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              <Filter className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className={`lg:w-64 ${isSidebarOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Clear All
                </button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Products
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Auras */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Aura Styles</h3>
                <div className="space-y-2">
                  {auras.map(aura => (
                    <label key={aura} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.auras.includes(aura)}
                        onChange={() => handleAuraChange(aura)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{aura}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters(prev => ({
                      ...prev,
                      priceRange: [prev.priceRange[0], parseInt(e.target.value)]
                    }))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>$0</span>
                    <span>${filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
              </h2>
              <div className="text-sm text-gray-500">
                Showing premium streetwear collection
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500 text-lg">No products found</p>
                <p className="text-gray-400">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    onClick={() => openModal(product)}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  >
                    <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                      <Image
                        src={product.mainImage}
                        alt={product.name}
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                        <span className="text-xs font-medium text-gray-700">{product.aura}</span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                      <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-current text-yellow-400" />
                          <span className="text-sm text-gray-600">4.8</span>
                        </div>
                      </div>
                      
                      <div className="mt-2 flex flex-wrap gap-1">
                        {product.sizes.slice(0, 4).map(size => (
                          <span key={size} className="px-2 py-1 bg-gray-100 text-xs rounded">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Images */}
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-4 relative overflow-hidden rounded-lg">
                    <Image
                      src={selectedProduct.mainImage}
                      alt={selectedProduct.name}
                      width={600}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Detail Images */}
                  <div className="grid grid-cols-3 gap-2">
                    {selectedProduct.details.map((detail, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg">
                        <Image
                          src={detail.image}
                          alt={detail.alt}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {selectedProduct.aura}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
                        {selectedProduct.category}
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-4">${selectedProduct.price}</p>
                    <p className="text-gray-600 text-lg leading-relaxed">{selectedProduct.description}</p>
                  </div>
                  
                  {/* Sizes */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Sizes</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.sizes.map(size => (
                        <span key={size} className="px-4 py-2 border border-gray-300 rounded-md hover:border-gray-400 transition-colors">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Details</h3>
                    <div className="space-y-3">
                      {selectedProduct.details.map((detail, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-600">{detail.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="pt-6">
                    <a
                      href={selectedProduct.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>View on TeePublic</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MensClothingShop;