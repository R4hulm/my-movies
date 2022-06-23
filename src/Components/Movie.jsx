import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../Contexts/MovieContext';
import './Movie.styles.css';

const Movie = ({movie}) => {
    const { title,imageUrl } = movie;
    const navigate = useNavigate();
    const {setMovieDeatils} = useContext(MovieContext);
    const clickHandler = (e) => {
        setMovieDeatils(movie);
        navigate('/movie');
    }
    return(
        <div className="movie-container" onClick={clickHandler}>
            <img alt="movie" src={imageUrl}/>
            <h2>{title}</h2>
        </div>
    )
}

export default Movie;