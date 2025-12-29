import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubDark } from "../ui/svgs/githubDark";
import { XDark } from "../ui/svgs/xDark";
import logo from "@/assets/icons/logo.png";

const FooterSection = () => {
  const socialLinks = [
    {
      icon: GithubDark,
      href: "https://github.com/Nephrite-theme",
      label: "GitHub",
    },
    { icon: XDark, href: "https://x.com/NephriteTheme", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Changelog", "Roadmap", "Pricing"],
    },
    {
      title: "Resources",
      links: ["Documentation", "API", "Support", "Community"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Contact"],
    },
  ];

  return (
    <footer className="relative pt-32 pb-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-forest-deep via-background to-transparent" />

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay in the <span className="gradient-text">Loop</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Get notified about new releases, updates, and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-glass border-glass-border/50 focus:border-primary/50"
            />
            <Button variant="jade" className="gap-2 whitespace-nowrap">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Logo & Description */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="Nephrite Logo"
                className="w-8 h-8 text-primary"
              />
              <span className="text-xl font-bold">Nephrite</span>
            </a>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              The Emerald Standard for your browser. Crafted with care for those
              who value elegance and focus.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl glass border border-glass-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold mb-4 text-sm">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Nephrite. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
