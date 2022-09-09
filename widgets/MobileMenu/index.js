export const MobileMenu = ({open = false}) => {
  return (
    <div
      className={`mobile-menu ${open ? '' : 'hidden'}`}
    >
      <a href="#">Home</a>
      <a href="#">What I Do</a>
      <a href="#">Services</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      
      <style jsx>{`
        .mobile-menu {
          position: fixed;
          top: 6rem;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 2rem 0;
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          justify-content: center;
          gap: 8rem;
          background-color: var(--color-d);
          transition: all .2s;
        }

        a {
          color: var(--color-b);
          text-decoration: none;
        }
        
        a:hover {
          text-decoration: underline;
        }
        
        .hidden {
          transform: translateX(200%);
        }
      `}</style>
    </div>
  )
}