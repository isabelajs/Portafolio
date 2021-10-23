import React, { useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../../styles/components/sections/about.scss';

export default function About() {
  const revealContainer = useRef(null);
  const skills = ['JavaScript (ES6+)', 'React', 'Html', 'Css', 'Sass', 'Firebase'];

  return (
    <section className='aboutSection' id='about' ref={revealContainer}>
      <h2 className="numbered-heading">Sobre Mi</h2>

      <div className="inner">
        <div className='styledText'>
          <div>
            <p>
              ¡Hola! Mi nombre es Isabela Jimenez, soy Ingeniera Industrial de la Universidad Antonio Nariño,
              Grado Magna Cum Laude en mi titulación al tener uno de los mejores promedios académicos, además
              soy Desarrolladora Frontend de manera autodidacta.
            </p>

            <p>
              Inicie en el mundo de la programación a finales del año 2020,
              creando una tienda simple para mi emprendimiento{' '}
              <a href="https://www.instagram.com/5eonn/">5EON</a>,{' '}
              desde allí comencé a estudiar de manera autodidacta,
              apoyándome de plataformas como Platzi y YouTube, además del apoyo de la comunidad. He avanzado rápidamente y
              he tenido el privilegio de trabajar en equipo como Freelancer para diferentes empresas.
            </p>

            <p>
              Mi enfoque principal en este momento es mejorar mis prácticas de programación de manera que pueda crear
              productos rápidos, accesibles y con excelente experiencia digital para el usuario.
            </p>

            <p>Estas son algunas de las tecnologías con las que he trabajado:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>

        <div className="styledPic">
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
