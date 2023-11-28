import React from 'react';
import "./TopDealsOfTheWeeks.css"



import lemp1 from "../../../../../assets/TopDealsOfTheWeek/lemp1.png"
import phone2 from "../../../../../assets/TopDealsOfTheWeek/phone2.png"
import redshos3 from "../../../../../assets/TopDealsOfTheWeek/redshos3.png"
import phone4 from "../../../../../assets/TopDealsOfTheWeek/4.png"
import modil5 from "../../../../../assets/TopDealsOfTheWeek/modil5.png"
import watch from "../../../../../assets/TopDealsOfTheWeek/watch-6.png"

// import barwith2 from "../../../assets/FollowedProduct/barwith2.png";
// import redShos3 from "../../../assets/FollowedProduct/redShos3.png";
// import bag4 from "../../../assets/FollowedProduct/bag4.png";
// import phone5 from "../../../assets/FollowedProduct/phone5.png";
// import watch6 from "../../../assets/FollowedProduct/watch6.png";

// oprer  data golo product  img 
import reding from "../../../../../assets/iconreting/rating.svg";
import widthreding from "../../../../../assets/iconreting/withcolerrating.svg";
import hardicon from "../../../../../assets/hardicons/hardicon.svg";
import grayverifyde from "../../../../../assets/grayverifyde/verified.svg";
import thredot from "../../../../../assets/thredoticon/thredot.svg";
import verifide from "../../../../../assets/verifydeicon/image 110.png";

import { Link } from 'react-router-dom';
import TopDealsOfTheWeekCard from '../TopDealsOfTheWeekCard/TopDealsOfTheWeekCard';

const TopDealsOfTheWeeks = () => {

    const servicesData = [
        {
            id: 1,
            price: 8750.00,
            delprice: 2300.333,
            name: 'Fluoride Treatment',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: lemp1,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            grayverifyde: grayverifyde,
            thredot: thredot,
            verifide: verifide,
            offers: 5,

        },

        {

            id: 2,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot: thredot,
            img: phone2,
            verifide: verifide,
            grayverifyde: grayverifyde,
            offers: 5,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',



        },
        {

            id: 3,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot: thredot,
            img: redshos3,
            verifide: verifide,
            grayverifyde: grayverifyde,
            offers: 5,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',

        },

        {

            id: 4,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot: thredot,
            img: phone4,
            verifide: verifide,
            grayverifyde: grayverifyde,
            offers: 5,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',

        },

        {

            id: 5,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot: thredot,
            img: modil5,
            verifide: verifide,
            grayverifyde: grayverifyde,
            offers: 5,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',

        },
        {

            id: 6,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot: thredot,
            verifide: verifide,

            grayverifyde: grayverifyde,
            offers: 5,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: watch
        },
    ]

// setup complet
    return (
        <section className='py-4' style={{ backgroundColor: "#FFFFFF",marginTop:"47px",padding:"30xpx"}}>
            <div className='d-flex justify-content-between' style={{padding:"20px"}}>
                <h4 style={{ color: "#000", fontSize: "22px", fontFamily: "inter", fontWeight: 500, lineHeight: "normal" }}>Top Deals Of The Week</h4>
                <Link to="/" className='' style={{ color: "#000", fontFamily: "inter", fontSize: "18px", fontWeight: 500, fontStyle: "normal", lineHeight: "normal" }}>View All</Link>

            </div>

            <div className='row'>

                <div className='grid_TopDealsOfTheWeeks_item px-4 ms-4'>



                    {
                        servicesData?.map(service => <TopDealsOfTheWeekCard
                            key={service.id}
                            service={service}
                        ></TopDealsOfTheWeekCard>)
                    }


                </div>
            </div>

        </section>
    );

};

export default TopDealsOfTheWeeks;