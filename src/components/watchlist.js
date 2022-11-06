import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { MovieCard } from './MovieCard';

export const Watchlist = () => {
  const {watchlist} = useContext(GlobalContext)
  return (
    <div className='movie-page'>
        <div className='container'>
          <div className='header'>
            <h1>Your Watchlist</h1>
            <span className='count-pill'>
             There's {watchlist.length} {watchlist.length === 1 ? 'Movie' : 'Movies'} in your list!
            </span>
          </div>
          {watchlist.length > 0 ? (
              <div className='movie-grid'>
              {watchlist.map(movie => (
                <MovieCard movie={movie} type='watchlist' key={movie.id} />
              ))}
            </div>
          ) : <h2 className='no-movies'>No Movies in Your List</h2> }
          
        </div>
    </div>
  );
}
