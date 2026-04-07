import React, { useState } from "react";
import './Curation_6.css';
import { allMovies, type Movie } from "./MovieData";


const Curation_6 = () => {

    const categoryMapping: Record<string, number> = {
        "Most Saved": 7,   // Mad Max: Fury Road
        "Most Clicked": 1,  // Dune
        "Most Played": 4   // Interstellar
    };

    // 2. 현재 선택된 카테고리 및 영화 상태 관리
    const [selectedCate, setSelectedCate] = useState("Most Saved");
    const currentMovie = allMovies.find(m => m.id === categoryMapping[selectedCate]) || allMovies[0];

    const handleNavigateToMovie = () => {
        console.log(`[Directory.M] ${currentMovie.title} 상세 큐레이션으로 이동합니다.`);
        // 실제 구현 시: navigate(`/curation/${currentMovie.id}`);
    };

    return (
        <section className="curation_container">
            <div className="curation_inner">
                <div className="cu6_header">
                    <h1 className="cu6_identity">ISSUE NO.01 &nbsp; INSIDE THE MOMENT &nbsp; BY &nbsp; DIRECTORY.M</h1>
                </div>

                <div className="cu6_cont">
                    <div className="cu6_main_row">
                        <div className="cu6_category">
                            {Object.keys(categoryMapping).map((name, index) => (
                                <div 
                                    key={name}
                                    className={`cate ${selectedCate === name ? "active" : ""}`}
                                    onClick={() => setSelectedCate(name)}>
                                    <p>{name}</p>
                                    <p className="cate_num">0{index + 1}</p>
                                </div>
                            ))}
                        </div>

                        <div className="cu6_movie_visual" key={currentMovie.id}>
                            <img src={currentMovie.img} alt={currentMovie.title} className="fade_in" />
                        </div>
                    </div>

                    <div className="cu6_movie_cta_row">
                        <div className="cu6_title_set" onClick={handleNavigateToMovie}>
                            <h3 className="cu6_m_title">{currentMovie.title}</h3>
                            <div className="arrow_group">
                                <img src="/media/arrow_btn.svg" alt="arrow" />
                                <img src="/media/arrow_btn.svg" alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cu6_title">
                    <h1 className="cu6_title_kr">선택이 만들어낸 시선의 기록</h1>
                    <h1 className="cu6_title_en">MONTHLY BRIEF</h1>
                </div>
            </div>
        </section>
    );
};

export default Curation_6;