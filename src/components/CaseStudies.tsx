import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, DollarSign, Target } from "lucide-react";
import { Card } from "./ui/card";

const caseStudies = [
  {
    title: "The Body Deli — Google Ads",
    platform: "Google Ads",
    budget: "$56.7K",
    roas: "794.83%",
    result: "Reduced cost per conversion by 37% | 8x ROAS",
    gradient: "from-blue-500 to-cyan-500",
    metrics: [
      { label: "Budget", value: "$56,700", icon: DollarSign },
      { label: "ROAS", value: "8x", icon: TrendingUp },
      { label: "Cost Reduction", value: "37%", icon: Target },
    ],
  },
  {
    title: "The Body Deli — Meta Ads Full Funnel",
    platform: "Meta Ads",
    budget: "$34,470",
    roas: "4.29x",
    result: "Revenue: $148K+ | Full-funnel optimization",
    gradient: "from-purple-500 to-pink-500",
    metrics: [
      { label: "Budget", value: "$34,470", icon: DollarSign },
      { label: "Revenue", value: "$148K+", icon: TrendingUp },
      { label: "ROAS", value: "4.29x", icon: Target },
    ],
  },
  {
    title: "Organic Alcohol — Google Ads",
    platform: "Google Ads",
    budget: "$1,016",
    roas: "37.14x",
    result: "Conversion Value: $37,747 | Extreme ROAS growth",
    gradient: "from-green-500 to-emerald-500",
    metrics: [
      { label: "Budget", value: "$1,016", icon: DollarSign },
      { label: "Conv. Value", value: "$37,747", icon: TrendingUp },
      { label: "ROAS", value: "37.14x", icon: Target },
    ],
  },
  {
    title: "Gift of Time — Google Ads",
    platform: "Google Ads",
    budget: "$58.5K",
    roas: "4.2x",
    result: "Revenue: $246K | Luxury watch brand scaling",
    gradient: "from-amber-500 to-orange-500",
    metrics: [
      { label: "Budget", value: "$58,500", icon: DollarSign },
      { label: "Revenue", value: "$246K", icon: TrendingUp },
      { label: "ROAS", value: "4.2x", icon: Target },
    ],
  },
  {
    title: "Gift of Time — Meta Ads Growth",
    platform: "Meta Ads",
    budget: "$52,838",
    roas: "3.55x",
    result: "Revenue: $187K+ | Seasonal campaigns optimization",
    gradient: "from-rose-500 to-red-500",
    metrics: [
      { label: "Budget", value: "$52,838", icon: DollarSign },
      { label: "Revenue", value: "$187K+", icon: TrendingUp },
      { label: "ROAS", value: "3.55x", icon: Target },
    ],
  },
];

export const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-20 text-center bg-gradient-primary bg-clip-text text-transparent"
        >
          Case Studies
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
              style={{ perspective: "1000px" }}
            >
              <Card className="backdrop-blur-xl bg-card/30 border-border p-8 shadow-2xl hover:shadow-glow-blue transition-all duration-500 hover:scale-[1.02] overflow-hidden">
                {/* Gradient header */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${study.gradient}`} />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-foreground pr-4">{study.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${study.gradient} text-white font-semibold whitespace-nowrap`}>
                      {study.platform}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{study.result}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {study.metrics.map((metric, i) => {
                      const Icon = metric.icon;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={
                            isInView && hoveredIndex === index
                              ? { opacity: 1, y: 0 }
                              : isInView
                              ? { opacity: 0.7, y: 0 }
                              : {}
                          }
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                          className="text-center"
                        >
                          <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${study.gradient} mb-2`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-lg font-bold text-foreground">{metric.value}</p>
                          <p className="text-xs text-muted-foreground">{metric.label}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
