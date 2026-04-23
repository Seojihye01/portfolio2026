import React from 'react';
import './Main_3.css';

const Main_3: React.FC = () => {
    return (
        <section className="main3_container">
            <div className="main3_inner">
                <div className='main3_cont'>
                    <a href='/about' className='main3_cta'>
                        <span>How We Work</span>
                        <img src='/media/arrow_w.svg' />
                    </a>

                    <h1>DIRECTORY.M</h1>

                    <div className="main3_meta_grid">
                        <div className="main3_row">
                            <span className="main3_label">IDENTITY</span>
                            <span className="main3_value">Cinematic Content Hub</span>
                        </div>
          
                        <div className="main3_row">
                            <span className="main3_label">SINCE</span>
                            <span className="main3_value">2025</span>
                        </div>

                        <div className="main3_row">
                            <span className="main3_label">LOCATION</span>
                            <span className="main3_value">Seoul, Republic of Korea</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main_3;