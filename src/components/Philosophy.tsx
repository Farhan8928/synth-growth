import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const keywords = ["Data", "Creativity", "Precision"];

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20"
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="block text-foreground mb-4">
              "Performance is not luck —
            </span>
            <span className="block">
              it's{" "}
              {keywords.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                  className="inline-block"
                >
                  <span className="relative">
                    <span className="bg-gradient-primary bg-clip-text text-transparent font-extrabold">
                      {word}
                    </span>
                    <motion.span
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                      className="absolute bottom-0 left-0 h-1 bg-gradient-primary"
                    />
                  </span>
                  {index < keywords.length - 1 && (
                    <span className="text-muted-foreground">, </span>
                  )}
                </motion.span>
              ))}
              ."
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            I build campaigns that don't just drive clicks —{" "}
            <span className="text-foreground font-semibold">they drive growth</span>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
