import { useEffect } from "react"
import { useThemeStore } from "./shared/store/themeStore"
import "./app/styles/variables.scss"
import WeatherPage from "./pages/weatherPage/weatherPage"
function App() {
  const theme= useThemeStore((state)=> state.theme)
  useEffect(()=>{
document.documentElement.setAttribute("data-theme", theme)
  },[theme])

  return (
    <>
     <WeatherPage/>
    </>
  )
}

export default App
