import { create } from "zustand";

interface GenreState {
  genres: string[];
  setGenres: (data: string[]) => void;
}

const useGenre = create<GenreState>((set) => ({
  genres: [],
  setGenres: (data) =>
    set(() => {
      const uniqueGenres = Array.from(new Set(data));
      const limitedGenres = uniqueGenres.slice(0, 5);
      return { genres: limitedGenres };
    }),
}));

export default useGenre;