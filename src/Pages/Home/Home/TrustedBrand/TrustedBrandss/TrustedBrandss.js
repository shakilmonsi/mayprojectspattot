import React from 'react';
import "./trustedbrand.css"
import addas from "../../../../../assets/TrustedBrand/addas.png"
import apple from "../../../../../assets/TrustedBrand/apple.png"
import asls from "../../../../../assets/TrustedBrand/asls.png"
import bollore from "../../../../../assets/TrustedBrand/bollore.png"
import nike from "../../../../../assets/TrustedBrand/nike.png"
import nokia from "../../../../../assets/TrustedBrand/nokia.png"
import online from "../../../../../assets/TrustedBrand/oneplus.png"
import samsung from "../../../../../assets/TrustedBrand/samsung.png"
import { Link } from 'react-router-dom';

const Trustedsmss = () => {

        const trustesddata = [
                {
                        id: 1,
                        name:"",
                        img: addas,
                },
                {
                        id: 2,
                        name:"Nake",
                        img: nike,
                },
                {
                        id: 3,
                        name:"apple",
                        img: apple,
                },
                {
                        id: 4,
                        name:"Asls",
                        img: asls,
                },
                {
                        id: 5,
                        name:"Nokia",
                        img: nokia,
                },
                {
                        id: 6,
                        name:"ONline",
                        img: online,
                },
                {
                        id: 7,
                        name:"Samsung",
                        img: samsung,
                },
                {
                        id: 8,
                        name:"bollore",
                        img: bollore,
                },
              
        ]
        return (
                <section className=' Paidng_item' style={{ backgroundColor: "#FFF",marginTop:"47px" }}>
                        <div className='d-flex justify-content-between'>
                                <h4 style={{color:"#000", fontSize:"22px",fontFamily:"inter",fontWeight:500,lineHeight:"normal"}}>Trusted Brand</h4>
                                <Link to="/" className='' style={{color:"#000",fontFamily:"inter",fontSize:"18px",fontWeight:500,fontStyle:"normal",lineHeight:"normal"}}>View All</Link>

                        </div>

                        <div className='row mt-4 '>
                                <div className='grit_trusd_item'>


                                        {
                                 trustesddata?.map(trusted=><div key={trusted.id} className='trusted_card_body '>
                                        <img className='ms-4' src={trusted.img} alt=''  style={{marginTop:"40px"}}></img>
                                 </div>)
                                        }
                                </div>
                        </div>

                </section>


        );
}


export default Trustedsmss;