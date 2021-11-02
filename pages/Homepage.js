import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Slider from '../Slider';
import { NavLink } from "react-router-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import photo1 from '../pages/Images/ali.png'
// import photo2 from './Images/halloween.png'

// import photo3 from '../../Images/ali.png'
// import photo4 from '../../Images/booking.png'
// import { Col, Row } from 'react-bootstrap'
// import '@brainhubeu/react-carousel/lib/style.css';
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
function Homepage() {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <br></br>
      <br></br>
      <h1 className='headings'>All your discount codes in one place.</h1>
      <h1 className='sub-head'>Find promo & voucher codes for all your chosen UK brands!</h1>
      <br></br>
      <div className="input-group">
        <span className="form-outline">
          <input type="search" id="form1" className="form-control border border-danger" placeholder="Search" />
          <label className="form-label" for="form1"></label>
          <button type="button" class="btn btn-danger">Search</button>
        </span>
      </div>
      <br></br>
      <br></br>
      <Carousel className="container">
        <div>
          <img src="ali.png" height="250px" />
        </div>
        <div>
          <img src="booking.png" height="250px" />
        </div>
        <div>
          <img src="halloween.png" height="250px" />
        </div>
        <div>
          <img src="udemy.jpg" height="250px" />
        </div>
      </Carousel>
      <div className='sec-container'>
        <br></br>
        <h3 className='h3'>Trending Now</h3>
        <hr className='hr'></hr>
        {/* <Slider /> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h3 className='h3'>Save more money with MyVoucherCodes</h3>
        <br></br>
        <p className='paragraph'>As one of the UK’s biggest voucher websites, we’re dedicated to providing you with the very best working voucher codes and discount codes of the moment. Discover our trending promo codes at some of your favourite stores and stretch your budget even further. Voucher shopping with us has never been so easy!</p>
        <br></br>
        <div className='center-box'>
          <br></br>
          <br></br>
          <p className='sec-paragraph'>Get new codes straight to your inbox!</p>
          <div class="input-group2">
            <div class="form-outline">
              <input type="search" id="form1" class="form-control border border-primary" placeholder="Enter your email address here" />
              <label class="form-label" for="form1"></label>
              <button type="button" class="btn btn-primary"><a href="#" style={{ color: "white" }}>SignUp</a></button>
            </div>
          </div>
          <br />
          <p className='pp1'><input type="checkbox" style={{ display: "inline", position: "static", width: "15px", height: "15px", background: "#28BDA2" }}></input> Please tick this box to confirm you've read and agreed to our <u><a className='ta' href="#">Terms & Conditions</a></u> and <u><a className='ta' href="#">Privacy Policy</a></u></p>
        </div>
        <br></br>
        <br></br>
        <h3 className='h3'>Top Categories</h3>
        <br></br>
        <h2 className='h2'>Fashion</h2>
        <br></br>
        <h4 className='h4'>0000 live offers in Fashion</h4>
        <hr className='hr'></hr>
        {/* <Slider /> */}
        <br></br>
        <br></br>
        <h2 className='h2'>Home & Garden</h2>
        <br></br>
        <h4 className='h4'>0000 live offers in Home & Garden</h4>
        <hr className='hr'></hr>
        {/* <Slider /> */}
        <br></br>
        <br></br>
        <h2 className='h2'>Gifts & Occasions</h2>
        <br></br>
        <h4 className='h4'>0000 live offers in Gifts & Occasions</h4>
        <hr className='hr'></hr>
        {/* <Slider /> */}
        <br></br>
        <br></br>
        <h2 className='h2'>Health & Beauty</h2>
        <br></br>
        <h4 className='h4'>0000 live offers in Health & Beauty</h4>
        <hr className='hr'></hr>
        {/* <Slider /> */}
        <br></br>
        <br></br>
        <h2 className='h2'>Technology & Electrical</h2>
        <br></br>
        <h4 className='h4'>0000 live offers in Technology & Electrical</h4>
        <hr className='hr'></hr>
        {/* <Slider /> */}
        <br></br>
        <br></br>
        <h2 className='h2'>Travel</h2>
        <br></br>
        <h4 className='h4'>0000 live offers Travel</h4>
        <hr className='hr'></hr>
        {/* <Slider /> */}
        <br></br>
        <br></br>
        <h2 className='h2'>Restaurants, Takeaways & Bars</h2>
        <br></br>
        <h4 className='h4'>0000 live offers in Restaurants, Takeaways & Bars</h4>
        <hr className='hr'></hr>
        {/* <Slider /> */}
        <br></br>
        <br></br>
        <h2 className='h2'>Student</h2>
        <br></br>
        <h4 className='h4'>0000 live offers Student</h4>
        <hr className='hr'></hr>
        {/* <Slider /> */}
      </div>
      <div className='third-cont'>
        <br />
        <h3 className='h3'>Trending Now</h3>
        <br />
        <div style={{ width: 'auto', overflow: 'hidden' }}>

          <span className="column1"><img /></span>
          <span className="column1"><img /></span>

        </div>
        <br />
        <h3 className='h3'>Popular searches</h3>
        <hr className='hr'></hr>
        <div className='table-1'>
          <ul className='inner-tab'>
            <li><u><a href="#">Tesco</a></u></li>
            <li><u><a href="#">Hotels.com</a></u></li>
            <li><u><a href="#">Travelodge</a></u></li>
            <li><u><a href="#">Debenhams</a></u></li>
            <li><u><a href="#">New Look</a></u></li>
            <li><u><a href="#">Freelunique</a></u></li>
            <li><u><a href="#">Topshop</a></u></li>
            <li><u><a href="#">Nike</a></u></li>
            <li><u><a href="#">ao.com</a></u></li>
          </ul>
          <ul className='inner-tab'>
            <li><u><a href="#">Thomas Cook</a></u></li>
            <li><u><a href="#">Argos</a></u></li>
            <li><u><a href="#">The Body Shop</a></u></li>
            <li><u><a href="#">ASOS</a></u></li>
            <li><u><a href="#">Harvester</a></u></li>
            <li><u><a href="#">Missguided</a></u></li>
            <li><u><a href="#">LOOKFANTASTIC</a></u></li>
            <li><u><a href="#">Peacocks</a></u></li>
            <li><u><a href="#">Next</a></u></li>
          </ul>
          <ul className='inner-tab'>
            <li><u><a href="#">Laura Ashley</a></u></li>
            <li><u><a href="#">lastminute.com</a></u></li>
            <li><u><a href="#">Asda</a></u></li>
            <li><u><a href="#">Very</a></u></li>
            <li><u><a href="#">Toby Carvery</a></u></li>
            <li><u><a href="#">Mobiles.co.uk</a></u></li>
            <li><u><a href="#">JD Sports</a></u></li>
            <li><u><a href="#">Michael Kors</a></u></li>
            <li><u><a href="#">Under Armour</a></u></li>
          </ul>
          <ul className='inner-tab'>
            <li><u><a href="#">Virgin Experience Days</a></u></li>
            <li><u><a href="#">The Fragrance Shop</a></u></li>
            <li><u><a href="#">Joules</a></u></li>
            <li><u><a href="#">Boden</a></u></li>
            <li><u><a href="#">boohoo</a></u></li>
            <li><u><a href="#">Myprotein</a></u></li>
            <li><u><a href="#">Sky</a></u></li>
            <li><u><a href="#">Wayfair</a></u></li>
            <li><u><a href="#">Expedia</a></u></li>
          </ul>
          <ul className='inner-tab'>
            <li><u><a href="#">Boots</a></u></li>
            <li><u><a href="#">Clarks</a></u></li>
            <li><u><a href="#">First Choice</a></u></li>
            <li><u><a href="#">Sports Direct</a></u></li>
            <li><u><a href="#">Pizza Hut</a></u></li>
            <li><u><a href="#">Uber</a></u></li>
            <li><u><a href="#">Virgin Media</a></u></li>
            <li><u><a href="#">Samsung</a></u></li>
            <li><u><a href="#">Victoria Plum</a></u></li>
          </ul>
          <ul className='inner-tab'>
            <li><u><a href="#">House of Fraser</a></u></li>
            <li><u><a href="#">Currys</a></u></li>
            <li><u><a href="#">Morrisons</a></u></li>
            <li><u><a href="#">TK Maxx</a></u></li>
            <li><u><a href="#">Domino's</a></u></li>
            <li><u><a href="#">adidas</a></u></li>
            <li><u><a href="#">ghd</a></u></li>
            <li><u><a href="#">Matalan</a></u></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Homepage;

