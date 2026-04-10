import React from "react";
import './Explore_2.css';

const Explore_2 = () => {
    // 7번째는 빈 칸(흰색)으로 두기 위해 식별값을 넘깁니다.
    const gridItems = [1, 2, 3, 4, 5, 6, "empty", 7]; 

    return (
        <section className="explore_b_container">
            <div className="explore_inner">
                <div className="ex2_grid_container">
                    {gridItems.map((item, index) => (
                        <div 
                            key={index} 
                            className={`grid_item item_${index + 1} ${item === "empty" ? "empty_box" : ""}`}
                        >
                            {/* 1번째 조각 영문 타이틀 */}
                            {index === 0 && (
                                <p className="ex2_title_en">BEYOND<br />THE SPACE</p>
                            )}
                            
                            {/* 7번째 조각 한글 타이틀 */}
                            {item === "empty" && (
                                <p className="ex2_title_kr">가장 먼 곳에서 발견한<br />무한한 미학</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Explore_2;