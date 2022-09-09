export const MobileMenu = ({open = false, onClose = null}) => {
  return (
    <div
      className={`mobile-menu ${open ? '' : 'hidden'}`}
      onClick={(e) => {
        if(typeof onClose === 'function'){
          onClose(e);
        }
      }}
    >
      <div
        className={`mobile-menu-wrapper`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div
          className="mobile-menu-content"
        >
          <a href="#">Home</a>
          <a href="#">What I Do</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
      
      <style jsx>{`
        .mobile-menu {
          position: fixed;
          top: 4rem;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          transition: all .2s;
          background-color: rgba(0,0,0,.75);
        }
        
        .mobile-menu-wrapper {
          background-color: var(--color-d);
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .mobile-menu-content {
          width: 100%;
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          overflow-y: scroll;
          gap: 8rem;
          padding: 8rem 0;
        }

        a {
          color: var(--color-b);
          text-decoration: none;
        }
        
        a:hover {
          text-decoration: underline;
        }
        
        .mobile-menu.hidden {
          transform: translateX(200%);
        }
        
        @media (min-width: 768px) {

          .mobile-menu-wrapper {
            width: 50%;
            left: 50%;
            padding-left: 4rem;
          }

          .mobile-menu-content {
            align-items: flex-start;
          }
        }

        @media (min-width: 996px) {
          .mobile-menu {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}