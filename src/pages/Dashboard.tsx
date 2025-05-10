import { PenTool } from "lucide-react";
import RippleButton from "../components/elements/RippleButton";

export default function Dashboard() {
    return (
        <div>
            <div className="w-full pt-5 pb-10 flex flex-col md:flex-row md:items-center justify-between font-buletin">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-3xl font-semibold mb-1.5">Writer's Dashboard</h1>
                    <p>Welcome back, Medi. Ready to create?</p>
                </div>
                <RippleButton className="w-fit active:scale-100">
                    <>
                        <PenTool width="20px" />
                        <p className="leading-[1.75]">New Work</p>
                    </>
                </RippleButton>
            </div>
        </div>
    )
}