import { motion } from "framer-motion";

function CodeMock() {
  return (
    <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="bg-slate-900/80 border border-slate-700 rounded-xl p-4 sm:p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <span className="text-slate-400 text-xs sm:text-sm ml-2">
                      devengalere.js
                    </span>
                  </div>
                  <div className="font-mono text-xs sm:text-sm space-y-2">
                    <div className="text-slate-300">
                      <span className="text-purple-400">function</span>
                      <span className="text-blue-400">debugCode</span>
                      () {"{"}
                    </div>
                    <div className="text-slate-300 ml-4">
                      <span className="text-green-400">console.log</span>(
                      <span className="text-yellow-400">
                        "Ça marche pas... "
                      </span>
                      );
                    </div>
                    <div className="text-slate-300 ml-4">
                      <span className="text-green-400">console.log</span>(
                      <span className="text-yellow-400">
                        "Ah si ça marche ! "
                      </span>
                      );
                    </div>
                    <div className="text-slate-300 ml-4">
                      <span className="text-red-400">// Mais pourquoi ??</span>
                    </div>
                    <div className="text-slate-300">{"}"}</div>
                  </div>
                </motion.div>
              </div>
  )
}

export default CodeMock