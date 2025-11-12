import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9034598364",
      href: "tel:+919034598364",
    },
    {
      icon: Mail,
      label: "Email",
      value: "vikaskaushik712@gmail.com",
      href: "mailto:vikaskaushik712@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Vikash Kumar",
      href: "https://www.linkedin.com/in/vikash-kumar-4a4a4a1a1",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Talk Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to scale your campaigns? Let's discuss how we can drive measurable results together.
          </p>
        </motion.div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block backdrop-blur-xl bg-card/30 border border-border rounded-2xl p-6 shadow-xl hover:shadow-glow-blue transition-all duration-500 hover:scale-105 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        <p className="text-lg font-semibold text-foreground">{info.value}</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="backdrop-blur-xl bg-card/30 border border-border rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-primary">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        <p className="text-lg font-semibold text-foreground">{info.value}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-primary hover:shadow-glow-blue transition-all duration-300 transform hover:scale-105"
            onClick={() => window.location.href = "mailto:vikaskaushik712@gmail.com"}
          >
            <Send className="w-5 h-5 mr-2" />
            Send a Message
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-primary hover:bg-primary/10 hover:shadow-glow-blue transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("https://www.linkedin.com/in/vikash-kumar-4a4a4a1a1", "_blank")}
          >
            <Linkedin className="w-5 h-5 mr-2" />
            Connect on LinkedIn
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 text-center text-muted-foreground"
        >
          <p className="text-sm">
            © 2025 Vikash Kumar · Performance Marketing Strategist · Built with ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
};
