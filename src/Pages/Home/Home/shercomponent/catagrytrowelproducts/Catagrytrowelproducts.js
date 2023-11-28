import React from 'react';
import "./catagrytrowelproducts.css"
import books from "../../../../../assets/col12-smailimg/books.png"
import fitness from "../../../../../assets/col12-smailimg/fitness.png"
import gamingitems from "../../../../../assets/col12-smailimg/gamingitems.png"
import healthcare from "../../../../../assets/col12-smailimg/healthcare.png"
import laptoptablet from "../../../../../assets/col12-smailimg/laptop&tablet.png"
import slider from "../../../../../assets/col12-smailimg/slider-img-3 3.png"
import slider1 from "../../../../../assets/col12-smailimg/slider-img-3 3.png"
import smafrtHome from "../../../../../assets/col12-smailimg/smafrtHome.png"
import sports from "../../../../../assets/col12-smailimg/sports.png"
import watch from "../../../../../assets/col12-smailimg/watch-9.png"
import toys from "../../../../../assets/col12-smailimg/toys.png"
import smarewatch from "../../../../../assets/col12-smailimg/smarewatch.png"

const Catagrytrowelproducts = () => {

        const catagrytrowelproducts = [
                {
                        id: 1,
                        name: "Books",
                        catagryimg: books

                },
                {
                        id: 2,
                        name: "Fitness",
                        catagryimg: fitness

                },
                {
                        id: 3,
                        name: "GamingItems",
                        catagryimg: gamingitems

                },
                {
                        id: 4,
                        name: "HealTcare",
                        catagryimg: healthcare

                },
                {
                        id: 5,
                        name: "Lapto Tablet",
                        catagryimg: laptoptablet

                },
                {
                        id: 6,
                        name: "slider",
                        catagryimg: slider

                },
                {
                        id: 7,
                        name: "Slider",
                        catagryimg: slider1

                },
                {
                        id: 8,
                        name: "Smafrt Home",
                        catagryimg: smafrtHome

                },
                {
                        id: 9,
                        name: "Sports",
                        catagryimg: sports

                },
                {
                        id: 10,
                        name: "Watch",
                        catagryimg: watch

                },
                {
                        id: 11,
                        name: "Toyp",
                        catagryimg: toys

                },
                {
                        id: 12,
                        name: "Smaret  watch",
                        catagryimg: smarewatch

                },


        ]




        return (
                <div className='row pading_full_display' style={{ backgroundColor: "#FFFFFF" ,marginTop:"47px"}}>
                        <div className='   mt-4 catagoraytowel_product' style={{ gap: "50px" }}>

                                {
                                        catagrytrowelproducts?.map(catagrytrowelproduct => <div className='' key={catagrytrowelproduct.id}>
                                                <div className='' style={{ backgroundColor: "#F4F4F4", borderRadius: "100%", width: "80px", height: "80px", flexShrink: 0 }}>

                                                        <img className='' style={{ margin: "12px", height: "auto", width: "auto" }} src={catagrytrowelproduct.catagryimg} ></img>

                                                </div>

                                                <h6 className='mt-3 mx-auto' style={{ color: "#000000", fontSize: "16px", fontFamily: "inter", fontStyle: "normal", lineHeight: "normal", fontWeight: 500 }}>{catagrytrowelproduct.name}</h6>

                                        </div>)
                                }
                        </div>


                </div>
        );
}

export default Catagrytrowelproducts;