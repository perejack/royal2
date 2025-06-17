import { motion } from 'framer-motion';
import { Carousel } from '../components/Carousel';
import { products } from '../data/products';
import { Features } from '../components/home/Features';
import { SpecialOffers } from '../components/home/SpecialOffers';
import { ProductGrid } from '../components/product/ProductGrid';
import { applyStaggeredAnimation, useParallaxEffect } from '../utils/animations';
import { PromoHeader } from '../components/common/PromoHeader';

export const Home = () => {
  // Apply staggered animation to product cards
  applyStaggeredAnimation('.product-card', 100, 50);
  
  // Apply parallax effect to the hero section with a reduced effect
  useParallaxEffect('.parallax-bg', 0.1);
  
  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0 },
    in: { 
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
      className="pt-20 sm:pt-24 md:pt-32"
    >
      {/* Hero Section with modern design */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://www.royalmabati.com/cdn/shop/files/WhatsApp_Image_2024-07-03_at_08.49.08_6580b4d3.jpg?v=1719986125&width=1600" 
            alt="Premium Roofing Solutions" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-5 text-blue-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Royal Mabati Roofing Solutions
            </motion.h1>
            <motion.div 
              className="h-1 w-32 bg-gradient-to-r from-amber-600 to-rose-600 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            />
            <motion.p 
              className="text-white max-w-3xl mx-auto text-lg md:text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Discover our premium roofing solutions designed to protect your home with style and durability.
            </motion.p>
            <motion.button
              className="inline-flex items-center px-8 py-4 mt-8 bg-gradient-to-r from-amber-600 to-rose-600 text-white rounded-full font-semibold hover:opacity-90 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Explore Products
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Main Heading */}
          

          {/* Features Section with Motion */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <Features />
          </motion.div>

          {/* Special Offers Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="my-20"
          >
            <SpecialOffers products={products.slice(0, 3)} />
          </motion.div>

          {/* All Products Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <ProductGrid title="All Products" products={products} />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-amber-600 to-rose-600 text-white rounded-full shadow-lg z-50 hover:opacity-90 transition-all"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </motion.button>
    </motion.div>
  );
};