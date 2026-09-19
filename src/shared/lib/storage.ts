import { createJSONStorage } from "zustand/middleware";

export const clientStorage = createJSONStorage(() => localStorage);