import { useState } from "react"
import "./theme.scss"

function Theme(){
    const [theme, setTheme]=useState("light")
    const changeTheme=()=>{
        setTheme(theme==="light" ? "dark" : "light")
    }
    console.log(theme)
    return(
        <>
        <label className="theme__wrapper" htmlFor="theme">
            <input id="theme" onChange={()=>changeTheme()} checked={theme==="dark"} className="theme__input" type="checkbox" />
            <span className="theme__slider"></span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_216)">
<path d="M22 12H23M12 2V1M12 23V22M20 20L19 19M20 4L19 5M4 20L5 19M4 4L5 5M1 12H2M12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18Z" stroke="#5E5E5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_216">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8067 15.1467C14.0699 15.1271 12.3862 14.5461 11.0069 13.4904C9.62768 12.4348 8.62701 10.9613 8.15442 9.28998C7.68184 7.61867 7.7627 5.83931 8.38493 4.21775C9.00716 2.59619 10.1374 1.21949 11.6067 0.293333C10.8642 0.100477 10.1004 0.00192329 9.33333 0C6.85798 0 4.48401 0.98333 2.73367 2.73367C0.98333 4.48401 0 6.85798 0 9.33333C0 11.8087 0.98333 14.1827 2.73367 15.933C4.48401 17.6833 6.85798 18.6667 9.33333 18.6667C10.7356 18.6654 12.1191 18.3441 13.3784 17.7271C14.6377 17.1102 15.7396 16.2139 16.6 15.1067C16.3364 15.1331 16.0716 15.1465 15.8067 15.1467Z" fill="#0C0C0C"/>
</svg>

        </label>
        </>
    )
}
export default Theme