import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Theme{
theme: "light" | "dark",
changeTheme: ()=> void

}

export const useThemeStore= create<Theme>()(
persist(
(set)=>({
theme: "light",
changeTheme: ()=>{
set((state)=>({

    theme: state.theme ==="light" ? "dark" : "light"
}))

}

}),
{name: "theme"}

)


)