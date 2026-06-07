import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './TopBtn.css';

const TopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDarkSection, setIsDarkSection] = useState(false);
    const location = useLocation();
    const isMainPage = location.pathname === '/';
    const toggleVisibility = () => {
        if (isMainPage) {
            setIsVisible(false);
            return;
        }

        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const theme = entry.target.getAttribute('data-theme');
                        setIsDarkSection(theme === 'dark');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('[data-theme]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [location.pathname]);

    if (isMainPage) return null;
    
    return (
        <div className={`top_btn_wrap ${isVisible ? 'show' : ''}`}>
            <button 
                className={`metallic_btn ${isDarkSection ? 'dark' : ''}`} 
                onClick={scrollToTop}
            >
                <div className="btn_content">
                    <div className="arrow_visual"></div>
                    <span className="btn_text">ENTRANCE</span>
                </div>
            </button>
        </div>
    );
};

export default TopBtn;