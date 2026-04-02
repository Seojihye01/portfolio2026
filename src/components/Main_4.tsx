import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Main_4.css';

const Main_4: React.FC = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showModal, setShowModal] = useState(false); // 팝업 상태
    const navigate = useNavigate();
     
    const handleImageClick = (url : string) => {
        window.open(url, '_blank');
    }; // 외부 링크 이동 함수

    const handleLockClick = () => {
        if (!isLoggedIn) {
            setShowModal(true); // 로그인 안되어 있으면 팝업 노출
        }
    };

    return (
        <section className="main4_container">
            <div className="main4_inner">
                <div className="main4_top">
                    <div className="main4_images">
                        <img src="/media/dune1.png" className="img_tall clickable"
                             onClick={() => handleImageClick('')} />
                        <div className="img_small_stack">
                            <img src="/media/dune1.png" className="img_small clickable"
                                 onClick={() => handleImageClick('')} /> 
                            <img src="/media/dune1.png" className="img_small clickable"
                                 onClick={() => handleImageClick('')} />
                        </div>
                        <div className="curator">
                            <video autoPlay muted loop playsInline className="background_video">
                                    <source src="/media/main6.mp4" type="video/mp4" />
                                        브라우저가 비디오를 지원하지 않습니다.
                            </video>             
                        </div>
                    </div>                   
                    <a href="#" className="main4_cta">
                        <span className="cta_text">CURATION</span>
                        <img src="/media/arrow_b.svg" alt="arrow" className="cta_arrow"/>
                    </a>
                </div>

                <div className="main4_bottom">
                    <p className="main4_subtitle">당신의 감각을 깨울 선별된 서사들의 기록</p>
                    <h1 className="main4_maintitle">01 EDITOR'S PICKS</h1>
                </div>
                <hr className="main4_line"/>
            </div>

            {/* 팝업 모달창 */}
            {showModal && (
                <div className="modal_overlay" onClick={() => setShowModal(false)}>
                    <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal_close" onClick={() => setShowModal(false)}>X</button>
                        <div className="modal_header">
                            <img src="/media/lock_b.svg" className="modal_lock_icon" />
                            <h2>MEMBERS ONLY</h2>
                        </div>
                        <p className="modal_desc">
                            회원에게 제공되는 큐레이션입니다.
                        </p>
                        <div className="modal_btns">
                            <button className="btn_login" onClick={() => navigate('/login')}>LOGIN</button>
                            <button className="btn_signup" onClick={() => navigate('/signup_1')}>SIGN UP</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Main_4;