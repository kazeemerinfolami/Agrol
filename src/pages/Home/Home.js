import React from 'react'
import BodyFrame from '../components/BodyFrame'
import HomeForm from './HomeForm'
import { SideImg2, MapItem, ProductServices, SideImg1 } from './SideImg'

function Home() {


    const Navchildren = (<div className="Nav--Content-container">
        <div className="Nav--Content-name">Agrol Market Place</div>
        <div className="Nav--Content-deal">We deal with Organic and agricultural Food</div>
        <div className="Nav--Content-about">Creates Investment Opportunity for small investors: Investing in shares is open to large and small scale farmers because individuals buy the number of shares that they can afford</div>
        <button className="Nav--content-cart-ico">Visit our store</button>
    </div>)
    return (
        <BodyFrame BackgroundDisplay={"Nav--Background-Body"} Navchildren={Navchildren}>
            <div className="Top-Content--container">
                <div className="Top-Content--content">
                    <div className="Top-Content--WE">WE ARE AGROLY</div>
                    <div className="Top-Content--content1"><span className="Top-Content--content-bold">BRINGING GROWTH</span> TO AGRICULTURE</div>
                    <div className="Top-Content--content2">Growing community by inspiring healthy is our commitment with farmers, the abundant living on the field.</div>
                    <div className="Top-Content--content3">People at Agroly are helping farmers to emerging markets maximize their profits. We use agronomic machine learning, remote sensing, and mobile phones to deliver.</div>
                    <div>
                        <div className="Top-Content--content4">OUR SPECIAL OFFER</div>
                        <div className="Top-Content--List-container">
                            <ul>
                                <li><span className="iconify check-icon" data-icon="akar-icons:circle-check-fill" data-inline="false"></span>Market Research</li>
                                <li><span className="iconify check-icon" data-icon="akar-icons:circle-check-fill" data-inline="false"></span>Seed Testing</li>
                                <li><span className="iconify check-icon" data-icon="akar-icons:circle-check-fill" data-inline="false"></span>Organic Accreditation</li>
                            </ul>
                            <ul className="Top-Content--List-container2">
                                <li><span className="iconify check-icon" data-icon="akar-icons:circle-check-fill" data-inline="false"></span>Market Research</li>
                                <li><span className="iconify check-icon" data-icon="akar-icons:circle-check-fill" data-inline="false"></span>Seed Testing</li>
                                <li><span className="iconify check-icon" data-icon="akar-icons:circle-check-fill" data-inline="false"></span>Organic Accreditation</li>
                            </ul>
                        </div>
                        <button className="Top-Content--LearnMore">Learn More</button>
                    </div>
                </div>
                <SideImg1 />
            </div>
            <div className="Home-Services--container">
                <div className="Home-Services--into">What We are into</div>
                <ProductServices />
            </div>
            <MapItem />
            <div className="Home--Form-container">
                <SideImg2 />
                <HomeForm />
            </div>
        </BodyFrame>
    )
}

export default Home
