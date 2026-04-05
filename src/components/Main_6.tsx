import React, { useState, useEffect, useRef } from "react";
import './Main_6.css';

const Main_6: React.FC = () => {

    // 1. 숫자를 관리할 state 선언
    const [totalFunded, setTotalFunded] = useState<number>(0);
    const [supporters, setSupporters] = useState<number>(0);
    const [hasAnimated, setHasAnimated] = useState<boolean>(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    // 2. 카운트업 함수 (목표값, 세터함수, 지속시간)
    const countUp = (target: number, setter: React.Dispatch<React.SetStateAction<number>>, duration: number) => {
        let start = 0;
        const increment = target / (duration / 10); // 10ms마다 증가할 양

        const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
                setter(target);
                clearInterval(counter);
            } else {
                setter(Math.floor(start));
            }
        }, 10);
    };

    // 3. 컴포넌트 마운트 시 실행
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    countUp(124500000, setTotalFunded, 2000);
                    countUp(5241, setSupporters, 1500);
                    setHasAnimated(true); // 한 번만 실행되도록 설정
                }
            },
            { threshold: 0.3 } // 섹션이 30% 이상 보일 때 시작
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <section className="main6_container" ref={sectionRef}>
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
                                <a href="/">
                                    <span className="rec_dot"></span>
                                    <p className="rec_tag">FUNDING</p>
                                </a>
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
                        <div className="mid_1">
                                <video autoPlay muted loop playsInline 
                                onContextMenu={(e) => e.preventDefault()}
                                className="mid1_video">
                                    <source src="/media/main6.mp4" type="video/mp4" />
                                        브라우저가 비디오를 지원하지 않습니다.
                                </video>
                                <div className="glass_overlay"></div>
                        </div>
                        <div className="mid_2">
                            <h3 className="total">TOTAL FUNDED</h3>
                            <p className="total_output">₩{totalFunded.toLocaleString()}+</p>
                        </div>
                         <div className="mid_3">
                            <h3 className="supporters">SUPPORTERS</h3>
                            <p className="sup_output">{supporters.toLocaleString()}+</p>
                        </div>
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