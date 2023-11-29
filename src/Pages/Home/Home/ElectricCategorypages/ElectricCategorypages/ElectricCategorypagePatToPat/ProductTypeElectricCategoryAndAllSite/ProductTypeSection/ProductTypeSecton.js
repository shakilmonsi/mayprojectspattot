import React from 'react';
import "./ProductTypeSecton.css"
import Form from 'react-bootstrap/Form';
import line from "../../../../../../../../assets/ElectricCategorypageAllCompomentLogo/Line 16 (1).png";
import reding from "../../../../../../../../assets/ElectricCategorypageAllCompomentLogo/reding.svg";
import starwidth from "../../../../../../../../assets/ElectricCategorypageAllCompomentLogo/starwidth.svg";


// price status  logo import  
import search from "../../../../../../../../assets/ElectricCategorypageAllCompomentLogo/search.svg";
import arrowdown from "../../../../../../../../assets/ElectricCategorypageAllCompomentLogo/arrowdown.svg";
import close from "../../../../../../../../assets/ElectricCategorypageAllCompomentLogo/close.svg";

// color  section logo setup  
import bleck from "../../../../../../../../assets/ElectricCategorypageAllCompomentLogo/bleck.svg";
import block from "../../../../../../../../assets/ElectricCategorypageAllCompomentLogo/block.svg";
import green from "../../../../../../../../assets/ElectricCategorypageAllCompomentLogo/green.svg";


