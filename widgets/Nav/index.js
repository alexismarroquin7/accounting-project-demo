import { useEffect, useState } from "react";
import { MenuIcon } from "../../icons";
import { MobileMenu } from "../MobileMenu";
import { useToggle } from "../../hooks";
import { NavTabs } from "./NavTabs";

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
          <h6 className="nav-title">JOHN SMITH <span className="nav-sub-title">CPA</span></h6>
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
          <NavTabs/>
        </div>
      </div>
      
      <MobileMenu 
        open={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
      />

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
          height: 5rem;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          gap: .5rem;

        }
        
        @media (min-width: 576px) {
          .nav-container {
            flex-flow: column wrap;
          }
          
          .nav-container-wrapper {
            width: 90%;
          }

        }

        @media (min-width: 996px) {

          .nav-mobile-menu-icon {
            display: none;
          }
        }
      `}</style>
    </nav>
  )
}