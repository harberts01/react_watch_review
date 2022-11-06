import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { WatchedMovieCard } from './WatchedMovieCard';

export const Watched = () => {
    const {watched} = useContext(GlobalContext);

  return (
    <div className='movie-page'>
        <div className='container'>
            <div className='header'>
                <h1 className='heading'>You've Seen The Movie, Now Send Us a Review!</h1>
            </div>
            {watched.length > 0 ? (
                <div className='movie-grid'>
                    {watched.map((movie) => (
                        <WatchedMovieCard movie = {movie} type='watched' key={movie.id} />
                    ))}
                </div>
            ) : (
                <h2 className='no-movies'>No Movies in Your List</h2>
            )}
        </div>
    </div>
  )
}
