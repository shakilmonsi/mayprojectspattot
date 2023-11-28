import React from 'react';
 import "./TrendingDealsInElectronicsProductDitails.css"
import TrendingDealsInElectronicsProductDitailsProductDitailsCard from '../TrendingDealsInElectronicsProductDitailsProductDitailsCard/TrendingDealsInElectronicsProductDitailsProductDitailsCard';


import shos1 from "../../../../../assets/TrendingDealsInElectronicsProductDitailsproduct/shos1.png";
import barwith2 from "../../../../../assets/TrendingDealsInElectronicsProductDitailsproduct/bagwith-2.png";
import redShos3 from "../../../../../assets/TrendingDealsInElectronicsProductDitailsproduct/redShos3.png";
import bag4 from "../../../../../assets/TrendingDealsInElectronicsProductDitailsproduct/bleckBag4.png";
import phone5 from "../../../../../assets/TrendingDealsInElectronicsProductDitailsproduct/mobile-5.png";
import watch6 from "../../../../../assets/TrendingDealsInElectronicsProductDitailsproduct/watch-6.png";


// oprer  data golo product  img 
import reding from "../../../../../assets/iconreting/rating.svg";
import widthreding from "../../../../../assets/iconreting/withcolerrating.svg";
import hardicon from "../../../../../assets/hardicons/hardicon.svg";
import grayverifyde from "../../../../../assets/grayverifyde/verified.svg";
import thredot from "../../../../../assets/thredoticon/thredot.svg";
import verifide from "../../../../../assets/verifydeicon/image 110.png";


import { Link } from 'react-router-dom';

const TrendingDealsInElectronicsProductDitails = () => {

    const servicesData = [
        {
            id: 1,
            price: 8750.00,
            delprice: 2300.333,
            name: 'Fluoride Treatment',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: shos1,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            grayverifyde:grayverifyde,
            thredot:thredot,
            verifide:verifide,
            offers: 5 ,

        },
     
        {

            id: 2,
            delprice: 2300.333,
            price: 8750.00,
            redingicon: reding,
            widthredingicon: widthreding,
            hardicon: hardicon,
            thredot:thredot,
            img:barwith2,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
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
            thredot:thredot,
            img:redShos3,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
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
            thredot:thredot,
            img:bag4,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
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
            thredot:thredot,
            img:phone5,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
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
            thredot:thredot,
            verifide:verifide,
     
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...', 
            img: watch6
        },
   
 
     
    ]
    return (
        <section className=' ' style={{ backgroundColor: "#FFFFFF" ,marginTop:"47px" ,padding:"40px"}}>
             <div className='d-flex justify-content-between'>
                                <h4 style={{color:"#000", fontSize:"22px",fontFamily:"inter", 
                                fontWeight:500,lineHeight:"normal"}}>Trending Deals In Electronics</h4>
                                <Link to="/" className='' style={{color:"#000",fontFamily:"inter",fontSize:"18px",fontWeight:500,fontStyle:"normal",lineHeight:"normal"}}>View All</Link>

                        </div>

                        <div className='row mt-3'>

<div className='grid_TrendingDealsInElectronicsProductDitails_item'>
 


            {
                servicesData.map(service => <TrendingDealsInElectronicsProductDitailsProductDitailsCard
                    key={service.id}
                    service={service}
                ></TrendingDealsInElectronicsProductDitailsProductDitailsCard>)
            }

</div>
         </div>

        </section>
    );
}





export default TrendingDealsInElectronicsProductDitails;