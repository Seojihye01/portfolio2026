import React from "react";
import './Main_6.css';

const Main_6 = () => {
    return (
        <section className="main6_container">
            <div className="main6_inner">
                <div className="main6_header">
                    <h2>03 SUPPORT THE NEXT SCENE</h2>
                    <p>독립 영화의 다음 장면을 만드는 선택</p>
                </div>

                <div className="main6_viewfinder">
                    {/* 상단 태그 및 가이드 */}
                    <div className="vf_top">
                        <div className="left_up_tag">
                            <div className="rec_group">
                                <span className="rec_dot"></span>
                                <p className="rec_tag">REC</p>
                            </div> 
                            <p>16:9</p>
                            <p>T 2.1</p>
                        </div>
                        <div className="right_up_tag">
                            <p>WB 5600K</p>
                            <img src="/media/battery_b.svg" alt="battery" />
                        </div>
                    </div>
                    
                    {/* 메인 펀딩 카드 */}
                    <div className="cont_mid">
                        <img src="/media/glass.jpg" className="main6_bg" alt="movie background" />
                        <div className="mid_info_overlay">
                            <div className="mid_left">
                                <div className="graph_container">
                                    <div className="graph_bar">
                                        <div className="graph_fill" style={{ width: '70%' }}></div>
                                    </div>
                                    <span className="ratio">70%</span>
                                </div>
                                <p className="investment">₩12,417,500 raised</p>
                                <h3 className="d_day">20 days left</h3>
                            </div>

                            <div className="mid_right">
                                <div className="glass_box">
                                    <div className="box_title">
                                        <h2>겨울의 끝에서</h2>
                                        <p>Documentary</p>
                                    </div>
                                    <div className="box_cont">
                                        <p className="cont1">마지막 겨울을 기록하는 두 직장인의 밤.</p>
                                        <p className="cont2">짧은 대화와 침묵 속에서 일과 삶의 시간이<br />
                                           조용히 흐른다. 도시의 겨울이 끝나가는 ...
                                        </p>
                                    </div>
                                    <div className="box_direc">
                                        <p><span>Directed by</span> 서재윤</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 중앙 버튼 */}
                    <div className="main6_cta">
                        <button>
                            View All Funding Projects
                            <img src="/media/arrow_b.svg" alt="arrow" />
                        </button>
                    </div>
                    
                    {/* 중하단 태그 및 가이드 */}
                    <div className="vf_middle">
                        <p className="tag_up">AWB</p>
                    </div>

                    <div className="vf_bottom">
                        <div className="left_down_tag">
                            <p>FPS 30</p>
                            <p>AUTO ISO</p>
                            <p>00:20:26:02</p>
                        </div>
                        <div className="right_down_tag">
                            <p className="tag_degree">180°</p>
                            <div className="tag_2floor">
                                <p className="tag_down">RAW</p>
                            </div>
                        </div>
                    </div>

                    {/* 4개 모서리 가이드라인 */}
                    <div className="guide_corner left_up"></div>
                    <div className="guide_corner right_up"></div>
                    <div className="guide_corner left_down"></div>
                    <div className="guide_corner right_down"></div>
                </div>
            </div>
        </section>
    );
};

export default Main_6;