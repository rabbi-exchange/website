import {create} from 'zustand';
import { persist } from 'zustand/middleware';



type ThemeState = {
    mode: "wireframe" | "black"
    toggleMode: (theme: "wireframe" | "black") => void
  }
  
  export const useThemeStore = create<ThemeState>()(
    persist(
      (set) => ({
        mode: "black",
        toggleMode: (theme) => set((state) => ({ mode: theme })),
      }),
      { name: "theme-store" }
    )
  )


