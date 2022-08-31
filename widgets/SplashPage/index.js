import { splash } from "../../data";
import { MenuIcon } from "../../icons";

export const SplashPage = () => {
  return (
    <section>
      
      <div
        className="splash-page-wrapper"

      >
        <div
          className="splash-page-left-column"
        >
          <MenuIcon/>
        </div>
        
        <div>
          <p>{splash.location.city}, {splash.location.state}</p>
        </div>
        
        <div
          className="splash-page-middle-column"
        >
          <h3>{splash.title}</h3>
        </div>
        

        <div
          className="splash-page-right-column"
        >
          <p>{splash.contact.name}, {splash.contact.tel}</p>
        </div>
        
        <div
          className="splash-page-bottom-row"
        >
          <button>{splash.bottom.text}</button>
        </div>
      </div>

      <style jsx>{`
        section {
          position: relative;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          /* width: 100%; */
          display: flex;
          flex-flow: column wrap;
          align-items: center;
        }
        
        .splash-page-wrapper {
          width: 90%;
          display: flex;
          flex-flow: row wrap;
          /* align-items: center; */
          gap: 4rem;
        }

        .splash-page-left-column {
          height: 90vh;
          display: flex;
          flex-flow: column wrap;
          justify-content: center;
        }

        .splash-page-bottom-row {
          width: 100%;
          height: 10vh;
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
        }
      `}</style>
    </section>
  )
}