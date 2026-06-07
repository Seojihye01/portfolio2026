import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { fundingProjects } from "./FundingData";
import { motion, useInView } from "framer-motion";
import "./FundingEx_4.css";

const STATUS_OPTIONS = ["Dev", "Prod", "Post", "Ready"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const SEASONS = ["Spring", "Summer", "Autumn", "Winter"];
const YEARS = ["2024", "2025", "2026", "2027"];

const SlotText = ({ value, options, trigger, delayOffset = 0 }: { value: string; options: string[]; trigger: boolean; delayOffset?: number }) => {
  const [track, setTrack] = useState<string[]>([]);
  const ITEM_HEIGHT = 30;

  useEffect(() => {
    if (trigger) {
      // 20개의 랜덤 데이터를 섞어 애니메이션 과정을 길게 만듬
      const shuffled = [...Array(20)].map(() => options[Math.floor(Math.random() * options.length)]);
      setTrack([...shuffled, value.toUpperCase()]);
    }
  }, [trigger, value, options]);

  return (
    <div className="fex4_slot_text_window" data-theme="dark">
      <motion.div
        initial={{ y: 0 }}
        animate={trigger && track.length > 0 ? { y: -(track.length - 1) * ITEM_HEIGHT } : { y: 0 }}
        transition={{
          duration: 3.5 + Math.random(), // 랜덤 초 동안 돌아감
          ease: [0.16, 1, 0.3, 1], // 점진적 감속 효과
          delay: 0.7 + delayOffset, // 0.7초 지연 시작
        }}
      >
        {track.map((item, i) => (
          <div key={i} className="fex4_slot_unit">{item}</div>
        ))}
      </motion.div>
    </div>
  );
};

const FundingEx_4 = () => {
  const { id } = useParams<{ id: string }>();
  const project = fundingProjects.find((p) => p.id === Number(id));
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.4 });

  if (!project) return null;

  // 데이터 파싱
  const shootingParts = (project.shooting || "July 2025").split(" ");
  const targetParts = (project.releaseTarget || "Winter 2026").split(" ");

  return (
    <section className="fex4_container" ref={sectionRef}>
      <div className="fex4_inner">
        <div className="fex4_title_slot_window">
          <div className="fex4_title_display">{project.title.toUpperCase()}</div>
        </div>

        <div className="fex4_meta_board">
  {/* STATUS: 가장 먼저 멈춤 */}
  <div className="fex4_row">
    <span className="fex4_label">STATUS</span>
    <div className="fex4_right_content">
       <SlotText value={project.progressState} options={STATUS_OPTIONS} trigger={isInView} />
    </div>
  </div>

  {/* SHOOTING: 월이 먼저 멈추고 연도가 뒤따라 멈춤 */}
  <div className="fex4_row">
    <span className="fex4_label">SHOOTING</span>
    <div className="fex4_right_content">
      <SlotText value={shootingParts[0]} options={MONTHS} trigger={isInView} delayOffset={0.2} /> {/* 조금 늦게 시작 */}
      <SlotText value={shootingParts[1]} options={YEARS} trigger={isInView} delayOffset={0.3} /> {/* 더 늦게 시작 */}
    </div>
  </div>

  {/* RELEASE TARGET: 연도가 가장 마지막에 멈추도록 설정 */}
  <div className="fex4_row">
    <span className="fex4_label">RELEASE TARGET</span>
    <div className="fex4_right_content">
      <SlotText value={targetParts[0]} options={SEASONS} trigger={isInView} delayOffset={0.4} />
      <SlotText value={targetParts[1]} options={YEARS} trigger={isInView} delayOffset={0.6} /> {/* 가장 늦게 멈춤 */}
    </div>
  </div>
</div>
</div>
    </section>
  );
};

export default FundingEx_4;