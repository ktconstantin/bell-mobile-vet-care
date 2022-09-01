import React from 'react';
import Images from './Images';
import Services from './Services';

export default function About() {
  return (
    <div>
      <div className="about__description">
        <h3>Hi, I'm Dr. Elena!</h3>
      </div>
      
      <Images />
      
      <br />
      <br />

      <Services />
    </div>
  )
}
