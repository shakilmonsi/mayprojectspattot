import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./dealsyoumigLikeWeklyOffer.css"
import shart1 from "../../../../../assets/DealsYouMightLike/shart1.png";
import tishit from "../../../../../assets/DealsYouMightLike/ti-shit-2.png";
import bag from "../../../../../assets/DealsYouMightLike/bag-3.png";
import ject from "../../../../../assets/DealsYouMightLike/ject-4.png";
import herephone5 from "../../../../../assets/DealsYouMightLike/herephone5.png";
import watch from "../../../../../assets/DealsYouMightLike/watch-6.png";
import DeealsyouMighLikeWeklyOfferCard from '../dealsyouMighLikeWeeklyofferCard/DeealsyouMighLikeWeklyOfferCard';
import DealsYouMighLike from '../DealsYouMighLike/DealsYouMighLike';
import WeeklyOffer from '../WeeklyOffer/WeeklyOffer';



const DealsYouMighLikeWeeklyOffers = () => {

        // const servicesData = [
        //         {
        //                 id: 1,
        //                 name: 'Fluoride Treatment',
        //                 description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
        //                 img: shart1,
        //                 price: 8750.00,
        //                 delprice: 3910.00,

        //         },
        //         {
        //                 id: 2,
        //                 name: 'Cavity Filling',
        //                 description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
        //                 img: tishit,
        //                 price: 8750.00,
        //                 delprice: 3910.00,
        //         },
        //         {
        //                 id: 3,
        //                 name: 'Teeth Whitening',

        //                 description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
        //                 img: bag,
        //                 price: "BDT 8750.00",
        //                 delprice: 3310.00,
        //         },
        //         {
        //                 id: 2,
        //                 name: 'Cavity Filling',
        //                 description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
        //                 img: tishit,
        //                 price: 8750.00,
        //                 delprice: 3910.00,
        //         },
        //         {
        //                 id: 3,
        //                 name: 'Teeth Whitening',

        //                 description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
        //                 img: bag,
        //                 price: "BDT 8750.00",
        //                 delprice: 3310.00,
        //         },
        //         {
        //                 id: 3,
        //                 name: 'Teeth Whitening',

        //                 description: 'Direct sales by manufacturers Warm Imitation Fur Blanket...',
        //                 img: bag,
        //                 price: "BDT 8750.00",
        //                 delprice: 3310.00,
        //         },

        // ]




        return (

                <div className='d-flex gap-4' style={{marginTop:"47px"}}>
                        <div>


                                <DealsYouMighLike></DealsYouMighLike>

                        </div>

                        <div >
                                <WeeklyOffer></WeeklyOffer>

                        </div>
                </div>


        );
}

export default DealsYouMighLikeWeeklyOffers;