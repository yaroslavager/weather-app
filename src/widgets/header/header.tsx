import "./header.scss"
import Search from "../../features/search/ui/search"
import Theme from "../../features/theme/ui/theme"

function Header(){
    return(
    <div className="header__main-wrapper">
        <h1>Good Morning</h1>
        <div className="header__widgets-wrapper"> 
             <Search/>  
             <Theme/>
             </div>
    </div>
    )
}
export default Header