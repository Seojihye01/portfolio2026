import Explore_1 from './Explore_1';
import Explore_2 from './Explore_2';
import Explore_3 from './Explore_3';
import Explore_4 from './Explore_4';
import Explore_5 from './Explore_5';
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import { type Movie } from "./MovieData";
import MovieModal from "./Moviemodal";


interface ExploreProps {
    onMovieClick: (movie: Movie) => void;
}


const Explore_wrapper =({ onMovieClick }: ExploreProps) => {
        const [isModalOpen, setIsModalOpen] = useState(false);
    
        // 영화를 클릭했을 때 실행되는 함수
        const handleMovieSelect = (movie: Movie) => {

            if (onMovieClick) onMovieClick(movie);
        };
    
        const wrapperRef = useRef<HTMLDivElement>(null);
        const location = useLocation();

        useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sectionIndex = params.get('section');

    if (sectionIndex !== null && wrapperRef.current) {
        // 메뉴 번호(sectionIndex)와 실제 컴포넌트 순서를 매핑
        const indexMap: { [key: string]: number } = {
            "0": 0, 
            "1": 1, 
            "2": 3, 
            "3": 4  
        };

        const actualIndex = indexMap[sectionIndex];
        const target = wrapperRef.current.children[actualIndex] as HTMLElement;
        
        if (target) {
            const headerOffset = 70;
            const offsetPosition = target.offsetTop - headerOffset;

            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    }
}, [location]);

    return (
        <div className='explore_page_wrapper' ref={wrapperRef}>
        <Explore_1/>
        <Explore_2/>
        <Explore_3 onMovieClick={handleMovieSelect}/>
        <Explore_4 onMovieClick={handleMovieSelect}/>
        <Explore_5 onMovieClick={handleMovieSelect}/>
        </div>
    );
}

export default Explore_wrapper;