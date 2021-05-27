import React from 'react'
import BodyFrame from '../components/BodyFrame'

function About() {
    const Navchildren = (<div className="Aboutus--Nav--Content-container">
        <div className="Nav--Content-name">About Us</div>
    </div>)
    return (
        <BodyFrame BackgroundDisplay={"AboutUs--Nav--Background-Body"} Navchildren={Navchildren}>
            About
        </BodyFrame>
    )
}

export default About
