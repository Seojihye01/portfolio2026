import React, { useState } from "react";
import './Curation_3.css';
import { allMovies, type Movie } from "./MovieData"; // 데이터 임포트

const Curation_3 = () => {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    // [로직] 전체 데이터를 순회하는 함수
    const navigateMovie = (direction: 'prev' | 'next') => {
        if (!selectedMovie) return;
        
        const currentIndex = allMovies.findIndex(m => m.id === selectedMovie.id);
        let nextIndex;

        if (direction === 'prev') {
            nextIndex = (currentIndex - 1 + allMovies.length) % allMovies.length;
        } else {
            nextIndex = (currentIndex + 1) % allMovies.length;
        }

        setSelectedMovie(allMovies[nextIndex]);
    };

    // [필터링] Curation_3 섹션에만 노출할 영화 
    const displayMovies = allMovies.filter(m => m.id !== 1);

    const MovieCard = ({ movie }: { movie: Movie }) => (
        <div className={movie.className} onClick={() => setSelectedMovie(movie)}>
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
                <div className="cu3_sec1">
                    {displayMovies.slice(0, 3).map(m => <MovieCard key={m.id} movie={m} />)}
                </div>
                <div className="cu3_sec2">
                    {displayMovies.slice(3, 5).map(m => <MovieCard key={m.id} movie={m} />)}
                </div>
                <div className="cu3_sec3">
                    <p className="cu3_key">INSIDE THE MOMENT</p>
                </div>
                <div className="cu3_sec4">
                    {displayMovies.slice(5, 8).map(m => <MovieCard key={m.id} movie={m} />)}
                </div>
                <div className="cu3_sec5">
                    {displayMovies.slice(8, 9).map(m => <MovieCard key={m.id} movie={m} />)}
                </div>

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
                                    {selectedMovie.keywords.map(kw => <p key={kw}>{kw}</p>)}
                                </div>
                            </div>

                            <div className="m_video_preview">
                                <img src={selectedMovie.img} alt="preview" />
                                <div className="m_play_bar">
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

export default Curation_3;