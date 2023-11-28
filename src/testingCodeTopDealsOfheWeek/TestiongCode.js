import React from 'react';

function TestiongCode(props) {
        return (
                <div>
       const {name, description , img} = service;
        return (
                <div className='col-md-2 col-sm-4 mt-2-'>
                        <div className="card " style={{ width: "13rem" }}>
  <img src={img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">
  {description}
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>
</div>

        );
}

{/* /////......................................... */}




const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride2 
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:fluoride3
        },
        {
            id: 4,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:fluoride4
        },
        {
            id: 5,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:fluoride5
        },
        {
            id: 6,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:fluoride6
        },
    ]
        return (
              <section className='row '>
              <h2>Followed Products</h2>
  {
    servicesData.map(service=><FollowedProduct
      key={service.id}
      service={service}
    ></FollowedProduct>)
  }
              </section>







                        
                </div>

// followd 
 <div className='col-md-3 col-lg-2 col-sm-2 mt-2 '>
                        <div className="card  " style={{ width: "266px", height: "407px"}}>
                                <div className='m-3' style={{ width: '250', height: "180px", backgroundColor: "#F4F4F4" }}>
                                        <img src={img} className="" alt="..." />


                                </div>
                                <div className="card-body">
                                        <h5 className="card-title"></h5>
                                        <p className="card-text">


                                                {description}
                                        </p>
                                </div>
                                <div>
                                        <h5>* * * *  * </h5>
                                </div>
                                <div>
                                        <h5 className='' style={{ fontSize: "12px" }}>Sold by :</h5>
                                </div>
                                <div className='mb-3 ' style={{ width: "", height: "19px", }}>
                                        <b className='ms-2' style={{ fontSize: '16px', color: "#2A2A2A" }}
                                        >BDT {price} </b>

                                        <del className='ms-5 ps-5'style={{color:"#FF5530"}}>{delprice}</del>


                                </div>


                                <button className='m-auto rounded mb-3' style={{ width: "250px", height: "40px", backgroundColor: "#3F3F3F" }}>
                                        <span style={{ color: '#FFFFFF' }}>Add card</span>


                                </button>

                        </div>


                </div>





        );
}

export default TestiongCode;