import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Icon } from '@components/icons';
import '../../styles/components/sections/projects.scss'

export default function Projects() {
  const data = useStaticQuery(graphql`
    {
      projects: allMdx(filter: {fileAbsolutePath: {regex: "/projects/"}}
      sort: {fields: frontmatter___date}) {
        nodes {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 700
                  placeholder: BLURRED
                  aspectRatio: 1.8
                  transformOptions: {fit: FILL}
                )
              }
            }
            description
            tecnologies
            github
            external
            mockup
          }
        }
      }
    }
  `)
  const featuredProjects = [...data.projects.nodes]
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);


  return (
    <section id='projects'>
      <h2 className="numbered-heading" ref={revealTitle}>
        Proyectos
      </h2>

      <ul className='projectsGrid'>
        {featuredProjects &&
          featuredProjects.reverse().map((node, i) => {
            const { title, external, github, mockup, description, image, tecnologies } = node.frontmatter
            const img = getImage(image);

            return (
              <li className="project" key={i} ref={el => (revealProjects.current[i] = el)} >
                <div className="project-content">

                  <p className="project-overline">Proyectos destacados</p>

                  <h3 className="project-title">
                    <a target='_blank' rel="noreferrer" href={external}>{title}</a>
                  </h3>

                  <div className="project-description">{description}</div>

                  {tecnologies.length && (
                    <ul className="project-tech-list">
                      {tecnologies.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}

                  <div className="project-links">
                    {github && (
                      <a target="_blank" rel="noreferrer" href={github} aria-label="GitHub Link">
                        <Icon name="GitHub" />
                      </a>
                    )}
                    {mockup && (
                      <a target="_blank" href={mockup} rel="noreferrer" aria-label="Mockup Link">
                        <Icon name="Figma" />
                      </a>
                    )}
                    {external && (
                      <a target="_blank" href={external} rel="noreferrer" aria-label="External Link" className="external">
                        <Icon name="External" />
                      </a>
                    )}
                  </div>


                </div>




                <div className="project-image">
                  <a target="_blank" rel="noreferrer" href={external ? external : github ? github : '#'}>
                    <GatsbyImage image={img} alt={title} className="img" />
                  </a>
                </div>
              </li>
            )
          })
        }
      </ul>
    </section>
  );
};
