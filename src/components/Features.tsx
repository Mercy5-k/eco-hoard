import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Cloud, 
  Shield, 
  Users, 
  Zap, 
  Globe, 
  Heart,
  Server,
  Lock,
  Leaf
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Cloud,
      title: "Community Cloud Storage",
      description: "Secure, scalable storage solutions designed specifically for NGOs and community organizations.",
      color: "text-ngo-green"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols to keep your sensitive data protected.",
      color: "text-tech-cyan"
    },
    {
      icon: Users,
      title: "Collaborative Platform",
      description: "Built-in sharing and collaboration tools to help your team work together seamlessly.",
      color: "text-ngo-green-light"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized infrastructure ensures quick uploads, downloads, and data access worldwide.",
      color: "text-tech-cyan"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Distributed servers across multiple continents for reliable access anywhere.",
      color: "text-ngo-green"
    },
    {
      icon: Heart,
      title: "Mission-Driven",
      description: "Built by NGOs, for NGOs. We understand your unique needs and challenges.",
      color: "text-ngo-green-light"
    },
    {
      icon: Server,
      title: "99.9% Uptime",
      description: "Reliable infrastructure with redundant systems to ensure your data is always accessible.",
      color: "text-tech-cyan"
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your data remains yours. No tracking, no ads, no data mining - just secure storage.",
      color: "text-ngo-green"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Powered by renewable energy sources, supporting both digital and environmental sustainability.",
      color: "text-ngo-green-light"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-dark-surface">
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
            <span className="text-foreground">Powerful Features for</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Community Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage, secure, and scale your organization's 
            digital infrastructure with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <Card className="h-full bg-gradient-card border-border/50 hover:border-ngo-green/30 transition-all duration-300 hover:shadow-glow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-dark-surface-hover rounded-lg group-hover:bg-ngo-green/10 transition-colors duration-300">
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;