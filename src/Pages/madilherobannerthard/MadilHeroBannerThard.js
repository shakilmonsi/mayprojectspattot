import React from 'react';
import "./madinlherobannerthard.css"
import bag from "../../assets/madilherothrad/bag.png"
import leptop from "../../assets/madilherothrad/leptop.png"
import primarybackground from "../../assets/madilherothrad/primarybackground (1).png"
import bgDarkBackground from "../../assets/madilherothrad/bgDarkBackground.png"
import bgsecondary from "../../assets/madilherothrad/bgsecondary.png";
import watch from "../../assets/madilherothrad/watch.png"



const MadilHeroBannerThard = () => {
        const bannerData = [
                {
                        id: 1,
                        name: "New Arrivals",
                        description: "Mega Sale Android Phone",
                        view: 'Only This Weeks',
                        bannerImg: leptop,
                        background: primarybackground,

                        bgClass: "bg-primary", // Replace with the appropriate Bootstrap background class
                },
                {
                        id: 2, // Make sure each item has a unique ID
                        name: "New Arrivals",
                        description: "EID Sale Android Phone",
                        view: 'Only This Weeks',
                        bannerImg: bag,
                        background: bgDarkBackground,
                        bgClass: "bg-dark", // Replace with the appropriate Bootstrap background class
                },
                {
                        id: 3, // Make sure each item has a unique ID
                        name: "New Arrivals",
                        description: "New Year Sale Android Phone",
                        view: 'Only This Weeks',
                        bannerImg: watch,
                        background: bgsecondary,
                        bgClass: "bg-secondary", // Replace with the appropriate Bootstrap background class
                },
        ];


        return (
                <div className='madilbanner_thrad' style={{marginTop:"47px"}}>
                        <div className="row">
                                <div className="d-flex   ">
                                        {
                                                bannerData?.map(banner => <div key={banner.id} className={`hero_banner_setup mx-auto 
                                         ${banner.bgClass}`}>
                                                        <div className='d-flex ' style={{ padding: "40px", }} >
                                                                <div className='' >
                                                                        <p className='name_in_new_arrivals_text'>{banner.name}</p>
                                                                        <h4 className='rilige_description_setup_text'>{banner.description}</h4>
                                                                        <p className='banner_text_setup'>{banner.view}</p>
                                                                        <button style={{ color: "#FFFFFF", width: "92.104px", height: "30.263px", flexShrink: 0, borderRadius: "10px", backgroundColor: "#FFF" }} className=' '>
                                                                                <span style={{ fontFamily: "inter", fontSize: "9px", fontStyle: 'normal', fontWeight: 500, lineHeight: "normal", color: "#000000" }} className=''
                                                                                > shop now</span></button>
                                                                </div>
                                                                <div style={{
                                                                        width: "239.141px", height: "210.458px", flexShrink: 0,
                                                                        background: `url(${banner.background})`
                                                                }}>
                                                                        <img className='mb-2' src={banner.bannerImg} alt="" style={{
                                                                                margin: -15, width: "240px", height: "216px", flexShrink: 0
                                                                        }} />
                                                                </div>


                                                        </div>


                                                </div>)
                                        }

                                </div>
                        </div>
                </div>
        );
}

export default MadilHeroBannerThard;