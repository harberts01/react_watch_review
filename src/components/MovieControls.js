import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';



export const MovieControls = ({movie, type}) => {
    const {removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched, addToReviewed,} = useContext(GlobalContext);
  return (
    <div className='inner-card-controls'>
        {type === 'watchlist' && (
            <>
                <button title="If You liked it, Let's review it!"className='ctrl-btn' onClick={() => addMovieToWatched(movie)}>
                    <i className='fas fa-thumbs-up'></i>
                </button>

                <button title="It was Trash :("className='ctrl-btn'
                onClick={() => removeMovieFromWatchlist(movie.id)}>
                    <i className='far fa-trash-alt'></i>
                </button>
            </>
        )}

        {type === 'watched' &&(
            <>
                <button title="Move to Watchlist" className='ctrl-btn' onClick={() => moveToWatchlist (movie)}>
                    <i className='far fa-arrow-alt-circle-left'></i>
                </button>

                <button title="Delete from Lists" className='ctrl-btn'
                onClick={() => removeFromWatched(movie.id)}>
                    <i className='far fa-trash-alt'></i>
                </button>

            </>
        )}
    </div>
  )
}
