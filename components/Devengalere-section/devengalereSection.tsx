"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import Cta from "./ui/Cta";
import Stats from "./ui/Stats";
import HeaderCard from "./ui/HeaderCard";
import BodyCard from "./ui/BodyCard";
import CodeMock from "./ui/CodeMock";

export default function DevEngalereSection() {
  return (
    <Section className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5" />
          <CardContent className="relative p-6 sm:p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-6">
                <HeaderCard />
                <BodyCard />
                <Stats />
                <Cta />
              </div>
              <CodeMock />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
}
