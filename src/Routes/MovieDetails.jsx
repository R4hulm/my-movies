
import { useContext } from 'react';
import { MovieContext } from '../Contexts/MovieContext';
import './MovieDetails.styles.css';

const MovieDetails = () => {
    const {movieDetails} = useContext(MovieContext);
    return(
        <>
        <h1>My Movies</h1>
        <div className='slider'>
            <div className="images">
                {/* <input type='radio' name='slide' id='img1' checked/>
                <input type='radio' name='slide' id='img2'/>
                <input type='radio' name='slide' id='img3'/> */}
                <img className='backdrop' alt='img1' src={movieDetails.backdrop1} />
                {/* <img className='backdrop' alt='img2' src={movieDetails.backdrop2} />
                <img className='backdrop' alt='img3' src={movieDetails.backdrop3} /> */}
            </div>
            {/* <div className='dots'>
                <label for='img1'></label>
                <label for='img2'></label>
                <label for='img3'></label>
            </div> */}
        </div>
        <div className='details-container'>
        <h2 className='title'>{movieDetails.title}</h2>
            <p className='movie-desc'>{movieDetails.description}</p>
            <button className='book-btn'>Book Now</button>
        </div>
        </>
    )
}

export default MovieDetails;