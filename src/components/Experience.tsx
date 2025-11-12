import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "Sr. Digital Marketing Analyst",
    company: "eBizTrait Technolabs Pvt. Ltd",
    location: "Ahmedabad, India",
    period: "June 2023 – Present",
    achievements: [
      "Scaled Paid Ads ROAS from $3K/month to $45K/month for a luxury watch brand",
      "Achieved 75% CTR increase across multiple eCommerce brands",
      "Managed $50K+ monthly budgets across Google & Meta, achieving 6.5x average ROAS",
      "Collaborated with U.S. & U.K. clients for strategic campaign alignment",
    ],
    gradient: "from-primary to-secondary",
  },
  {
    title: "PPC Executive",
    company: "Indus Net TechShu Digital Pvt. Ltd",
    location: "Kolkata, India",
    period: "February 2022 – June 2023",
    achievements: [
      "Improved lead quality by 60% for a senior housing project",
      "Drove 60% sales growth for Toyota Nandi Dealership via full-funnel optimization",
      "Conducted weekly audits to improve Quality Score and conversion accuracy",
    ],
    gradient: "from-secondary to-accent",
  },
  {
    title: "PPC Executive",
    company: "SEO Discovery",
    location: "Mohali, India",
    period: "July 2019 – November 2021",
    achievements: [
      "Managed Google Ads for Punjab National Bank — boosted conversions by 45%",
      "Increased TVS Motors leads by 50% using segmentation and schedule optimization",
      "Built Data Studio dashboards for transparent, real-time client reporting",
    ],
    gradient: "from-accent to-primary",
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="experience" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-20 text-center bg-gradient-primary bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`relative mb-16 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full bg-gradient-to-r bg-primary transform md:-translate-x-1/2 shadow-glow-blue" />

              {/* Content card */}
              <div
                className="ml-8 md:ml-0 backdrop-blur-xl bg-card/30 border border-border rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-glow-blue transition-all duration-500 hover:scale-[1.02] group"
                style={{
                  transform: "perspective(1000px) rotateY(0deg)",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.gradient} shadow-lg`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-2 text-sm text-muted-foreground">
                      <span>{exp.location}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <TrendingUp className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};