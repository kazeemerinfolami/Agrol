import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function BodyFrame({ children, BackgroundDisplay, Navchildren }) {
    return (
        <div>
            <Nav BackgroundDisplay={BackgroundDisplay}>
                {Navchildren}
            </Nav>
            {children}
            <Footer />
        </div>
    )
}

export default BodyFrame
