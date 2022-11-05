import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './Home.css'

function Home() {

    return (

        <div className='home'>
            {/* <img className='home__logo' src='/Book Nook-1.png' alt="logo" srcset="" /> */}
            <div className="home__info">
                <h1 className="home__title">BOOK NOOK</h1>
                <Link to={'/explore'}>
                    <Button className='home__btn'>Explore</Button>
                </Link>

            </div>
        </div>
    );
}

export default Home;
