import React, { useState, useEffect, useRef } from 'react';
import './Main_5.css';

const movieData = [
  { id: '01', genre: 'FANTASY', title: 'TRASHHHH', year: 2025, director: 'Denis Nolan', img: '/media/dune1.png' },
  { id: '02', genre: 'ROMANCE', title: 'LOVELY DAY', year: 2024, director: 'Jane Doe', img: '/media/glass.jpg' },
  { id: '03', genre: 'SCI-FI', title: 'INTERSTELLAR', year: 2014, director: 'Christopher Nolan', img: '/media/dune1.png' },
  { id: '04', genre: 'NOIR', title: 'NIGHT CITY', year: 2023, director: 'Sam Smith', img: '/media/glass.jpg' },
  { id: '05', genre: 'ARTHOUSE', title: 'SILENCE', year: 2022, director: 'Lee Young', img: '/media/dune1.png' },
];

const Main_5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isInsideContent, setIsInsideContent] = useState(false); // content 영역 진입 상태
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const handleGlobalWheel = (e: WheelEvent) => {
      // 마우스가 실제 콘텐츠 영역(isInsideContent)에 있을 때만 스크롤 가로채기
      if (!isInsideContent) return;

      const isFirst = activeIndexRef.current === 0;
      const isLast = activeIndexRef.current === movieData.length - 1;
      const scrollingUp = e.deltaY < 0;
      const scrollingDown = e.deltaY > 0;

      // 양 끝에서 탈출 방향 휠은 허용
      if ((isFirst && scrollingUp) || (isLast && scrollingDown)) return;

      e.preventDefault();
      
      // 섹션이 화면 중앙에 오도록 정렬 (잘림 방지)
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });

      if (isAnimating.current) return;

      if (scrollingDown && !isLast) {
        updateIndex(activeIndexRef.current + 1, 'up');
      } else if (scrollingUp && !isFirst) {
        updateIndex(activeIndexRef.current - 1, 'down');
      }
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
  }, [isInsideContent]);

  const updateIndex = (next: number, dir: 'up' | 'down') => {
    isAnimating.current = true;
    setDirection(dir);
    setActiveIndex(next);
    activeIndexRef.current = next;

    if (scrollRef.current) {
      const target = scrollRef.current.querySelectorAll('.genre_item')[next] as HTMLElement;
      scrollRef.current.scrollTo({
        top: target.offsetTop - scrollRef.current.offsetTop - 140,
        behavior: 'smooth'
      });
    }

    setTimeout(() => { isAnimating.current = false; }, 850);
  };

  return (
    <section className='main5_container'>
      {/* 커스텀 커서: content 구역에서만 활성화 */}
      <div 
        className={`custom_cursor ${isInsideContent ? 'active' : ''}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      >
        <img src='/media/cursor_b.svg' alt="scroll" />
      </div>

      <div className='main5_inner'>
        <div className='main5_header'>
          <h2>02 BROWSE THE COLLECTION</h2>
          <p>당신의 발견을 기다리는 영화 속 이야기들</p>
        </div>

        {/* 인터랙션 핵심 구역 */}
        <div 
          className='main5_content'
          ref={contentRef}
          onMouseEnter={() => setIsInsideContent(true)}
          onMouseLeave={() => setIsInsideContent(false)}
        >
          <div className='genre_scroll_area' ref={scrollRef}>
            <div className="scroll_spacer"></div>
            {movieData.map((item, index) => (
              <div key={item.id} className={`genre_item ${activeIndex === index ? 'active' : ''}`}>
                <span className='genre_num'>{item.id}/</span>
                <span className='genre_name'>{item.genre}</span>
              </div>
            ))}
            <div className="scroll_spacer"></div>
          </div>

          <div className='movie_display_area'>
            <div className={`shutter_wrapper ${direction}`}>
              {movieData.map((item, index) => (
                <div key={item.id} className={`shutter_slide ${activeIndex === index ? 'show' : ''}`}>
                  <img src={item.img} alt={item.title} className="movie_img" />
                </div>
              ))}
            </div>
            
            <div className='movie_info_box'>
              <div className='info_row'><span>TITLE</span><span className='val'>{movieData[activeIndex].title}</span></div>
              <div className='info_row'><span>YEAR</span><span className='val'>{movieData[activeIndex].year}</span></div>
              <div className='info_row'><span>DIRECTOR</span><span className='val'>{movieData[activeIndex].director}</span></div>
            </div>
          </div>
        </div>
        
        <div className="main5_footer">
          <a href='#' className="main5_explore_btn">
            <span>Explore</span>
            <img src="/media/arrow_b.svg" alt="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Main_5;