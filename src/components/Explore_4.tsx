import React, { useState, useEffect, useRef, useCallback } from "react";
import { allMovies, type Movie } from "./MovieData"; // Movie 타입 추가
import './Explore_4.css';

// 1. Props 인터페이스 정의
interface ExploreProps {
    onMovieClick: (movie: Movie) => void;
}

const Explore_4 = ({ onMovieClick }: ExploreProps) => { // 2. props 받기
    const [selectedFilters, setSelectedFilters] = useState({
        GENRE: "All", YEAR: "2026", COUNTRY: "All", "SORT BY": "Latest"
    });

    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isEditingPage, setIsEditingPage] = useState(false);
    const [pageInput, setPageInput] = useState("");
    const [displayMovies, setDisplayMovies] = useState<any[]>([]);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isInsideContent, setIsInsideContent] = useState(false);

    const totalPages = 1000;
    const scrollTimeout = useRef<number | null>(null);
    const contentAreaRef = useRef<HTMLElement>(null);

    const getMoviesByPage = useCallback((page: number) => {
        const shuffled = [...allMovies]
            .sort(() => Math.random() - 0.5)
            .slice(0, 10);
        
        return shuffled.map((movie, i) => ({
            ...movie,
            key: `movie-${page}-${movie.id}-${i}-${Math.random()}`
        }));
    }, []);

    // 3. 영화 클릭 핸들러 추가
    const handleMovieClick = (e: React.MouseEvent, movie: Movie) => {
        e.preventDefault(); // 페이지 이동 방지
        onMovieClick(movie); // 모달 오픈
    };

    // ... (기존 useEffect 및 기타 함수들은 동일)

    const handlePageChange = useCallback((nextPage: number) => {
        if (nextPage < 1 || nextPage > totalPages || isTransitioning) return;
        setIsTransitioning(true);
        
        setTimeout(() => {
            setCurrentPage(nextPage);
            setDisplayMovies(getMoviesByPage(nextPage));
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 400);
    }, [isTransitioning, getMoviesByPage, totalPages]);

    const handleSelectFilter = (category: string, option: string) => {
        setSelectedFilters(prev => ({ ...prev, [category]: option }));
        setActiveFilter(null);
        handlePageChange(1);
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
    }, []);

    useEffect(() => {
        const area = contentAreaRef.current;
        const handleNativeWheel = (e: WheelEvent) => {
            if (!isInsideContent) return;
            e.preventDefault();
            if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
            scrollTimeout.current = window.setTimeout(() => {
                if (e.deltaY > 0) {
                    if (currentPage < totalPages) handlePageChange(currentPage + 1);
                } else {
                    if (currentPage > 1) handlePageChange(currentPage - 1);
                }
            }, 50);
        };

        window.addEventListener('mousemove', handleMouseMove);
        area?.addEventListener('wheel', handleNativeWheel, { passive: false });
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            area?.removeEventListener('wheel', handleNativeWheel);
        };
    }, [currentPage, handlePageChange, totalPages, isInsideContent, handleMouseMove]);

    useEffect(() => {
        setDisplayMovies(getMoviesByPage(1));
    }, [getMoviesByPage]);

    return (
        <section className="explore_grid_container">
            <div 
                className={`custom_cursor ${isInsideContent ? 'active' : ''}`}
                style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
            >
                <img src='/media/cursor_b.svg' alt="scroll" />
            </div>

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
                            <button className="arrow_btn" onClick={() => handlePageChange(currentPage - 1)}>
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
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                const newPage = parseInt(pageInput);
                                                if (newPage >= 1 && newPage <= totalPages) handlePageChange(newPage);
                                                setIsEditingPage(false);
                                            }
                                        }}
                                        onBlur={() => setIsEditingPage(false)}
                                        autoFocus
                                    />
                                ) : (
                                    <span className="txt_num">{String(currentPage).padStart(2, '0')}</span>
                                )}
                            </div>
                            <button className="arrow_btn" onClick={() => handlePageChange(currentPage + 1)}>
                                <img src="/media/arrow_b.svg" className="ex4_right" alt="next" />
                            </button>
                        </div>
                        <p className="total_page">TOTAL {totalPages} PAGES</p>
                    </div>
                </aside>

                <main 
                    ref={contentAreaRef}
                    className={`movie_content_area ${isTransitioning ? 'is_switching' : ''}`}
                    onMouseEnter={() => setIsInsideContent(true)}
                    onMouseLeave={() => setIsInsideContent(false)}
                    style={{ cursor: isInsideContent ? 'none' : 'default' }}
                >
                    <div className="masonry_layout">
                        {displayMovies.map((movie, idx) => (
                            <div // 4. a 태그 대신 div나 button을 사용하거나, href를 유지하려면 onClick에서 방지
                               key={movie.key} 
                               className={`movie_item 
                               ${idx % 10 === 1 ? 'tall' : ''} 
                               ${idx % 10 === 9 ? 'wide' : ''}`}
                               onClick={(e) => handleMovieClick(e, movie)} // 5. 클릭 연결
                               style={{ cursor: isInsideContent ? 'none' : 'pointer' }}
                            >
                                <img src={movie.img} alt={movie.title} />
                                <div className="movie_hover_overlay">
                                    <span className="movie_hover_title">{movie.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </section>
    );
};

const filterOptions: { [key: string]: string[] } = {
    GENRE: ["All", "Sci-Fi", "Drama", "Action", "Documentary", "Romance", "Noir", "Arthouse", "Classic", "Independent", "Short Film"],
    YEAR: ["All", "2026", "2025", "2024", "2023", "2022", "2021", "2020", "2010s", "2000s", "Before 2000"],
    COUNTRY: ["All", "Korea", "USA", "UK", "Europe", "Asia", "ETC"],
    "SORT BY": ["-", "Latest", "Most viewed", "Rising"]
};

export default Explore_4;