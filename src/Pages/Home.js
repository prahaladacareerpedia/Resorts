import React from 'react';
import Footer from '../Components/Footer/Footer'; 
import Navbar from '../Components/Navbar/Navbar';
import image1 from '../Assets/caption (1).jpg';
import image2 from '../Assets/caption (2).jpg';
import image3 from '../Assets/caption.jpg';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div class="card">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image1} class="d-block" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image2} class="d-block" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
