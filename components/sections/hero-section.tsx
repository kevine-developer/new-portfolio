"use client"

import { motion } from "framer-motion"
import { Mail, Play, Calendar, MapPin, Terminal, Coffee, Heart, ChevronDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/ui/container"
import { GradientText } from "@/components/ui/gradient-text"
import { useTypingEffect } from "@/hooks/use-typing-effect"
import { useHeroSettings, useContactSettings } from "@/hooks/use-cms-data"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const { data: heroSettings } = useHeroSettings()
  const { data: contactSettings } = useContactSettings()

  const typedText = useTypingEffect(heroSettings.typing_texts)

  const floatingIcons = [
    { icon: "⚛️", position: "top-0 right-4 sm:right-8", delay: 0 },
    { icon: "🚀", position: "top-4 sm:top-8 left-0", delay: 0.5 },
    { icon: "💚", position: "bottom-0 left-4 sm:left-8", delay: 1 },
    { icon: "⚡", position: "bottom-4 sm:bottom-8 right-0", delay: 1.5 },
    { icon: "🎨", position: "top-1/2 -left-4 sm:-left-8", delay: 2 },
    { icon: "📱", position: "top-1/2 -right-4 sm:-right-8", delay: 2.5 },
  ]

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative pt-16 sm:pt-20">
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
                <span className="text-emerald-400 text-xs sm:text-sm font-medium">Disponible en alternance</span>
              </div>
              <Badge variant="outline" className="border-yellow-500/30 text-yellow-400 text-xs">
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
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
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
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
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
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {heroSettings.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-0 group"
                asChild
              >
                <Link href="https://calendar.app.google/exMCxhM4tLJycwBP7" target="_blank">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Parlons alternance
                </Link>
              </Button>
              
           <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white group"
                asChild
              >
                <Link href="https://drive.google.com/file/d/1UP3EaksVn7VifaTyNuW-sQbCCW2g7IYg/view?usp=sharing" target="_blank">
                  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Télécharger mon CV
                </Link>
              </Button>
            </motion.div>

            {/* Info badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-slate-400"
            >
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>{contactSettings.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Alimenté au café</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
                <span>Code avec passion</span>
              </div>
            </motion.div>
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
                <div
                  
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 p-1"
                >
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                    <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"><Image src="/logo.png" alt="logo" width={140} height={140}/></div>
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
                      {item.icon}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Code snippet - Hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="hidden md:block absolute -right-2 lg:-right-4 top-1/4 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg p-3 lg:p-4 font-mono text-xs lg:text-sm max-w-xs"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                </div>
                <div className="text-slate-300 space-y-1">
                  <div>
                    <span className="text-purple-400">const</span> <span className="text-blue-400">kevine</span> = {"{"}
                  </div>
                  <div className="ml-2">
                    <span className="text-emerald-400">skills</span>:{" "}
                    <span className="text-yellow-400">["React", "Next.js"]</span>,
                  </div>
                  <div className="ml-2">
                    <span className="text-emerald-400">passion</span>:{" "}
                    <span className="text-yellow-400">"éco-conception"</span>,
                  </div>
                  <div className="ml-2">
                    <span className="text-emerald-400">status</span>:{" "}
                    <span className="text-yellow-400">"seeking alternance"</span>
                  </div>
                  <div>{"}"}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute  sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center space-y-2 text-slate-400"
          >
            <span className="text-xs sm:text-sm">Découvrir</span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
