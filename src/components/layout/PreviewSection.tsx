import { motion } from "motion/react";
import {
  Circle,
  Search,
  Minus,
  Square,
  Plus,
  Star,
  GitBranch,
  Bell,
} from "lucide-react";
import { useState } from "react";

const themes = {
  forest: {
    name: "Nephrite Forest",
    description: "Deep, immersive dark mode",
    frame: "rgb(17, 31, 23)",
    frameInactive: "rgb(12, 23, 17)",
    toolbar: "rgb(22, 41, 30)",
    tabText: "rgb(255, 255, 255)",
    ntpBackground: "rgb(17, 31, 23)",
    ntpText: "rgb(255, 255, 255)",
    isDark: true,
  },
  mint: {
    name: "Nephrite Mint",
    description: "Light and refreshing",
    frame: "rgb(107, 196, 168)",
    frameInactive: "rgb(133, 209, 186)",
    toolbar: "rgb(236, 253, 245)",
    tabText: "rgb(17, 31, 23)",
    ntpBackground: "rgb(236, 253, 245)",
    ntpText: "rgb(17, 31, 23)",
    isDark: false,
  },
  jade: {
    name: "Nephrite Jade",
    description: "Vibrant and balanced",
    frame: "rgb(38, 110, 72)",
    frameInactive: "rgb(46, 132, 86)",
    toolbar: "rgb(240, 253, 244)",
    tabText: "rgb(17, 31, 23)",
    ntpBackground: "rgb(240, 253, 244)",
    ntpText: "rgb(17, 31, 23)",
    isDark: false,
  },
};

type ThemeKey = keyof typeof themes;

