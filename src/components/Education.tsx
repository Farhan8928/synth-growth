import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "Bachelor of Engineering (B.E.)",
    institution: "Doon Valley Institute of Engineering & Technology",
    period: "08/2008 - 05/2011",
    location: "Karnal, India"
  },
  {
    icon: School,
    degree: "Diploma in Computer Engineering",
    institution: "Hindu Institute of Technology",
    period: "08/2005 - 05/2008",
    location: "Sonepat, India"
  },
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="education" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-secondary bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative group"
                style={{ perspective: "1000px" }}
              >
                <div className="backdrop-blur-xl bg-card/30 border border-border rounded-2xl p-8 shadow-2xl hover:shadow-glow-violet transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-accent to-primary shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                  <p className="text-lg text-primary font-semibold mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground mb-1">{edu.period}</p>
                  <p className="text-muted-foreground">{edu.location}</p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};