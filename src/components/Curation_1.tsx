import React, { useState, useRef } from "react";
import './Curation_1.css';
import { allMovies, type Movie } from "./MovieData";

const Curation_1 = () => {
    // 1. 현재 메인에서 보여줄 영화 관리 (allMovies의 첫 번째 영화를 기본값으로)
    const [currentMovie, setCurrentMovie] = useState<Movie>(allMovies[0]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [isStarted, setIsStarted] = useState(false);
    const [isEnded, setIsEnded] = useState(false); // 영상 종료 상태 추가
    const videoRef = useRef<HTMLVideoElement>(null);
    

    // 2. 내비게이션 로직 (allMovies 전체를 순회)
    const navigateMovie = (direction: 'prev' | 'next') => {
        const baseMovie = selectedMovie || currentMovie;
        const currentIndex = allMovies.findIndex(m => m.id === baseMovie.id);
        let nextIndex = direction === 'prev' 
        ? (currentIndex - 1 + allMovies.length) % allMovies.length 
        : (currentIndex + 1) % allMovies.length;
    
        const nextMovie = allMovies[nextIndex];
        setSelectedMovie(nextMovie);
    };

    const handleStart = () => {
        if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.play();
            setIsStarted(true);
            setIsEnded(false);
        }
    };

    const handleVideoEnd = () => {
        setIsStarted(false);
        setIsEnded(true); // 종료 상태 활성화
    };

    const handleReplay = (e: React.MouseEvent) => {
        e.stopPropagation(); // 부모 클릭 이벤트 방지
        handleStart();
    };

    const openModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedMovie(currentMovie);
    };


    return (
        <section className="curation_container">
            <div className="curation_inner">
                <p className="issue">ISSUE NO. 01</p>
    
                <div className="curation_main_visual">
                    <h1 className="key_phrase">INSIDE THE MOMENT</h1>
      
                    <div className="cu_cont">
                        {/* 왼쪽: 비디오 영역 */}
                        <div className="cu_left">
                            {/* 시작 가이드 */}
                            {!isStarted && !isEnded && (
                                <div className="video_guide" onClick={handleStart}>
                                    <p>START EXPERIENCE</p>
                                </div>
                            )}

                            {isStarted && (
                            <video
                                ref={videoRef}
                                className="curation_video"
                                src={`/media/${currentMovie.title}.mp4`}
                                playsInline
                                onEnded={() => {
                                    setIsStarted(false);
                                    setIsEnded(true);
                                }}
                                controls={false}
                            />
                            )}

                            {/* 영상 종료 후 나타나는 버튼들 */}
                            {isEnded && (
                                <div className="video_guide ended_overlay">
                                    <div className="ended_controls_container">
                                        <div className="control_item" onClick={handleReplay}>
                                            <div className="pill_icon_button">
                                                <img src="/media/replay.svg" alt="replay" className="replay" />
                                            </div>
                                        </div>
                                        <div className="control_item" onClick={openModal}>
                                            <div className="pill_icon_button">
                                                <img src="/media/view.svg" alt="info" className="view" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <video ref={videoRef} onEnded={handleVideoEnd} playsInline className="curation_video">
                                {/* 영화 객체의 title을 활용해 매칭되는 영상 소스 연결 */}
                                <source src={`/media/${currentMovie.title}.mp4`} type="video/mp4" />
                                브라우저가 비디오를 지원하지 않습니다.
                            </video>          
                        </div>
        
                        {/* 오른쪽: 영화 정보 영역 */}
                        <div className="cu_right">
                            <div className="cu1_header">
                                <div className="cu1_title_row">
                                    <h3 className="title1">{currentMovie.title}</h3>
                                    <p className="cu1_director">{currentMovie.direc}</p>
                                </div>
                                <div className="cu1_info_row">
                                    <p>Running Time : {currentMovie.runtime}</p>
                                    <p>Release : {currentMovie.rel}</p>
                                </div>
                            </div>

                            <div className="cu1_description">
                                <h3 className="cu1_subtitle">{currentMovie.subTitle}</h3>
                                <p className="cu1_sen2">{currentMovie.desc}</p>
                            </div>

                            <div className="cu1_keyword">
                                {currentMovie.keywords.map((kw: string) => (
                                    <p key={kw}>{kw}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 모달 레이어 */}
                {selectedMovie && (
                    <div className="movie_modal">
                        <div className="modal_bg" style={{ backgroundImage: `url(${selectedMovie.img})` }}></div>
                        <div className="modal_content">
                            <div className="modal_header_row">
                                <h1 className="m_title">{selectedMovie.title}</h1>
                                <div className="m_info_right">
                                    <p className="m_direc_name">{selectedMovie.direc}</p>
                                    <p>Running Time : {selectedMovie.runtime}</p>
                                    <p>Release : {selectedMovie.rel}</p>
                                </div>
                            </div>
                            <div className="modal_body_row">
                                <div className="m_description">
                                    <h3>{selectedMovie.subTitle}</h3>
                                    <p>{selectedMovie.desc}</p>
                                </div>
                                <div className="m_keywords_list">
                                    {selectedMovie.keywords.map((kw: string) => <p key={kw}>{kw}</p>)}
                                </div>
                            </div>
                            <div className="m_video_preview">
                                <img src={selectedMovie.img} alt="preview" />
                                <div className="m_play_bar">
                                    {/* 모달 내부 화살표는 movies 전체 데이터를 탐색하도록 연결 */}
                                    <div className="m_arrow">
                                        <img src="/media/arrow_b.svg" className="m_left" onClick={() => navigateMovie('prev')} />
                                        <img src="/media/arrow_b.svg" className="m_right" onClick={() => navigateMovie('next')} />
                                    </div>
                                    <button className="m_play_btn">PLAY</button>
                                    <span className="m_cancel" onClick={() => setSelectedMovie(null)}>✕</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Curation_1;