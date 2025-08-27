import { Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
function CtaButtons() {
  return (
    <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-0 group"
                asChild
              >
                <Link
                  href="https://calendar.app.google/exMCxhM4tLJycwBP7"
                  target="_blank"
                >
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
                <Link
                  href="https://drive.google.com/file/d/1UP3EaksVn7VifaTyNuW-sQbCCW2g7IYg/view?usp=sharing"
                  target="_blank"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Télécharger mon CV
                </Link>
              </Button>
            </motion.div>

  )
}

export default CtaButtons