import { useContext } from 'react';
import { MovieContext } from '../Contexts/MovieContext';
import './MovieDetails.styles.css';

const MovieDetails = () => {
    const {movieDetails} = useContext(MovieContext);
    return(
        <div className='movie-det-container'>
            <h1 className='heading'>My Movies</h1>
            <div className='slider'>
                <div className="images">
                    <input type='radio' name='slide' id='img1' />
                    <input type='radio' name='slide' id='img2'/>
                    <input type='radio' name='slide' id='img3'/>
                    <img  className="backdrop1" alt='img1' src={movieDetails.backdrop1} />
                    <img  className="backdrop2" alt='img2' src={movieDetails.backdrop2} />
                    <img  className="backdrop3" alt='img3' src={movieDetails.backdrop3} />
                </div>
                <div className='dots'>
                    <label htmlFor='img1'></label>
                    <label htmlFor='img2'></label>
                    <label htmlFor='img3'></label>
                </div>
            </div>
            <div className='details-container'>
                <h2 className='title'>{movieDetails.title}</h2>
                <p className='movie-desc'>{movieDetails.description}</p>
                <div className='btn-container'>
                    <button className='book-btn'>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;