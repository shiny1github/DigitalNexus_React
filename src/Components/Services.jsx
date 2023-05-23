import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../Assets/BLOG_technology-in-education-2019.jpg";
import img2 from "../Assets/Innovation-Communications-Technology-2-1280x960.jpg";




function Services() {
  return (
    <div className='services'>
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000}showThumbs={false}>
            <div>
                <img src={img1} alt="Item1" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="Item2" />
                <p className='legend'>Network Services</p>
            </div>
        </Carousel>


    </div>
  )
}

export default Services