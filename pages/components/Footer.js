import React from "react";
function Footer() {
    return (
        <div style={{ backgroundColor: '#e9ecef' }}>
            <br />
            <div className='icon-div'>
                <a href="#"><i className="fab fa-facebook fa-3x icons" style={{ fontSize: "33px" }}></i></a>
                <a href="#"><i className="fab fa-twitter fa-3x icons" style={{ fontSize: "33px" }}></i></a>
                <a href="#"><i className="fab fa-instagram fa-3x icons" style={{ fontSize: "33px" }}></i></a>
            </div>
            <hr className='hr'></hr>
            <div className='table-f'>
                <ul className='footer-list'>
                    <li style={{ color: "#ca1436", fontSize: "16px" }}>Fantastic Discounts</li>
                    <li><a href="#">All Brands</a></li>
                    <li><a href="#">Exclusive Discounts</a></li>
                    <li><a href="#">Seasonal Deals & Discounts</a></li>
                    <li><a href="#">Student Discounts</a></li>
                    <li><a href="#">Health & Wellbeing Deals</a></li>
                </ul>
                <ul className='footer-list'>
                    <li style={{ color: "#ca1436", fontSize: "16px" }}>Get In Touch</li>
                    <li><a href="#">Community Codes</a></li>
                    <li><a href="#">Advertise With Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <ul className='footer-list'>
                    <li style={{ color: "#ca1436", fontSize: "16px" }}>Legal</li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cookies</a></li>
                    <li><a href="#">Conditions of Use</a></li>
                </ul>
                <ul className='footer-list'>
                    <li style={{ color: "#ca1436", fontSize: "16px" }}>MyVoucherCodes.co.uk</li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Useful Information</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Reward Offer FAQs</a></li>
                    <li><a href="#">Discount Code FAQs</a></li>
                </ul>
            </div>
            <hr className='hr'></hr>
            <div className='end-div'>
                <i class="fas fa-tags fa-3x icons" style={{ fontSize: "22px", marginLeft: "-14px" }}> 100000+<br />Voucher Codes</i>
                <i class="fas fa-shopping-cart fa-3x icons" style={{ fontSize: "22px" }}> 10000+<br />Retailers</i>
                <i class="fas fa-users fa-3x icons" style={{ fontSize: "22px" }}> 50000+<br /> Members</i>
                <br />
                <br />
                <p style={{ color: "#535151", fontSize: "12px" }}>UsethisVoucher is a deal sharing company, we provide latest deals and voucher codes to our loyal members
                    <br />© 2014-2021 UseThisVoucher.com - All Rights Reserved.</p>
                <br />
            </div>
        </div>
    );
}
export default Footer;