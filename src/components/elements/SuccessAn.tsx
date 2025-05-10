import { motion } from "motion/react";

export default function SuccessAn() {
    return (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0 }} className="fixed z-20 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="absolute w-[200vw] aspect-square rounded-full bg-blue-600 flex items-center justify-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="absolute w-[200vw] aspect-square rounded-full bg-slate-200 flex items-center justify-center">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.75 }} className="absolute w-[200vw] aspect-square rounded-full bg-blue-400 flex items-center justify-center">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 1 }} className="absolute w-[200vw] aspect-square rounded-full bg-blue-600 flex items-center justify-center">
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 1.25 }} className="absolute w-[200vw] aspect-square rounded-full bg-slate-100 flex items-center justify-center">
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}