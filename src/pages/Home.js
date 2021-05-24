import React from 'react'
import BodyFrame from './components/BodyFrame'

function Home() {
    return (
        <BodyFrame>
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
                <div className="Top-Content--worker-img-container">
                    <img className="Top-Content--worker-img" src="https://res.cloudinary.com/kazeemerinfolami/image/upload/v1621851905/Algro/alejandro-duarte-8dwYOzLPCtA-unsplash_l05z7t.jpg" alt="workerIMG" />
                </div>
            </div>
        </BodyFrame>
    )
}

export default Home
