import React from "react";
import './Explore_1.css';

const Explore_1 = () => {

    return(
        <div className='hero_video_section'>
            <div className="video_container">
                <video autoPlay muted loop playsInline
                    onContextMenu={(e) => e.preventDefault()}
                    className="background_video">
                        <source src="/media/Dune.mp4" type="video/mp4" />
                            브라우저가 비디오를 지원하지 않습니다.
                </video>
            </div>
        </div>
    )
};

export default Explore_1;