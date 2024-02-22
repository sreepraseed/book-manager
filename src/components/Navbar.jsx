import React from 'react'
import navimg from '../assets/navimg.jpg'
function Navbar() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-body-light mb-3">
  <div class="container-fluid ">
  <img src={navimg} alt="" srcset="" className='img-fluid navimgg ms-auto'/>
    <a class="navbar-brand me-auto" href="#">
        Book'sHere</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
    </div>
  )
}

export default Navbar
