import { useState, useEffect } from 'react';
import './Nav.css';


interface NavProps {
    isMenuOpen?: boolean; // 헤더 메뉴가 열렸는지 여부를 props로 받음
}

const Nav = ({ isMenuOpen }: NavProps) => {
    const [isDarkSection, setIsDarkSection] = useState(true); // 기본값은 어두운 배경(흰색 아이콘)
    if (isMenuOpen) return null;
    const sections = [
        { id: 'hero', label: 'DIRECTORY.M' },
        { id: 'about', label: 'ABOUT' },
        { id: 'curation', label: 'CURATION' },
        { id: 'explore', label: 'EXPLORE' },
        { id: 'funding', label: 'FUNDING' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // 섹션의 data-theme 속성을 확인
                        const theme = entry.target.getAttribute('data-theme');
                        setIsDarkSection(theme === 'dark' || !theme); 
                    }
                });
            },
            { threshold: 0.5 } // 섹션이 절반 이상 보일 때 변경
        );

        const sectionElements = document.querySelectorAll('[data-theme], #hero, #about, #curation, #explore, #funding');
        sectionElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = element.offsetTop; 
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`elevator_nav ${isDarkSection ? 'theme_dark' : 'theme_light'}`}>
            {sections.map((sec) => (
                <button 
                    key={sec.id} 
                    onClick={() => scrollToSection(sec.id)}
                    className="elevator_btn"
                >
                    <span className="label">{sec.label}</span>
                    <span className="dot" />
                </button>
            ))}
        </nav>
    );
};

export default Nav;