const PreviewSection = () => {
  const [activeTheme, setActiveTheme] = useState<ThemeKey>("forest");
  const theme = themes[activeTheme];

  const tabs = [
    { title: "GitHub", active: true },
    { title: "Notion", active: false },
    { title: "Figma", active: false },
  ];

  return (
    <section id="preview" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-200 h-150 bg-jade/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            See Nephrite in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from three distinct variants, each crafted to match your mood
            and environment.
          </p>
        </motion.div>

        {/* Theme Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {(Object.keys(themes) as ThemeKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTheme(key)}
              className={`group relative px-6 py-4 rounded-2xl border transition-all duration-300 ${
                activeTheme === key
                  ? "border-jade/50 bg-jade/10"
                  : "border-glass-border/30 bg-glass/30 hover:border-jade/30 hover:bg-jade/5"
              }`}
            >
              {/* Theme color preview dot */}
              <div
                className={`w-4 h-4 rounded-full mb-2 mx-auto transition-all ${
                  activeTheme === key
                    ? "ring-2 ring-jade ring-offset-2 ring-offset-background"
                    : ""
                }`}
                style={{ backgroundColor: themes[key].frame }}
              />
              <span
                className={`block font-semibold text-sm ${
                  activeTheme === key
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {themes[key].name}
              </span>
              <span className="block text-xs text-muted-foreground mt-1">
                {themes[key].description}
              </span>

              {/* Active indicator */}
              {activeTheme === key && (
                <motion.div
                  layoutId="activeTheme"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-jade rounded-full"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Browser Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Outer glow container */}
            <div className="absolute -inset-1 bg-jade/20 rounded-3xl blur-2xl opacity-40" />

            {/* Browser window */}
            <motion.div
              key={activeTheme}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl border border-glass-border/50 overflow-hidden inner-glow"
              style={{ backgroundColor: theme.frame }}
            >
              {/* Title bar */}
              <div
                className="flex items-center justify-between px-4 py-3 border-b border-white/10"
                style={{ backgroundColor: theme.toolbar }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <Circle className="w-3 h-3 text-red-500 fill-red-500" />
                    <Circle className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <Circle className="w-3 h-3 text-green-500 fill-green-500" />
                  </div>
                </div>

                {/* URL Bar */}
                <div className="flex-1 max-w-xl mx-4">
                  <div
                    className="flex items-center gap-2 rounded-lg px-3 py-1.5"
                    style={{
                      backgroundColor: theme.isDark
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(0,0,0,0.05)",
                    }}
                  >
                    <Search
                      className="w-3.5 h-3.5"
                      style={{
                        color: theme.isDark
                          ? "rgba(255,255,255,0.6)"
                          : "rgba(0,0,0,0.5)",
                      }}
                    />
                    <span
                      className="text-sm"
                      style={{
                        color: theme.isDark
                          ? "rgba(255,255,255,0.6)"
                          : "rgba(0,0,0,0.5)",
                      }}
                    >
                      github.com/nephrite-theme
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Minus
                    className="w-4 h-4"
                    style={{
                      color: theme.isDark
                        ? "rgba(255,255,255,0.6)"
                        : "rgba(0,0,0,0.5)",
                    }}
                  />
                  <Square
                    className="w-3.5 h-3.5"
                    style={{
                      color: theme.isDark
                        ? "rgba(255,255,255,0.6)"
                        : "rgba(0,0,0,0.5)",
                    }}
                  />
                </div>
              </div>

              {/* Tabs bar */}
              <div
                className="flex items-center gap-1 px-2 py-2 border-b"
                style={{
                  backgroundColor: theme.frame,
                  borderColor: theme.isDark
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.1)",
                }}
              >
                {tabs.map((tab) => (
                  <div
                    key={tab.title}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all"
                    style={{
                      backgroundColor: tab.active
                        ? theme.toolbar
                        : "transparent",
                      color: tab.active
                        ? theme.tabText
                        : theme.isDark
                          ? "rgba(255,255,255,0.6)"
                          : "rgba(0,0,0,0.5)",
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: tab.active
                          ? "hsl(142, 71%, 45%)"
                          : theme.isDark
                            ? "rgba(255,255,255,0.3)"
                            : "rgba(0,0,0,0.2)",
                      }}
                    />
                    {tab.title}
                  </div>
                ))}
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors"
                  style={{
                    color: theme.isDark
                      ? "rgba(255,255,255,0.6)"
                      : "rgba(0,0,0,0.5)",
                  }}
                >
                  <Plus className="w-4 h-4" />
                </div>
              </div>

              {/* Content area */}
              <div
                className="p-8 min-h-100"
                style={{ backgroundColor: theme.ntpBackground }}
              >
                {/* Simulated content */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: "hsl(142, 71%, 45%, 0.2)" }}
                  >
                    <Star className="w-8 h-8 text-jade" />
                  </div>
                  <div>
                    <div
                      className="h-6 w-48 rounded-lg mb-2"
                      style={{
                        backgroundColor: theme.isDark
                          ? "rgba(255,255,255,0.1)"
                          : "rgba(0,0,0,0.08)",
                      }}
                    />
                    <div
                      className="h-4 w-32 rounded-lg"
                      style={{
                        backgroundColor: theme.isDark
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(0,0,0,0.04)",
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[GitBranch, Star, Bell].map((Icon, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl"
                      style={{
                        backgroundColor: theme.isDark
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(0,0,0,0.04)",
                      }}
                    >
                      <Icon
                        className="w-5 h-5 mb-2"
                        style={{ color: "hsl(142, 71%, 45%)" }}
                      />
                      <div
                        className="h-3 w-full rounded mb-2"
                        style={{
                          backgroundColor: theme.isDark
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.08)",
                        }}
                      />
                      <div
                        className="h-3 w-2/3 rounded"
                        style={{
                          backgroundColor: theme.isDark
                            ? "rgba(255,255,255,0.05)"
                            : "rgba(0,0,0,0.04)",
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-4 rounded-lg"
                      style={{
                        backgroundColor: theme.isDark
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(0,0,0,0.04)",
                        width: `${100 - i * 15}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Theme info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground text-sm">
            Currently viewing:{" "}
            <span className="text-jade font-medium">{theme.name}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PreviewSection;
