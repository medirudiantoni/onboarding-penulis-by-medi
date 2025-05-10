import { create } from 'zustand';
import type { Profile } from '../types/index.type';

interface StateTypes {
    profile: Profile | null,
    setProfile: (data: Profile) => void;
    clearProfile: VoidFunction;
};

const useProfile = create<StateTypes>((set) => ({
    profile: null,
    setProfile: (data) => set({ profile: data }),
    clearProfile: () => set({ profile: null })
}));

export default useProfile;