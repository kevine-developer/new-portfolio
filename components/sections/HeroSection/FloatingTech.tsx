import { motion } from "framer-motion";

interface FloatingTechProps {
      data: {
      delay: number;
      position: string;
      icon?: any;
    };

}


function FloatingTech({ data }: FloatingTechProps) {
  return (
      <motion.div
                   
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + data.delay, duration: 0.5 }}
                    className={`absolute ${data.position} w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <motion.span
                      animate={{
                        y: [0, -8, 0],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: data.delay,
                      }}
                      className="text-base sm:text-lg md:text-xl"
                    >
                      {data.icon && <data.icon />}
                    </motion.span>
                  </motion.div>
  )
}

export default FloatingTech