import React from 'react';
import { Col, Row } from 'react-bootstrap';
import actvebannersection2  from "../../../../assets/SpecialSaleOffer_slider/actvebannersection2.png"
import primarybaground  from "../../../../assets/SpecialSaleOffer_slider/primarybaground.png"
import leptop  from "../../../../assets/SpecialSaleOffer_slider/leptop.png"
import witchslider  from "../../../../assets/SpecialSaleOffer_slider/witchslider-img-1 2.png"

const NewArivalsBanner=()=> {
        const bannerData = [
                {
                        id: 1,
                        name: "New Arrivals",
                        description: " Mega sele android phone ",

                        view: 'Only This Weeks',
                        bannerImg: leptop,
                        backgraund:primarybaground,
                        bgClass: "bg-primary", // Replace with the appropriate Bootstrap background class
                },
                {
                        id: 2,
                        name: "New Arrivals",
                        description: " Mega sele android phone ",

                        view: 'Only This Weeks',
                        backgraund:actvebannersection2,
                        bannerImg: witchslider,
                        bgClass: "bg-dark", // Replace with the appropriate Bootstrap background class
                },

        ];
        return (
            <section className='mt-4'>
            
                                                <div className="row">
                                                        <div className="d-flex gap-5">
                                                                {
                                                                        bannerData?.map(banner => <div key={banner.id} className={`${banner.bgClass}`} style={{ borderRadius: "10px", height: "400px", width: "847px" }}>
                                                                                <div className='d-flex  ' style={{ gap: 60, padding: "75px", }} >
                                                                                        <div className='' style={{
                                                                                                marginTop: -10,
                                                                                        }} >
                                                                                                <p className='' style={{ fontFamily: "inter", fontSize: "22px", fontStyle: "normal", fontWeight: 700, lineHeight: "normal", color: "#FFFFFF" }}>{banner.name}</p>
                                                                                                <h4 className='' style={{ fontFamily: "inter", fontSize: "52px", fontStyle: "normal", fontWeight: 700, lineHeight: "normal", color: "#FFFFFF" }}>{banner.description}</h4>
                                                                                                <p className=' special_offer_banner_vew_text ' style={{ color: "#FFFFFF" }}>{banner.view}</p>
                                                                                                <button style={{
                                                                                                        color: "#FFFFFF", width: "140px", height: "46px",
                                                                                                        flexShrink: 0,
                                                                                                        borderRadius: "10px", backgroundColor: "#FFF"
                                                                                                }} className=' '>
                                                                                                        <span style={{ fontFamily: "inter", fontSize: "12px", fontStyle: 'normal', fontWeight: 500, lineHeight: "normal", color: "#000000" }} className=''
                                                                                                        > shop now</span></button>
                                                                                        </div>
                                                                                        <dev style={{
                                                                                                backgroundColor: "#AFBE9B",
                                                                                                with: "363px", height: "319.901px",
                                                                                                background: `url(${ banner.backgraund})`
                                                                                        }}>
                                                                                                <img className='mb-2' src={banner.bannerImg} alt="" style={{
                                                                                                        margin: -15, width: "318px", height: "303px", flexShrink: 0
                                                                                                }} />
                                                                                        </dev>


                                                                                </div>


                                                                        </div>)
                                                                }

                                                        </div>
                                                </div>
          
            </section>
        );
}

export default NewArivalsBanner;