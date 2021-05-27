import React from 'react'
import { NavLink } from "react-router-dom";

function Nav({ BackgroundDisplay, children }) {
    return (
        <div className={BackgroundDisplay}>
            <nav className="Nav--container Flex-straight">
                <div className="Just-Flex">
                    <div>Agrol Platform</div>
                    <div><span className="iconify" data-icon="openmoji:fallen-leaf" data-inline="false"></span></div>
                </div>
                <div><span className="iconify Mini-Menu" data-icon="gg:menu-grid-r" data-inline="false"></span></div>
                <ul className="Flex-straight Nav--List-container">
                    <li>
                        <NavLink to="/" exact activeClassName="ActiveLink" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="ActiveLink" exact>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Inpacts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Contact Us</NavLink>
                    </li>
                </ul>
            </nav>
            {children ? children : ""}
        </div>
    )
}

export default Nav
