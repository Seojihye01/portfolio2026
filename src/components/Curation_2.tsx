import React from "react";
import './Curation_2.css';

const Curation_2 = () => {

    return(
        <section className="curation_container">
            <div className="curation_inner">
                <p className="cu2_intro">
                    영화는 본질적으로 ‘시간의 흐름’이지만, 어떤 장면은 그 흐름을 정지하고 우리의 감각을 마비시킬 만큼 강력한 힘을 가진다. 
                    이 큐레이션은 영화라는 거대한 시공간 속에서 우리를 압도한 단 하나의 장면을 추출한다. <br />
                    서사의 흐름을 잠시 멈추고 찰나의 순간이 가진 시각적 완성도에 깊숙이 파고드는 기록이다.
                </p>
                <div className="cu2_set1">
                    <h3 className="cu2_title1">01 시각적 정점의 기록</h3>
                    <p className="cu2_sen1">
                        Dune의 거대함부터 Whiplash의 날카로운 긴장감까지<br />영화적 미학이 가장 밀도 있게 응축된 순간을 기록한다
                    </p>
                </div>
                <div className="cu2_set2">
                    <h3 className="cu2_title2">02 시간의 공간화</h3>
                    <p className="cu2_sen2">
                        순간의 장면 구도와 빛, 공간감을 마치 전시된 작품처럼<br /> 깊이 있게 관찰하는 경험을 제안한다
                    </p>
                </div>
                <div className="cu2_set3">
                    <h3 className="cu2_title3">03 경외감의 본질 탐구</h3>
                    <p className="cu2_sen3">
                        인간이 스크린 앞에서 느끼는 압도적인 경외감은 긴 서사가 아닌<br /> 
                        단 한 프레임의 강렬한 순간에서 시작된다 <br />
                        우리는 그 시작점이 되는 순간을 따라간다
                    </p>
                </div>
            </div>
        </section>
    )
};

export default Curation_2;