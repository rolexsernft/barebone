import MenuItems from "./MenuItems"

const SideBar = () => {
    return (
        <div className="main-sidebar">
            <div className="menu-content">
                <div className="menu-header">MENU ITEMS</div>
                <MenuItems />
            </div>
        </div>
    )
}

export default SideBar