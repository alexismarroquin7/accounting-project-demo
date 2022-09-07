export const MenuIcon = ({onClick = null}) => {
  return (
    <button
      onClick={(e) => {
        if(typeof onClick !== 'function') {
          e.preventDefault();
          e.stopPropagation();
        } else {
          onClick(e);
        }
      }}
    >
      
      <svg
        width="2rem"
        height="2rem"
        viewBox="0 0 100 100"
      >
        <path className="menu-icon-top"/>
        <path className="menu-icon-middle"/>
        <path className="menu-icon-bottom"/>
      </svg>

      <style jsx>{`
        button {
          background-color: transparent;
          border: 0;
        }

        path {
          stroke: var(--black);
          stroke-width: 10;
        }
        .menu-icon-top {
          d: path('M 0 5 100 5');
        }
        .menu-icon-middle {
          d: path('M 0 50 100 50');
        }
        .menu-icon-bottom {
          d: path('M 0 95 100 95');
        }

      `}</style>
    </button>
  )
}