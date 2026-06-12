import Explore_wrapper from "./Explore_wrapper";
import { type Movie } from "./MovieData";



interface ExploreProps {
    onMovieClick: (movie: Movie) => void;
}

function Explore({ onMovieClick }: ExploreProps){
    return(
        <>
        <Explore_wrapper onMovieClick={onMovieClick}/>
        </>
    );
}

export default Explore;