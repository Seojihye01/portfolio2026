import Main_1 from './Main_1';
import Main_2 from './Main_2';
import Main_3 from './Main_3';
import Main_4 from './Main_4';
import Main_5 from './Main_5';




const Main_wrapper =() => {
    return (
        <div className='main_page_wrapper'>
        <div id='hero'><Main_1/></div>
        <div id='about'><Main_2/></div>
        <div id='curation'><Main_3/></div>
        <div id='explore'><Main_4/></div>
        <div id='funding'><Main_5/></div>
        </div>
    );
}

export default Main_wrapper;