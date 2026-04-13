import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { allMovies, type Movie } from "./MovieData"; 
import "./Moviemodal.css";

interface MovieModalProps {
    movie: Movie;
    onClose: () => void;
    onMovieClick: (nextMovie: Movie) => void;
}

const MovieModal = ({ movie, onClose, onMovieClick }: MovieModalProps) => {
    const navigate = useNavigate();
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [rating, setRating] = useState(0);
    const [isSaved, setIsSaved] = useState(false);
    const [activeTab, setActiveTab] = useState("related");
    const relatedMoviesData = allMovies.filter((m) => 
        movie.relatedMovies?.includes(Number(m.id))
    );
    useEffect(() => {
        setIsVideoPlaying(false);
        setRating(0);
        setIsSaved(false);
        setActiveTab("related");
        
        // 모달 데이터 변경 시 스크롤을 최상단으로 올립니다.
        const modalContent = document.querySelector(".modal_content");
        if (modalContent) modalContent.scrollTop = 0;
    }, [movie]); // movie가 바뀔 때마다 실행
    const handlePlayClick = () => {
    navigate(`/player/${movie.id}`); // 쿼리 스트링 or 파라미터를 사용
    onClose();
    };

    return (
        <div className="modal_backdrop" onClick={onClose}>
            <div 
            className="modal_bg_blur" 
            style={{ backgroundImage: `url(${movie.img})` }}
            ></div>
            <div className="modal_content custom_scrollbar" onClick={(e) => e.stopPropagation()}>
                <button className="modal_close_btn" onClick={onClose}>✕</button>

                <div className="modal_visual_area">
                    {isVideoPlaying ? (
                        <div className="video_frame">
                            <iframe 
                                src={`${movie.trailerUrl}?autoplay=1&mute=1&enablejsapi=1&origin=${window.location.origin}`} 
                                title={movie.title}
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                            ></iframe>
                            <button className="close_video_btn" onClick={() => setIsVideoPlaying(false)}>Close Trailer</button>
                        </div>
                    ) : (
                        <div className="modal_hero">
                            <img src={movie.img} alt={movie.title} onError={(e) => e.currentTarget.src='/media/fallback.jpg'} />
                            <div className="hero_overlay"></div>
                        </div>
                    )}
                </div>

                <div className="modal_body">
                    <div className="modal_header">
                        <div className="title_set">
                            <h2 className="modal_main_title">{movie.title}</h2>
                            <span className="age_badge">12</span>
                            <div className="star_rating">
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
                        </div>
                        <button className="share_btn">
                            <img src="/media/share.svg" alt="share" />
                        </button>
                    </div>

                    <div className="modal_meta_row">
                        <span className="meta_txt">{movie.rel}</span>
                        <span className="meta_txt">{movie.runtime}</span>
                        <div className="tech_icons">
                            <img src="/media/dolby.svg" alt="Dolby" className="dolby" />
                            <img src="/media/hd.svg" alt="4K" className="hd"/>
                            <img src="/media/sound.svg" alt="Atmos" className="sound" />
                        </div>
                    </div>

                    <div className="modal_actions">
                        <button className="btn_play" onClick={handlePlayClick}>PLAY</button>
                        <button 
                            className={`btn_save ${isSaved ? "active" : ""}`} 
                            onClick={() => setIsSaved(!isSaved)}
                        >
                            {isSaved ? "SAVED" : "SAVE"}
                        </button>
                    </div>

                    {/* 4. 좌측 정렬 및 레이아웃 수정 */}
                    <div className="modal_details">
                        <div className="detail_item">
                            <span className="label">Director</span>
                            <span className="val">{movie.direc}</span>
                        </div>
                        <div className="detail_item">
                            <span className="label">Actor</span>
                            <span className="val">{movie.actors?.join(", ")}</span>
                        </div>
                        <p className="synopsis_text">{movie.synopsis}</p>
                    </div>

                    <div className="related_section">
                        <div className="section_tab">
                            <span  
                                  className={`tab ${activeTab === "related" ? "active" : ""}`} 
                                  onClick={() => setActiveTab("related")}>Related Contents</span>
                            <span 
                                  className={`tab ${activeTab === "trailers" ? "active" : ""}`} 
                                  onClick={() => setActiveTab("trailers")}>Trailers & More</span>
                        </div>
                        <div className="related_grid">
                            {activeTab === "related" ? (
                                relatedMoviesData.map((rm) => (
                                    <div key={rm.id} className="related_card" onClick={() => onMovieClick(rm)}>
                                        <img src={rm.img} alt={rm.title} />
                                        <div className="card_overlay">
                                            <span className="card_title">{rm.title}</span>
                                        </div>
                                    </div>
                                ))
                        ) : (
                            <div className="trailer_list">
                                <div className="trailer_item">
                                    <video src="/media/Dune.mp4" controls controlsList="nodownload"
                                                onContextMenu={(e) => e.preventDefault()} poster={movie.img} />
                                    <span>Concept Trailer by Directory.M</span>
                                </div>
                                <div className="trailer_item">
                                    <iframe src={movie.trailerUrl} title="Official Trailer" />
                                    <span>Official Trailer provided Youtube</span>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;