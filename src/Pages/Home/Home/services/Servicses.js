import React from 'react';
import servicecar from '../../../../assets/servicesimg/FastAndFreeDelivery.svg'
import worldwide from '../../../../assets/servicesimg/Fastest worldwide shipping.svg'
import secureShoppingPayment from '../../../../assets/servicesimg/secureShoppingPayment.svg'
import unique from '../../../../assets/servicesimg/Unique.svg'

const Servicses = () => {
        return (
                <div className='row  py-4' style={{backgroundColor:"#FFFFFF",height:"143px",marginTop:"47px"}}>
                        <div className='d-flex servises_grid_item ' style={{ gap: "120px",marginTop:40 }}>

                                <div className='d-flex gap-2'>
                                        <img src={servicecar} alt='' style={{ color: "#FF5530", width: "57px", height: "28px", flexShrink: 0 }}></img>
                                        <div><h5 style={{ color: '#000000', fontSize: "20px", fontWeight: 700, fontStyle: "normal", fontFamily: "inter" }}>Fast And Free Delivery</h5>
                                                <p style={{ fontSize: "14px", fontFamily: "inter", fontSizeAdjust: "normal", color: "#2A2A2AE5", fontWeight: 400, lineHeight: "normal" }}>Fastest worldwide shipping</p>
                                        </div>
                                </div>
                                <span className='' style={{ height: "60px", color: "#AFAFAF" }}>||</span>

                                <div className='d-flex gap-2'>
                                        <img src={worldwide} alt='' style={{ width: "37px", height: "40px", flexShrink: 0, color: "#FF5530" }}></img>
                                        <div><h5 style={{ color: '#000000', fontSize: "20px", fontWeight: 700, fontStyle: "normal", fontFamily: "inter" }}>Fastest worldwide shipping</h5>
                                                <p style={{ fontSize: "14px", fontFamily: "inter", fontSizeAdjust: "normal", color: "#2A2A2AE5", fontWeight: 400, lineHeight: "normal" }}>100% money back guarantee</p>
                                        </div>
                                </div>
                                <span className='' style={{ height: "60px", color: "#AFAFAF" }}>|</span>

                                <div className='d-flex gap-2'>
                                        <img src={secureShoppingPayment} alt='' style={{ width: "37.254px", height: "42.001px", color: "#FF5530", flexShrink: 0 }} ></img>
                                        <div><h5 style={{ color: '#000000', fontSize: "20px", fontWeight: 700, fontStyle: "normal", fontFamily: "inter" }}>Secure Shopping & Payment</h5>
                                                <p style={{ fontSize: "14px", fontFamily: "inter", fontSizeAdjust: "normal", color: "#2A2A2AE5", fontWeight: 400, lineHeight: "normal" }}>You’re in safe hands</p>
                                        </div>
                                </div>

                                <span className='' style={{ height: "60px", color: "#AFAFAF" }}>|</span>


                                <div className='d-flex gap-2'>
                                        <img src={unique} alt='' style={{ color: "#FF5530", width: "37.227px", height: "34.612px", flexShrink: 0 }}></img>
                                        <div><h5 style={{ color: '#000000', fontSize: "20px", fontWeight: 700, fontStyle: "normal", fontFamily: "inter" }} >Over 15 M</h5>
                                                <p style={{ fontSize: "14px", fontFamily: "inter", fontSizeAdjust: "normal", color: "#2A2A2AE5", fontWeight: 400, lineHeight: "normal" }}>Unique Products</p>

                                        </div>
                                </div>

                        </div>


                </div>
        );
}

export default Servicses;