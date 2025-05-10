import { BookOpenCheck, BookText, Sparkles, UsersRound } from "lucide-react";
import RippleButton from "../elements/RippleButton";

interface Props {
    onNextStep: VoidFunction;
}

export default function Welcome({ onNextStep }: Props){
    return (
        <div className="w-full max-w-6xl mx-auto p-10 pt-16 md:pt-10">
                <div className="w-full mb-10">
                    <h1 className="font-buletin text-4xl font-bold">Selamat datang di Buletin.co</h1>
                    <p className="text-slate-700 text-xl">Mulai Perjalanan kamu sebagai penulis lewat platform kami.</p>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-center py-5 gap-4">
                    <div className="flex-1 p-6 rounded-xl bg-white border border-slate-200">
                        <Sparkles size={32} className="text-blue-600 mb-2" />
                        <h3 className="text-xl text-slate-900 font-semibold mb-2">Tulis & Dapatkan Pembaca Berbayar</h3>
                        <p className="text-slate-600">Satu platform untuk semuanya—publikasikan ke website, kirim ke email & WhatsApp, dan kelola pembayaran dengan mudah.</p>
                    </div>
                    <div className="flex-1 p-6 rounded-xl bg-white border border-slate-200">
                        <UsersRound size={32} className="text-blue-600 mb-2" />
                        <h3 className="text-xl text-slate-900 font-semibold mb-2">Bangun Audiens yang Mendukung Karyamu</h3>
                        <p className="text-slate-600">Terhubung langsung dengan pembaca, tanpa algoritma yang mengatur siapa yang melihat tulisanmu.</p>
                    </div>
                    <div className="flex-1 p-6 rounded-xl bg-white border border-slate-200">
                        <BookOpenCheck size={32} className="text-blue-600 mb-2" />
                        <h3 className="text-xl text-slate-900 font-semibold mb-2">Menulis Tanpa Ribet, Langsung Terbit dan Dinikmati</h3>
                        <p className="text-slate-600">Tulis, terbitkan, bagikan, dan dapatkan bayaran. Sesederhana itu.</p>
                    </div>
                </div>
                <div className="p-8 w-full flex flex-col-reverse md:flex-row gap-10 rounded-xl bg-gradient-to-r from-blue-900 to-blue-600 text-white">
                    <div className="flex-1 md:pr-5">
                        <h3 className="text-xl font-bold mb-2 md:mb-0">Pejalanan Menulismu Dimulai Dari Sini</h3>
                        <p>Buletin.co memberikanmu alat, audiens, dan dukungan yang kamu butuhkan untuk berkembang sebagai penulis. Kami sangat antusias melihat apa yang akan kamu ciptakan!</p>
                    </div>
                    <div className="-mb-5 md:mb-0">
                        <BookText size={48} />
                    </div>
                </div>
                <div className="w-full flex justify-center py-10">
                    <RippleButton onClick={onNextStep} className="text-xl px-20 bg-blue-800 hover:bg-blue-900 active:bg-blue-900 active:scale-100"><p className="py-2">Mulai</p></RippleButton>
                </div>
            </div>
    )
}