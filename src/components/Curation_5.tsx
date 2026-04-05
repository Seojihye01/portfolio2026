import React from "react";
import './Curation_5.css';

const Curation_5 = () => {

    return (
        <section className="curation_container">
            <div className="curation_inner">
                <h1 className="cu5_title">Denis Villeneuve</h1>
                <div className="cu5_cont">
                    <img src="/media/dune1.png" />
                    <div className="cu5_text">
                        <p className="text_en">"I’ve always been fascinated by the relationship between human beings and their environment." 
        <br /><br />
        Villeneuve creates a sensory experience that transcends the screen, capturing the silence of the desert and the weight of destiny through a minimalist yet overwhelming visual language.
                        </p>
                        <p className="text_kr">"저는 항상 인간의 본질과 그들을 둘러싼 거대한 환경 사이의 관계를 탐구합니다." 
        <br /><br />
        드니스 빌뇌브 감독은 스크린을 넘어선 감각적 경험을 선사하여 절제된 비주얼과 압도적인 미장센을 통해 사막의 고요함 속에 숨겨진 운명의 무게를 시각화합니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Curation_5;