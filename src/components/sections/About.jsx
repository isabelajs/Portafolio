import React, { useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../../styles/components/sections/about.scss';

export default function About() {
  const revealContainer = useRef(null);
  const skills = ['JavaScript (ES6+)', 'React', 'Html', 'Sass', 'Firebase', 'Gatsby', 'Node.js'];

  return (
    <section className='aboutSection' id='about' ref={revealContainer}>
      <h2 className="numbered-heading">Sobre Mi</h2>

      <div className="inner">
        <div className='styledText'>
          <div>
            <p>
              ¡Hola! Mi nombre es Isabela Jimenez, soy Ingeniera Industrial de la Universidad Antonio Nariño,
              Grado Magna Cum Laude, y Desarrolladora Frontend.
            </p>

            <p>
              Inicié en el mundo de la programación a finales del año 2020,
              creando un ecommerce para mi emprendimiento{' '}
              <a href="https://www.instagram.com/5eonn/" target="_blank" rel="noreferrer" >5EON</a>,{' '}
              desde allí comencé a estudiar apoyándome de plataformas como Platzi y YouTube, además del apoyo de la comunidad. De igual manera,
              hice parte de carrera de Inteligencia Artificial MinTic-Icetex.
              Esto me ha permitido tener el privilegio de trabajar en equipo como Freelancer para diferentes empresas.
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
