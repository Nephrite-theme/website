import { motion } from "motion/react";
import { Eye, Palette, Layers } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Eye Comfort",
    description:
      "Carefully calibrated low blue light tones reduce eye strain during extended browsing sessions. Your eyes will thank you.",
    accent: "from-primary to-accent",
  },
  {
    icon: Palette,
    title: "Seamless Design",
    description:
      "Every pixel is considered. From tabs to scrollbars, Nephrite integrates flawlessly with your browser's native UI elements.",
    accent: "from-accent to-mint",
  },
  {
    icon: Layers,
    title: "Multi-App Support",
    description:
      "Coming soon to VS Code, Spotify, and more. Build a cohesive aesthetic across your entire digital workspace.",
    accent: "from-mint to-primary",
  },
];

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1 as const,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Why Nephrite
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Crafted for the <span className="gradient-text">Discerning</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three pillars that define the Nephrite experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="feature-card group glass rounded-3xl p-8 border border-glass-border/30"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${feature.accent} p-px`}
                >
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="absolute inset-0 blur-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative line */}
              <div className="mt-6 h-px bg-linear-to-br from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
