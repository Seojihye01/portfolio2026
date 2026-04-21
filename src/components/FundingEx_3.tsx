import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { fundingProjects, type FundingProject } from "./FundingData";
import { motion, AnimatePresence } from "framer-motion";
import "./FundingEx_3.css";

const FundingEx_3 = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<FundingProject | null>(null);
  const [step, setStep] = useState(0); 
  const [isInside, setIsInside] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRef = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const found = fundingProjects.find((p) => p.id === Number(id));
    if (found) setProject(found);
  }, [id]);

  useEffect(() => {
    const handleGlobalWheel = (e: WheelEvent) => {
      if (!isInside || !sectionRef.current) return;
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      if (stepRef.current === 6 && scrollingDown) return; 
      if (stepRef.current === 0 && scrollingUp) return;

      e.preventDefault();
      sectionRef.current.scrollIntoView({ behavior: "auto", block: "center" });

      if (isAnimating.current) return;

      if (scrollingDown && stepRef.current < 6) {
        updateStep(stepRef.current + 1);
      } else if (scrollingUp && stepRef.current > 0) {
        updateStep(stepRef.current - 1);
      }
    };

    window.addEventListener("wheel", handleGlobalWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleGlobalWheel);
  }, [isInside]);

  const updateStep = (next: number) => {
    isAnimating.current = true;
    setStep(next);
    stepRef.current = next;
    setTimeout(() => { isAnimating.current = false; }, 800);
  };

  if (!project) return null;

  // 슬라이더 이동 값: 카드 너비(550px) + 간격(40px) = 590px 기준 이동
  const getSliderX = () => {
    if (step < 2) return "100%"; 
    return `calc(${(step - 2) * -590}px)`; 
  };

  return (
    <section
      ref={sectionRef}
      className={`fex3_section step_${step}`}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
    >
      <div className="fex3_viewport">
        
        {/* Step 0: Synopsis - 완전 중앙 정렬 */}
        <AnimatePresence>
          {step === 0 && (
            <motion.div
              className="fex3_synopsis_container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="fex3_synopsis">{project.synopsis}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 좌측 구역: 태그가 중앙(Step 1)에서 좌측(Step 2~)으로 이동 */}
        <div className="fex3_side_boundary">
          <motion.div
            className={`fex3_tag_wrapper ${step >= 2 ? "side_mode" : "center_mode"}`}
            animate={{
              // viewport 기준 중앙에서 본인 구역(side_boundary)의 좌측 끝으로 이동
              x: step >= 2 ? 0 : "35vw", 
              opacity: step === 0 ? 0 : 1,
            }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            <ul className="fex3_tag_list">
              {project.moodTag.map((tag, i) => (
                <motion.li key={i} layout>{tag}</motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 우측 구역: 이미지가 잘리지 않도록 overflow hidden 처리 */}
        <div className="fex3_slider_boundary">
          <motion.div
            className="fex3_track"
            animate={{ x: getSliderX() }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          >
            {/* project.images 배열을 순회 (5장의 다른 이미지) */}
            {project.images?.map((imgSrc, idx) => (
              <div className="fex3_card" key={idx}>
                <img src={imgSrc} alt={`frame-${idx}`} />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FundingEx_3;