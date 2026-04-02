import React from "react";
import { useNavigate, Link } from "react-router-dom";
import './Signup_3.css';


interface Signup3Props {
    onLogin: () => void;
    onPrev: () => void;
}

const Signup_3: React.FC<Signup3Props> = ({ onLogin, onPrev }) => {
    const navigate = useNavigate();
    const handleCreateAccount = () => {
        // 1. 서버에 데이터 전송 로직 (생략)
        // 2. 로그인 상태로 변경
        onLogin();
        // 3. 메인으로 이동
        navigate('/');
    };

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
                        <div className="before" onClick={onPrev} style={{ cursor: 'pointer' }}>
                            <img src="/media/arrow_b.svg" className="be" />
                            <p>Before</p>
                        </div>
                        <Link to='/' className="next" onClick={handleCreateAccount} style={{ cursor: 'pointer' }}>
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