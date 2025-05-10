import buletinSVG from "../../assets/buletin.svg";
import { UserRound } from "lucide-react";
import Button from "../elements/Buttons";
import CircledIcon from "../elements/CircledIcon";
import useProfile from "../../states/profile.state";

export default function Header() {
    const { profile } = useProfile();
    return (
        <header className="fixed top-0 left-0 w-full h-fit flex items-center justify-center px-10 bg-white border-b border-slate-200">
            <div className="w-full max-w-7xl flex h-16 items-center justify-between">
                <a href="/" className="flex items-center gap-2">
                    <img src={buletinSVG} alt="buletin logo" className="w-8" />
                    <p className="font-buletin text-xl font-bold">Buletin.co</p>
                </a>
                <div className="flex items-center gap-2">
                    {profile && (
                        <Button type="transparent">
                            <>
                                {profile.imageUrl.length > 1 ? (
                                    <img src={profile.imageUrl} className="w-8 h-8 rounded-full object-cover" />
                                ) : (
                                    <CircledIcon type="primary">
                                        <UserRound width="20px" />
                                    </CircledIcon>
                                )}
                                <p className="leading-[2]">{profile.username}</p>
                            </>
                        </Button>
                    )}
                </div>
            </div>
        </header>
    )
}