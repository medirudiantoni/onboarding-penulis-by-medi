import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Finish from "./Finish"
import Welcome from "./Welcome";
import Profile from "./Profile";
import Genre from "./Genre";

interface Props {
    onComplete: VoidFunction;
}

export default function OnBoarding({ onComplete }: Props) {
    // const steps = [1, 2, 3, 4];
    const [currentStep, setCurrentStep] = useState(1);
    function handleNextStep() {
        setCurrentStep(prev => prev + 1);
    }
    function handlePreviousStep() {
        setCurrentStep(prev => prev !== 1 ? prev - 1 : 1);
    }
    return (
        <div className="w-full min-h-screen bg-slate-100 p-0 md:pt-16 md:px-10 flex flex-col justify-between">
            <AnimatePresence mode="wait">
                <div>
                    {
                        currentStep === 1 ? <Welcome onNextStep={handleNextStep} /> :
                            currentStep === 2 ? <Profile onNextStep={handleNextStep} /> :
                                currentStep === 3 ? <Genre onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} /> :
                                    currentStep === 4 && <Finish onCompleteStep={onComplete} />
                    }
                </div>
            </AnimatePresence>
            <div className="w-full  mt-10 py-5 border-t border-slate-200 flex items-center justify-center">
                <p className="text-sm text-slate-600">&copy; Buletin.co. All Rights Reserved</p>
            </div>
        </div>
    )
};