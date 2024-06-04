import MenuIcon from "./MenuIcon"

const Header = () => {

    const toggleSidebar = (e) => {
        const sidebar = document.querySelector(".main-sidebar")
        sidebar.style.left = 0
        e.stopPropagation()
    }

    return <>
    <div className="header">
        <div className="header-content">
            <div className="menu-icon" onClick={(e) => toggleSidebar(e)}>
                <MenuIcon />
            </div>
            <div className="logo">
                SKELETON
            </div>
        </div>
    </div>
    </>

}

export default Header
