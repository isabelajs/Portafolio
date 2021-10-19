import React from 'react';
import '../../styles/components/sections/hero.scss';

export default function Hero() {
  return (
    <section className='heroSection'>
      <h1>Hola, mi nombre es </h1>
      <h2 className="big-heading">Isabela Jiménez</h2>
      <h3 className="big-heading">Construyo cosas para web.</h3>
      <p>
        Soy Ingeniera Industrial y Desarrolladora frontend,
        I’m a software engineer specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I’m focused on building accessible, human-centered products
        at
      </p>
      <a
        className="button button--big"
        href="https://www.newline.co/courses/build-a-spotify-connected-app"
        target="_blank"
        rel="noreferrer">
        Check out my course!
      </a>
    </section>
  );
};
