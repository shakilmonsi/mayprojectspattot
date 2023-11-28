import React from 'react';
import "./NewArrivals.css"
import NewArrivalsCard from '../NewArrivalsCard/NewArrivalsCard';


import shos1 from "../../../../../assets/NewArrivalsProducts/shos1.png";
import bag2 from "../../../../../assets/NewArrivalsProducts/bag2.png";
import redShos3 from "../../../../../assets/NewArrivalsProducts/redShos3.png";
import bleckbag4 from "../../../../../assets/NewArrivalsProducts/bleckbag4.png";
import mobile from "../../../../../assets/NewArrivalsProducts/mobile-5.png";
import watch from "../../../../../assets/NewArrivalsProducts/watch-6.png";



// oprer  data golo product  img 
import reding from "../../../../../assets/iconreting/rating.svg";
import widthreding from "../../../../../assets/iconreting/withcolerrating.svg";
import hardicon from "../../../../../assets/hardicons/hardicon.svg";
import grayverifyde from "../../../../../assets/grayverifyde/verified.svg";
import thredot from "../../../../../assets/thredoticon/thredot.svg";
import verifide from "../../../../../assets/verifydeicon/image 110.png";

import { Link } from 'react-router-dom';

const NewArrivals = () => {

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
            img:bag2,
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
            img:bleckbag4,
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
            img:mobile,
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
            img: watch
        },
   
 
     
    ]
    return (
        <section className=' ' style={{ backgroundColor: "#FFFFFF", marginTop:"47px" }}>
             <div className='d-flex justify-content-between'style={{padding:"20px"}}>
                                <h4 style={{color:"#000", fontSize:"22px",fontFamily:"inter",fontWeight:500,lineHeight:"normal"}}>New Arrival</h4>
                                <Link to="/" className='' style={{color:"#000",fontFamily:"inter",fontSize:"18px",fontWeight:500,fontStyle:"normal",lineHeight:"normal"}}>View All</Link>

                        </div>

                        <div className='row mt-3'>

<div className='grid_NewArrivals_item ms-2'>
 


            {
                servicesData.map(service => <NewArrivalsCard
                    key={service.id}
                    service={service}
                ></NewArrivalsCard>)
            }

</div>
         </div>

        </section>
    );
}







export default NewArrivals;