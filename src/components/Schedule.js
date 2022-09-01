import React from 'react';
import { InlineWidget } from 'react-calendly';

export default function Schedule() {
  return (
    <div className="schedule">
      <div className="schedule__description">
        <h3>placeholder description and/or instructions on booking</h3>
      </div>
      <div className="calendly-widget">
        <InlineWidget url="https://calendly.com/bellmobilevetcare" />
      </div>
    </div>
  )
}
