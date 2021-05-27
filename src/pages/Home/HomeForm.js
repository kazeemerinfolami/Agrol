import React from 'react'

function HomeForm() {
    return (
        <div>
            <form>
                <div className="Home-Services-form--into">Get in Touch</div>
                <div className="Home-Services-form--into2">Send us you message and we will get back to you!</div>
                <div className="form-row form--box">
                    <div className="col-md-6 mb-6">
                        <label for="validationServer01">First name</label>
                        <input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" value="" required />
                    </div>

                    <div className="col-md-6 mb-6">
                        <label for="validationServer02">Last name</label>
                        <input type="text" className="form-control is-valid" id="validationServer02" placeholder="Last name" value="" required />
                    </div>

                    <div className="col-md-12 mb-12">
                        <label for="validationServer01">Email</label>
                        <input type="text" className="form-control is-valid" id="validationServer01" placeholder="Email" value="" required />
                    </div>
                    <div className="col-md-12 mb-12 ">
                        <label for="exampleFormControlTextarea1">Your message</label>
                        <textarea className="form-control is-valid" placeholder="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-lg submit--btn float-right">Submit<span className="iconify" data-icon="bx:bx-message-detail" data-inline="false"></span></button>
                </div>
            </form>
        </div>
    )
}

export default HomeForm
