import { motion } from "framer-motion";
import { MapPin, Coffee, Heart } from "lucide-react";

function InfoBadges() {
  return (
        <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap sm:flex-row items-baseline sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-slate-400 gap-2"
            >
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>France ° Remote OK</span>
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
  )
}

export default InfoBadges