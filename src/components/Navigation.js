function Navigation(props) {
    /**
    * Changing style on navigation 
    * when user scrolls down or reaches top
    */
    window.addEventListener("scroll", () => {
        if (document.querySelector("nav")){
            if( window.scrollY >= 46 ){
                document.querySelector("nav").classList.add("fixed");
            } else {
                document.querySelector("nav").classList.remove("fixed");
            }
        }
    });

    const views = props.views;
    return(
    <nav className={props.class}>
        <ul>
            <li className={views[0] ? "selected": ""}><a href="/#welcome">Start</a></li>
            <li className={views[1] ? "selected": ""}><a href="/#about">About me</a></li>
            <li className={views[2] ? "selected": ""}><a href="/#project-list">Projects</a></li>
            <li className={views[3] ? "selected": ""}><a href="/#skills">Skills</a></li>
            <li className={views[4] ? "selected": ""}><a href="/#contact">Contact</a></li>
        </ul>
    </nav>
    )
}

export default Navigation;