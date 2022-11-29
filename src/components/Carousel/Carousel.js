import React from 'react'
import './Carousel.css'

function Carousel() {
  return (
    <div className='carousel'>
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="showcase1.jpg" class="d-block w-100 " alt="..."/>
      <div className="carousel-caption d-none d-md-block ">
        <h5 className='car-text'>EVERY DC MOVIE</h5>
        <p className='car-text'>Get All Latest DC movies free and Download it on your Mobile</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="spiderman.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5 className='car-text'>EVERY SPIDERMAN MOVIE</h5>
        <p className='car-text'>Get All Latest DC movies free and Download it on your Mobile.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="avengers.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5 className='car-text'>Third slide label</h5>
        <p className='car-text'>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon p-2 " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel