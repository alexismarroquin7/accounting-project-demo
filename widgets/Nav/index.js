import { MenuIcon } from "../../icons";

export const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <MenuIcon />
        {/* <h6 className="nav-title">JOHN SMITH <span className="nav-sub-title">CPA</span></h6> */}
      </div>

      <style jsx>{`
        nav {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          padding: 2rem 0;
        }

        .nav-container {
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
          position: fixed;
          top: 1rem;
          left: 1rem;
          background-color: #fff;
          padding: 1rem;
          border-radius: 1rem;
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