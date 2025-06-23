"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import Image from "next/image";

const navItems = [
  { href: "#accueil", label: "Accueil" },
  { href: "#alternance", label: "Alternance" },
  { href: "#competences", label: "Compétences" },
  { href: "#projets", label: "Projets" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    let currentSection = "";

    for (const item of navItems) {
      const section = document.querySelector(item.href);
      if (section) {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + section.clientHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          currentSection = item.href;
          break;
        }
      }
    }

    setActiveHash(currentSection);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial call

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border border-gray-400/80 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
      
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              <Image src="/logoTwo.webp" alt="LogoHeader" loading="lazy" width={150} height={80} className="w-full h-8 sm:h-5 md:h-6 lg:h-8 object-cover"/>
            </Link>
        

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-2 items-center space-x-1">
            {navItems.map((item, index) => (         
                    <Link
                     key={item.href}
                      href={item.href}
                      className={cn(
                        "text-slate-300 hover:text-emerald-400 transition-colors font-medium text-sm lg:text-base",
                        activeHash === item.href
                          ? "text-primary font-semibold text-emerald-400"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-foreground hover:bg-muted/50 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                       whileHover={{ y: -2 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "w-full px-3 py-2 rounded-md text-left text-sm font-medium transition-colors duration-200",
                        "hover:text-primary hover:bg-muted/50",
                        activeHash === item.href
                          ? "text-primary font-semibold text-emerald-400"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                  
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
