import React, { useState } from "react";
import './Curation_7.css';

const Curation_7 = () => {

    const [isSaved, setIsSaved] = useState(false);
    const handleToggleSave = (e: React.MouseEvent) => {
        // 현재 상태가 true면 false로, false면 true로 바꿈 (토글)
        setIsSaved(!isSaved);
    };
    const movieList = [
        "DUNE", "GRAVITY", "BLADE RUNNER 2049", "INTERSTELLAR", 
        "CHILDREN OF MEN", "ARRIVAL", "MAD MAX : FURY ROAD", 
        "DUNKIRK", "1917", "WHIPLASH"
    ];

    return (
        <section className="curation_container">
            <div className="curation_inner">
                <div className="file_stack_container">
                    {[1, 2, 3].map((num) => (
                        <div 
                            key={num}
                            className={`file_page page_0${num}`}
                            /* 1번이 최상단(z-index: 10), 5번이 최하단(z-index: 6) */
                            style={{ zIndex: 11 - num }} 
                        >
                            {/* 우측 인덱스 탭 */}
                            <div className="index_tab">
                                <span className="index_label">CURATION &nbsp; 0{num}</span>
                            </div>

                            {/* 종이 내용 영역 */}
                            <div className="paper_inner">
                                <div className="header_row">
                                    <div className={`archive_btn ${isSaved ? "saved" : ""}`} 
                                        onMouseDown={handleToggleSave}>
                                        <span>Archive in Library</span>
                                        <div className="icon_img_wrap">
                                            <img 
                                                src={isSaved ? "/media/check.svg" : "/media/save.svg"} 
                                                alt={isSaved ? "checked" : "save"} 
                                                className="cta_icon"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="main_content">
                                    {num === 1 ? (
                                        <div className="c7_view">
                                            <div className="c7_issue">
                                                <p className="issue_no">ISSUE NO. 01</p>
                                                <h1 className="issue_title">INSIDE THE MOMENT</h1>
                                            </div>
                                            <ul className="movie_list">
                                                {movieList.map((m) => <li key={m}>{m}</li>)}
                                            </ul>
                                        </div>
                                    ) : (
                                        <div className="locked_view">
                                            <p className="locked_msg">
                                                CURATION &nbsp; 0{num} &nbsp; IS &nbsp; BEING &nbsp; PREPARED</p>
                                        </div>
                                    )}
                                </div>

                                <div className="cu7_curator">
                                    <div className="curator_tag">
                                        <span className="cu7_name">SEO JIHYE,</span>
                                        <span className="cu7_team_mem">Lead Curator at Directory.M</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Curation_7;