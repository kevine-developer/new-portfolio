import { Badge } from "../../../ui/badge";
import { motion } from "framer-motion";

function Cta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center space-y-6"
    >
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 sm:p-8 backdrop-blur-sm max-w-2xl mx-auto">
        <p className="text-lg sm:text-xl text-slate-300 font-medium mb-4">
          Discutons ensemble ? Je vous réponds sous{" "}
          <span className="text-emerald-400 font-bold">24h</span>, parole de Dev
          !
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-slate-400">
          <Badge
            variant="outline"
            className="border-emerald-500/30 text-emerald-400"
          >
            Motivé
          </Badge>
          <Badge variant="outline" className="border-blue-500/30 text-blue-400">
            Autonome
          </Badge>
          <Badge
            variant="outline"
            className="border-purple-500/30 text-purple-400"
          >
            Créatif
          </Badge>
          <Badge
            variant="outline"
            className="border-yellow-500/30 text-yellow-400"
          >
            Éco-responsable
          </Badge>
        </div>
      </div>
    </motion.div>
  );
}

export default Cta;
