import "./header.scss"
import Search from "../../features/search/ui/search"
import Theme from "../../features/theme/ui/theme"
import { getGreeting } from "../mainWeatherCard/lib/getGreeting"
import { useWeatherStore } from "../../shared/store/store"

function Header(){
     const data=useWeatherStore(state=> state.data)
const localtime = data?.location?.localtime
    return(
    <div className="header__main-wrapper">
        <h1 className="header__title">{getGreeting(localtime)}</h1>
        <div className="header__widgets-wrapper"> 
             <Search/>  
             <Theme/>
             </div>
    </div>
    )
}
export default Header