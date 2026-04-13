import Explore_1 from './Explore_1';
import Explore_2 from './Explore_2';
import Explore_3 from './Explore_3';
import Explore_4 from './Explore_4';
import Explore_5 from './Explore_5';
import React, { useState } from "react";
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
    
    return (
        <div className='explore_page_wrapper'>
        <Explore_1/>
        <Explore_2/>
        <Explore_3 onMovieClick={handleMovieSelect}/>
        <Explore_4 onMovieClick={handleMovieSelect}/>
        <Explore_5 onMovieClick={handleMovieSelect}/>
        </div>
    );
}

export default Explore_wrapper;