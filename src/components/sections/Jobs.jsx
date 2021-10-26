import React, { useRef, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import '../../styles/components/sections/jobs.scss'

export default function Jobs() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      jobs: allMdx(filter: {fileAbsolutePath: {regex: "/job/"}}
      sort: {fields: frontmatter___date}) {
        nodes {
          id
          frontmatter {
            company
            description
            range
            title
            url
            activities {
              activity
            }
          }
        }
      }
    }  
  `);

  const jobsData = [...data.jobs.nodes];
  const [activatedJob, setActivatedJob] = useState(0);

  return (
    <section id="jobs" className='jobs'>
      <h2 className="numbered-heading">Dónde he trabajado</h2>

      <div className="inner">

        <div className="tabList" role="tablist" aria-label="Job tabs">
          {jobsData &&
            jobsData.reverse().map((node) => {

              const { company } = node.frontmatter;
              return (
                <button
                  className={`tabButton ${activatedJob.id === node.id ? 'active' : ''} `}
                  onClick={() => { setActivatedJob(node) }}
                  role="tab"
                >
                  <span>{company}</span>
                </button>
              )
            })
          }

        </div>

        <div className="tabPanels">
          {jobsData &&
            <div
              className="tabPanel"
              role="tabpanel"
            >
              <h3>
                <span>{activatedJob.frontmatter.title}</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a href={activatedJob.frontmatter.url} className="inline-link">
                    {activatedJob.frontmatter.company}
                  </a>
                </span>
              </h3>

              <p className="range">{activatedJob.frontmatter.range}</p>

              <div className='activities'>
                <ul>
                  {activatedJob.frontmatter.activities &&
                    activatedJob.frontmatter.activities.map((act, i) => {
                      return (
                        <li key={i}>{act.activity}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          }
        </div>

      </div>

    </section >
  )
}