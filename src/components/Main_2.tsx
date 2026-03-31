import React, {useEffect} from 'react';
import './Main_2.css';

const Main_2 = () => {
    
  return (
    <div className='main_container'>
        <div className="grid_wrapper">
            <div className='grid_top'>
                <div className='video_box1'>
                    <video autoPlay muted loop playsInline className="main_video">
                        <source src="/media/Main_stbox.mp4" type="video/mp4" />
                    </video>
                    <div className='video_overlay'></div>
                </div>
                <a href='/target-page' className='title_box'>
                        <h1>An editor's view<br/> of cinema</h1>
                        <img src='/media/arrow_w.svg' />
                </a>
            </div>

            <div className='grid_bottom'>
                <div className='subtitle_box'>
                    <p>Films,<br/>selected<br/>for you</p>
                </div>
                <div className='video_box2'>
                    <video autoPlay muted loop playsInline className="main_video2 color">
                        <source src="/media/main.mp4" type="video/mp4" />
                    </video>
                    <div className='video_overlay'></div>
                </div>
                <div className='box_black narrow'></div>
                <div className='logo_box'>
                    <p className='brand_name'>Directory.M</p>
                </div>
            </div>
        </div>
    </div>
            
  );
};

export default Main_2;