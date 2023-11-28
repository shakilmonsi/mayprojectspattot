import "./header.css";
import headerimg from "../../../assets/headerimg/image 133.png";
import deliverto from "../../../assets/headerimg/location.png"
import arbianCard from "../../../assets/headerimg/arbianCard.png"
import delivary from "../../../assets/headerimg/car.png"
import box from "../../../assets/headerimg/box.png"
import drakoption from "../../../assets/headerimg/toggolbutton.png"
import EN from "../../../assets/headerimg/ent.png"
import Topdeals from "../../../assets/headerimg/Topdeals.svg"
import arrow from "../../../assets/headerimg/arrow down fill.svg"

//  {/* header dwon img and logo sectionSetup  */}
import accountlogo from "../../../assets/headerimg/downheaderImg/account.svg"
import filter from "../../../assets/headerimg/downheaderImg/filter.png"
import search from "../../../assets/headerimg/downheaderImg/search.svg"
import menu from "../../../assets/headerimg/downheaderImg/menu.svg"
import category from "../../../assets/headerimg/downheaderImg/category.svg"
import notification from "../../../assets/headerimg/downheaderImg/notification.png"
// import accountlogo from "../../../assets/headerimg/downheaderImg/arrow down fill (2).svg"
import scren from "../../../assets/headerimg/downheaderImg/scren.png"
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";


const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };


  // const navLinks = <>
  //   <li><NavLink to="/">Home</NavLink></li>
  //   <li><NavLink to="/about">About</NavLink></li>
  //   <li><NavLink to="/career">Career</NavLink></li>
  //   <li><NavLink to="/addict">Addict</NavLink></li>
  //   <li><NavLink to="/login">Login</NavLink></li>
  // </>


  return (
    <nav>
      {/* header up sectionSetup  */}

      <div className="" style={{ background: "#F85606", height: "40px" }}>
        <div className="max-width d-flex p-2 justify-content-between align-items-center text-white">

          <div className="d-flex gap-2">

            <div className="d-flex">
              <img
                className="pt-1"
                src={deliverto}
                height={20}
                alt=""
              />
              <p>Deliver to</p>
            </div>

            <div className="d-flex gap-1">
              <img
                className="pt-1 "
                src={arbianCard}
                height={20}
                alt=""
              />
              <p>Bangladesh</p>
            </div>



            <p>|</p>
            <div className="d-flex">
              <img
                className="pt-1"
                src={delivary}
                width="20px"
                height={20}
                alt=""
              />
              <p>Track Order</p>
            </div>


          </div>
          <div className="d-flex gap-1">
            <img
              className="pt-1"
              src={box}
              width="20px"
              height={20}
              alt=""
            />
            <p>
              Free Delivery from <span>50 SAR</span> and Free returns within 60
              days.
            </p>
          </div>

          <div className="d-flex gap-3">
            <div className="d-flex gap-1">
              <img
                className=""
                src={Topdeals}
                width="15px"
                height="20px"
                alt=""
              />
              <p>Top Deals</p>
              <img
                className="pt-2"
                src={arrow}
                width="15px"
                height="20px"
                alt=""
              />
            </div>


            <div className="d-flex gap-1">

              <p>BDT</p>
              <img
                className="pt-2"
                src={arrow}
                width="15px"
                height="20px"
                alt=""
              />
            </div>


            <p>|</p>
            <div className="d-flex gap-1">
              <img
                className="pt-2"
                src={EN}
                width="15px"
                height="20px"
                alt=""
              />
              <p>EN</p>
              <img
                className="pt-2"
                src={arrow}
                color="#FFFFFF"
                width="17.1px"
                height="18px"
                alt=""
              />
            </div>



            {/* drak button setup //////// */}

            <div className="d-flex dark_option_style_setup   gap-1 p-2">

              <div className="drak_button_pading_setup ">
                <img
                  className=""
                  src={drakoption}

                  alt=""
                />

              </div>

              <p className="mt-3">Dark </p>
            </div>




          </div>
        </div>
      </div>




      {/* header dwon sectionSetup  */}
      <div className="navbar max-width " style={{ marginLeft: 133 }}>
        <div className="container-fluid">
          <div style={{ marginRight: 30 }}>
            <div className=" d-flex gap-2" >

              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <span>  <img src={menu} alt=""></img> </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/productditils">my account</Dropdown.Item>
                  <Dropdown.Item href="/electricCategorypage">Electric</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div>
                <img
                  src={headerimg}
                  style={{ width: "104px", height: "27px" ,marginTop:10}}
                  alt=""
                />
              </div>
            </div>
          </div>


          <form className="d-flex " role="search" >

            <input
              className="form-control position-relative text-center custom-search-input 
       "
              style={{ width: "1200px", height: "52px", marginLeft: -20 }}
              type="search"
              placeholder="Search for Products, Categories, Sellers etc."
              aria-label="Search"
            />

            <span className=" position-absolute filter_logo_body_setup  "
              style={{ marginLeft: 1140, marginTop: 8 }}
            >
              <img
                src={filter}
                alt="Search Icon"

                style={{ width: "14px", height: "14px", flexShrink: 0 }}


              />
            </span>



            <span className=" position-absolute  scren_logo_setup" style={{ marginLeft: 1090, marginTop: 8 }}>
              <img className=""
                src={scren}

                style={{ width: "18px", height: "18px", flexShrink: 0 }}




                alt="Search Icon"

              />
            </span>

            <span className=" position-absolute filter_logo_body_setup  "
              style={{ marginLeft: 0, marginTop: 8 }}
            >
              <img
                src={category}
                alt="Search Icon"

                style={{ width: "14px", height: "14px", flexShrink: 0 }}


              />

            </span>


            <img className="position-absolute "
              src={search}
              style={{ marginLeft: 400, marginTop: 18, width: "20px", height: "20px" }}
              alt="Search Icon"
            />

            <img
              className=" position-absolute "
              style={{ marginLeft: 35, marginTop: 21, width: "8px", height: "8px", flexShrink: 0, backgroundColor: "#000" }}
              src={arrow}
              alt="Search Icon"
            />





          </form>


          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex" style={{ marginTop: 14, }}>
              <img src={notification}
                style={{ width: "20px", height: "20px", marginRight: 0, marginTop: 3 }}

                alt=""
              />
              <p className="" style={{ marginRight: 23 }}>Sell</p>
            </div>





            <div className="d-flex accontu_toggel_in_logo_style_setup">
              <div className="account_body_setup">
                <img
                  src={accountlogo}
                  style={{ backgroundColor: "#CDCDCD", borderRadius: "100px" }}
                  alt=""
                />

              </div>

              {/* <Link to="account">account</Link> */}
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  account
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/googol">my account</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </div>


          </div>
        </div>
      </div>
    </nav>



  );
};

export default Header;