import { CircleCheckBig } from "lucide-react";
import RippleButton from "../elements/RippleButton";
import { useEffect } from "react";
import { motion } from "motion/react";

interface Props {
    onCompleteStep: VoidFunction;
}


export default function Finish({ onCompleteStep }: Props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div 
        initial={{ opacity: 0, y: 100 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full min-h-[70vh] max-w-6xl mx-auto p-8 pt-16 md:pt-8 flex flex-col justify-between items-center">
            <div>
                <div className="text-center flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-green-100 text-green-600 mb-5">
                        <CircleCheckBig size={40} />
                    </div>
                    <h1 className="text-2xl font-buletin font-semibold">Selamat Datang di Buletin.co</h1>
                    <p className="text-slate-600">Waktunya Berkreasi, Buat Tulisan Sebagus mungkin dan Gapai Audiens Sebanyak Mungkin.</p>
                </div>
            </div>
            <div>
                <RippleButton onClick={onCompleteStep} className="text-xl px-20 bg-blue-800 hover:bg-blue-900 active:bg-blue-900 active:scale-100"><p className="py-2">Dashboard</p></RippleButton>
            </div>
        </motion.div>
    )
}