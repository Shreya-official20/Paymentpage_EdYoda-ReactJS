import React, { useState } from "react";
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
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';


function Pricingbody() {
    const [select, setSelect] = useState({
        12: true,
        6: false,
        3: false,
    })
    const [value, setValue] = useState(179)
    const [discount, setDiscount] = useState(18401)
    const [total, setTotal] = useState(value + (18500 - discount));
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
                                <p className='offer-expired'><span className="ex-rc-text">Offer expired</span></p>
                                <p className="months_p">
                                    <GrRadialSelected size={15} className='select-icons' /> 12 Months Subscription
                                </p>
                            </div>

                            <div className="pricing_div">
                                <p className="total_price">Total ₹99</p>
                                <p className="total_month">₹8 /mo</p>
                            </div>
                        </div>

                        <div className={`month_card month_recommended ${select[12] ? 'subscription2' : 'subscription'}`} onClick={() => {
                            setSelect({
                                12: true,
                                6: false,
                                3: false
                            })
                            setTotal(0)

                            setValue(179);
                            setDiscount(18401)
                            setTotal(value + (18500 - discount))
                        }}>
                            <div className="month_radio_div">
                                <p className='offer-recommended'><span className="ex-rc-text">Recommended</span></p>
                                <p className="months_p">

                                    <div className={` ${select[12] ? 'checkFill' : 'checkEmpty'}`}>
                                        {select[12] ? <BsCheckCircleFill /> : <MdRadioButtonUnchecked />}
                                    </div>

                                    <span className="recommend_text" >12 Months Subscription</span>
                                </p>

                            </div>

                            <div className="pricing_div">
                                <p className="total_price">Total <span className="black">₹179</span></p>
                                <p className="total_month">₹8 /mo</p>
                            </div>
                        </div>

                        <div className={`month_card ${select[6] ? 'subscription2' : 'subscription'}`} onClick={() => {
                            setSelect({
                                12: false,
                                6: true,
                                3: false
                            })
                            setTotal(0)

                            setValue(149);
                            setDiscount(18301)
                            setTotal(value + (18500 - discount))


                        }}>
                            <div className="month_radio_div months-input-part">

                                <div className={`${select[6] ? 'checkFill' : 'checkEmpty'}`}>
                                    {select[6] ? <BsCheckCircleFill /> : <MdRadioButtonUnchecked />}

                                </div>
                                <p className="months_p">6 Months Subscription</p>
                            </div>

                            <div className="pricing_div">
                                <p className="total_price">Total <span className="black">₹149</span></p>
                                <p className="total_month">₹8 /mo</p>
                            </div>
                        </div>

                        <div className={`month_card ${select[3] ? 'subscription2' : 'subscription'}`} onClick={() => {
                            setSelect({
                                12: false,
                                6: false,
                                3: true
                            })
                            setTotal(0)
                            setValue(199);
                            setDiscount(18201)
                            setTotal(value + (18500 - discount))
                        }}>
                            <div className="month_radio_div months-input-part">

                                <div className={`${select[3] ? 'checkFill' : 'checkEmpty'}`}>
                                    {select[3] ? <BsCheckCircleFill /> : <MdRadioButtonUnchecked />}

                                </div>
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
                                <p className="limited_time_price"><span className="black">- ₹{discount}</span></p>
                            </div>

                        </div>

                        <div className="total_fee_div">
                            <p className="total_fee"><span className="black">Total</span> (Incl. of 18% GST)</p>
                            <p className="total_price"><span className="black">₹{total}</span></p>
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