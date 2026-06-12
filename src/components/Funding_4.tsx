import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Funding_4.css';

const TAB_DATA = [
  { id: 0, label: "Start", en: "Where Independent Films Begin", kr: "독립영화는 상업 시스템 밖에서 만들어진다.\n후원은 제작의 동력을 확보하는 첫 번째 기틀을 마련한다." },
  { id: 1, label: "Participation", en: "You Become Part of the Process", kr: "단순히 완성된 결과물을 소비하는 관람의 형태를 넘어선다.\n영화가 만들어지는 스크린 뒤편의 과정에 관객이 직접 참여하고 연결되는 방식이다." },
  { id: 2, label: "Selection", en: "Focusing on Meaningful Stories", kr: "무분별한 나열 대신 검증된 프로젝트만 엄선한다.\n작품이 가진 가치와 미장센의 깊이, 그리고 데이터 투명성이 검증된 서사에만 가치를 연결한다." },
  { id: 3, label: "Result", en: "Bringing Frames to the Screen", kr: "후원자들의 지지는 스크린 위 하나의 프레임으로 실현된다.\n완성된 작품은 이 페이지의 결과가 된다." }
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
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isInside && index === -3) {
      isAnimating.current = true;
      const introDelay = 1300; 
      setTimeout(() => {
        isAnimating.current = false;
      }, introDelay);
    }
  }, [isInside]);

  useEffect(() => {
    // 휠과 터치 조작이 공유하는 단일 인덱스 변경 제어 타워
    const changeStepFlow = (scrollingDown: boolean) => {
      setIndex(prev => {
        let next: number;
        if (scrollingDown) {
          if (prev >= 4) next = 4;
          else next = prev + 1;
        } else {
          if (prev <= -3) next = -3;
          else next = prev - 1;
        }
        indexRef.current = next;
        return next;
      });

      const isLastDown = indexRef.current === 4 && scrollingDown;
      // 다음 섹션으로 완전히 넘어가기 전, 애니메이션을 감상할 충분한 딜레이(800ms) 확보
      const delayTime = isLastDown ? 800 : 600;

      setTimeout(() => { 
        if (isLastDown) {
          setIsInside(false);
          setTimeout(() => {
            const nextSection = sectionRef.current?.nextElementSibling || document.getElementById('funding_5_section');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            isAnimating.current = false;
          }, 100);
        } else {
          isAnimating.current = false;
        }
      }, delayTime);
    };

    // 데스크톱 마우스 휠 리스너
    const handleGlobalWheel = (e: WheelEvent) => {
      if (!isInside || !sectionRef.current) return;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      if (indexRef.current === -3 && scrollingUp) {
        setIsInside(false);
        return;
      }

      if (indexRef.current === 4 && scrollingDown) {
        if (!isAnimating.current) {
          setIsInside(false);
          return;
        }
      }

      if (
        (scrollingDown && indexRef.current < 4) || 
        (scrollingUp && indexRef.current > -3)
      ) {
        e.preventDefault();
        sectionRef.current.scrollIntoView({ behavior: 'auto', block: 'center' });
      } else {
        if (isAnimating.current) e.preventDefault();
        return;
      }

      if (isAnimating.current) return;
      isAnimating.current = true;

      changeStepFlow(scrollingDown);
    };

    // 모바일 터치(스와이프) 리스너 구역
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (!isInside) return;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isInside || !sectionRef.current) return;

      const touchEndY = e.touches[0].clientY;
      const diffY = touchStartY - touchEndY;

      // 터치 민감도 조절 (최소 40px 이상 명확히 쓸어 넘겼을 때만 판정)
      if (Math.abs(diffY) < 40) return;

      const scrollingDown = diffY > 0; // 아래에서 위로 스와이프 (다운)
      const scrollingUp = diffY < 0;   // 위에서 아래로 스와이프 (업)

      if (indexRef.current === -3 && scrollingUp) {
        setIsInside(false);
        return;
      }

      if (indexRef.current === 4 && scrollingDown) {
        if (!isAnimating.current) {
          setIsInside(false);
          return;
        }
      }

      if (
        (scrollingDown && indexRef.current < 4) || 
        (scrollingUp && indexRef.current > -3)
      ) {
        if (e.cancelable) e.preventDefault();
        sectionRef.current.scrollIntoView({ behavior: 'auto', block: 'center' });
      } else {
        return;
      }

      if (isAnimating.current) return;
      isAnimating.current = true;

      changeStepFlow(scrollingDown);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('wheel', handleGlobalWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('wheel', handleGlobalWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isInside]);

  const isPointTarget = (r: number, c: number) => 
    TARGET_COORDS.some(coord => coord.r === r && coord.c === c);

  // 탭 리스트 클릭 시 인덱스 매칭 싱크 처리
  const handleTabClick = (tabId: number) => {
    if (isAnimating.current) return;
    setIndex(tabId);
    indexRef.current = tabId;
  };

  return (
    <section ref={sectionRef} data-theme="light" id="funding_4_section"
      className="funding_section funding_full_page" 
      onMouseEnter={() => setIsInside(true)} 
      onMouseLeave={() => setIsInside(false)}
    >
      <div className={`custom_cursor_wrapper ${isInside ? 'active' : ''}`} style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}>
        <div className="custom_cursor_visual"><img src='/media/cursor_b.svg' alt="scroll" /></div>
      </div>

      <div className="funding_container">
        <AnimatePresence mode="wait">
          {index < 0 && (
            <motion.div 
              key="grid-layer"
              className="fu4_inner_content" 
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
                            // 소수점을 제외한 완결형 정수 조건식 적용
                            opacity: index === -3 ? 1 : (target ? 1 : (index === -2 ? 0.2 : 0)),
                            y: index === -1 && target ? (2 - r) * (window.innerWidth < 768 ? 60 : 110) : 0,
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

          {index >= 0 && (
            <motion.div 
              key="main-content"
              className="fu4_content_step main_flow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="static_title">WHY WE FUND</h2>

              <AnimatePresence mode="wait">
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
                        <p className="tab_en">{TAB_DATA[index]?.en}</p>
                        <h3 className="tab_kr">
                          {TAB_DATA[index]?.kr.split('\n').map((line, i) => (
                            <span key={i}>{line}<br /></span>
                          ))}
                        </h3>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="tab_right">
                    <div className="nav_list">
                      {TAB_DATA.map((item) => (
                        <div key={item.id} className="list_item" onClick={() => handleTabClick(item.id)}>
                          <span className={`list_label ${index === item.id ? 'active' : ''}`}>
                            {item.label}
                          </span>
                          <div className={`indicator_line ${index === item.id ? 'active' : ''}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Funding_4;