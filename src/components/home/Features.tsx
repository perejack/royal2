import { Shield, Truck, Award, Building2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Features = () => {
  // Modern feature cards with new icons and colors
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Crafted with the finest materials",
      gradient: "from-amber-500 to-rose-500",
      bg: "bg-amber-50"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Nationwide service in 24 hours",
      gradient: "from-rose-500 to-pink-600",
      bg: "bg-rose-50"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-rose-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Experience the difference with our premium roofing solutions
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 gap-6 w-full">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={`relative ${feature.bg} p-8 h-full`}>
                {/* Icon with gradient background */}
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 opacity-10" />
                
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-white to-gray-50 mb-6">
                    <div className="text-amber-600">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};