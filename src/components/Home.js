import React from 'react';
import obama from '../img/obama.png';
import sunglassesCat from '../img/sunglasses-cat.png';
import frenchie from '../img/frenchie.png';

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        
        <img
          src={sunglassesCat}
          alt="cat wearing sunglasses"
          className="img__cat"
        />
        
        <div className="quote-container">
          <p>"Inspirational Quote about Mission and Values"</p>
        </div>
      </div>

      <div className="home__container">
        <div className="quote-container">
          "Amazing Testimonial from a real person"
        </div>
        
        <img
          src={frenchie}
          alt="french bulldog in a sweater"
          className="img__frenchie"
        />
        
      </div>

      <div className="home__container">
        <img
          src={obama}
          alt="barack obama"
          className="img__obama"
        />
        <div className="quote-container">
          <p className="quote">{"\"Even though Dr. Elena lived like 3,000 miles away,\nI still called her for all of Bo and Sunny's vet needs.\nBecause she's that good.\""}</p>
        </div>
      </div>
    </div>
  )
}
