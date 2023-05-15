import React from "react";
import "./Pricingbody.css";
import courses from "../Images/pointer1icon.png";
import timer from "../Images/pointer2icon.png";
import live from "../Images/pointer3icon.png";
import scholarship from "../Images/pointer4icon.png";
import ads from "../Images/pointer5icon.png";
import one from "../Images/Icon1.png";
import two from "../Images/Icon2.png";
import IconClock from "../Images/IconClock2.png";
import { GrRadialSelected } from 'react-icons/gr';


function Pricingbody() {
    return ( 
        <>
            <div className="pricing_section">
                <div className="content_container">
                    <div className="main_heading">
                        <h1 className="heading">
                            Access curated courses worth <br /><span className='cross-line'>₹ 18,500</span> at just <span className='blue'>₹99</span> per year!
                        </h1>
                    </div>

                    <div className="content_wrap">
                        <div className="content_line">
                            <img className="left_icons" src={courses} alt="" />
                            <p className="left_lines"><span className='blue'>100+</span> Job relevant courses </p>
                        </div>

                        <div className="content_line">
                            <img className="left_icons" src={timer} alt="" />
                            <p className="left_lines"><span className='blue'>20,000+</span> Hours of content </p>
                        </div>

                        <div className="content_line">
                            <img className="left_icons" src={live} alt="" />
                            <p className="left_lines"><span className='blue'>Exclusive</span> webinar access</p>
                        </div>

                        <div className="content_line">
                            <img className="left_icons" src={scholarship} alt="" />
                            <p className="left_lines">Scholarship worth <span className='blue'>₹94,500</span></p>
                        </div>

                        <div className="content_line">
                            <img className="left_icons" src={ads} alt="" />
                            <p className="left_lines"><span className='blue'>Ad Free</span> learning experience</p>
                        </div>
                    </div>
                </div>

                <div className="payment_plan_container">
                    <div className="payment_plan_card">
                        <div className="signup_subscribe">
                            <div className="onetwo_div">
                                <img className="onetwo_img" src={one} alt="" />
                                <p className="oneTwoP">Sign Up</p>
                            </div>

                            <div className="onetwo_div">
                                <img className="onetwo_img" src={two} alt="" />
                                <p className="oneTwoP">Subscribe</p>
                            </div>
                        </div>

                        <h2 className="payment_title">Select your subcription plan</h2>

                        <div className="month_card month_expired">
                            <div className="month_radio_div">
                                <p className='offer-expired'>Offer expired</p>
                                <p className="months_p">
                                    <GrRadialSelected size={15} className='select-icons' /> 12 Months Subscription
                                </p>
                            </div>

                            <div className="pricing_div">
                                <p className="total_price">Total ₹99</p>
                                <p className="total_month">₹8 /mo</p>
                            </div>
                        </div>

                        <div className="month_card month_recommended">
                            <div className="month_radio_div">
                                <p className='offer-recommended'>Recommended</p>
                                <p className="months_p">
                                    <img className="tick-logo" alt="tick-radio-button" src="https://raw.githubusercontent.com/Meetawa/payment-page/9e21eaf50b5fda134ae3ac7601f686378de4cf83/src/assets/radio-button1.svg" />
                                    12 Months Subscription
                                </p>
                            </div>

                            <div className="pricing_div">
                                <p className="total_price">Total <span className="black">₹179</span></p>
                                <p className="total_month">₹8 /mo</p>
                            </div>
                        </div>

                        <div className="month_card">
                            <div className="month_radio_div months-input-part">
                                <input type="radio" name="select" id="select" />
                                <p className="months_p">6 Months Subscription</p>
                            </div>

                            <div className="pricing_div">
                                <p className="total_price">Total <span className="black">₹149</span></p>
                                <p className="total_month">₹8 /mo</p>
                            </div>
                        </div>

                        <div className="month_card">
                            <div className="month_radio_div months-input-part">
                                <input type="radio" name="select" id="select" />
                                <p className="months_p">3 Months Subscription</p>
                            </div>

                            <div className="pricing_div">
                                <p className="total_price">Total <span className="black">₹99</span></p>
                                <p className="total_month">₹8 /mo</p>
                            </div>
                        </div>

                        <hr />

                        <div className="subscription_fee_div">
                            <p className="subscription_fee">Subscription Fee</p>
                            <p className="subscription_price"><span className="black">₹18,500</span></p>
                        </div>

                        <div className="limited_time_div">

                            <div className="limited_time_text_side">

                                <p className="limited_time_offer">Limited time offer</p>

                                <div className="limited_time_text_div2">
                                    <img className="timer_img" src={IconClock} alt="timer" />
                                    <p className="limited_time_date">
                                        Offer valid till 25th March 2023
                                    </p>
                                </div>
                            </div>

                            <div className="limited_time_price_side">
                                <p className="limited_time_price"><span className="black">- ₹18,401</span></p>
                            </div>

                        </div>

                        <div className="total_fee_div">
                            <p className="total_fee"><span className="black">Total</span> (Incl. of 18% GST)</p>
                            <p className="total_price"><span className="black">₹149</span></p>
                        </div>
                        <div className="btn-container">
                            <button className="cancel-btn">CANCEL</button>
                            <button className="pay-btn">PROCEED TO PAY</button>
                        </div>
                        <img src="https://cdn.razorpay.com/static/assets/merchant-badge/badge-dark.png" className='razorpay-logo' alt="logo" />

                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricingbody;