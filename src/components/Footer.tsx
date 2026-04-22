import React from "react";
import './Footer.css';

const Footer = () => {
    
    return (
        <section className="footer_container">
            <div className="footer_inner">
                <a href="/" className="footer_top">
                    <img src="/media/logo_b.png" className="footer_logo"/>
                    <p className="catchphrase">archive today, remember always.</p>
                </a>
                
                <div className="footer_middle">
                    <div className="sector">
                        <ul className="sec_1">
                            <li className="sec_title">SERVICE</li>
                            <a href="/curation"><li>Curation</li></a>
                            <a href="/explore"><li>Explore</li></a>
                            <a href="/funding"><li>Funding</li></a>
                            <a href="#"><li>About</li></a>
                            <a href="#"><li>Membership</li></a>
                        </ul>
                        <ul className="sec_2">
                            <li className="sec_title">SUPPORT</li>
                            <a href="#"><li>FAQ</li></a>
                            <a href="#"><li>Customer Service</li></a>
                            <a href="#"><li>Contact Us</li></a>
                            <a href="#"><li>Help Centre</li></a>
                        </ul>
                        <ul className="sec_3">
                            <li className="sec_title">LEGAL</li>
                            <a href="#"><li>Terms of Service</li></a>
                            <a href="#"><li>Privacy Policy</li></a>
                            <a href="#"><li>Copyright Policy</li></a>
                        </ul>
                        <ul className="sec_4">
                            <li className="sec_title">SOCIAL</li>
                            <a href="#"><li>Instagram</li></a>
                            <a href="#"><li>X</li></a>
                            <a href="#"><li>Youtube</li></a>
                            <a href="#"><li>Vimeo</li></a>
                        </ul>
                    </div>
                </div>    

                <div className="footer_bottom">
                    <p className="copyright">© 2025 Directory.M</p>
                    <p className="personal_work">This project is a personal portfolio work</p>
                </div>        
            </div>
        </section>
    )
}

export default Footer;