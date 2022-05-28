import React, { useState } from 'react';
function Navigation(props) {
    const [open, setOpen] = useState(false);

    const triggerNavigation = () => {
        setOpen(!open);
        if(open){
            document.querySelector("nav").classList.add("open");
        } else{
            document.querySelector("nav").classList.remove("open");
        }
    }

    return(
    <nav className={props.class}>
        <ul>
            <li onClick={triggerNavigation}>Start</li>
            <li>About me</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
        </ul>
    </nav>
    )
}

export default Navigation;