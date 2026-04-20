import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fundingProjects } from "./FundingData";
import "./Funding_5.css";

// 카운팅 애니메이션 훅
const useCountUp = (end: number, duration: number = 2000, startAnim: boolean, delay: number = 0) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 1. Node.js 환경 에러 방지 및 시작 조건 확인
    if (typeof window === "undefined" || !startAnim) return;

    let startTime: number | null = null;
    let animationFrameId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // easeOutQuart 공식: 마지막까지 쫀득하고 부드럽게 연결됨
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.round(easeProgress * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    // 2. 지연 실행 로직 (섹션 도달 후 약간의 리듬감을 위해 유지 가능)
    timeoutId = setTimeout(() => {
      animationFrameId = window.requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, startAnim, delay]);

  return count;
};

const Funding_5 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null); // 숫자를 감시하기 위한 별도의 Ref

  // 섹션 제목과 표는 상단 20%가 보이면 나타남
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // [핵심] 하단 통계 수치는 실제 숫자가 있는 영역이 화면의 50% 정도 보일 때 시작
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.5 });

  // isInView 대신 isStatsInView를 트리거로 사용
  const filmsFunded = useCountUp(32, 2000, isStatsInView, 200); 
  const festivalSelections = useCountUp(14, 2000, isStatsInView, 400);
  const completionRate = useCountUp(98, 2000, isStatsInView, 600);

  return (
    <section className="outcomes_section" ref={sectionRef}>
      <motion.h2 
        className="main_headline"
        initial={{ opacity: 0, y: 30 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        PROJECT OUTCOMES
      </motion.h2>

      <div className="table_container">
        <p className="table_sub">Funded by Directory.M</p>
        <table className="outcomes_table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Title</th>
              <th className="txt_right">Achievement Rate</th>
            </tr>
          </thead>
          <tbody>
            {fundingProjects.slice(0, 8).map((project) => (
              <tr key={project.id}>
                <td>{project.shooting.split(' ').pop()}</td>
                <td>{project.title}</td>
                <td className="txt_right">{project.achievedRate}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 감시 대상을 stats_container로 지정합니다 */}
      <div className="stats_container" ref={statsRef}>
        <div className="stat_item">
          <span className="stat_num">{filmsFunded}</span>
          <p className="stat_label">Films Funded</p>
        </div>
        <div className="stat_item">
          <span className="stat_num">{festivalSelections}</span>
          <p className="stat_label">Festival Selections</p>
        </div>
        <div className="stat_item">
          <span className="stat_num">{completionRate}%</span>
          <p className="stat_label">Completion Rate</p>
        </div>
      </div>
    </section>
  );
};

export default Funding_5;