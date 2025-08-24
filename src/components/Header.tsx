'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'

// Interface for product data structure
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
}

// Interface for SearchComponent props
interface SearchComponentProps {
  isOpen: boolean;
  onToggle: () => void;
}

// Interface for ModernMobileMenu props
interface ModernMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: string[];
}

// Interface for AnimatedMenuButton props
interface AnimatedMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

// Interface for NavLink props
interface NavLinkProps {
  link: string;
  isScrolled: boolean;
}

// Products data
const products: Product[] = [
  // 1. Hoodies
  {
    id: 1,
    name: "Your Aura Is Louder Than Your Words – Minimalist Motivational Hoodie / Tee Design | Wearora Hoodie",
    category: "Hoodies",
    aura: "Calm Aura",
    price: 34.56,
    sizes: ["S", "M", "L", "XL"],
    mainImage: "/men/main.png",
    description: "Premium comfort meets timeless design.",
    link: "https://www.teepublic.com/hoodie/79262648-your-aura-is-louder-than-your-words-minimalist-mot",
  },
  {
    id: 2,
    name: "Wearora Aura Energy Motivation Graphic Tee Hoodie",
    category: "Hoodies",
    aura: "Urban Aura",
    price: 34.56,
    sizes: ["S", "M", "L", "XL"],
    mainImage: "/men/cemter2.png",
    description: "Street style hoodie for city confidence.",
    link: "https://www.teepublic.com/hoodie/79261519-wearora-aura-energy-motivation-graphic-tee",
  },
  {
    id: 3,
    name: "wearora Flame Logo Graphic Tee Hoodie",
    category: "Hoodies",
    aura: "Rebel Aura",
    price: 33.59,
    sizes: ["S", "M", "L", "XL"],
    mainImage: "/men/blue1.png",
    description: "Make a bold statement with the wearora Flame Logo Graphic Tee. Featuring a striking blue flame design that surrounds strong, stylized typography, this shirt is perfect for those who want to stand out with edgy and fiery style.",
    link: "https://www.teepublic.com/hoodie/79260361-wearora-flame-logo-graphic-tee",
  },
  {
    id: 23,
    name: "AURA Abstract Minimalist T-Shirt – Premium Streetwear Graphic Tee for Modern Style Hoodie",
    category: "Hoodies",
    aura: "Rebel Aura",
    price: 34.56,
    sizes: ["S", "M", "L", "XL"],
    mainImage: "/men/auraHoodi.png",
    description: "Discover the AURA Abstract Minimalist T-Shirt, where streetwear meets premium design.",
    link: "https://www.teepublic.com/hoodie/79278715-aura-abstract-minimalist-t-shirt-premium-streetwea",
  },
  // 2. T-Shirts
  {
    id: 4,
    name: "WEARORA Streetwear Flame Logo – Bold Fire Aura T-Shirt Design T-Shirt",
    category: "T-Shirts",
    aura: "Rebel Aura",
    price: 16.26,
    sizes: ["S", "M", "L", "XL"],
    mainImage: "/men/men1.png",
    description: "Step into confidence with the WEARORA Streetwear Flame Logo T-Shirt.",
    link: "https://www.teepublic.com/kids-t-shirt/79247960-wearora-streetwear-flame-logo-bold-fire-aura-t-shi",
  },
  {
    id: 5,
    name: "wearora Flame Logo Graphic Tee T-Shirt",
    category: "T-Shirts",
    aura: "Calm Aura",
    price: 16.26,
    sizes: ["S", "M", "L", "XL"],
    mainImage: "/men/men2.png",
    description: "Make a bold statement with the wearora Flame Logo Graphic Tee.",
    link: "https://www.teepublic.com/t-shirt/79260361-wearora-flame-logo-graphic-tee",
  },
  {
    id: 6,
    name: "Wearora Aura Energy Motivation Graphic Tee T-Shirt",
    category: "T-Shirts",
    aura: "Creative Aura",
    price: 16.26,
    sizes: ["S", "M", "L", "XL"],
    mainImage: "/men/men3.png",
    description: "Embrace your inner energy and motivation with the Wearora Aura Energy Graphic Tee.",
    link: "https://www.teepublic.com/t-shirt/79261519-wearora-aura-energy-motivation-graphic-tee?store_id=4018970",
  },
  {
    id: 22,
    name: "AURA Abstract Minimalist T-Shirt – Premium Streetwear Graphic Tee for Modern Style",
    category: "T-Shirts",
    aura: "Creative Aura",
    price: 16.26,
    sizes: ["S", "M", "L", "XL"],
    mainImage: "/men/aura1.png",
    description: "Discover the AURA Abstract Minimalist T-Shirt, where streetwear meets premium design.",
    link: "https://www.teepublic.com/t-shirt/79278715-aura-abstract-minimalist-t-shirt-premium-streetwea?store_id=4018970",
  },
  {
    id: 24,
    name: "Your Aura Is Louder Than Your Words – Minimalist Motivational Hoodie / Tee Design | Wearora T-Shirt",
    category: "T-Shirts",
    aura: "Creative Aura",
    price: 16.26,
    sizes: ["S", "M", "L", "XL"],
    mainImage: "/men/colors.png",
    description: "Elevate your style with the Your Aura Is Louder Than Your Words design.",
    link: "https://www.teepublic.com/t-shirt/79262648-your-aura-is-louder-than-your-words-minimalist-mot?store_id=4018970",
  }
]

