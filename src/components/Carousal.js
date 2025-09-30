import React from 'react'
// eslint-disable-next-line
export default function Carousal() {
  return (
      <div>
      <div>
      <div id="carouselExampleFade" class="carousel slide carousal-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id='carousal'>
          <div className='carousal-caption' style={{zIndex:"5"}}>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success text-white bg-light" type="submit">Search</button>
            </form>
          </div>
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900×700/?Burger" className="d-block w-100" alt="..." style={{filter: "brightness(30%)"}}/>
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?Pizza" className="d-block w-100" alt="..." style={{filter: "brightness(30%)"}} />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?Noodles" className="d-block w-100" alt="..." style={{filter: "brightness(30%)"}}/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
    
  )
}
