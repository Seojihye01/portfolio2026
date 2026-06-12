import Curation_wrapper from "./Curation_wrapper";
import { type Movie } from "./MovieData";

interface CurationProps {
    onMovieClick: (movie: Movie) => void;
}

function Curation({ onMovieClick }: CurationProps){
    return(
        <>
        <Curation_wrapper onMovieClick={onMovieClick}/>
        </>
    );
}

export default Curation;