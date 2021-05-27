import React from 'react'

function Footer() {
    return (
        <div className="Footer--container">
            <div className="Just-Flex logo">
                <div>Agrol Platform</div>
                <div><span className="iconify" data-icon="openmoji:fallen-leaf" data-inline="false"></span></div>
            </div>
            <div className="Footer--Top-content">
                <div>
                    <div className="Footer--Content-name"> BRIGHT NATURE OF DECISION </div>
                    <div className="Footer--Content-content">Bringing growth, ingenuity, and experience to market.</div>
                </div>
                <div className="Footer--button">
                    <button className="Footer--contact-button">Contact Us</button>
                    <button>About Us</button>
                </div>
            </div>
            <div className="Footer-icon-wrapper">
                <div><span className="iconify Footer-icon" data-icon="fe:facebook" data-inline="false"></span></div>
                <div><span className="iconify Footer-icon" data-icon="bx:bxl-twitter" data-inline="false"></span></div>
                <div><span className="iconify Footer-icon" data-icon="mdi:gmail" data-inline="false"></span></div>
                <div><span className="iconify Footer-icon" data-icon="jam:whatsapp" data-inline="false"></span></div>
                <div><span className="iconify Footer-icon" data-icon="akar-icons:linkedin-fill" data-inline="false"></span></div>
            </div>
        </div>
    )
}

export default Footer
