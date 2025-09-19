import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { 
  Heart, 
  Globe, 
  Users, 
  Award,
  Target,
  Lightbulb,
  Shield,
  Leaf
} from "lucide-react";
import communityTech from "@/assets/community-tech.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "Every decision we make prioritizes the needs of NGOs and community organizations.",
      color: "text-ngo-green"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We believe data security is a fundamental right, not a luxury for larger organizations.",
      color: "text-tech-cyan"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Supporting organizations worldwide to amplify their positive impact on communities.",
      color: "text-ngo-green-light"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Building green infrastructure that supports both digital and environmental sustainability.",
      color: "text-ngo-green"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      background: "Former UN Technology Advisor with 15 years in NGO operations.",
      focus: "Strategic Vision"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      background: "Ex-Google Cloud engineer passionate about democratizing technology.",
      focus: "Infrastructure"
    },
    {
      name: "Aisha Patel",
      role: "Head of Community",
      background: "20+ years building partnerships with NGOs across 40 countries.",
      focus: "User Experience"
    },
    {
      name: "James Okonkwo",
      role: "Security Lead",
      background: "Cybersecurity expert focused on protecting vulnerable organizations.",
      focus: "Data Protection"
    }
  ];

  const milestones = [
    { year: "2019", event: "Founded with mission to democratize cloud storage" },
    { year: "2020", event: "First 50 NGOs join our beta program" },
    { year: "2021", event: "Reached 500+ organizations across 25 countries" },
    { year: "2022", event: "Launched renewable energy-powered data centers" },
    { year: "2023", event: "1,000+ NGOs now benefit from our platform" },
    { year: "2024", event: "Expanding to support 5,000+ organizations globally" }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">Empowering</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Change Makers
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We&apos;re on a mission to democratize cloud storage technology, 
                ensuring every NGO and community organization has access to 
                enterprise-grade infrastructure at community-friendly prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  Join Our Mission
                </Button>
                <Button variant="hero-outline" size="lg">
                  Our Impact Report
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img
                src={communityTech}
                alt="Community Technology Collaboration"
                className="rounded-2xl shadow-card"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-8 h-8 text-ngo-green" />
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To bridge the digital divide by providing NGOs and community organizations 
                  with affordable, secure, and scalable cloud storage solutions that amplify 
                  their impact and reach.
                </p>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="w-8 h-8 text-tech-cyan" />
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where every organization working for social good has access to 
                  the same powerful technology tools as Fortune 500 companies, enabling 
                  them to focus on their mission rather than infrastructure challenges.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-card border-border/50 p-8">
                <div className="text-center space-y-6">
                  <Award className="w-16 h-16 text-ngo-green mx-auto" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Recognized Impact
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-ngo-green">1000+</div>
                      <div className="text-sm text-muted-foreground">NGOs Served</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-tech-cyan">25</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-ngo-green-light">50TB+</div>
                      <div className="text-sm text-muted-foreground">Data Secured</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-tech-cyan">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Our</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every solution we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="h-full bg-gradient-card border-border/50 hover:border-ngo-green/30 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-dark-surface-hover rounded-lg">
                          <Icon className={`w-8 h-8 ${value.color}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-3">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate professionals dedicated to empowering NGOs through technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-gradient-card border-border/50 hover:border-ngo-green/30 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-ngo-green text-sm font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      {member.background}
                    </p>
                    <div className="text-xs text-tech-cyan font-medium">
                      Focus: {member.focus}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to democratize cloud storage.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-ngo-green"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center"
                >
                  <div className="w-8 h-8 bg-ngo-green rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div className="ml-8">
                    <div className="text-lg font-bold text-ngo-green mb-1">
                      {milestone.year}
                    </div>
                    <div className="text-foreground">
                      {milestone.event}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;