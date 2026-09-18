import { create } from "zustand";

import { getGames } from "../../api";
import type { Game, GameListParams } from "../types";

interface GameStore {
  games: Game[];
  currentPage: number;
  pageSize: number;
  isLoading: boolean;
  errorMessage: string;
  gamesFetch: (params?: GameListParams) => Promise<void>;
  gamesPageSet: (page: number) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  games: [],
  currentPage: 1,
  pageSize: 12,
  isLoading: false,
  errorMessage: "",

  gamesFetch: async (params) => {
    set({ isLoading: true, errorMessage: "" });
    try {
      const games = await getGames(params);
      set({ games, currentPage: 1 });

    } catch (error) {
      set({ errorMessage: "Something went wrong. Please try again later." });
      console.log(error);

    } finally {
      set({ isLoading: false });
    }
  },

  gamesPageSet: (page) => {
    set({ currentPage: page });
  },
}));