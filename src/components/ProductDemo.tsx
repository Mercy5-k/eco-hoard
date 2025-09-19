import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const ProductDemo = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">See Our Platform</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of community-driven cloud storage through 
            our intuitive dashboard and comprehensive management tools.
          </p>
        </motion.div>

        {/* Demo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Laptop Mockup */}
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-3xl p-4 shadow-2xl">
            {/* Laptop Screen Bezel */}
            <div className="bg-black rounded-2xl p-1">
              {/* Demo Image/Video Container */}
              <div className="relative group cursor-pointer overflow-hidden rounded-xl">
                <img
                  src={dashboardPreview}
                  alt="NGO Cloud Dashboard Preview"
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-primary p-6 rounded-full shadow-glow"
                  >
                    <Play className="w-12 h-12 text-primary-foreground ml-1" />
                  </motion.div>
                </div>

                {/* Live Demo Badge */}
                <div className="absolute top-4 right-4 bg-ngo-green text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Live Demo
                </div>
              </div>
            </div>
            
            {/* Laptop Base */}
            <div className="h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-3xl flex items-center justify-center">
              <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Button variant="hero" size="lg" className="group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Full Demo
            </Button>
            
            <Button variant="tech" size="lg" className="group">
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Try Live Dashboard
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-ngo-green/10 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-ngo-green rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Real-time Analytics
            </h3>
            <p className="text-muted-foreground">
              Monitor storage usage, user activity, and system performance in real-time.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-tech-cyan/10 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-tech-cyan rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Intuitive Interface
            </h3>
            <p className="text-muted-foreground">
              Designed with NGO workflows in mind for maximum productivity and ease of use.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-ngo-green-light/10 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-ngo-green-light rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Collaborative Tools
            </h3>
            <p className="text-muted-foreground">
              Built-in sharing, permissions, and team management features.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDemo;