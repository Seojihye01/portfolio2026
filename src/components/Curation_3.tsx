import React, { useState, useRef, useEffect } from "react";
import './Curation_3.css';
import './Curation_4.css';
import { allMovies, type Movie } from "./MovieData";

const Curation_3 = () => {
    // 1. 상태 관리
    const [currentMovie, setCurrentMovie] = useState<Movie>(allMovies[0]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [isStarted, setIsStarted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false); // 영상이 실제 시작되었는지 여부 (배경색 제어용)
    const [isEnded, setIsEnded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // 타임아웃 ID 관리를 위한 Ref (컴포넌트 언마운트 시 메모리 누수 방지)
    const startTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const endTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // 2. 영화 변경 시 비디오 소스 리로드 및 상태 초기화
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
        // 영화가 바뀌면 상태 리셋
        setIsStarted(false);
        setIsPlaying(false);
        setIsEnded(false);

        // 기존에 돌고 있던 타이머가 있다면 클리어
        if (startTimeoutRef.current) clearTimeout(startTimeoutRef.current);
        if (endTimeoutRef.current) clearTimeout(endTimeoutRef.current);
    }, [currentMovie]);

    // 컴포넌트 언마운트 시 타이머 클리어
    useEffect(() => {
        return () => {
            if (startTimeoutRef.current) clearTimeout(startTimeoutRef.current);
            if (endTimeoutRef.current) clearTimeout(endTimeoutRef.current);
        };
    }, []);

    // 3. 내비게이션 로직
    const navigateMovie = (direction: 'prev' | 'next') => {
        const baseMovie = selectedMovie || currentMovie;
        const currentIndex = allMovies.findIndex(m => m.id === baseMovie.id);
        let nextIndex = direction === 'prev' 
            ? (currentIndex - 1 + limitedData.length) % limitedData.length 
            : (currentIndex + 1) % limitedData.length;
    
        const nextMovie = allMovies[nextIndex];
        setSelectedMovie(nextMovie);
    };

    // 4. 재생 시작 및 리플레이 로직
    const handleStart = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0; // 처음부터 재생 보장
            videoRef.current.muted = false;
            
            // 버튼을 누르면 이퀄라이저 가이드는 즉시 숨김
            setIsStarted(true); 
            setIsEnded(false);
            setIsPlaying(false);

            startTimeoutRef.current = setTimeout(() => {
                setIsPlaying(true); 

            const playPromise = videoRef.current?.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        // 실제 재생 성공 시 추가 액션이 필요하다면 여기에 작성 (현재는 즉시 트리거로 해결)
                    })
                    .catch(error => {
                        console.error("재생 실패:", error);
                        // 혹시라도 재생이 차단되면 배경을 다시 원래대로 돌려놓음
                        setIsPlaying(false);
                        setIsStarted(false);
                    });
            }
        }, 1200);
        }
    };

    // 영상이 끝났을 때 핸들러
    const handleVideoEnd = () => {
        setIsPlaying(false); // 재생이 끝났으므로 false

        // [요구사항 3] 영상 끝나고 지연 후 ended overlay 나오게 하기
        endTimeoutRef.current = setTimeout(() => {
            setIsStarted(false);
            setIsEnded(true);
        }, 800); // 1.2초(1200ms) 지연 후 오버레이 등장. 원하는 대로 시간 조절 가능.
    };

    const handleReplay = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleStart();
    };

    const openModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedMovie(currentMovie);
    };

    const limitedData = allMovies.filter(movie => Number(movie.id) >= 1 && Number(movie.id) <= 10);

    return (
        <section className="cu3_container" data-theme="light">
            <div className="cu3_inner">    
                <div className="cu3_cont">
                    <div className={`cu3_top ${isPlaying ? 'bg_black' : ''}`}>
                        
                        {/* 시작 전 가이드 (이퀄라이저) */}
                        {!isStarted && !isEnded && (
                            <div className="video_guide" onClick={handleStart} style={{ zIndex: 10 }}>
                                <div className="cu3_play">
                                    <img src="/media/play_b.svg" className="play_btn" />
                                </div>
                                <div className="equalizer_wrapper">
                                    {[...Array(20)].map((_, i) => (
                                        <div key={i} className="eq_bar"></div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 영상 종료 후 오버레이 */}
                        {isEnded && (
                            <div className="video_guide ended_overlay" style={{ zIndex: 10 }}>
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

                        {/* 비디오 태그: 이퀄라이저 가이드가 닫히면(isStarted) 서서히 opacity로 등장 */}
                        <video
                            ref={videoRef}
                            className="curation_video"
                            onEnded={handleVideoEnd}
                            playsInline
                            style={{ 
                                opacity: isStarted ? 1 : 0,
                                pointerEvents: isPlaying ? 'auto' : 'none'
                            }}>
                            <source src="/media/Dune_ex.mp4" type="video/mp4" />
                            브라우저가 비디오를 지원하지 않습니다.
                        </video>
                    </div>
        
                    {/* 영화 정보 영역 */}
                    <div className="cu3_bot">
                        <div className="cu3_title_row">
                            <p className="issue">ISSUE NO. 01</p>
                            <h1 className="key_phrase">INSIDE THE MOMENT</h1>
                        </div>
                        <div className="cu3_info_row bold">
                            <p className="info_title">TITLE</p>
                            <h3 className="cu3_ti">{currentMovie.title}</h3>
                        </div>
                        <div className="cu3_info_row">
                            <p className="info_title">DIRECTOR</p>
                            <h3 className="cu3_direc">{currentMovie.direc}</h3>
                        </div>
                        <div className="cu3_info_row">
                            <p className="info_title">RUNNING TIME</p>
                            <h3 className="cu3_run">{currentMovie.runtime}</h3>
                        </div>
                        <div className="cu3_info_row">
                            <p className="info_title">RELEASE</p>
                            <h3 className="cu3_rel">{currentMovie.rel}</h3>
                        </div>
                    </div>
                </div>

                {/* 모달 레이어 생략 (기존 코드와 동일) */}
                {selectedMovie && (
                    <div className="movie_modal">
                        {/* ... 기존 모달 내용 ... */}
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
                                <div className="m_control_bar">
                                    <div className="m_arrow">
                                        <img src="/media/arrow_b.svg" className="m_left" onClick={() => navigateMovie('prev')} alt="prev" />
                                        <img src="/media/arrow_b.svg" className="m_right" onClick={() => navigateMovie('next')} alt="next" />
                                    </div>
                                    <button className="m_more_btn">PLAY</button>
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

export default Curation_3;