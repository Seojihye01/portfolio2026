/* Player.tsx */
import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allMovies } from "./MovieData";
import "./Player.css";

const Player = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const videoRef = useRef<HTMLVideoElement>(null);

    const [currentAd, setCurrentAd] = useState("");
    const [isAdPlaying, setIsAdPlaying] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [brightness, setBrightness] = useState(100);
    const [rating, setRating] = useState(0);
    
    // 언어 상태 관리 추가
    const [currentLanguage, setCurrentLanguage] = useState("English");

    // 인터페이스 숨김 상태 및 NodeJS 오류 방지용 타입 지정
    const [showControls, setShowControls] = useState(true);
    const timerRef = useRef<any>(null); 

    const handleMouseMove = () => {
        setShowControls(true);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setShowControls(false);
        }, 1000);
    };

    const movieData = allMovies.find(m => String(m.id) === movieId);

    useEffect(() => {
        const ads = ["/media/APPLE.mp4", "/media/Milano_Fashion_Week.mp4"];
        const randomIndex = Math.floor(Math.random() * ads.length);
        setCurrentAd(ads[randomIndex]);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    if (!movieData) return null;

    const togglePlay = () => {
        if (!videoRef.current) return;
        isPlaying ? videoRef.current.pause() : videoRef.current.play();
        setIsPlaying(!isPlaying);
    };

    const handleVideoEnd = () => {
        if (isAdPlaying) {
            setIsAdPlaying(false);
            setIsPlaying(true);
        }
    };

    return (
        <div 
            className={`player_container ${!showControls ? "hide_cursor" : ""}`} 
            onMouseMove={handleMouseMove}
        >
            {/* 밝기 조절은 비디오에만 적용하여 컨트롤바 가독성 유지 */}
            <video 
                ref={videoRef}
                className="main_video"
                style={{ filter: `brightness(${brightness}%)` }}
                src={isAdPlaying ? currentAd : (movieData.videoUrl || "/media/Dune.mp4")} 
                onEnded={handleVideoEnd}
                autoPlay
            />

            <div className={`player_overlay ${showControls ? "visible" : "hidden"}`}>
                <div className="top_bar">
                    <div className="top_left" onClick={() => navigate(-1)}>
                        <img src="/media/arrow_w.svg" className="back_icon" alt="back" />
                        <span className="movie_title">{movieData.title}</span>
                    </div>
                    
                    {/* 별점 중앙 정렬 */}
                    <div className="top_center star_rating">
                        {[...Array(5)].map((_, i) => (
                            <span
                                key={i}
                                className={`star_item ${i < rating ? "filled" : ""}`}
                                onClick={() => setRating(i + 1)}
                            >
                                {i < rating ? "★" : "☆"}
                            </span>
                        ))}
                    </div>

                    <div className="top_right cc_container">
                        <span className="cc_label">CC</span>
                        <ul className="cc_list">
                            {["English", "Korean", "French", "Spanish", "Chinese", "Arab"].map((lang) => (
                                <li 
                                    key={lang} 
                                    className={lang === currentLanguage ? "active" : ""}
                                    onClick={() => setCurrentLanguage(lang)} // ✅ 클릭 시 언어 변경
                                >
                                    {lang}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {!isPlaying && (
                    <div className="center_play" onClick={togglePlay}>
                        <img src="/media/play_b.svg" alt="play" />
                    </div>
                )}

                {/* 밝기 조절 슬라이더 */}
                <div className="brightness_control">
                    <img src="/media/light.svg" alt="light" />
                    <div className="slider_wrapper">
                        <input 
                            type="range" 
                            min="30" 
                            max="150" 
                            value={brightness} 
                            onChange={(e) => setBrightness(Number(e.target.value))}
                            className="brightness_slider"
                        />
                    </div>
                </div>

                <div className="bottom_bar">
                    <div className="progress_area">
                        <div className="time_info">01:01:00</div>
                        <div className="progress_bar">
                            <div className="progress_current" style={{ width: '60%' }}></div>
                        </div>
                        <div className="time_total">{movieData.runtime || "02:35:00"}</div>
                    </div>

                    <div className="bottom_controls">
                        <div className="ctrl_left">
                            <span className="speed">1.0x</span>
                            <div className="icon_group"><img src="/media/archive.svg" alt="archive" /><span>Archive</span></div>
                            <div className="icon_group"><img src="/media/episodes.svg" alt="episodes" /><span>Episodes</span></div>
                            <div className="icon_group" onClick={handleVideoEnd}><img src="/media/next_episode.svg" alt="next" /><span>Next Episode</span></div>
                        </div>
                        <div className="ctrl_right">
                            <img src="/media/lock_b.svg" alt="lock" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;