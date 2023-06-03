import React from 'react';
import Navbar2 from '../Home/Navbar2';
import "./review.css";

function review() {
  return (
    <>
    <Navbar2/>
    <div className="margin-box">
      <h1>Explore 2</h1>
    </div>
    <div className="review-section">
  <h1 className="section-title">Customer Reviews</h1>

  <div className="review">
    <div className="review-header">
      <h3 className="review-title">Great Service and Quality</h3>
      <p className="review-date">Posted on June 1, 2023</p>
    </div>
    <div className="review-content">
      <div className="review-image">
        <img src="/public-images/Slider-img1.jpeg" alt="..." className="img-fluid" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae lorem non turpis
        tempus ullamcorper. Integer eu nulla vitae est elementum rutrum ut sit amet dui. Cras
        eget finibus enim. Sed mollis ullamcorper efficitur.
      </p>
    </div>
  </div>

  <div className="review">
    <div className="review-header">
      <h3 className="review-title">Highly Recommended</h3>
      <p className="review-date">Posted on May 28, 2023</p>
    </div>
    <div className="review-content">
      <div className="review-image">
        <img src="/public-images/Slider-img1.jpeg" alt="..." className="img-fluid" />
      </div>
      <p>
        Fusce eget nisi vel sem tincidunt gravida. Quisque non risus sit amet tellus placerat
        vehicula. Sed ullamcorper lectus quis sapien consequat, eu finibus arcu lobortis.
        Curabitur sed rutrum justo, vitae commodo dolor.
      </p>
    </div>
  </div>

  <div className="review">
    <div className="review-header">
      <h3 className="review-title">Excellent Product Selection</h3>
      <p className="review-date">Posted on May 24, 2023</p>
    </div>
    <div className="review-content">
      <div className="review-image">
        <img src="/public-images/Slider-img1.jpeg" alt="..." className="img-fluid" />
      </div>
      <p>
        Aliquam erat volutpat. Integer maximus massa in odio volutpat, ac fermentum orci
        dignissim. Fusce elementum consectetur mauris, nec euismod erat semper ac.
      </p>
    </div>
  </div>
</div>
</>
  )
}

export default review
