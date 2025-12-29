import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Chrome } from "../ui/svgs/chrome";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects with Parallax */}
      <div className="absolute inset-0">
        {/* Gradient orbs with parallax */}
        <motion.div
          style={{ y: orb1Y }}
          className="absolute top-1/4 left-1/4 w-150 h-150 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse"
        />
        <motion.div
          style={{ y: orb2Y }}
          className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-accent/10 rounded-full blur-[100px] animate-glow-pulse animation-delay-200"
        />

        {/* Grid pattern with parallax */}
        <motion.div
          style={{ y: gridY }}
          className="absolute inset-0 opacity-[0.03]"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </motion.div>
      </div>

      <motion.div
        style={{ y: contentY }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Now Available for Chrome
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="block">Nephrite:</span>
            <span className="gradient-text">The Emerald Standard</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-muted-foreground font-medium">
              for your Browser
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          >
            Experience browsing with elegance and focus. A meticulously crafted
            theme that transforms your digital workspace into a sanctuary of
            calm.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="jade" size="lg" className="gap-2 text-base">
              <Chrome className="w-5 h-5" />
              <a
                href="https://github.com/Nephrite-theme/chrome"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install for Chrome
              </a>
            </Button>
            <Button variant="glass" size="lg" className="gap-2 text-base">
              <a
                href="https://github.com/Nephrite-theme/chrome"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          </motion.div>

          {/* Explore - Now below buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12"
          >
            <a
              href="#preview"
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-xs uppercase tracking-widest">Explore</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
