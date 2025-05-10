import { Upload, UserRound } from "lucide-react";
import RippleButton from "../elements/RippleButton";
import useProfile from "../../states/profile.state";
import { useEffect, useState } from "react";
import SlideIn from "../elements/SlideIn";
import { type Profile } from "../../types/index.type";
import { motion } from "motion/react";

type Levels = Profile['writingLevel'];
interface Props {
    onNextStep: VoidFunction;
}

export default function Profile({ onNextStep }: Props) {
    const levels: Levels[] = ['Pemula', 'Jarang', 'Sering', 'Profesional'];
    const { profile, setProfile } = useProfile();
    const [inputValues, setInputValues] = useState<Profile>({
        fullname: '',
        username: '',
        email: '',
        bio: '',
        writingLevel: '',
        imageUrl: '',
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        profile && setInputValues({
            fullname: profile.fullname,
            username: profile.username,
            email: profile.email,
            bio: profile.bio,
            writingLevel: profile.writingLevel,
            imageUrl: profile.imageUrl,
        });
    }, [profile]);
    // const [imageFile, setImageFile] = useState<File | null>(null);
    const [showErrors, setShowErrors] = useState(false);

    function handleImageUrl(data: FileList) {
        const url = URL.createObjectURL(data[0]);
        setInputValues({ ...inputValues, imageUrl: url });
    }

    function handleSetLevel(data: Levels) {
        setInputValues({ ...inputValues, writingLevel: data })
    };

    function handleNextStep() {
        setProfile(inputValues);
        if (inputValues.fullname.length > 1 && inputValues.username.length > 1 && inputValues.email.includes('@') && inputValues.writingLevel.length > 1) {
            onNextStep();
        } else {
            setShowErrors(true);
            window.scrollTo(0, 0);
        }
    }

    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 10, opacity: 0 }}
            className="w-full max-w-6xl mx-auto p-8 pt-16 md:pt-8 bg-white rounded-xl border border-slate-200">
            <div>
                <h1 className="text-2xl font-buletin font-semibold">Buat Profilmu</h1>
                <p className="text-slate-600">Beri tahu Dunia tentang Dirimu</p>
            </div>
            <form>
                <div className="mt-6 w-full flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <SlideIn delay={0.1}>
                            <div className="mb-3">
                                <label>
                                    <p className="label font-medium">Nama Lengkap <span className="text-red-600">*</span></p>
                                    <input value={inputValues.fullname} onChange={e => setInputValues({ ...inputValues, fullname: e.target.value })} type="text" placeholder="Masukkan Nama Lengkap" className="w-full py-2 px-4 mt-1.5 rounded-lg border border-slate-200 outline-0" />
                                    {showErrors && inputValues.fullname.length <= 0 && (
                                        <p className="text-red-600 text-sm">* Nama Lengkap harus diisi</p>
                                    )}
                                </label>
                            </div>
                        </SlideIn>
                        <SlideIn delay={0.2}>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:mb-3 flex-1">
                                    <label>
                                        <p className="label font-medium">Nama Pena <span className="text-red-600">*</span></p>
                                        <input value={inputValues.username} onChange={e => setInputValues({ ...inputValues, username: e.target.value })} type="text" placeholder="Masukkan Nama Pena" className="w-full py-2 px-4 mt-1.5 rounded-lg border border-slate-200 outline-0" />
                                        {showErrors && inputValues.username.length <= 0 && (
                                            <p className="text-red-600 text-sm">* Nama Pena harus diisi</p>
                                        )}
                                    </label>
                                </div>
                                <div className="mb-3 flex-1">
                                    <label>
                                        <p className="label font-medium">Email <span className="text-red-600">*</span></p>
                                        <input value={inputValues.email} onChange={e => setInputValues({ ...inputValues, email: e.target.value })} type="email" placeholder="Masukkan Alamat Email" className="w-full py-2 px-4 mt-1.5 rounded-lg border border-slate-200 outline-0" />
                                        {showErrors && !inputValues.email.includes('@') && (
                                            <p className="text-red-600 text-sm">* Email tidak valid</p>
                                        )}
                                    </label>
                                </div>
                            </div>
                        </SlideIn>
                        <SlideIn delay={0.3}>
                            <div className="mb-3">
                                <label>
                                    <p className="label font-medium">Bio</p>
                                    <textarea value={inputValues.bio} onChange={e => setInputValues({ ...inputValues, bio: e.target.value })} rows={4} placeholder="Tentang anda, Personality, Latar Belakang, Motivasi, Status, atau Gaya tulisan..." className="w-full py-2 px-4 mt-1.5 rounded-lg border border-slate-200 outline-0"></textarea>
                                </label>
                            </div>
                        </SlideIn>
                        <SlideIn delay={0.4}>
                            <div>
                                <p className="label font-medium">Level menulis <span className="text-red-600">*</span></p>
                                <div className="w-full flex flex-wrap md:flex-nowrap items-center gap-2 mt-2 mb-1">
                                    {levels.map((level, id) => (
                                        <button type="button" key={id} onClick={() => handleSetLevel(level)} className={`p-3 font-medium w-fit md:flex-1 text-center rounded-lg border border-slate-200 cursor-pointer ${inputValues.writingLevel === level ? 'bg-blue-600 text-white' : ''}`}>{level}</button>
                                    ))}
                                </div>
                                {showErrors && inputValues.writingLevel.length <= 0 && (
                                    <p className="text-red-600 text-sm">* Pilih salah satu</p>
                                )}
                            </div>
                        </SlideIn>
                    </div>
                    <SlideIn delay={0.5}>
                        <div className="w-full md:w-72">
                            <p className="label font-medium">Foto Profil</p>
                            <div className="w-full mt-1.5 rounded-xl border-2 border-dashed border-slate-300 p-10 flex flex-col items-center gap-4">
                                <div className="w-40 h-40 rounded-full overflow-hidden border border-slate-200">
                                    {inputValues.imageUrl.length > 1 ? (
                                        <img src={inputValues.imageUrl} alt={inputValues.fullname} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-slate-100 text-slate-300 flex items-center justify-center">
                                            <UserRound size={50} />
                                        </div>
                                    )}
                                </div>
                                <label>
                                    <input onChange={e => handleImageUrl(e.target.files as FileList)} type="file" accept="image/*" className="hidden" />
                                    <div className="py-1.5 px-4 rounded-md border border-slate-200 flex items-center gap-2 cursor-pointer hover:bg-slate-100 active:scale-95">
                                        <Upload size={16} />
                                        <p>Upload</p>
                                    </div>
                                </label>
                                <p className="text-slate-500 text-center">JPEG, PNG, or GIF.<br />Max 2MB.</p>
                            </div>
                        </div>
                    </SlideIn>
                </div>
            </form>
            <SlideIn delay={0.6}>
                <div className="w-full flex items-stretch md:justify-end mt-10">
                    <RippleButton onClick={handleNextStep} className="text-lg px-20 w-full md:w-fit flex justify-center bg-blue-800 hover:bg-blue-900 active:bg-blue-900 active:scale-100"><p className="py-2">Selanjutnya</p></RippleButton>
                </div>
            </SlideIn>
        </motion.div>
    )
}