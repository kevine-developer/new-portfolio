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
import CodeSnippet from "./ui/CodeSnippet";
import InfoBadges from "./ui/InfoBadges";
import CtaButtons from "./ui/CtaButtons";
import FloatingTech from "./FloatingTech";
import AvatarContainer from "./AvatarContainer";
import TypingAnimation from "./TypingAnimation";
import BackgroundBlobs from "./BackgroundBlobs";
import { floatingIcons } from "./constantIcons";

export function HeroSection() {
  const { data: heroSettings } = useHeroSettings();
  const { data: contactSettings } = useContactSettings();

  const typedText = useTypingEffect(heroSettings.typing_texts);


  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative pt-10 sm:pt-10"
    >
      {/* Animated background blobs */}
     <BackgroundBlobs/>

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
              <TypingAnimation typedText={typedText} />
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
                <AvatarContainer/>
                {/* Floating tech icons */}
                {floatingIcons.map((item, index) => (
                  <FloatingTech key={index} data={item} />
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
