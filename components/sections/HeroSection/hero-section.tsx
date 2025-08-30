"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Terminal,

} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { useHeroSettings, useContactSettings } from "@/hooks/use-cms-data";
import Image from "next/image";
import {
  FirebaseStudio,
  GitHubIcon,
  GitIcon,
  JavaScriptIcon,
  Linux,
  ReactIcon,
  Strapi,
  TypeScriptIcon,
} from "@/lib/iconHero";
import CodeSnippet from "./ui/CodeSnippet";
import InfoBadges from "./ui/InfoBadges";
import CtaButtons from "./ui/CtaButtons";

export function HeroSection() {
  const { data: heroSettings } = useHeroSettings();
  const { data: contactSettings } = useContactSettings();

  const typedText = useTypingEffect(heroSettings.typing_texts);

  const floatingIcons = [
    { icon: ReactIcon, position: "top-0 right-4 sm:right-8", delay: 0 },
    { icon: TypeScriptIcon, position: "top-4 sm:top-8 left-0", delay: 0.5 },
    { icon: FirebaseStudio, position: "bottom-0 left-4 sm:left-8", delay: 1 },
    { icon: Strapi, position: "bottom-4 sm:bottom-8 right-0", delay: 1.5 },
    { icon: GitIcon, position: "top-1/2 -left-4 sm:-left-8", delay: 2 },
    { icon: Linux, position: "top-1/2 -right-4 sm:-right-8", delay: 2.5 },
  ];

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative pt-10 sm:pt-10"
    >
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-yellow-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Status badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-3"
            >
              <div className="flex items-center space-x-2 bg-emerald-500/20 px-3 py-1.5 rounded-full border border-emerald-500/30">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-xs sm:text-sm font-medium">
                  Disponible en alternance
                </span>
              </div>
              <Badge
                variant="outline"
                className="border-yellow-500/30 text-yellow-400 text-xs"
              >
                <Calendar className="w-3 h-3 mr-1" />
                {contactSettings.availability_date}
              </Badge>
            </motion.div>

            {/* Main title */}
            <div className="space-y-3 sm:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                {heroSettings.title.split("Kevine")[0]}
                <GradientText className="block sm:inline">Kevine</GradientText>
              </motion.h1>

              {/* Typing animation */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-3 text-lg sm:text-xl md:text-2xl text-slate-300">
                <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 flex-shrink-0" />
                <span className="font-mono text-center sm:text-left min-h-[1.5em] flex items-center">
                  {typedText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="text-emerald-400 ml-1"
                  >
                    |
                  </motion.span>
                </span>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300  max-w-2xl mx-auto lg:mx-0"
            >
              {heroSettings.description}
            </motion.p>

            {/* CTA Buttons */}
            <CtaButtons />

            {/* Info badges */}
            <InfoBadges />
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              {/* Main avatar container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                    <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                      <Image
                        src="/logo.webp"
                        alt="logo"
                        loading="lazy"
                        width={140}
                        height={140}
                        className="w-full h-25 sm:h-25 md:h-35 lg:h-45 object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating tech icons */}
                {floatingIcons.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + item.delay, duration: 0.5 }}
                    className={`absolute ${item.position} w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <motion.span
                      animate={{
                        y: [0, -8, 0],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: item.delay,
                      }}
                      className="text-base sm:text-lg md:text-xl"
                    >
                      {item.icon && <item.icon />}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Code snippet - Hidden on mobile */}
              <CodeSnippet />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
