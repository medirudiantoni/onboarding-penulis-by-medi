import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { genres } from "../../data/dummy";
import RippleButton from "../elements/RippleButton";
import useGenre from "../../states/genre.state";
import SlideIn from "../elements/SlideIn";

interface Props {
    onNextStep: VoidFunction;
    onPreviousStep: VoidFunction;
}

export default function Genre({ onNextStep, onPreviousStep }: Props) {
    const { genres: genreState, setGenres } = useGenre();
    const [choosen, setChoosen] = useState<string[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setChoosen(genreState);
    }, [genreState]);

    function handleChooseGenre(data: string) {
        if (choosen.length < 5) {
            const exist = choosen.find(e => e === data);
            if (exist) {
                setChoosen(prev => prev.filter(e => e !== data));
            } else {
                setChoosen(prev => [...prev, data]);
            }
        } else {
            // const exist = choosen.find(e => e === data);
            setChoosen(prev => prev.filter(e => e !== data));
        }
    }

    function handleNextStep() {
        if (choosen.length === 5) {
            setGenres(choosen);
            onNextStep();
        }
    }

    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 10, opacity: 0 }}
            className="w-full min-h-[80vh] max-w-6xl mx-auto p-8 pt-16 md:pt-8 flex flex-col justify-between bg-white rounded-xl border border-slate-200">
            <div>
                <SlideIn delay={0.1}>
                    <div>
                        <h1 className="text-2xl font-buletin font-semibold">Pilih Preferensi Genre Tulisanmu</h1>
                        <p className="text-slate-600">Genre yang tepat akan sampai pada audiens yang tepat</p>
                    </div>
                </SlideIn>
                <div className="w-full mt-6">
                    <SlideIn delay={0.2}>
                        <p className="mb-2 font-medium">* Pilih 5 Genre</p>
                    </SlideIn>
                    <div className="flex gap-2 flex-wrap">
                        {genres.map((genre, id) => (
                            <SlideIn delay={0.2 + id * 0.01}>
                                <button onClick={() => handleChooseGenre(genre.value)} key={id} className={`py-1.5 px-4 rounded-xl border border-slate-200 cursor-pointer ${choosen.length < 5 ? 'active:bg-blue-500 active:text-white' : ''} ${choosen.includes(genre.value) ? 'bg-blue-600 text-white' : 'bg-slate-100'}`}>
                                    {genre.label}
                                </button>
                            </SlideIn>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col-reverse md:flex-row items-stretch justify-between mt-10">
                <SlideIn delay={0.6}>
                    <button onClick={onPreviousStep} className=" px-5 rounded-lg border border-slate-300 active:scale-100 cursor-pointer"><p className="py-2">Kembali</p></button>
                </SlideIn>
                <SlideIn delay={0.7}>
                    <RippleButton onClick={handleNextStep} className="text-lg px-20 bg-blue-800 hover:bg-blue-900 active:bg-blue-900 active:scale-100 mb-2 md:mb-0 flex justify-center"><p className="py-2">Selanjutnya</p></RippleButton>
                </SlideIn>
            </div>
        </motion.div>
    )
}