import React from 'react'
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div className="Nav--Background-Body">
            <nav className="Nav--container Flex-straight">
                <div className="Just-Flex">
                    <div>Agrol Platform</div>
                    <div><span className="iconify" data-icon="openmoji:fallen-leaf" data-inline="false"></span></div>
                </div>
                <div><span className="iconify Mini-Menu" data-icon="gg:menu-grid-r" data-inline="false"></span></div>
                <ul className="Flex-straight Nav--List-container">
                    <li>
                        <NavLink to="/" activeClassName="ActiveLink" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
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
            <div className="Nav--Content-container">
                <div className="Nav--Content-name">Agrol Market Place</div>
                <div className="Nav--Content-deal">We deal with Organic and agricultural Food</div>
                <div className="Nav--Content-about">Creates Investment Opportunity for small investors: Investing in shares is open to large and small scale farmers because individuals buy the number of shares that they can afford</div>
                <button >
                    <div className="Just-Flex">
                        <div className="Nav--content-cart-ico">Visit our store</div>
                        <div><span className="iconify Nav--content-cart-icon" data-icon="ic:twotone-local-grocery-store" data-inline="false"></span></div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Nav
