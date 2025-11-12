import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-7xl md:text-9xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              VIKASH KUMAR
            </span>
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Performance Marketing Specialist
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Performance-Driven Marketing to make Brands profitable through{" "}
            <span className="text-primary font-semibold">Google</span>,{" "}
            <span className="text-secondary font-semibold">Meta</span> &{" "}
            <span className="text-accent font-semibold">LinkedIn</span> Ads.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-muted-foreground backdrop-blur-sm bg-card/30 px-4 py-2 rounded-full border border-border">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Delhi, India</span>
            </div>
            <a 
              href="tel:+919034598364"
              className="flex items-center gap-2 text-muted-foreground backdrop-blur-sm bg-card/30 px-4 py-2 rounded-full border border-border hover:border-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 9034598364</span>
            </a>
            <a 
              href="mailto:vikaskaushik712@gmail.com"
              className="flex items-center gap-2 text-muted-foreground backdrop-blur-sm bg-card/30 px-4 py-2 rounded-full border border-border hover:border-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>vikaskaushik712@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/vikash-kumar-4a4a4a1a1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground backdrop-blur-sm bg-card/30 px-4 py-2 rounded-full border border-border hover:border-primary transition-colors"
            >
              <Linkedin className="w-4 h-4 text-primary" />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Button 
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-primary hover:shadow-glow-blue transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Talk Campaigns
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </section>
  );
};
