import React, { useState } from "react";
import './Curation_3.css';
import { allMovies, type Movie } from "./MovieData";
import MovieModal from "./Moviemodal"; 

const Curation_3 = () => {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const navMovies = allMovies.slice(0, 10);
    const renderMovies = navMovies.filter(m => m.id !== 1);

    const navigateMovie = (e: React.MouseEvent, direction: 'prev' | 'next') => {
        e.stopPropagation();
        if (!selectedMovie) return;
        
        const currentIndex = navMovies.findIndex(m => m.id === selectedMovie.id);
        let nextIndex = direction === 'prev' 
            ? (currentIndex - 1 + navMovies.length) % navMovies.length 
            : (currentIndex + 1) % navMovies.length;

        setSelectedMovie(navMovies[nextIndex]);
    };

    const handleMoreClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDetailOpen(true);
    };

    const MovieCard = ({ movie }: { movie: Movie }) => (
        <div className={movie.className} onClick={() => {
            setSelectedMovie(movie);
            setIsDetailOpen(false);
        }}>
            <img src={movie.img} alt={movie.title} />
            <div className="film">
                <h2 className="cu3_title">{movie.title}</h2>
                <div className="cu3_meta">
                    <p className="cu3_direc">{movie.direc}</p>
                    <p className="cu3_rel">Release : {movie.rel}</p>
                </div>
            </div>
        </div>
    );

    return (
        <section className="curation_container">
            <div className="curation_inner">
                <div className="cu3_sec1">{renderMovies.slice(0, 3).map(m => <MovieCard key={m.id} movie={m} />)}</div>
                <div className="cu3_sec2">{renderMovies.slice(3, 5).map(m => <MovieCard key={m.id} movie={m} />)}</div>
                <div className="cu3_sec3"><p className="cu3_key">INSIDE THE MOMENT</p></div>
                <div className="cu3_sec4">{renderMovies.slice(5, 8).map(m => <MovieCard key={m.id} movie={m} />)}</div>
                <div className="cu3_sec5">{renderMovies.slice(8, 9).map(m => <MovieCard key={m.id} movie={m} />)}</div>

                {/* 단계 1: 프리뷰 모달 (상세 모달이 열리면 pointer-events를 꺼서 간섭 방지) */}
                {selectedMovie && (
                    <div className="movie_modal" style={{ 
                        zIndex: 100, 
                        opacity: isDetailOpen ? 0 : 1, // 상세 모달 열리면 프리뷰는 숨김
                        pointerEvents: isDetailOpen ? 'none' : 'auto' 
                    }}>
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
                                    {selectedMovie.keywords.map(kw => <p key={kw}>{kw}</p>)}
                                </div>
                            </div>

                            <div className="m_video_preview">
                                <img src={selectedMovie.img} alt="preview" />
                                <div className="m_control_bar">
                                    <div className="m_arrow">
                                        <img src="/media/arrow_b.svg" className="m_left" onClick={(e) => navigateMovie(e, 'prev')} alt="prev" />
                                        <img src="/media/arrow_b.svg" className="m_right" onClick={(e) => navigateMovie(e, 'next')} alt="next" />
                                    </div>
                                    <button className="m_more_btn" onClick={handleMoreClick}>MORE</button>
                                    <span className="m_cancel" onClick={() => {
                                        setSelectedMovie(null);
                                        setIsDetailOpen(false);
                                    }}>✕</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 단계 2: 공통 상세 모달 (최상단 배치) */}
                {isDetailOpen && selectedMovie && (
                    <div className="detail_modal_wrapper" style={{ zIndex: 99999 }}>
                        <MovieModal 
                            movie={selectedMovie} 
                            onClose={() => setIsDetailOpen(false)} 
                            onMovieClick={(next) => setSelectedMovie(next)}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Curation_3;