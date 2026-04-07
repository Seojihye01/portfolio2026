import React, { useState, useRef, useEffect } from "react";
import './Curation_1.css';
import { allMovies, type Movie } from "./MovieData";

const Curation_1 = () => {
    // 1. 상태 관리
    const [currentMovie, setCurrentMovie] = useState<Movie>(allMovies[0]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [isStarted, setIsStarted] = useState(false);
    const [isEnded, setIsEnded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isClicked, setIsClicked] = useState(false);

    // 2. 영화 변경 시 비디오 소스 리로드
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load(); // 소스 변경 시 명시적으로 로드 호출
        }
    }, [currentMovie]);

    // 3. 내비게이션 로직
    const navigateMovie = (direction: 'prev' | 'next') => {
        const baseMovie = selectedMovie || currentMovie;
        const currentIndex = allMovies.findIndex(m => m.id === baseMovie.id);
        let nextIndex = direction === 'prev' 
            ? (currentIndex - 1 + allMovies.length) % allMovies.length 
            : (currentIndex + 1) % allMovies.length;
    
        const nextMovie = allMovies[nextIndex];
        setSelectedMovie(nextMovie);
        // 만약 메인 화면 영화도 같이 바꾸고 싶다면 여기서 setCurrentMovie(nextMovie)를 호출하세요.
    };

    // 4. 재생 시작 및 리플레이 로직
    const handleStart = () => {
        setIsClicked(true);

        if (videoRef.current) {
            setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.muted = false;
            
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsStarted(true);
                        setIsEnded(false);
                        setIsClicked(false);
                    })
                    .catch(error => {
                        console.error("재생 실패:", error);
                        setIsClicked(false);
                    });
            }
        }
    }, 400);
    }
    };

    const handleVideoEnd = () => {
        setIsStarted(false);
        setIsEnded(true);
    };

    const handleReplay = (e: React.MouseEvent) => {
        e.stopPropagation();
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
                            
                            {/* 시작 전 가이드 (이퀄라이저) */}
                            {!isStarted && !isEnded && (
                                <div className="video_guide" onClick={handleStart} style={{ zIndex: 10 }}>
                                    <div className="cu1_header">
                                        <div className="cu1_title_row">
                                            <p className="cu1_director">{currentMovie.direc}</p>
                                            <h3 className="title1">{currentMovie.title}</h3>
                                            <div className="cu1_info_row">
                                                <p>Running Time : {currentMovie.runtime}</p>
                                                <p>Release : {currentMovie.rel}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="equalizer_wrapper">
                                        {[...Array(20)].map((_, i) => (
                                            <div key={i} className="eq_bar"></div>
                                        ))}
                                    </div>
                                    <div className={`cu1_play ${isClicked ? 'active_hold' : ''}`} 
                                        onClick={handleStart}>
                                        <img src="/media/play.svg" className="play_btn" />
                                    </div>
                                </div>
                            )}

                            {/* 영상 종료 후 오버레이 */}
                            {isEnded && (
                                <div className="video_guide ended_overlay" style={{ zIndex: 10 }}>
                                    <div className="ended_controls_container">
                                        <div className="control_item" onClick={handleReplay}>
                                            <div className="cu1_icon_btn">
                                                <img src="/media/replay.svg" alt="replay" className="replay" />
                                            </div>
                                        </div>
                                        <div className="control_item" onClick={openModal}>
                                            <div className="cu1_icon_btn">
                                                <img src="/media/view.svg" alt="info" className="view" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 비디오 태그: 항상 유지하며 opacity로 제어 */}
                            <video
                                ref={videoRef}
                                className="curation_video"
                                onEnded={handleVideoEnd}
                                playsInline
                                onContextMenu={(e) => e.preventDefault()}
                                style={{ 
                                    opacity: isStarted ? 1 : 0,
                                    pointerEvents: isStarted ? 'auto' : 'none'
                                }}
                            >
                                <source src={`/media/${currentMovie.title}.mp4`} type="video/mp4" />
                                브라우저가 비디오를 지원하지 않습니다.
                            </video>
                        </div>
        
                        {/* 오른쪽: 영화 정보 영역 */}
                        <div className="cu_right">
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
                                    <div className="m_arrow">
                                        <img src="/media/arrow_b.svg" className="m_left" onClick={() => navigateMovie('prev')} alt="prev" />
                                        <img src="/media/arrow_b.svg" className="m_right" onClick={() => navigateMovie('next')} alt="next" />
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