
function open_menu() {
    const itemsMenuButton = document.getElementById("hamburguer-menu").children
    const asideBar = document.getElementById("aside-bar")

    const menuIsOpen = itemsMenuButton[0].classList.contains("hamburguer-menu__cancel")

    if( !menuIsOpen ){
        asideBar.className += " aside-bar__opened"
    }else{
        asideBar.classList.remove("aside-bar__opened")
    }

    for( let item of itemsMenuButton ){
        if( menuIsOpen ){
            item.classList.remove("hamburguer-menu__cancel")
        }else{
            item.className += " hamburguer-menu__cancel"
        }
    }
}