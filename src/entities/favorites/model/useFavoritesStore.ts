import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Game } from "~/entities/game";
import { clientStorage } from "~/shared/lib/storage";

interface FavoritesStore {
  items: Game[];
  add: (game: Game) => void;
  remove: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      items: [],

      add: (game) => {
        set((state) => ({
          items: state.items.some((item) => item.id === game.id)
            ? state.items
            : [game, ...state.items],
        }));
      },

      remove: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      isFavorite: (id) => get().items.some((item) => item.id === id),
    }),

    {
      name: "playcore:favorites",
      storage: clientStorage,
      partialize: (state) => ({ items: state.items }),
    },
  ),
);