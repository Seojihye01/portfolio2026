import React, { useState, useRef } from "react";
import './Curation_1.css';

const Curation_1 = () => {

    const [isStarted, setIsStarted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleStart = () => {
        if (videoRef.current) {
            videoRef.current.muted = false; // 소리 켜기
            videoRef.current.play();
            setIsStarted(true);
        }
    };

    const handleVideoEnd = () => {
    setIsStarted(false); // 📍 영상이 끝나면 다시 시작 화면으로
    if (videoRef.current) {
        videoRef.current.currentTime = 0; // 영상 위치 초기화
        }
    };

    return(
        <section className="curation_container">
            <div className="curation_inner">
                <p className="issue">ISSUE NO. 01</p>
    
                <div className="curation_main_visual">
                    <h1 className="key_phrase">INSIDE THE MOMENT</h1>
      
                    <div className="cu_cont">
                        <div className="cu_left" onClick={handleStart} style={{ cursor: isStarted ? 'default' : 'pointer' }}>
                            {!isStarted && (
                                <div className="video_guide">
                                    <p>START EXPERIENCE</p>
                                </div>
                             )}
                            <video ref={videoRef} onEnded={handleVideoEnd} playsInline className="curation_video">
                                <source src="/media/Dune.mp4" type="video/mp4" />
                                    브라우저가 비디오를 지원하지 않습니다.
                            </video>         
                        </div>
        
                        <div className="cu_right">
                            <div className="cu1_header">
                                <div className="cu1_title_row">
                                    <h3 className="title1">Dune</h3>
                                    <p className="cu1_director">Denis Villeneuve</p>
                                </div>
                                <div className="cu1_info_row">
                                    <p>Running Time : 2h 35m</p>
                                    <p>Release : 2021</p>
                                </div>
                            </div>

                            <div className="cu1_description">
                                <p className="cu1_sen1">사막의 지평선과 거대한 함선이< br /> 만드는 압도적 대비</p>
                                <p className="cu1_sen2">
                                적막한 대기 속에 감도는 압도적 무게감과<br /> 고독을 포착한다.<br />
                                행성 아라키스로 떠난 소년 폴은 자신의<br /> 운명과 선택 앞에 서게 된다.
                                </p>
                            </div>

                            <div className="cu1_keyword">
                                <p>정적의 규모</p>
                                <p>장면의 중력</p>
                                <p>시각적 몰입</p>
                                <p>감각의 확장</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Curation_1;