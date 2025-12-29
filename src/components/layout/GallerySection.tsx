import { motion } from "framer-motion";

const galleryItems = [
  {
    title: "New Tab Experience",
    aspect: "landscape",
    gradient: "from-jade/20 to-forest",
  },
  {
    title: "Tab Bar Design",
    aspect: "portrait",
    gradient: "from-accent/20 to-forest",
  },
  {
    title: "Bookmarks Bar",
    aspect: "square",
    gradient: "from-mint/20 to-forest",
  },
  {
    title: "Settings Panel",
    aspect: "portrait",
    gradient: "from-jade/30 to-forest-deep",
  },
  {
    title: "Context Menus",
    aspect: "landscape",
    gradient: "from-accent/30 to-forest-deep",
  },
  {
    title: "Extension Popup",
    aspect: "square",
    gradient: "from-mint/30 to-forest-deep",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Every Detail <span className="gradient-text">Refined</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the different facets of the Nephrite theme
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-glass-border/30 ${
                item.aspect === "landscape"
                  ? "md:col-span-2 aspect-video"
                  : item.aspect === "portrait"
                    ? "row-span-2 aspect-9/16"
                    : "aspect-square"
              }`}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${item.gradient}`}
              />

              {/* Inner glow effect */}
              <div className="absolute inset-0 inner-glow" />

              {/* Decorative elements */}
              <div className="absolute inset-4 border border-jade/10 rounded-xl" />
              <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-jade/30" />
              <div className="absolute top-6 left-12 w-3 h-3 rounded-full bg-jade/20" />
              <div className="absolute top-6 left-18 w-3 h-3 rounded-full bg-jade/10" />

              {/* Content placeholder lines */}
              <div className="absolute inset-8 flex flex-col justify-end gap-2">
                <div className="h-2 w-3/4 bg-foreground/10 rounded" />
                <div className="h-2 w-1/2 bg-foreground/5 rounded" />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-jade/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Title overlay */}
              <div className="absolute inset-0 flex items-end p-6">
                <div className="glass px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