const navLinks: string[] = [
  'Home' , 'Men', 'Women', 'Children', 'About', 'Lookbook', 'Contact'
]

const SearchComponent: React.FC<SearchComponentProps> = ({ isOpen, onToggle }) => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filteredResults, setFilteredResults] = useState<Product[]>([])
  const [isSearching, setIsSearching] = useState<boolean>(false)

  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true)
      const timer = setTimeout(() => {
        const results = products.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.aura.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setFilteredResults(results.slice(0, 6)) // Limit to 6 results
        setIsSearching(false)
      }, 300)
      return () => clearTimeout(timer)
    } else {
      setFilteredResults([])
      setIsSearching(false)
    }
  }, [searchQuery])

  const handleProductClick = (product: Product): void => {
    window.open(product.link, '_blank')
    setSearchQuery('')
    setFilteredResults([])
    onToggle()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value)
  }

  const handleClearSearch = (): void => {
    setSearchQuery('')
    setFilteredResults([])
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement
    target.style.display = 'none'
  }

  return (
    <div className="relative">
      {/* Search Icon Button */}
      <motion.button
        onClick={onToggle}
        whileHover={{ scale: 1.1, y: -1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center p-2.5 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors duration-200"
        aria-label="Search"
      >
        <Search size={20} className="text-gray-700" />
      </motion.button>

      {/* Search Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={onToggle}
            />
            
            {/* Search Panel */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.3 
              }}
              className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden z-50"
            >
              {/* Search Input */}
              <div className="p-4 border-b border-gray-100">
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Search products, categories, auras..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm transition-all duration-200"
                    autoFocus
                  />
                  {searchQuery && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onClick={handleClearSearch}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={16} />
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {isSearching ? (
                  <div className="p-4 text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="inline-block w-5 h-5 border-2 border-gray-300 border-t-gray-900 rounded-full"
                    />
                    <p className="text-sm text-gray-500 mt-2">Searching...</p>
                  </div>
                ) : filteredResults.length > 0 ? (
                  <div className="py-2">
                    {filteredResults.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleProductClick(product)}
                        className="flex items-center p-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150 mx-2 rounded-lg"
                      >
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                          <img 
                            src={product.mainImage} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                            onError={handleImageError}
                          />
                        </div>
                        <div className="ml-3 flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">
                            {product.name.length > 50 ? product.name.substring(0, 50) + '...' : product.name}
                          </h4>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
                              {product.category}
                            </span>
                            <span className="text-sm font-semibold text-gray-900">
                              ${product.price}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    {filteredResults.length === 6 && (
                      <div className="p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                        Showing first 6 results
                      </div>
                    )}
                  </div>
                ) : searchQuery.trim() ? (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <Search size={24} className="text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500">No products found for "{searchQuery}"</p>
                    <p className="text-xs text-gray-400 mt-1">Try different keywords</p>
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <Search size={24} className="text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500">Start typing to search products</p>
                    <p className="text-xs text-gray-400 mt-1">Search by name, category, or aura</p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

// Helper function to generate proper URLs
const getNavUrl = (link: string): string => {
  switch (link) {
    case 'Home':
      return '/'
    case 'Men':
      return '/pages/men'
    case 'Lookbook':
      return '/pages/lookbook'
    case 'New Products':
      return '/pages/new-products'
    default:
      return `/pages/${link.toLowerCase()}`
  }
}

// Modern Mobile Menu Component
const ModernMobileMenu: React.FC<ModernMobileMenuProps> = ({ isOpen, onClose, navLinks }) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: '0%',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40
      }
    }
  }

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring' as const,
        stiffness: 300,
        damping: 30
      }
    })
  }

  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={24} className="text-gray-700" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link}
                    href={getNavUrl(link)}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    onClick={onClose}
                    className="block px-4 py-4 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                  >
                    {link}
                  </motion.a>
                ))}
              </nav>

              {/* Action Icons - Only Search now */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-6 border-t border-gray-200"
              >
                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Search size={20} className="text-gray-700" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// Animated Hamburger Menu Button
const AnimatedMenuButton: React.FC<AnimatedMenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="lg:hidden relative p-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors"
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center">
        <motion.span
          className="w-6 h-0.5 bg-gray-900 block"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 2 : -2,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
        <motion.span
          className="w-6 h-0.5 bg-gray-900 block mt-1"
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? -10 : 0,
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        />
        <motion.span
          className="w-6 h-0.5 bg-gray-900 block mt-1"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -2 : 2,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </div>
    </motion.button>
  )
}

