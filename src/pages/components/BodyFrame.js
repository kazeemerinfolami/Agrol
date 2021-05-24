import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function BodyFrame({ children }) {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default BodyFrame
