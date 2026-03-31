import React from "react";
import { Link } from "react-router-dom";
import './Signup_3.css';

const Signup_3 = () => {

    return(
        <section className="signup_container">
            <div className="signup_inner">
                <div className="signup_content">
                    <div className="step">
                        <p>STEP 01</p>
                        <p>STEP 02</p>
                        <p className="st3">STEP 03</p>
                    </div>
                    
                    <div className="box_grid">
                        <div className="box">
                            <img src="/media/signup_3.png" className="sign_img" />
                            <p className="genre">Arthouse</p>
                        </div>
                        <div className="box">
                            <img src="/media/signup_3.png" className="sign_img" />
                            <p className="genre">Noir</p>
                        </div>
                        <div className="box">
                            <img src="/media/signup_3.png" className="sign_img" />
                            <p className="genre">Documentary</p>
                        </div>
                        <div className="box">
                            <img src="/media/signup_3.png" className="sign_img" />
                            <p className="genre">Classic</p>
                        </div>
                        <div className="box">
                            <img src="/media/signup_3.png" className="sign_img" />
                            <p className="genre">Short Film</p>
                        </div>
                        <div className="box point">
                            <p className="point_kr">탐험의 시작점</p>
                            <p className="point_en">POINT<br />OF<br />DEPARTURE</p>
                        </div>
                        <div className="box">
                            <img src="/media/signup_3.png" className="sign_img" />
                            <p className="genre">Independent</p>
                        </div>
                    </div>
                            
                    <div className="link_btn">
                        <Link to='/signup_2' className="before">
                            <img src="/media/arrow_b.svg" className="be" />
                            <p>Before</p>
                        </Link>
                        <Link to='/' className="next">
                            <p>Create Account</p>
                            <img src="/media/arrow_b.svg" className="ar" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup_3;