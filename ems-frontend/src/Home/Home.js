import React from 'react'
import NavBar from '../NavigationBar/NavBar'
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import Footer from './Footer';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'green' }}>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="1000">
              <img src={img1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={img2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}
