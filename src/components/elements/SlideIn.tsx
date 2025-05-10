import type { PropsWithChildren } from "react";
import { motion } from "motion/react";

interface SlideInProps extends PropsWithChildren {
    delay: number;
}

export default function SlideIn({ children, delay }: SlideInProps) {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 10, opacity: 0 }}
            transition={{ delay: delay }}
        >
            {children}
        </motion.div>
    )
}