if( localStorage.getItem("dark-mode") === "true" || (window.matchMedia('(prefers-color-scheme: dark)') && localStorage.getItem("dark-mode") === undefined) ) {
    document.body.classList.add("dark")
    document.getElementById("darkmode_icon").classList.add("switchtheme-circle__active")
}else {
    document.body.classList.remove("dark")
    document.getElementById("darkmode_icon").classList.remove("switchtheme-circle__active")
}

function handleDarkMode(){
    const themeIsDark = document.body.classList.toggle("dark")
    const darkModeIcon = document.getElementById("darkmode_icon")
    darkModeIcon.classList.toggle("switchtheme-circle__active")

    if( themeIsDark ){
        localStorage.setItem("dark-mode", `${"true"}`)
    } else {
        localStorage.setItem("dark-mode", `${"false"}`)
    }
}

