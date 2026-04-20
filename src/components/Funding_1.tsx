import React, { useState, useEffect, useMemo, useRef } from 'react';
import './Funding_1.css';

const JOBS = [
  "cinematographer", "makeup artist", "photographer director", "costume designer",
  "sound engineer", "editor", "choreographer", "film critic", "actress", "producer",
  "sfx", "stroyboard artist", "gaffer", "screen writer", "production designer",
  "lighting technician", "assistant director", "script supervisor", "location manager",
  "foley artist", "colourist", "music supervisor", "Line Producer", "Key Grip", 
  "Script Supervisor", "unit publicist", "set decorator", "Armorer", "greenman",
  "concept artist", "dit", "animal wrangler", "director", "investor"
];

const Funding_1 = () => {

  const [progress, setProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. 가로로 더 넓게 흩어지도록 배치
  const jobPositions = useMemo(() => {
    return JOBS.map((job, idx) => {
    // 1. 글자들을 3그룹으로 나눔 (안쪽, 중간, 바깥쪽 레일)
    const layer = idx % 3; 
    const radiusX = [300, 500, 800][layer]; // 가로 반지름 (가로로 길게)
    const radiusY = [150, 250, 350][layer]; // 세로 반지름 (좁게)

    // 2. 각 레이어 안에서 글자들을 고르게 분산시키되 약간의 랜덤값 추가
    const angle = (idx / (JOBS.length / 3)) * Math.PI * 2 + (Math.random() * 0.5);

    return {
      initialX: Math.cos(angle) * radiusX + (Math.random() - 0.5) * 100,
      initialY: Math.sin(angle) * radiusY + (Math.random() - 0.5) * 50,
    };
  });
}, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // 프로그레스가 0~100 사이일 때만 브라우저 스크롤 방지
      if (progress >= 0 && progress < 100) {
        if (e.cancelable) e.preventDefault();
      }

      const sensitivity = 0.08;
      setProgress((prev) => {
        const next = prev + e.deltaY * sensitivity;
        return Math.min(Math.max(next, 0), 100);
      });
    };

    const target = containerRef.current;
    if (target) {
      target.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (target) target.removeEventListener('wheel', handleWheel);
    };
  }, [progress]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  };

  // 2. 확대 지연 계산 (0~30까지는 가만히 있다가 그 이후부터 커짐)
  const getScaleProgress = () => {
    const threshold = 30; // 30% 지점부터 확대 시작
    if (progress < threshold) return 0;
    return (progress - threshold) / (100 - threshold);
  };

  const scaleProgress = getScaleProgress();

  return (
    <section className="supporter_section" ref={containerRef} onMouseMove={handleMouseMove}>
      <div className="interaction_wrapper">
        {JOBS.map((job, idx) => {
          const pos = jobPositions[idx];
          
          // 드래그(스크롤) 시 흩어짐 (이건 처음부터 서서히 발생)
          let tx = pos.initialX * (1 + progress * 0.03);
          let ty = pos.initialY * (1 + progress * 0.03);

          const dx = tx - mousePos.x;
          const dy = ty - mousePos.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const push = dist < 150 ? (150 - dist) * 0.6 : 0;
          
          tx += (dx / (dist || 1)) * push;
          ty += (dy / (dist || 1)) * push;

          return (
            <span
              key={idx}
              className="job_tag"
              style={{
                transform: `translate(${tx}px, ${ty}px)`,
                // 글씨는 드래그 초반부터 서서히 투명해지기 시작
                opacity: 1 - progress / 90,
                transition: 'transform 0.4s ease-out'
              }}
            >
              {job}
            </span>
          );
        })}

        <h1 
          className="center_supporter"
          style={{
            // 지연된 scaleProgress 적용
            transform: `scale(${1 + scaleProgress * 8})`,
            fontWeight: 300 + Math.floor(scaleProgress * 500),
            letterSpacing: `${scaleProgress * 10}%`,
          }}
        >
          SUPPORTER
        </h1>
      </div>
    </section>
  );
};

export default Funding_1;