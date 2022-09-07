import { useEffect, useState } from "react";
import { MenuIcon } from "../../icons";
import { MobileMenu } from "../MobileMenu";
import { useToggle } from "../../hooks";
import Link from "next/link";

export const Nav = () => {
  const {
    active: mobileMenuOpen,
    setActive: setMobileMenuOpen,
    toggle: toggleMobileMenuOpen
  } = useToggle();

  const [scrollY, setScrollY] = useState(() => {
    if (typeof window === 'undefined') return 0;
    
    return window.scrollY;
  });

  const handleToggle = () => {
    if(mobileMenuOpen){
      document.querySelector('body').style.overflow = 'auto';
    } else {
      document.querySelector('body').style.overflow = 'hidden';
    }

    toggleMobileMenuOpen();
  }
  
  
  useEffect(() => {
    const handleScroll = e => {
      if (mobileMenuOpen) return;

      const nav = document.querySelector('.nav-container');

      if(scrollY < window.scrollY){
        nav.classList.add('hidden');
      } else {
        nav.classList.remove('hidden');
      }
      
      setScrollY(window.scrollY);
    }
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, [scrollY, mobileMenuOpen]);

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-container-wrapper">
          <div
            className="nav-mobile-menu-icon"
          >
            <MenuIcon 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleToggle();
              }}
            />
          </div>
          <h6 className="nav-title">JOHN SMITH <span className="nav-sub-title">CPA</span></h6>
          <div
            className="nav-desktop-links"
          >
            <Link
              href="/"
              passHref
            >
              <a className="active">Home</a>
            </Link>
           
            <Link
              href="#what-i-do"
              passHref
            >
              <a
              >What I Do</a>
            </Link>
            <Link
              href="#services"
              passHref
            >
              <a>Services</a>
            </Link>
            
            <Link
              href="#about"
              passHref
            >
              <a>About</a>  
            </Link>
            <Link
              href="#contact"
              passHref
            >
              <a>Contact</a>
            </Link>
          </div>
        </div>
      </div>
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}/>
      <style jsx>{`
        nav {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          position: relative;
          /* padding-bottom: 6rem; */
        }
        
        .nav-container {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          top: 0;
          left: 0;
          background-color: var(--color-a);
          color: var(--color-d);
          padding: 2rem 0;
          box-shadow: 0px -2px 10px 0px rgba(0,0,0,0.75);
          position: fixed;
          transition: all .2s;
          z-index: 1000;
        }

        .nav-container.hidden {
          transform: translateY(-7rem);
        }

        .nav-container-wrapper {
          width: 90%;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
        }

        .nav-title {
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          gap: .5rem;
        }

        .nav-desktop-links {
          display: none;
        }

        a {
          color: var(--color-c);
          text-decoration: none;
          font-weight: bold;
        }
        
        a.active {
          text-decoration: underline;
        }

        

        @media (min-width: 576px) {
          .nav-container {
            padding: 2rem 4rem;
            flex-flow: column wrap;
          }
          
          .nav-container-wrapper {
            width: 100%;
          }

          .nav-mobile-menu-icon {
            display: none;
          }

          .nav-desktop-links {
            display: flex;
            flex-flow: row wrap; 
            align-items: center;
            gap: 1rem;
          }
        }
      `}</style>
    </nav>
  )
}