import { useContext, useState } from "react"
import { contentContext } from "./Context"

const MenuItems = () => {
    const [selectedMenu, setSelectedMenu] = useState("")
    const {setContent} = useContext(contentContext)
    const menus = ["Menu 1", "Menu 2", "Menu 3", "Menu 4", "Menu 5"]

    const handleMenuSelect = (e, menu) => {
        setSelectedMenu(menu)
        setContent(menu)
        const sidebar = document.querySelector(".main-sidebar")
        sidebar.style.left = "-500px"
        e.stopPropagation()
    }

    return (
        <ul className="menu-items">
            {menus?.map(item => <li key={item} className={`${selectedMenu === item && "highlight-menu"} menus`} onClick={(e) => handleMenuSelect(e, item)}>{item}</li>)}
        </ul>
    )
}

export default MenuItems