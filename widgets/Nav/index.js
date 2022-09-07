import { useEffect, useState } from "react";
import { MenuIcon } from "../../icons";
import { MobileMenu } from "../MobileMenu";
import { useToggle } from "../../hooks";

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
        <MenuIcon 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleToggle();
          }}
        />
        {/* <h6 className="nav-title">JOHN SMITH <span className="nav-sub-title">CPA</span></h6> */}
      </div>
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}/>
      <style jsx>{`
        nav {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          position: relative;
          padding-bottom: 7rem;
        }
        
        .nav-container {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
          top: 0;
          left: 0;
          background-color: #fff;
          padding: 2rem;
          box-shadow: 0px -2px 10px 0px rgba(0,0,0,0.75);
          position: fixed;
          transition: all .2s;
          z-index: 1000;
        }

        .nav-container.hidden {
          transform: translateY(-7rem);
        }

        .nav-title {
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          gap: .5rem;
        }
      `}</style>
    </nav>
  )
}