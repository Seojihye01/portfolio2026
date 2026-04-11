import React, { useState, useEffect } from "react";
import { allMovies, type Movie } from "./MovieData";
import './Explore_5.css';

const Explore_5 = () => {
    const categoryData: { [key: string]: Movie[] } = {
        "TOP 5": [allMovies[15], allMovies[10], allMovies[3], allMovies[0], allMovies[8]], 
        "NEW": [allMovies[10], allMovies[0], allMovies[2], allMovies[5], allMovies[12]],
        "MY PICKS": [allMovies[13], allMovies[14], allMovies[11], allMovies[1], allMovies[16]],
        "WATCHING": [allMovies[1], allMovies[4], allMovies[12], allMovies[15], allMovies[6]],
    };

    const [activeTab, setActiveTab] = useState("TOP 5");
    const [currentMovies, setCurrentMovies] = useState<Movie[]>(categoryData["TOP 5"]);
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const now = new Date();
        const month = now.toLocaleString('en-US', { month: 'long' });
        const year = now.getFullYear();
        setCurrentDate(`${month}, ${year}`);
    }, []);

    const handleMouseEnter = (tab: string) => {
        setActiveTab(tab);
        setCurrentMovies(categoryData[tab]);
    };

    return (
        <section className="ex5_container">
            <div className="ex5_inner">
                <div className="ex5_grid_layout">
                    {currentMovies.map((movie, idx) => (
                        <a 
                            href={`/movie/${movie.id}`} 
                            key={`${activeTab}-${movie.id}-${idx}`} 
                            className={`ex5_item item_${idx + 1}`}
                        >
                            <img src={movie.img} alt={movie.title} />
                            <div className="ex5_overlay">
                                <span className="ex5_hover_title">{movie.title}</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="ex5_content">
                    <p className="ex5_sub_title">DISCOVERY FOR YOU</p>
                    <nav className="ex5_tabs">
                        {Object.keys(categoryData).map((tab) => (
                            <h2 
                                key={tab}
                                className={activeTab === tab ? "active" : ""}
                                onMouseEnter={() => handleMouseEnter(tab)}
                            >
                                {tab}
                            </h2>
                        ))}
                    </nav>
                </div>

                <div className="ex5_date">
                    {currentDate}
                </div>
            </div>
        </section>
    );
};

export default Explore_5;