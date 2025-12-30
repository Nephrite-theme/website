import { motion } from "motion/react";
import { Code2 } from "lucide-react";
import {
  SiFirefox,
  SiGooglechrome,
  SiHyper,
  SiSpotify,
} from "@icons-pack/react-simple-icons";

const roadmapItems = [
  {
    icon: SiGooglechrome,
    title: "Chrome Theme",
    status: "available",
    description: "The flagship experience. Available now.",
    date: "Live",
  },
  {
    icon: SiFirefox,
    title: "Firefox Theme",
    status: "coming",
    description: "The flagship experience. Available now.",
    date: "Coming Soon",
  },
  {
    icon: Code2,
    title: "VS Code Theme",
    status: "coming",
    description: "Bring Nephrite to your coding environment.",
    date: "Coming Soon",
  },
  {
    icon: SiSpotify,
    title: "Spotify Theme",
    status: "coming",
    description: "Harmonize your music player aesthetics.",
    date: "Coming Soon",
  },
  {
    icon: SiHyper,
    title: "Terminal Theme",
    status: "planned",
    description: "iTerm2, Hyper, and Windows Terminal.",
    date: "Coming Soon",
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-forest/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Roadmap
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The <span className="gradient-text">Growing</span> Ecosystem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nephrite is expanding across platforms. Stay tuned for new releases.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary/50 via-primary/20 to-transparent" />

            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background z-10">
                  {item.status === "available" && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                  <div
                    className={`absolute inset-1 rounded-full ${item.status === "available" ? "bg-primary" : "bg-muted"}`}
                  />
                </div>

                {/* Content card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <div className="glass rounded-2xl p-6 border border-glass-border/30 group hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          item.status === "available"
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <span
                          className={`text-xs font-medium ${
                            item.status === "available"
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                    {item.status === "available" && (
                      <div className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Available Now
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
