import React, { useState, useEffect, useRef } from 'react';
import { allMovies, type Movie } from './MovieData'; 
import './Main_5.css';

// 인터랙션을 위해 5개의 영화를 고정 데이터로 추출
const displayMovies = [
  { ...allMovies[0], displayGenre: 'FANTASY' }, // Dune
  { ...allMovies[3], displayGenre: 'SCI-FI' },   // Interstellar
  { ...allMovies[2], displayGenre: 'NOIR' },     // Blade Runner 2049
  { ...allMovies[13], displayGenre: 'ARTHOUSE' }, // The Grand Budapest Hotel
  { ...allMovies[11], displayGenre: 'SURVIVAL' }, // The Martian
];

const Main_5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isInsideContent, setIsInsideContent] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const handleGlobalWheel = (e: WheelEvent) => {
      if (!isInsideContent) return;

      const isFirst = activeIndexRef.current === 0;
      const isLast = activeIndexRef.current === displayMovies.length - 1;
      const scrollingUp = e.deltaY < 0;
      const scrollingDown = e.deltaY > 0;

      if ((isFirst && scrollingUp) || (isLast && scrollingDown)) return;

      e.preventDefault();
      
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

        <div 
          className='main5_content'
          ref={contentRef}
          onMouseEnter={() => setIsInsideContent(true)}
          onMouseLeave={() => setIsInsideContent(false)}
        >
          <div className='genre_scroll_area' ref={scrollRef}>
            <div className="scroll_spacer"></div>
            {displayMovies.map((item, index) => (
              <div key={item.id} className={`genre_item ${activeIndex === index ? 'active' : ''}`}>
                <span className='genre_num'>0{index + 1}/</span>
                <span className='genre_name'>{item.displayGenre}</span>
              </div>
            ))}
            <div className="scroll_spacer"></div>
          </div>

          <div className='movie_display_area'>
            <div className={`shutter_wrapper ${direction}`}>
              {displayMovies.map((item, index) => (
                <div key={item.id} className={`shutter_slide ${activeIndex === index ? 'show' : ''}`}>
                  <img src={item.img} alt={item.title} className="movie_img" />
                </div>
              ))}
            </div>
            
            <div className='movie_info_box'>
              <div className='info_row'>
                <span>TITLE</span>
                <span className='val'>{displayMovies[activeIndex].title}</span>
              </div>
              <div className='info_row'>
                <span>YEAR</span>
                <span className='val'>{displayMovies[activeIndex].rel}</span>
              </div>
              <div className='info_row'>
                <span>DIRECTOR</span>
                <span className='val'>{displayMovies[activeIndex].direc}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="main5_footer">
          <a href='/explore' className="main5_explore_btn">
            <span>Explore</span>
            <img src="/media/arrow_b.svg" alt="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Main_5;