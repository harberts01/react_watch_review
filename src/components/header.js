import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='inner-content'>
                <div className='brand'>
                    <Link to='/'>Watch & Review</Link>
                </div>

                <ul className='nav-links'>
                    <li>
                        <Link to="/">Your List!</Link>
                    </li>
                    
                    <li>
                        <Link to="/Watched">Review Your Movies!</Link>
                    </li>

                    <li>
                        <Link to="/Add" className='btn btn-danger'>Add Movies To Your List!</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
)
}
