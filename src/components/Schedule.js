import React from 'react';
import { InlineWidget } from 'react-calendly';

export default function Schedule() {
  return (
    <div className="schedule">
      <section className="schedule__description">
        some kind of description of how to book, or how long or something
      </section>
      <div className="calendly-widget">
        <InlineWidget url="https://calendly.com/bellmobilevetcare" />
      </div>
    </div>
  )
}
