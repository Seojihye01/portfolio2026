import Funding_1 from './Funding_1';
import Funding_2 from './Funding_2';
import Funding_3 from './Funding_3';
import Funding_4 from './Funding_4';
import Funding_5 from './Funding_5';
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';





const Funding_wrapper =() => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sectionIndex = params.get('section');

    if (sectionIndex !== null && wrapperRef.current) {
        // 메뉴 번호(sectionIndex)와 실제 컴포넌트 순서를 매핑
        const indexMap: { [key: string]: number } = {
            "0": 0, 
            "1": 2, 
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
        <div className='funding_page_wrapper' ref={wrapperRef}>
        <Funding_1/>
        <Funding_2/>
        <Funding_3/>
        <Funding_4/>
        <Funding_5/>
     
        </div>
    );
}

export default Funding_wrapper;