import React from 'react';
import "./ProductTypeRightSiteSection.css"

import arrowbutton from "../../../../../../../../../assets/ElectricCategorypageAllCompomentLogo/productypeRightSiteLogo/leftarrow (1).svg"
import list  from"../../../../../../../../../assets/ElectricCategorypageAllCompomentLogo/productypeRightSiteLogo/list.svg"
import { Dropdown } from 'react-bootstrap';
const ProductTypeRightSiteSection = () => {
    return (
        <section>
            <div>
                 {/* main dib up  */}
                 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div>
        <h6>Total  “2,14,4825”  results found</h6>
    </div>

   
    <div className="" id="">

      <form className="d-flex gap-4" >





                 
<span className=''>Sort by</span>
 
      <div className="d-flex accontu_toggel_in_logo_style_product_Type" style={{ width:"auto",height:"35px"}}>
           
 
              {/* <Link to="account">account</Link> */}
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                Recommended
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/googol">my account</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </div>

        
        <h6 className='grid_text_style_setup 'style={{marginTop:"12px"}}>GRID</h6>
        <div className='list_section_setup' style={{width:"36px",height:"36px"}}>
            <img style={{width:"20px", height:"20px"}}  src={list} alt=''></img>
        </div>
      </form>
    </div>
  </div>
</nav>














{/* main div dowon  */}
            </div>       
        </section>
    );
};

export default ProductTypeRightSiteSection;