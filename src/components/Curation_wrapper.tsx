import Curation_1 from './Curation_1';
import Curation_2 from './Curation_2';
import Curation_3 from './Curation_3';
import Curation_4 from './Curation_4';
import Curation_5 from './Curation_5';
import Curation_6 from './Curation_6';
import Curation_7 from './Curation_7';
import React, { useState } from "react";
import { type Movie } from "./MovieData";
import MovieModal from "./Moviemodal";


interface CurationProps {
    onMovieClick: (movie: Movie) => void;
}


const Curation_wrapper =({ onMovieClick }: CurationProps) => {

    // 영화를 클릭했을 때 실행되는 함수
    const handleMovieSelect = (movie: Movie) => {
        
        if (onMovieClick) onMovieClick(movie);
    };

    return (
        <div className='curation_page_wrapper'>
        <Curation_1/>
        <Curation_2/>
        <Curation_3/>
        <Curation_4/>
        <Curation_5/>
        <Curation_6 onMovieClick={handleMovieSelect}/>
        <Curation_7/>
        </div>
    );
}

export default Curation_wrapper;