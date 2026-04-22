import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fundingProjects, type FundingProject } from "./FundingData";
import { motion, AnimatePresence } from "framer-motion";
import "./FundingEx_4.css";

const FundingEx_4 = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<FundingProject | null>(null);
  
  const [displayImg, setDisplayImg] = useState<string>("");
  const [isShuffling, setIsShuffling] = useState(false);

  const allImages = fundingProjects.flatMap((p) => p.images || [p.image]);

  useEffect(() => {
    const found = fundingProjects.find((p) => p.id === Number(id));
    if (found) {
      setProject(found);
      setDisplayImg(found.image);
    }
  }, [id]);

  useEffect(() => {
    if (!project) return;

    let shuffleInterval: ReturnType<typeof setInterval>;
    let cycleTimeout: ReturnType<typeof setTimeout>;

    const startRandomShuffle = () => {
      setIsShuffling(true);
      let count = 0;
      const maxShuffles = 15;

      shuffleInterval = setInterval(() => {
        const randomIdx = Math.floor(Math.random() * allImages.length);
        setDisplayImg(allImages[randomIdx]);
        
        count++;

        if (count >= maxShuffles) {
          clearInterval(shuffleInterval);
          setDisplayImg(project.image); 
          setIsShuffling(false);
          
          cycleTimeout = setTimeout(startRandomShuffle, 2000);
        }
      }, 100);
    };

    startRandomShuffle();

    return () => {
      clearInterval(shuffleInterval);
      clearTimeout(cycleTimeout);
    };
  }, [project, allImages]);

  if (!project) return null;

  return (
    <section className="fex4_container">
      <div className="fex4_inner">
        {/* 1. 타이틀 데이터 연동 */}
        <h1 className="fex4_title">{project.title.toUpperCase()}</h1>
        
        <div className="fex4_slot_window">
          <AnimatePresence mode="wait">
            <motion.img
              key={displayImg}
              src={displayImg}
              alt="shuffling"
              className="fex4_slot_img"
              initial={{ opacity: 0.8, scale: 1.1, filter: "blur(5px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0.8, filter: "blur(5px)" }}
              transition={{ duration: 0.1 }}
            />
          </AnimatePresence>
          {isShuffling && <div className="fex4_shuffle_overlay" />}
        </div>

        {/* 2. 메타 정보 영역: 양 끝 정렬 반영 */}
        <div className="fex4_meta_grid">
          <div className="fex4_row">
            <span className="fex4_label">Status</span>
            <span className="fex4_value">{project.progressState}-production</span>
          </div>
          
          <div className="fex4_row">
            <span className="fex4_label">Shooting</span>
            <span className="fex4_value">{project.shooting}</span>
          </div>

          <div className="fex4_row">
            <span className="fex4_label">Release Target</span>
            <span className="fex4_value">{project.releaseTarget}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingEx_4;