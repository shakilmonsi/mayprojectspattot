import React from 'react';
import "./weeklyOffer.css"
import { Link } from 'react-router-dom';

import mobile from "../../../../../assets/WeeklyOffer/mobile-1.png";      
import watch2 from "../../../../../assets/WeeklyOffer/watch2.png";      
import bag from "../../../../../assets/WeeklyOffer/bag.png";      
import home4 from "../../../../../assets/WeeklyOffer/home4.png";      
import phone5 from "../../../../../assets/WeeklyOffer/phone5.png";      
import bags6 from "../../../../../assets/WeeklyOffer/bags6.png";      
import WeeklyOfferCard from './weeklyofferCard/WeeklyOfferCard';

const WeeklyOffer=()=> {
        
        const servicesData = [
                {
                        id: 1,
                        name: 'Fluoride Treatment',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: mobile,
                        price: 8750.00,
                        delprice: 3910.00,

                },
                {
                        id: 2,
                        name: 'Cavity Filling',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: watch2,
                        price: 8750.00,
                        delprice: 3910.00,
                },
                {
                        id: 3,
                        name: 'Teeth Whitening',

                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: bag,
                        price: "BDT 8750.00",
                        delprice: 3310.00,
                },
                {
                        id: 4,
                        name: 'Cavity Filling',
                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: home4,
                        price: 8750.00,
                        delprice: 3910.00,
                },
                {
                        id: 5,
                        name: 'Teeth Whitening',

                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: phone5,
                        price: "BDT 8750.00",
                        delprice: 3310.00,
                },
                {
                        id: 6,
                        name: 'Teeth Whitening',

                        description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
                        img: bags6,
                        price: "BDT 8750.00",
                        delprice: 3310.00,
                },
          
        ]
        

        return (
                <div className='py-4' style={{backgroundColor:"#FAF9F6"}}>
                                  
                                  <div className='d-flex  justify-content-between p-4'>
        <h4 style={{
          color: "#000", fontSize: "22px", fontFamily: "inter",
          fontWeight: 500, lineHeight: "normal"
        }}>Weekly Offer</h4>
        <Link to="/" className='' style={{ color: "#000", fontFamily: "inter", fontSize: "18px", fontWeight: 500, fontStyle: "normal", lineHeight: "normal" }}>View All</Link>

      </div>

      <div className='row mt-4'>


<div  className='d-flex gap-3 flex-wrap 'style={{marginLeft:30}}>
{
        servicesData.map(servic => <WeeklyOfferCard
                key={servic.id}
                service={servic}
        ></WeeklyOfferCard>)
        
}


</div>
</div>

        
                        
                </div>
        );
}

export default WeeklyOffer;