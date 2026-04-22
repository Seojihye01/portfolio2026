import React from 'react';
import './Main_1.css';

const Main_1 = () => {
  return (
    <div className='hero_video_section' data-theme="dark">
      {/* 배경 영상 영역 */}
      <div className="video_container">
        <video autoPlay muted loop playsInline
        onContextMenu={(e) => e.preventDefault()}
        className="background_video">
          <source src="/media/Dune.mp4" type="video/mp4" />
          브라우저가 비디오를 지원하지 않습니다.
        </video>
        {/* 영상 위에 씌우는 어두운 막 (가독성/분위기용) */}
        <div className='video_dimmer'></div>
      </div>
    </div>
  );
};

export default Main_1;