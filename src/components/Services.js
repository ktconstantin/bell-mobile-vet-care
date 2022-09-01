import React from 'react';
import beaniePug from '../img/beanie-pug.png';
import denimPug from '../img/denim-pug.png';
import glassesPug from '../img/glasses-pug.png';
import floorPug from '../img/pug-floor.png';
import blanketPug from '../img/pug-blanket.png';
import sadPug from '../img/sad-pug.png';

export default function Services() {
  return (
    <div>
      <div className="services__title">
        <h2>Our Services</h2>
      </div>
      
      <div className="services__row">

        <figure className="services__img-container">
          <img 
            src={beaniePug}
            alt="pug wearing yellow beanie"
            className="services__img"
            style={{ width: "100%" }}
          />
          <figcaption>
            <h3>Hat Recommendations</h3>
            <p>Every pet needs one</p>
          </figcaption>
        </figure>

        <figure className="services__img-container">
          <img 
            src={denimPug}
            alt="pug wearing a denim jacket"
            className="services__img"
            style={{ width: "100%" }}
          />
          <figcaption>
            <h3>Spay/Neuter</h3>
            <p>Right in your living room</p>
          </figcaption>
        </figure>

        <figure className="services__img-container">
          <img 
            src={glassesPug}
            alt="pug wearing eyeglasses"
            className="services__img"
            style={{ width: "100%" }}
          />
          <figcaption>
            <h3>Advanced Cognitive Training</h3>
            <p>Your pet will do your taxes</p>
          </figcaption>
        </figure>
      </div>

      <div className="services__row">

        <figure className="services__img-container">
          <img 
            src={sadPug}
            alt="pug that looks sad"
            className="services__img"
            style={{ width: "100%" }}
          />
          <figcaption>
            <h3>Euthanasia</h3>
            <p>Say goodbye at home</p>
          </figcaption>
        </figure>

        <figure className="services__img-container">
          <img 
            src={blanketPug}
            alt="pug wrapped in a blanket"
            className="services__img"
            style={{ width: "100%" }}
          />
          <figcaption>
            <h3>Mind Reading</h3>
            <p>Find out what your pet really thinks of you</p>
          </figcaption>
        </figure>

        <figure className="services__img-container">
          <img 
            src={floorPug}
            alt="pug lying on the floor"
            className="services__img"
            style={{ width: "100%" }}
          />
          <figcaption>
            <h3>Nail Trim</h3>
            <p>Easy peasy</p>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
