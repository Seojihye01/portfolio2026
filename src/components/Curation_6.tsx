import React from "react";
import './Curation_6.css';

const Curation_6 = () => {

    return (
        <section className="curation_container">
            <div className="curation_inner">
                <div className="cu6_header">
                    <h1 className="cu6_identity">ISSUE NO.01   INSIDE THE MOMENT   BY   DIRECTORY.M</h1>
                </div>
                <div className="cu6_cont">
                    <div className="cu6_category">
                        <div className="cate_1">
                            <p>Most Saved</p>
                            <p className="cate_num">01</p>
                        </div>
                        <div className="cate_2">
                            <p>Most Clicked</p>
                            <p className="cate_num">02</p>
                        </div>
                        <div className="cate_3">
                            <p>Most Played</p>
                            <p className="cate_num">03</p>
                        </div>
                    </div>
                    <div className="cu6_movie">
                        <img src="/media/dune1.png" />
                        <div className="cu6_title_set">
                            <h3 className="cu6_m_title"></h3>
                            <img src="/media/arrow_btn.svg" />
                            <img src="/media/arrow_btn.svg" />
                        </div>
                    </div>
                </div>
                <div className="cu6_title">
                    <h1 className="cu6_title_kr">선택이 만들어낸 시선의 기록</h1>
                    <h1 className="cu6_title_en">MONTHLY BRIEF</h1>
                </div>
                <div className="cu6_save">
                    <p>Move to Library</p>
                </div>
            </div>
        </section>
    );
};

export default Curation_6;