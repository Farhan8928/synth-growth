import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "./ui/badge";

const skills = [
  "Google Ads",
  "Meta Ads",
  "LinkedIn Ads",
  "Analytics",
  "Looker Studio",
  "Conversion Optimization",
  "Growth Marketing",
  "Data Studio Dashboards",
  "Smart Bidding",
  "E-commerce Strategy",
  "GTM",
  "Shopify",
  "PPC",
  "A/B Testing",
  "UTM Tracking",
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-card/30 border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          style={{
            boxShadow: "0 0 80px rgba(59, 130, 246, 0.1)",
          }}
        >
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed relative z-10"
          >
            <p>
              I'm a <span className="text-foreground font-semibold">results-focused Performance Marketing Specialist</span> with{" "}
              <span className="text-primary font-semibold">6+ years of experience</span> managing high-ROAS campaigns across Google Ads and Meta (Facebook & Instagram).
            </p>
            <p>
              Proven track record of driving{" "}
              <span className="text-secondary font-semibold">10x ROAS</span> and{" "}
              <span className="text-accent font-semibold">75% CTR improvement</span> through data-driven insights, strategic optimization, and cross-functional collaboration.
            </p>
            <p>
              I specialize in building full-funnel strategies that blend smart bidding, audience segmentation, and creative testing to deliver{" "}
              <span className="text-foreground font-semibold">measurable growth</span>.
            </p>
          </motion.div>

          {/* Skills carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 relative z-10"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">Core Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20 hover:border-secondary/40 hover:shadow-glow-cyan transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};