import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Routes/Login';
import SignUp from'./Routes/SignUp';
import MyMovies from './Routes/MyMovies';
import './App.css';
import MovieDetails from './Routes/MovieDetails';
import { MovieContext } from './Contexts/MovieContext';
import { useState } from 'react';

function App() {
  const [movieDetails,setMovieDeatils] = useState({});
  return (
    <MovieContext.Provider value={{movieDetails,setMovieDeatils}}>
      <Router >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<MyMovies />} />
          <Route path="/movie" element={<MovieDetails />} />
        </Routes>
      </Router>
    </MovieContext.Provider>
  );
};

export default App;
