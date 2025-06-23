"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Coffee,
  Github,
  Linkedin,
  Music,
  Instagram,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { useSocialLinks } from "@/hooks/use-cms-data";
import Image from "next/image";

/* const socialLinks = [
  { icon: Github, url: "https://github.com/kevine", label: "GitHub" },
  { icon: Linkedin, url: "https://linkedin.com/in/kevine-dev", label: "LinkedIn" },
  { icon: Music, url: "https://tiktok.com/@devengalere", label: "TikTok" },
  { icon: Instagram, url: "https://instagram.com/devengalere", label: "Instagram" },
  { icon: Mail, url: "mailto:kevine.dev@gmail.com", label: "Email" },
] */
const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Music,
  Instagram,
  Mail,
};

export function Footer() {
  const { data: socialLinks, loading, error } = useSocialLinks();
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      <Container>
        <div className="text-center space-y-6  ">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-xl sm:text-2xl flex justify-center"
          >
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              <Image
                src="/logoTwo.webp"
                alt="LogoFooter"
                width={200}
                height={90}
                loading="lazy"
                className="w-full h-8 sm:h-5 md:h-6 lg:h-8 object-cover"
              />
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                  aria-label={social.name}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </motion.a>
              );
            })}
          </motion.div>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center items-center space-x-2 text-slate-400 text-sm"
          >
            <span>Fait avec</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>et beaucoup de</span>
            <Coffee className="w-4 h-4 text-yellow-400" />
            <span>par Kevine</span>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm text-slate-500"
          >
            © 2025 kevine.dev • Développeur Fullstack JS en recherche
            d'alternance
          </motion.p>

          {/* Legal links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-6 text-sm text-slate-400"
          >
            <Link
              href="/mentions-legales"
              className="hover:text-emerald-400 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="hover:text-emerald-400 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}
