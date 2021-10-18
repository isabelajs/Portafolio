import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import { KEY_CODES } from '@utils';
import { useOnClickOutside } from '@hooks';
import '../styles/componentes/menu.scss';

const Menu = () => {
  const wrapperRef = useRef();
  const buttonRef = useRef(null);
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  useOnClickOutside(wrapperRef, () => setMenuOpen(false))


  let menuFocusables;
  let firstFocusableEl;
  let lastFocusableEl;

  const setFocusables = () => {
    menuFocusables = [buttonRef.current, ...Array.from(navRef.current.querySelectorAll('a'))];
    firstFocusableEl = menuFocusables[0];
    lastFocusableEl = menuFocusables[menuFocusables.length - 1];
  };

  const handleBackwardTab = e => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault();
      lastFocusableEl.focus();
    }
  };

  const handleForwardTab = e => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl.focus();
    }
  };

  const onKeyDown = e => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        setMenuOpen(false);
        break;
      }

      case KEY_CODES.TAB: {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          handleBackwardTab(e);
        } else {
          handleForwardTab(e);
        }
        break;
      }

      default: {
        break;
      }
    }
  };

  const onResize = e => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    setFocusables();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="styledMenu">

      <div
        className='hamburguerButton'
        onClick={toggleMenu}
        ref={buttonRef}
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
        <nav ref={navRef}>
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