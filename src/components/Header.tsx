import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
    isLoggedIn: boolean;
    onLogout: () => void;
}

const Header = ({ isLoggedIn, onLogout }: HeaderProps) => {
    const location = useLocation();
    const [isDarkSection, setIsDarkSection] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    // 현재 경로가 '/'이면 true, 아니면 false
    const isMain = location.pathname === '/'; 
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // 감시 중인 요소가 화면에 보이면 해당 요소의 data-theme 확인
                    if (entry.isIntersecting) {
                        const theme = entry.target.getAttribute('data-theme');
                        setIsDarkSection(theme === 'dark');
                    }
                });
            },
            { threshold: [0.05] } // 섹션이 10%만 걸쳐도 감지
        );
        // 모든 섹션이나 어두운 배경이 들어가는 요소를 감시
        const sections = document.querySelectorAll('[data-theme]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [location.pathname]); // 경로가 바뀔 때마다 다시 감시


    return (
        <div id='header' className={isDarkSection ? 'theme-dark' : 'theme-light'}>
            <div className='header_inner'>
                <div>
                    <a href='/'>
                        <img src={isDarkSection ? "/media/logo_w.png" : "/media/logo_b.png"} alt="logo" className='logo' />
                    </a>
                </div>

                <ul className='gnb1'>
                    <li className='gnbH'><a href='/curation'>CURATION</a>
                        <div className='sub_gnb'>
                            <div className='sub'><Link to='/curation?section=0'>Intro</Link></div>
                            <div className='sub'><Link to='/curation?section=1'>Object</Link></div>
                            <div className='sub'><Link to='/curation?section=2'>Collection</Link></div>
                            <div className='sub'><Link to='/curation?section=3'>Perspective</Link></div>
                            <div className='sub'><Link to='/curation?section=4'>Monthly Brief</Link></div>
                            <div className='sub'><Link to='/curation?section=5'>Summary</Link></div>
                        </div>
                    </li>
                    <li className='gnbH'><a href='/explore'>EXPLORE</a>
                        <div className='sub_gnb'>
                            <div className='sub'><Link to='/explore?section=0'>Intro</Link></div>
                            <div className='sub'><Link to='/explore?section=1'>Exhibition</Link></div>
                            <div className='sub'><Link to='/explore?section=2'>All Kinds of Cinema</Link></div>
                            <div className='sub'><Link to='/explore?section=3'>Discovery</Link></div>
                        </div>
                    </li>
                    <li className='gnbH'><a href='/funding'>FUNDING</a>
                        <div className='sub_gnb'>
                            <div className='sub'><Link to='/funding?section=0'>Intro</Link></div>
                            <div className='sub'><Link to='/funding?section=1'>Live Projects</Link></div>
                            <div className='sub'><Link to='/funding?section=2'>Values</Link></div>
                            <div className='sub'><Link to='/funding?section=3'>Funding Report</Link></div>
                        </div>
                    </li>
                </ul>

                <ul className='gnb2'>
                    <li className='menu_item'>
                        <a href='#'>
                            <img src={isDarkSection ? "/media/userL_w.svg" : "/media/userL_b.svg"} alt="user" />
                        </a>
                        <div className='sub_menu'>
                            {isLoggedIn ? (
                                <>
                                    <div className='sub'><Link to='/' onClick={onLogout}>LOGOUT</Link></div>
                                    <div className='sub'><Link to='/mypage'>MYPAGE</Link></div>
                                </>
                            ) : (
                                <>
                                    <div className='sub'><Link to='/login'>LOGIN</Link></div>
                                    <div className='sub'><Link to='/signup'>SIGN UP</Link></div>
                                </>
                            )}
                        </div>
                    </li>
                    <li className='menu_item'>
                        <button onClick={() => setIsSearchOpen(true)} className="search_btn">
                            <img src={isDarkSection ? "/media/searchL_w.svg" : "/media/searchL_b.svg"} alt="search" />
                        </button>

                        {isSearchOpen && (
                            <div className={`search_modal_overlay ${isSearchOpen ? 'active' : ''}`}>
                                <div className='search_modal_content'>
                                    <button className='header_close_btn' onClick={() => setIsSearchOpen(false)}>✕</button>

                                    <div className='search_input_wrapper'>
                                        <input type='text' placeholder='Search' autoFocus={isSearchOpen} />
                                        <img src="/media/searchL_b.svg" alt="search icon" className="inner_search_icon" />
                                    </div>

                                    <div className='tag_wrapper'>
                                        {['#눈 오는 날', '#첫눈', '#겨울', '#연말'].map((tag, idx) =>(
                                            <span key={idx} className='search_tag'>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;