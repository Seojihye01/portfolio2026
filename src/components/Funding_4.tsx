import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Funding_4.css';

const TAB_DATA = [
  { id: 0, label: "Start", en: "Independent Films Need Backing", kr: "독립영화는 상업 시스템 밖에서 만들어진다.\n후원은 제작의 시작점이다." },
  { id: 1, label: "Participation", en: "You Become Part of the Process", kr: "후원은 관람이 아니라 참여다.\n완성 이전의 영화에 개입하는 방식이다." },
  { id: 2, label: "Selection", en: "Not All Projects Are the Same", kr: "우리는 검증된 프로젝트만 선별한다.\n후원은 선택된 영화에만 연결된다." },
  { id: 3, label: "Result", en: "Support Leads to Screen", kr: "후원은 실제 영화로 이어진다.\n완성된 작품은 이 페이지의 결과가 된다." }
];

const GRID_LETTERS = [
  ['W', 'H', 'Y', 'A', 'E'],
  ['F', 'Q', 'D', 'M', 'Z'],
  ['C', 'W', 'E', 'S', 'U'],
  ['O', 'G', 'N', 'E', 'K'],
  ['A', 'F', 'U', 'N', 'D']
];

const TARGET_COORDS = [
  { r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }, 
  { r: 2, c: 1 }, { r: 2, c: 2 },                 
  { r: 4, c: 1 }, { r: 4, c: 2 }, { r: 4, c: 3 }, { r: 4, c: 4 } 
];

const Funding_4 = () => {
  const [index, setIndex] = useState(-3);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  
  const isAnimating = useRef(false);
  const indexRef = useRef(-3);

  useEffect(() => {
    const handleGlobalWheel = (e: WheelEvent) => {
      if (!isInside) return;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // [핵심] 섹션 내부 애니메이션이 끝났거나 시작 전일 때 부모 스크롤 허용
      if (indexRef.current === -3 && scrollingUp) return;
      if (indexRef.current === 4 && scrollingDown) return;

      // 내부 애니메이션 진행 중에는 브라우저 기본 스크롤 막기
      e.preventDefault();
      
      if (isAnimating.current) return;
      isAnimating.current = true;

      setIndex(prev => {
        let next: number;
        if (scrollingDown) {
          if (prev === -1) next = -0.5;
          else if (prev === -0.5) next = 0;
          else if (prev >= 4) next = 4;
          else next = prev + 1;
        } else {
          if (prev === 0) next = -0.5;
          else if (prev === -0.5) next = -1;
          else if (prev <= -3) next = -3;
          else next = prev - 1;
        }
        indexRef.current = next;
        return next;
      });

      setTimeout(() => { isAnimating.current = false; }, 600); // 속도감 있게 조정
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('wheel', handleGlobalWheel, { passive: false });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('wheel', handleGlobalWheel);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isInside]);

  const isPointTarget = (r: number, c: number) => 
    TARGET_COORDS.some(coord => coord.r === r && coord.c === c);

  return (
    <section 
      className="funding_section funding_full_page" 
      onMouseEnter={() => setIsInside(true)} 
      onMouseLeave={() => setIsInside(false)}
    >
      <div className={`custom_cursor_wrapper ${isInside ? 'active' : ''}`} style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}>
        <div className="custom_cursor_visual"><img src='/media/cursor_b.svg' alt="scroll" /></div>
      </div>

      <div className="funding_container">
        <AnimatePresence mode="wait">
          {/* 그리드 레이어 */}
          {index < -0.5 && (
            <motion.div 
              key="grid-layer"
              className="fu4_inner_content" // absolute를 제거한 새 클래스
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid_wrapper">
                {GRID_LETTERS.map((row, r) => (
                  <div key={r} className="grid_row">
                    {row.map((char, c) => {
                      const target = isPointTarget(r, c);
                      return (
                        <motion.span
                          key={`${r}-${c}`}
                          className={`grid_char ${target ? 'target' : ''}`}
                          animate={{
                            opacity: index === -3 ? 1 : (target ? 1 : (index === -2 ? 0.2 : 0)),
                            y: index === -1 && target ? (2 - r) * 110 : 0,
                          }}
                          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 메인 콘텐츠 단계: Funding_3와 유사한 상하 구조 */}
          {index >= 0 && (
            <motion.div 
              key="main-content"
              className="fu4_content_step main_flow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="static_title">WHY WE FUND</h2>

              <AnimatePresence mode="wait">
                {index >= 1 && (
                  <motion.div 
                    className="fu4_bottom_tab"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                  >
                    <div className="tab_left">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={index}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                        >
                          <p className="tab_en">{TAB_DATA[index - 1]?.en}</p>
                          <h3 className="tab_kr">
                            {TAB_DATA[index - 1]?.kr.split('\n').map((line, i) => (
                              <span key={i}>{line}<br /></span>
                            ))}
                          </h3>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="tab_right">
                      <div className="nav_list">
                        {TAB_DATA.map((item) => (
                          <div key={item.id} className="list_item">
                            <span className={`list_label ${index - 1 === item.id ? 'active' : ''}`}>
                              {item.label}
                            </span>
                            <div className={`indicator_line ${index - 1 === item.id ? 'active' : ''}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Funding_4;