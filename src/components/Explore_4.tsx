import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 상세페이지 이동을 위한 hook
import './Explore_4.css';

const Explore_4 = () => {
    const [selectedFilters, setSelectedFilters] = useState({
        GENRE: "All",
        YEAR: "2026",
        COUNTRY: "All",
        "SORT BY": "Latest"
    });

    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isEditingPage, setIsEditingPage] = useState(false); // 페이지 입력 모드 상태
    const [pageInput, setPageInput] = useState(""); // 입력값 상태
    const [displayMovies, setDisplayMovies] = useState<any[]>([]);
    const totalPages = 1000;

    const filterOptions: { [key: string]: string[] } = {
        GENRE: ["All", "Sci-Fi", "Drama", "Action", "Documentary", "Romance", "Noir", "Arthouse", "Classic", "Independent", "Short Film"],
        YEAR: ["All", "2026", "2025", "2024", "2023", "2022", "2021", "2020", "2010s", "2000s", "Before 2000"],
        COUNTRY: ["All", "Korea", "USA", "UK", "Europe", "Asia", "ETC"],
        "SORT BY": ["-", "Latest", "Most viewed", "Rising"]
    };

    const updateMovies = () => {
        const movieImages = [
            { id: "hailmary", img: "/media/hailmary.png", title: "Project Hail Mary" },
            { id: "martian", img: "/media/martian.jpg", title: "The Martian" },
            { id: "interstellar", img: "/media/interstellar.jpg", title: "Interstellar" },
            { id: "gravity", img: "/media/gravity.jpg", title: "Gravity" },
            { id: "007", img: "/media/007.jpg", title: "007 Spectre" },
            { id: "budapest", img: "/media/budapest.jpg", title: "The Grand Budapest Hotel" },
            { id: "french", img: "/media/french_1.png", title: "The French Dispatch" },
            { id: "london", img: "/media/london.jpg", title: "Paddington" },
            { id: "escaperoom", img: "/media/escaperoom.jpg", title: "Escape Room" },
            { id: "tenet", img: "/media/tenet.jpg", title: "TENET" }
        ];
        
        const shuffleArray = (array: any[]) => {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        };

        const shuffledList = shuffleArray(movieImages).map((movie, i) => ({
            ...movie,
            key: `movie-${currentPage}-${i}-${Math.random()}`
        }));

        setDisplayMovies(shuffledList);
    };

    useEffect(() => {
        updateMovies();
    }, [selectedFilters, currentPage]);

    const handleSelectFilter = (category: string, option: string) => {
        setSelectedFilters(prev => ({ ...prev, [category]: option }));
        setActiveFilter(null);
    };

    // 1. 페이지 직접 입력 처리
    const handlePageSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const newPage = parseInt(pageInput);
            if (newPage >= 1 && newPage <= totalPages) {
                setCurrentPage(newPage);
            }
            setIsEditingPage(false);
        }
    };

    return (
        <section className="explore_grid_container">
            <div className="explore_inner_flex">
                <aside className="side_nav_section">
                    <div className="side_filter_container">
                        {Object.keys(filterOptions).map((category) => (
                            <div key={category} className="filter_group">
                                <span className="filter_label">{category}</span>
                                <div className="neu_input_box" onClick={() => setActiveFilter(activeFilter === category ? null : category)}>
                                    <span className="selected_value">
                                        {activeFilter === category ? "" : selectedFilters[category as keyof typeof selectedFilters]}
                                    </span>
                                    {activeFilter === category && (
                                        <ul className="neu_dropdown_list">
                                            {filterOptions[category].map(opt => (
                                                <li key={opt} onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleSelectFilter(category, opt);
                                                }}>{opt}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="ex4_pagination">
                        <div className="neu_pagination_bar">
                            <button className="arrow_btn" onClick={() => setCurrentPage(p => Math.max(1, p - 1))}>
                                <img src="/media/arrow_b.svg" className="ex4_left" alt="prev" />
                            </button>
                            <div className="page_indicator_box" onClick={() => { setIsEditingPage(true); setPageInput(String(currentPage)); }}>
                                <span className="txt_page">PAGE</span>
                                {isEditingPage ? (
                                    <input 
                                        type="number" 
                                        className="page_direct_input"
                                        value={pageInput}
                                        onChange={(e) => setPageInput(e.target.value)}
                                        onKeyDown={handlePageSubmit}
                                        onBlur={() => setIsEditingPage(false)}
                                        autoFocus
                                    />
                                ) : (
                                    <span className="txt_num">{String(currentPage).padStart(2, '0')}</span>
                                )}
                            </div>
                            <button className="arrow_btn" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}>
                                <img src="/media/arrow_b.svg" className="ex4_right" alt="next" />
                            </button>
                        </div>
                        <p className="total_page">TOTAL 1000 PAGES</p>
                    </div>
                </aside>

                <main className="movie_content_area">
                    <div className="masonry_layout">
                        {displayMovies.map((movie, idx) => (
                            /* 3. 영화 상세 페이지 링크 이동 */
                            <a href={`/movie/${movie.id}`} key={movie.key} 
                               className={`movie_item 
                               ${idx === 1 ? 'tall' : ''} 
                               ${idx === 9 ? 'wide' : ''}`}>
                                <img src={movie.img} alt={movie.title} />
                                <div className="movie_hover_overlay">
                                    <span className="movie_hover_title">{movie.title}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Explore_4;