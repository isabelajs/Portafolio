import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import { useOnClickOutside } from '@hooks';
import '../styles/components/menu.scss';

const Menu = () => {
  const wrapperRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  useOnClickOutside(wrapperRef, () => setMenuOpen(false))



  return (
    <div ref={wrapperRef} className="styledMenu">

      <div
        className='hamburguerButton'
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <div className="ham-box">
          <div className={`ham-box-inner ${menuOpen ? 'open' : ''}`} />
        </div>
      </div>

      <div
        className={`sidebar ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 1 : -1}
      >
        <nav >
          {
            <ol>
              {navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <Link to={url} onClick={() => setMenuOpen(false)}>
                    {name}
                  </Link>
                </li>
              ))}
            </ol>
          }

          <a href="/resume.pdf" className="button button--big">
            Curriculum
          </a>
        </nav>

      </div>


    </div>
  );
}

export default Menu;