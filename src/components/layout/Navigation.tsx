import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/icons/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Preview", href: "#preview" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Gallery", href: "#gallery" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <img
              src={logo}
              alt="logo"
              className="w-8 h-8 text-jade transition-all duration-300 group-hover:text-jade-light"
            />
            <div className="absolute inset-0 blur-lg bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-xl font-bold tracking-tight">Nephrite</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="jade" size="sm">
            <a
              href="https://github.com/Nephrite-theme/chrome"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install for Chrome
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-strong mt-4 mx-6 rounded-2xl p-6"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="jade" size="sm" className="mt-2">
              <a
                href="https://github.com/Nephrite-theme/chrome"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base"
              >
                Install for Chrome
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
