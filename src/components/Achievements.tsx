import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Target, DollarSign, Globe } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const achievements = [
  {
    icon: TrendingUp,
    value: 10,
    suffix: "x",
    label: "ROAS Increase",
    color: "from-primary to-secondary",
  },
  {
    icon: Target,
    value: 75,
    suffix: "%",
    label: "CTR Improvement",
    color: "from-secondary to-accent",
  },
  {
    icon: DollarSign,
    value: 50,
    suffix: "K+",
    label: "Monthly Ad Budgets",
    color: "from-accent to-primary",
  },
  {
    icon: Globe,
    value: 3,
    suffix: "+",
    label: "Countries Served",
    color: "from-primary to-accent",
  },
];

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-20 text-center bg-gradient-primary bg-clip-text text-transparent"
        >
          Key Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                <div className="backdrop-blur-xl bg-card/30 border border-border rounded-2xl p-8 text-center shadow-2xl hover:shadow-glow-blue transition-all duration-500 hover:scale-110 hover:-translate-y-4">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${achievement.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Counter */}
                  <div className="text-5xl font-bold mb-3">
                    <AnimatedCounter
                      end={achievement.value}
                      suffix={achievement.suffix}
                      duration={2}
                    />
                  </div>

                  {/* Label */}
                  <p className="text-lg text-muted-foreground font-medium">
                    {achievement.label}
                  </p>

                  {/* Animated border glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