// Navigation Link with Hover Effects
const NavLink: React.FC<NavLinkProps> = ({ link, isScrolled }) => {
  return (
    <motion.a
      href={getNavUrl(link)}
      className="group relative font-medium text-gray-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-sm"
      whileHover={{ y: -1 }}
      transition={{ duration: 0.2 }}
    >
      <span className={`block transition-all duration-300 ${isScrolled ? 'text-sm py-2' : 'text-sm py-3'}`}>
        {link}
      </span>
      
      {/* Animated Underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gray-900 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ width: '100%' } as React.CSSProperties}
      />
      
      {/* Hover Background Effect */}
      <motion.div
        className="absolute inset-0 bg-gray-50 rounded-md -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.a>
  )
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false)
  }

  const toggleSearch = (): void => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="initial"
        animate="animate"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-gray-200/50 py-0'
            : 'bg-white py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="flex items-center justify-between"
          >
            {/* Logo Section */}
            <motion.div
              layout
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 cursor-pointer"
            >
              <motion.img
                src="/logo.png"
                alt="WEARORA"
                className={`transition-all duration-500 ease-out ${
                  isScrolled ? 'h-16 w-auto' : 'h-20 w-auto'
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              layout
              className="hidden lg:flex items-center"
            >
              <div className={`flex items-center transition-all duration-400 ${
                isScrolled ? 'space-x-2' : 'space-x-4'
              }`}>
                {navLinks.map((link) => (
                  <NavLink key={link} link={link} isScrolled={isScrolled} />
                ))}
              </div>
            </motion.nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Search Component - Desktop */}
              <div className="hidden lg:block">
                <SearchComponent 
                  isOpen={isSearchOpen} 
                  onToggle={toggleSearch} 
                />
              </div>

              {/* Mobile Menu Button */}
              <AnimatedMenuButton
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              />
            </div>
          </motion.div>
        </div>

        {/* Elegant Bottom Border Animation */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </motion.header>

      {/* Modern Mobile Menu */}
      <ModernMobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        navLinks={navLinks}
      />
    </>
  )
}

export default Header