import React from 'react'
import CTAStyle from '../styles/CTAStyle';
import wlotus from '../static/lotuswhite.png';
const CTA = () => {
    return (
        <CTAStyle>
            <img src={wlotus} alt=""/>
            <h4>Ultimate Relaxation <br/>
            For Your Body &amp; Soul.</h4>
             <form>
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="col-lg-6 col-sm-12">
                <input type="text" className="form-control" placeholder="Last name" />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                <input type="email" className="form-control" placeholder="Check In" />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                <input type="email" className="form-control" placeholder="Program" />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                <textarea className="form-control" name="message" rows="3" placeholder="Additional Comment? (optional)"></textarea>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                            
                 </div>
            </div>
            </form>
        </CTAStyle>
    )
}

export default CTA
