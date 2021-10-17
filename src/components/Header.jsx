import React from 'react';
import { Link } from 'gatsby';
import { IconLogo } from '@components/icons';
import '../styles/componentes/header.scss';

const Header = () => {
  const ResumeLink = (
    <a className="resume-button" href="/resume.pdf" target="_blank">
      Curriculum
    </a>
  );


  return (
    <div className="header">
      <Link to='/'>
        <IconLogo />
      </Link>

    </div>

  )
}

export default Header