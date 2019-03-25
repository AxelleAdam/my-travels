import React from "react";

const Travels = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={destination} />
    <figcaption>
      <blockquote>{country}</blockquote>
	<blockquote>{distance}</blockquote>
      <cite>{destination}</cite>
    </figcaption>
  </figure>
);

export default Travels;
