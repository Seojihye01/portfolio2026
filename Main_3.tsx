import React from 'react';
import './Main_3.css';

const Main_3: React.FC = () => {
    return (
        <section className="main3_container">
            <div className="main3_inner">
                <h1 className="main3_title">THE CURATOR</h1>
                
                <div className="main3_content_grid">
                    <div className="main3_left">
                        <h3 className="main3_message">
                            이곳에서 발견하는 한 편의 이야기로<br/>
                            당신의 취향을 깊게, 영화적 경험을 넓게
                        </h3>
                        <p className="main3_description">
                            선별된 서사들이 당신의 감각과 만나는 지점<br/>
                            수많은 영화 속에서 길을 잃지 않도록<br/>
                            우리는 탐험가이자 기록자가 되었습니다
                        </p>
                        <a href="#" className="main3_discover_btn">
                            Discover Our Story 
                            <img src="/media/arrow_b.svg" alt="arrow" />
                        </a>
                    </div>

                    <div className="main3_right">
                        <div className="info_card">
                            <div className="info_row">
                                <span className="label">IDENTITY</span>
                                <span className="value">Cinematic Content Hub</span>
                            </div>
                            <div className="info_row">
                                <span className="label">SINCE</span>
                                <span className="value">2025</span>
                            </div>
                            <div className="info_row">
                                <span className="label">LOCATION</span>
                                <span className="value">Seoul, Republic of Korea</span>
                            </div>
                            
                            <div className="info_logo">
                                <img src="/media/logo_b.png" alt="Directory.M Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main_3;