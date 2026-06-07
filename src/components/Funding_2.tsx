import React, { useState, useEffect, useRef } from 'react';
import './Funding_2.css';

const MOVING_IMAGES = [
  { src: '/media/camera.jpg', pos: { top: '14%', left: '10%' } }, 
  { src: '/media/camera_set.jpg', pos: { top: '45%', left: '55%' } },
  { src: '/media/director.jpg', pos: { top: '50%', left: '15%' } },
];

const SLATE_DATA = {
  PRODUCTION: "Directory.M",
  SCENE: "01",
  TAKE: "FUNDING",
  DIRECTOR: "",
  DATE: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
};

const Funding_2 = () => {
  const [step, setStep] = useState(0);
  const [xy, setXY] = useState({ x: 0, y: 0 }); 
  const [count, setCount] = useState(5); 
  const [isInside, setIsInside] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(false); 
  const [isMuted, setIsMuted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stepRef = useRef(0);
  const isAnimating = useRef(false);

  // 카운트다운 타이머 로직
  useEffect(() => {
    let timer: number;
    if (step === 6 && !isVideoActive && count > 0) {
      timer = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step, count, isVideoActive]);

  // 스텝이 바뀌면 카운트다운 초기화
  useEffect(() => {
    if (step < 6) setCount(5);
  }, [step]);

  // 휠 이벤트 제어 및 가둠 해제 로직
  useEffect(() => {
    const handleGlobalWheel = (e: WheelEvent) => {
      if (!isInside || isVideoActive || !sectionRef.current) return;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      if (stepRef.current === 0 && scrollingUp) {
        setIsInside(false);
        return;
      }

      if (stepRef.current === 6 && scrollingDown) {
        e.preventDefault();        
        return;
      }

      if (isAnimating.current) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      sectionRef.current.scrollIntoView({ behavior: 'auto', block: 'center' });

      isAnimating.current = true;

      if (scrollingDown && stepRef.current < 6) {
        const nextStep = stepRef.current + 1;
        setStep(nextStep);
        stepRef.current = nextStep;
        setTimeout(() => { isAnimating.current = false; }, 800);
      } else if (scrollingUp && stepRef.current > 0) {
        const nextStep = stepRef.current - 1;
        setStep(nextStep);
        stepRef.current = nextStep;
        setTimeout(() => { isAnimating.current = false; }, 800);
      }
    };

    window.addEventListener('wheel', handleGlobalWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleGlobalWheel);
  }, [isInside, isVideoActive]);

  // 클릭 시 액션 영화 스타트
  const handleStartVideo = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.fu2_sound_wave_btn')) return;
    if (step !== 6 || isVideoActive) return;
    
    // ⭐️ [수정] 카운트다운 진행 중(5 ~ 1초)일 때는 클릭이 작동하지 않도록 차단
    if (count > 0) return;
    
    setIsVideoActive(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play().catch(() => {
        videoRef.current!.muted = true;
        setIsMuted(true);
        videoRef.current!.play();
      });
    }
  };

  const handleSoundToggle = () => {
    if (videoRef.current && isVideoActive) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const getTranslateX = () => {
    if (step <= 1) return 0;
    return (step - 1) * 100;
  };

  const [isResponsive, setIsResponsive] = useState(false);
  useEffect(() => {
    const checkDevice = () => setIsResponsive(window.innerWidth <= 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (step === 6 && !isResponsive) {
      setXY({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    if (isResponsive && step === 6) {
      setXY({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    }
  }, [isResponsive, step]);

  return (
    <section 
      ref={sectionRef} data-theme="dark" id="funding_2_section"
      className={`funding_3_section step_${step} ${step >= 5 ? 'is_dimmed' : ''} ${isVideoActive ? 'video_playing' : ''}`}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      onMouseMove={handleMouseMove} 
      onClick={handleStartVideo}
      // ⭐️ [수정] 카운트다운 중일 때는 기본 커서(default)를 유지하고, ACTION 상태가 되었을 때만 원래 의도대로 커서를 숨김(none)
      style={{ cursor: step === 6 && !isVideoActive && !isResponsive ? 'none' : 'default' }}
    >
      {step === 6 && !isVideoActive && !isResponsive && (
        <div 
          className="fu2_custom_cursor" 
          style={{ left: xy.x, top: xy.y, position: 'fixed', pointerEvents: 'none', zIndex: 9999 }}
        >
          <div className="fu2_cursor_circle">
            <span key={count} className="fu2_cursor_text">
              {count > 0 ? count : "ACTION"}
            </span>
          </div>
        </div>
      )}

      {isResponsive && step === 6 && !isVideoActive && (
        <div className="responsive_action_hint">
          <span key={count} className='hint_text'>{count > 0 ? `${count}` : 'ACTION'}</span>
        </div>
      )}

      <video
        ref={videoRef}
        className={`overlay_video ${isVideoActive ? 'active' : ''}`}
        src="/media/funding_.mp4"
        loop
        playsInline
      />

      <button 
        className={`fu2_sound_wave_btn ${isVideoActive ? 'visible' : ''} ${isMuted ? "muted" : "playing"}`}
        onClick={handleSoundToggle}
        aria-label="Toggle Sound"
      >
        <div className="fu2_wave_container">
          <span className="fu2_bar fu2_bar1"></span>
          <span className="fu2_bar fu2_bar2"></span>
          <span className="fu2_bar fu2_bar3"></span>
        </div>
        <span className="fu2_wave_btn_text">SOUND</span>
      </button>

      <div className="funding_viewport">
        <div 
          className="free_image_track" 
          style={{ 
            transform: `translateX(-${getTranslateX()}%)`,
            opacity: (step >= 2 && step <= 4) ? 1 : 0,
            transition: 'all 1.2s cubic-bezier(0.19, 1, 0.22, 1)'
          }}
        >
          <div className="image_frame_wrapper" />
          {MOVING_IMAGES.map((img, i) => {
            const isVisible = step >= i + 2;
            return (
              <div key={i} className="image_frame_wrapper">
                <div 
                  className="image_frame" 
                  style={{ 
                    top: img.pos.top, 
                    left: img.pos.left,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'opacity 0.8s ease, transform 1s ease'
                  }}
                >
                  <img src={img.src} alt={`scene ${i}`} />
                </div>
              </div>
            );
          })}
          <div className="image_frame_wrapper" />
        </div>

        <div className={`glass_slate_fixed ${step === 6 ? 'active_click' : ''} ${isVideoActive ? 'fade_out' : ''}`}>
          <div className="glass_slate_board">
            <div className="slate_header">
              <h1>{SLATE_DATA.PRODUCTION}</h1>
            </div>
            <div className="slate_info_grid">
              <div className="info_item"><span>SCENE</span><p>{SLATE_DATA.SCENE}</p></div>
              <div className="info_item"><span>TAKE</span><p>{SLATE_DATA.TAKE}</p></div>
              <div className="info_item">
                <span>DIRECTOR</span>
                <p>{SLATE_DATA.DIRECTOR || <>&nbsp;</>}</p>
              </div>
              <div className="info_item">
                <span>CAMERA</span>
                <p>&nbsp;</p>
              </div>
              <div className="info_item long"><span>DATE</span><p>{SLATE_DATA.DATE}</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funding_2;