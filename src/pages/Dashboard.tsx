import { PenTool } from "lucide-react";
import RippleButton from "../components/elements/RippleButton";
import useProfile from "../states/profile.state";

export default function Dashboard() {
    const { profile } = useProfile();
    return (
        <div>
            <div className="w-full pt-5 pb-10 flex flex-col md:flex-row md:items-center justify-between font-buletin">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-3xl font-semibold mb-1.5">Dashboard</h1>
                    <p>Halo {profile?.username}, Siap untuk menulis sesuatu?</p>
                </div>
                <RippleButton className="w-fit active:scale-100">
                    <>
                        <PenTool width="20px" />
                        <p className="leading-[1.75]">Buat Tulisan Baru</p>
                    </>
                </RippleButton>
            </div>
        </div>
    )
}