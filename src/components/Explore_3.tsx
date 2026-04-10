import React, { useState } from "react";
import './Explore_3.css';

const Explore_3 = () => {
    // 시안에 맞춘 영화 데이터 구성
    const movies = [
        { title: "Project Hail Mary", director: "Phil Lord,\nChristopher Miller", year: "2026", img: "/media/hailmary.png" },
        { title: "Interstellar", director: "Christopher Nolan", year: "2014", img: "/media/interstellar2.jpg" },
        { title: "Gravity", director: "Alfonso Cuarón", year: "2013", img: "/media/gravity.jpg" },
        { title: "The Martian", director: "Ridley Scott", year: "2015", img: "/media/martian.jpg" }
    ];

    // 현재 선택된 영화 상태 (초기값: 첫 번째 영화)
    const [selectedMovie, setSelectedMovie] = useState(movies[1]);

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
                        {movies.map((movie) => (
                            <h2 
                                key={movie.title}
                                className={selectedMovie.title === movie.title ? "active" : ""}
                                onMouseEnter={() => setSelectedMovie(movie)}
                            >
                                {movie.title}
                            </h2>
                        ))}
                    </div>

                    {/* 중앙: 이미지 포스터 */}
                    <div className="ex3_image_wrap">
                        <img src={selectedMovie.img} alt={selectedMovie.title} key={selectedMovie.title} />
                    </div>

                    {/* 오른쪽: 상세 정보 */}
                    <div className="ex3_info">
                        <div className="ex3_director">{selectedMovie.director}</div>
                        <div className="ex3_release">{selectedMovie.year}</div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Explore_3;