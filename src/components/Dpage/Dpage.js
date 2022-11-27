import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../footer/Footer';
import './Dpage.css'
import CardsData from '../../Data/CardsData';
import Scrolltotop from '../Scrolltotop'


function Dpage() {
  const params = useParams()
  const cards = CardsData

  let  movie =   cards.filter((item) => 
              item.id == params.id
            )
        movie = movie[0]

        // ../../../src/${movie.image.props.src}

    return (
    <>
      <Scrolltotop />
        <div className='movie-page'>
        <div className='movie-text'>
            <h1>{movie.Heading}</h1>
            <p>{movie.Description}</p>
            <div className='trailer-video video-responsive'>
            <iframe width="100%" height="500px" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            </div>
            </div>
            <div className='Movie-info'>
            <h1>MOVIE INFO</h1>
                <div className='info'>
                <h2>FULL NAME: </h2><p>{movie.full_name}</p>
                </div>
                <div className='info'>
                <h2>language: </h2><p>{movie.language}</p>
                </div>
                <div className='info'>
                <h2>Size: </h2><p>{movie.size}</p>
                </div>
                <div className='info'>
                <h2>Stars: </h2><p>{movie.stars}</p>
                </div>
                <div className='info'>
                <h2>Quality:</h2><p>{movie.quality}</p>
                </div>
            </div>
            <div className='movie-image'>{movie.image}</div>
            <div className='d-links'>
            {/* <a href={movie.download_link} target="_blank" className="btn btn-success">Download Now</a> */}
            <a href={movie.watch_online} target="_blank" className="btn btn-success">Watch Now</a>
            </div>
            <div className='keywords'>
            <hr className='bg-light'></hr>
              <p>{movie.seo}</p>
            </div>
    </div>
    <Footer />
    </>
  )
}


export default Dpage;