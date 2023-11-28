import React from 'react';
import "./SpecialSaleOfferRightSiteProductDitils.css"
import SpecialSaleOfferRightSiteProductDitilsCard from '../SpecialSaleOfferRightSiteProductDitilsCard/SpecialSaleOfferRightSiteProductDitilsCard';

import bag1 from "../../../../../../assets/SpecialSaleOfferProductsDitils/bag1.png";
import mobile from "../../../../../../assets/SpecialSaleOfferProductsDitils/mobile-2.png";
import watch from "../../../../../../assets/SpecialSaleOfferProductsDitils/watch-3.png";


// oprer  data golo product  img 
import reding from "../../../../../../assets/iconreting/rating.svg";
import widthreding from "../../../../../../assets/iconreting/withcolerrating.svg";
import hardicon from "../../../../../../assets/hardicons/hardicon.svg";

import grayverifyde from "../../../../../../assets/grayverifyde/verified.svg";
import thredot from "../../../../../../assets/thredoticon/thredot.svg";
import verifide from "../../../../../../assets/verifydeicon/image 110.png";

import { Link } from 'react-router-dom';

const SpecialSaleOfferRightSiteProductDitils = () => {

    const servicesData = [
        {
            id: 1,
            price: 8750.00,
            delprice: 2300.333,
            name: 'Fluoride Treatment',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
            img: bag1,
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
            img:mobile,
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
            img:watch,
            verifide:verifide,
            grayverifyde:grayverifyde,
            offers: 5 ,
            name: 'Cavity Filling',
            description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
          
        },
       

     
    ]
    return (
        <section className='' style={{ backgroundColor: "#FFFFFF" }}>
          

                        <div className='row'>

<div className='grid_SpecialSaleOfferRightSiteProductDitils_item'>
 


            {
                servicesData.map(service => <SpecialSaleOfferRightSiteProductDitilsCard
                    key={service.id}
                    service={service}
                ></SpecialSaleOfferRightSiteProductDitilsCard>)
            }

</div>
         </div>

        </section>
    );
}


    




export default SpecialSaleOfferRightSiteProductDitils;