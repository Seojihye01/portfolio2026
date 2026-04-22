import React, { useState, useEffect } from "react";
import { allMovies, type Movie } from "./MovieData"; // 1. Movie 타입 추가
import './Explore_5.css';

// 2. Props 인터페이스 정의
interface ExploreProps {
    onMovieClick: (movie: Movie) => void;
}

const Explore_5 = ({ onMovieClick }: ExploreProps) => { // 3. props 받기
    const categoryData: { [key: string]: Movie[] } = {
        "TOP 5": [allMovies[15], allMovies[10], allMovies[3], allMovies[0], allMovies[8]], 
        "NEW": [allMovies[10], allMovies[0], allMovies[2], allMovies[5], allMovies[12]],
        "MY PICKS": [allMovies[13], allMovies[14], allMovies[11], allMovies[1], allMovies[16]],
        "WATCHING": [allMovies[1], allMovies[4], allMovies[12], allMovies[15], allMovies[6]],
    };

    const [activeTab, setActiveTab] = useState("TOP 5");
    const [currentMovies, setCurrentMovies] = useState<Movie[]>(categoryData["TOP 5"]);
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const now = new Date();
        const month = now.toLocaleString('en-US', { month: 'long' });
        const year = now.getFullYear();
        setCurrentDate(`${month}, ${year}`);
    }, []);

    const handleMouseEnter = (tab: string) => {
        setActiveTab(tab);
        setCurrentMovies(categoryData[tab]);
    };

    // 4. 클릭 핸들러 추가
    const handleMovieClick = (e: React.MouseEvent, movie: Movie) => {
        e.preventDefault(); // a 태그의 기본 이동 방지
        onMovieClick(movie); // 모달 오픈 함수 호출
    };

    return (
        <section className="ex5_container" data-theme="light">
            <div className="ex5_inner">
                <div className="ex5_grid_layout">
                    {currentMovies.map((movie, idx) => (
                        <div // 5. a 태그 대신 div로 변경 (또는 a태그 유지시 onClick 핸들러)
                            key={`${activeTab}-${movie.id}-${idx}`} 
                            className={`ex5_item item_${idx + 1}`}
                            onClick={(e) => handleMovieClick(e, movie)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={movie.img} alt={movie.title} />
                            <div className="ex5_overlay">
                                <span className="ex5_hover_title">{movie.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="ex5_content">
                    <p className="ex5_sub_title">DISCOVERY FOR YOU</p>
                    <nav className="ex5_tabs">
                        {Object.keys(categoryData).map((tab) => (
                            <h2 
                                key={tab}
                                className={activeTab === tab ? "active" : ""}
                                onMouseEnter={() => handleMouseEnter(tab)}
                            >
                                {tab}
                            </h2>
                        ))}
                    </nav>
                </div>

                <div className="ex5_date">
                    {currentDate}
                </div>
            </div>
        </section>
    );
};

export default Explore_5;