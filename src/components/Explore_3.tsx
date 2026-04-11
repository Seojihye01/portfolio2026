import React, { useState, useEffect } from "react";
import { allMovies } from "./MovieData"; // 중앙 데이터 임포트
import './Explore_3.css';

const Explore_3 = () => {
    // 1. 특정 영화 4개만 정확히 필터링
    const targetTitles = ["Project Hail Mary", "The Martian", "Interstellar", "Gravity"];
    
    const exploreMovies = allMovies.filter(movie => 
        targetTitles.includes(movie.title)
    );

    // 2. 현재 선택된 영화 상태
    const [selectedMovie, setSelectedMovie] = useState(exploreMovies[0]);

    
    const sortedMovies = [...exploreMovies].sort((a, b) => 
        targetTitles.indexOf(a.title) - targetTitles.indexOf(b.title)
    );

    // 컴포넌트 마운트 시 첫 번째 영화를 기본 선택 
    useEffect(() => {
        if (sortedMovies.length > 0) {
            setSelectedMovie(sortedMovies[0]);
        }
    }, []);

    if (sortedMovies.length === 0) return null;

    return (
        <section className="explore_b_container">
            <div className="ex3_video">
                <video autoPlay muted loop playsInline>
                    <source src="/media/ex_bg.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="explore_inner">
                <div className="ex3_cont">
                    
                    {/* 왼쪽: 타이틀 리스트 */}
                    <div className="ex3_title_list">
                        {sortedMovies.map((movie) => (
                            <h2 
                                key={movie.id}
                                className={selectedMovie?.id === movie.id ? "active" : ""}
                                onMouseEnter={() => setSelectedMovie(movie)}
                            >
                                {movie.title}
                            </h2>
                        ))}
                    </div>

                    {/* 중앙: 이미지 포스터 */}
                    <div className="ex3_image_wrap">
                        {selectedMovie && (
                            <img 
                                src={selectedMovie.img} 
                                alt={selectedMovie.title} 
                                key={selectedMovie.id} // 애니메이션 트리거
                            />
                        )}
                    </div>

                    {/* 오른쪽: 상세 정보 */}
                    <div className="ex3_info">
                        {selectedMovie && (
                            <>
                                <div className="ex3_director">
                                    {selectedMovie.direc}
                                </div>
                                <div className="ex3_release">{selectedMovie.rel}</div>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Explore_3;