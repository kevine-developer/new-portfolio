import { Terminal } from 'lucide-react'
import { motion } from 'framer-motion'

interface Props {
  typedText: string
}


function TypingAnimation({ typedText }: Props) {
  return (
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
  )
}

export default TypingAnimation