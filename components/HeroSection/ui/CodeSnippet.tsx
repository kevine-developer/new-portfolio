import { motion } from "framer-motion";

function CodeSnippet() {
  return (
     <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
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
  )
}

export default CodeSnippet