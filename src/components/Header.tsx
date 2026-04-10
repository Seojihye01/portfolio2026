import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
    isLoggedIn: boolean;
    onLogout: () => void;
}

const Header = ({ isLoggedIn, onLogout }: HeaderProps) => {
    const location = useLocation();

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    // 현재 경로가 '/'이면 true, 아니면 false
    const isMain = location.pathname === '/'; 
    // 스크롤 여부 상태 관리
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 620); // 50px 이상 스크롤시 true or false
        };
        window.addEventListener('scroll', handleScroll);
        // 클린업 함수: 컴포넌트 언마운트 시 이벤트 제거
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // 메인이면서 스크롤 전일 때만 '투명 테마'
    const isTransparent = isMain && !isScrolled;

    return (
        <div id='header' className={`${isMain ? 'is-main' : ''} ${isScrolled ? 'scrolled' : ''}`}>
            <div className='header_inner'>
                <div>
                    <a href='/'>
                        <img src={isTransparent ? "/media/logo_w.png" : "/media/logo_b.png"}
                            alt="logo" className='logo' /></a>
                </div>

                <ul className='gnb1'>
                    <li className='gnbH'><a href='/curation'>CURATION</a>
                        <div className='sub_gnb'>
                            <div className='sub'><a href='#'>Main</a></div>
                            <div className='sub'><a href='#'>Reason</a></div>
                            <div className='sub'><a href='#'>Curation</a></div>
                            <div className='sub'><a href='#'>Director's Insight</a></div>
                            <div className='sub'><a href='#'>Review</a></div>
                        </div>
                    </li>
                    <li className='gnbH'><a href='/explore'>EXPLORE</a>
                        <div className='sub_gnb'>
                            <div className='sub'><a href='#'>Main</a></div>
                            <div className='sub'><a href='#'>Special Theme</a></div>
                            <div className='sub'><a href='#'>Category</a></div>
                            <div className='sub'><a href='#'>Dashboard</a></div>
                            <div className='sub'><a href='#'>Search</a></div>
                        </div>
                    </li>
                    <li className='gnbH'><a href='#'>FUNDING</a>
                        <div className='sub_gnb'>
                            <div className='sub'><a href='#'>Main</a></div>
                            <div className='sub'><a href='#'>Now Funding</a></div>
                            <div className='sub'><a href='#'>Reason of Funding</a></div>
                            <div className='sub'><a href='#'>Funding Report</a></div>
                        </div>
                    </li>
                </ul>

                <ul className='gnb2'>
                    <li className='menu_item'>
                        <a href='#'>
                            <img src={isTransparent ? "/media/userL_w.svg" : "/media/userL_b.svg"}
                            alt="user" />
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
                            <img src={isTransparent ? "/media/searchL_w.svg" : "/media/searchL_b.svg"}
                            alt="search" />
                        </button>

                        {isSearchOpen && (
                            <div className={`search_modal_overlay ${isSearchOpen ? 'active' : ''}`}>
                                <div className='search_modal_content'>
                                    <button className='close_btn' onClick={() => setIsSearchOpen(false)}>✕</button>

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