const ProductTypeSecton = () => {
    return (
        <div className="" style={{padding:60}}>


  
          <div className="col-lg-3 ">
            <div>
                 {/* title  section  */}
                <div className='d-flex justify-content-between '>
                    <h6>Product type</h6>
                    <p >Clear</p>
                </div>



                {/* //section catagry   and price range  and all  leftSite  */}
                <div>
                    <div className='d-flex gap-4'>
                        <div className='align-items-center d-flex gap-2'>
                        <Form.Check type="radio" style={{width:"14px" ,height:"14px",color:"#717171"}} aria-label="radio 1" />
                        <span className='all_types_text'>All type</span>
                        </div>
                        <div className='align-items-center d-flex gap-2'>
                        <Form.Check type="radio" style={{width:"14px" ,height:"14px",color:"#717171"}} aria-label="radio 1" />
                        <span className='physial_digital_style'>Physical Products</span>
                        </div>
                        <div className='align-items-center d-flex gap-2'>
                        <Form.Check type="radio" style={{width:"14px" ,height:"14px",color:"#717171"}} aria-label="radio 1" />
                        <span className='physial_digital_style mt-'>Digital Products</span>
                        </div>
                         
                    </div>

                    {/* //price Range section setup  */}
                            <div style={{marginTop:"68px"}}>
                            <div className='d-flex justify-content-between '>
                    <h6>Price Range</h6>
                    <p >Clear</p>
                </div>

                   {/* price range   */}
                <div>
                <>

  <input step={{color:"#000"}}
    type="range"
    className="form-range "
    min={0}
    max={5}
    id="customRange2"
  />
</>

                </div>

            {/* price box  */}

<div className='d-flex ' style={{alignItems:"center",gap:"60px",marginTop:"20px"}}>
    <div>
        <span className='ms-4 '>Min Price</span>
        <input className='input_price_range' value="10"></input>
    </div>
    <div className='' style={{marginTop:"15px",width:"12px",height:"1.5px",color:"#B0B0B0"}}>
        <img  src={line} alt=''></img>
        
    </div>
    <div>
        <span className='ms-4' style={{marginTop:-44}}>Max Price</span>
        <input className='input_price_range' value="100000"></input>
    </div>
</div>
 {/* price box  */}







                            </div>
                </div>

  {/* // Rating   section setup ok  */}
  <div>
    <div style={{marginTop:"33px"}}>
    <div className='d-flex justify-content-between '>
                    <h6>Price Range</h6>
                    <p >Clear</p>
                </div>
                <div className='d-flex ' style={{justifyContent:"center" ,gap:"30px",marginTop:"20px"}}>
                     <img style={{width:"15.84px", height:"15.042px",color:"#F85606"}} src={reding} alt=''></img>
                     <img style={{width:"15.84px", height:"15.042px",color:"#F85606"}} src={reding} alt=''></img>
                     <img style={{width:"15.84px", height:"15.042px",color:"#F85606"}} src={reding} alt=''></img>
                     <img style={{width:"15.84px", height:"15.042px",color:"#F85606"}} src={reding} alt=''></img>
                     <img style={{width:"15.84px", height:"15.042px",color:"#C7511F33"}} src={starwidth} alt=''></img>
                </div>
   
              <div style={{marginTop:"20px"}}>
              <input step={{color:"#000"}}
    type="range"
    className="form-range  "
    min={0}
    max={5}
    id="customRange2"
  />
              </div>
   
   
   
    </div>


  </div>

  {/* 1//Product status  section  setup  */}

<div style={{marginTop:"20px" ,padding:" 20px 0px 0px 2px"}}>
<div className='d-flex justify-content-between '>
                    <h6>Product type</h6>
                    <p >Clear</p>
                </div>

                <div>

      
        <div className="container-fluid" style={{marginTop:'20px'}}>
      


          <form className="d-flex " role="search"   style={{ width: "374px", height: "35px", }}>

            <input
              className="form-control position-relative text-center custom-search-input  p-2
       "
             
              type="search"
              placeholder="Filter by Product status"
              aria-label="Search"
            />
    <span className=" position-absolute  "
              style={{ marginLeft: 80, marginTop: 3 }}
            >
              <img
                src={search}
                alt="Search Icon"

                style={{ width: "14px", height: "14px", flexShrink: 0 }}


              />

            </span>


            <img className="position-absolute "
              src={arrowdown}
              style={{ marginLeft: 335, marginTop: 10, width: "20px", height: "20px" }}
              alt="Search Icon"
            />
   </form>

   {/* In Stock  section setup  */}

  <div className='d-flex  align-items-center'style={{gap:"10px"}}>

<div className='stock_style'>
    <span className='in_stock_style'>In Stock</span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
    
    
</div>
<div className='stock_style'>
    <span className='in_stock_style'>Pre order</span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
    
    
</div>
<div className='stock_style'>
    <span className='in_stock_style'>Out of Stock </span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
    
    
</div>


  </div>

  




         
        </div>
   




                </div>

</div>
  {/* 1//Product status  section  setup  */}


{/* ///  2  Delivery type  section setup  */}


<div className='' style={{marginTop:"20px",padding:" 20px 0px 0px 2px"}}>
<div className='d-flex justify-content-between '>
                    <h6>Delivery type</h6>
                    <p >Clear</p>
                </div>

                <div>

      
        <div className="container-fluid" style={{marginTop:'20px'}}>
      


          <form className="d-flex " role="search"   style={{ width: "374px", height: "35px", }}>

            <input
              className="form-control position-relative text-center custom-search-input  p-2
       "
             
              type="search"
              placeholder="Filter by Delivery type"
              aria-label="Search"
            />
    <span className=" position-absolute  "
              style={{ marginLeft: 80, marginTop: 3 }}
            >
              <img
                src={search}
                alt="Search Icon"

                style={{ width: "14px", height: "14px", flexShrink: 0 }}


              />

            </span>


            <img className="position-absolute "
              src={arrowdown}
              style={{ marginLeft: 335, marginTop: 10, width: "20px", height: "20px" }}
              alt="Search Icon"
            />
   </form>

   {/* In Stock  section setup  */}

  <div className='d-flex  align-items-center'style={{gap:"10px"}}>

<div className='stock_style'>
    <span className='in_stock_style'>Express </span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
    
    
</div>
<div className='stock_style'>
    <span className='in_stock_style'>Standard</span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
    
    
</div>
<div className='stock_style'>
    <span className='in_stock_style'>Pick up  </span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
 
</div>

  </div>

     </div>
                </div>

</div>


     {/* /// 2   Delivery type  section setup  */}



     {/* /// 3   Brands type  section setup  */}


     <div className='' style={{marginTop:"20px",padding:" 20px 0px 0px 2px"}}>
<div className='d-flex justify-content-between '>
                    <h6>Brands</h6>
                    <p >Clear</p>
                </div>

                <div>

      
        <div className="container-fluid" style={{marginTop:'20px'}}>
      


          <form className="d-flex " role="search"   style={{ width: "374px", height: "35px", }}>

            <input
              className="form-control position-relative text-center custom-search-input  p-2
       "
             
              type="search"
              placeholder="Filter by Brands"
              aria-label="Search"
            />
    <span className=" position-absolute  "
              style={{ marginLeft: 80, marginTop: 3 }}
            >
              <img
                src={search}
                alt="Search Icon"

                style={{ width: "14px", height: "14px", flexShrink: 0 }}


              />

            </span>


            <img className="position-absolute "
              src={arrowdown}
              style={{ marginLeft: 335, marginTop: 10, width: "20px", height: "20px" }}
              alt="Search Icon"
            />
   </form>

   {/* In Stock  section setup  */}

  <div className='d-flex  align-items-center'style={{gap:"10px"}}>

<div className='stock_style'>
    <span className='in_stock_style'>Asus </span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
    
    
</div>
<div className='stock_style'>
    <span className='in_stock_style'>Apple</span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
    
    
</div>
<div className='stock_style'>
    <span className='in_stock_style'>Samsung  </span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
 
</div>

  </div>

     </div>
                </div>

</div>


     {/* /// 3   Brands type  section setup  */}



     {/* /// 4   Categories type  section setup  */}

     <div className='' style={{marginTop:"20px",padding:" 20px 0px 0px 2px"}}>
<div className='d-flex justify-content-between '>
                    <h6>Categories</h6>
                    <p >Clear</p>
                </div>

                <div>

      
        <div className="container-fluid" style={{marginTop:'20px'}}>
      


          <form className="d-flex " role="search"   style={{ width: "374px", height: "35px", }}>

            <input
              className="form-control position-relative text-center custom-search-input  p-2
       "
             
              type="search"
              placeholder="Filter by Categories"
              aria-label="Search"
            />
    <span className=" position-absolute  "
              style={{ marginLeft: 80, marginTop: 3 }}
            >
              <img
                src={search}
                alt="Search Icon"

                style={{ width: "14px", height: "14px", flexShrink: 0 }}


              />

            </span>


            <img className="position-absolute "
              src={arrowdown}
              style={{ marginLeft: 335, marginTop: 10, width: "20px", height: "20px" }}
              alt="Search Icon"
            />
   </form>

   {/* In Stock  section setup  */}

  <div className='d-flex  align-items-center'style={{gap:"10px"}}>

<div className='stock_style'>
    <span className='in_stock_style'>Electronics </span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
    
    
</div>
<div className='stock_style'>
    <span className='in_stock_style'>Smartwatch</span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
    
    
</div>
<div className='stock_style'>
    <span className='in_stock_style'>Smart Home  </span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
 
</div>

  </div>

     </div>
                </div>

</div>

     {/* /// 4   Categories type  section setup  */}



     {/* /// 5   Categories type  section setup  */}

     <div className='' style={{marginTop:"20px",padding:" 20px 0px 0px 2px"}}>
<div className='d-flex justify-content-between '>
                    <h6>Storage Size</h6>
                    <p >Clear</p>
                </div>

                <div>

      
        <div className="container-fluid" style={{marginTop:'20px'}}>
      


          <form className="d-flex " role="search"   style={{ width: "374px", height: "35px", }}>

            <input
              className="form-control position-relative text-center custom-search-input  p-2
       "
             
              type="search"
              placeholder="Filter by Storage Size"
              aria-label="Search"
            />
    <span className=" position-absolute  "
              style={{ marginLeft: 80, marginTop: 3 }}
            >
              <img
                src={search}
                alt="Search Icon"

                style={{ width: "14px", height: "14px", flexShrink: 0 }}


              />

            </span>


            <img className="position-absolute "
              src={arrowdown}
              style={{ marginLeft: 335, marginTop: 10, width: "20px", height: "20px" }}
              alt="Search Icon"
            />
   </form>

   {/* In Stock  section setup  */}

  <div className='d-flex  align-items-center'style={{gap:"10px"}}>

<div className='stock_style'>

    <span className='in_stock_style'>4 GB </span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
    
    
</div>
<div className='stock_style'>
    <span className='in_stock_style'>8 GB</span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
    
    
</div>
<div className='stock_style'>
    <span className='in_stock_style'>16 GB </span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
 
</div>

  </div>

     </div>
                </div>

</div>


     {/* /// 5   Categories type  section setup  */}


     {/* /// 6   Color type  section setup  */}
     <div className='' style={{marginTop:"20px",padding:" 20px 0px 0px 2px"}}>
<div className='d-flex justify-content-between '>
                    <h6>Color</h6>
                    <p >Clear</p>
                </div>

                <div>

      
        <div className="container-fluid" style={{marginTop:'20px'}}>
      


          <form className="d-flex " role="search"   style={{ width: "374px", height: "35px", }}>

            <input
              className="form-control position-relative text-center custom-search-input  p-2
       "
             
              type="search"
              placeholder="Filter by Categories"
              aria-label="Search"
            />
    <span className=" position-absolute  "
              style={{ marginLeft: 80, marginTop: 3 }}
            >
              <img
                src={search}
                alt="Search Icon"

                style={{ width: "14px", height: "14px", flexShrink: 0 }}


              />

            </span>


            <img className="position-absolute "
              src={arrowdown}
              style={{ marginLeft: 335, marginTop: 10, width: "20px", height: "20px" }}
              alt="Search Icon"
            />
   </form>

   {/* In Stock  section setup  */}

  <div className='d-flex  align-items-center'style={{gap:"10px"}}>

<div className='stock_style'>
<img className='bleck_stock_green' style={{color:"#2A2A2A"}} src={bleck} alt=''></img>
    <span className='in_stock_style'>Black </span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
    
    
</div>
<div className='stock_style'>
<img className='bleck_stock_green' style={{color:"#5779D9"}} src={block} alt=''></img>

    <span className='in_stock_style'>Blue</span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
    
    
</div>
<div className='stock_style'>
<img className='bleck_stock_green' style={{color:"#27BF49"}} src={green} alt=''></img>

    <span className='in_stock_style'>Green  </span>
    <img style={{width:"14px",height:"14px",color:"#717171"}} src={close} alt=''></img>
 
</div>

  </div>

     </div>
                </div>

</div>


     {/* /// 6   Color type  section setup  */}

     


     
     {/* ///    Get More Done Together With US section setup  */}


<div className='get_more_done_section_style' style={{margin:"50px",}}>

<div className='p-4'style={{marginLeft:14,marginTop:30,padding:"10px"}}>
<h4 className='get_more_text' style={{marginTop:33}}>Get More Done Together With US</h4>
<p className='get_more_paragrap_setyle mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<button className='button_style mt-3' style={{marginLeft:59}}><span className='button_text_style'>Get Started</span></button>
</div>


</div>





     {/* ///    Get More Done Together With US  section setup  */}








     

</div>
      
      </div>
       {/* product ditils  site setup and  style  */}
          <div className="col-lg-8">
           
      
      jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
      
      </div>
            </div>
         
      
    );
};

export default ProductTypeSecton;