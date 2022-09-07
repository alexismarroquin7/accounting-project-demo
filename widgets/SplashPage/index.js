import { splash } from "../../data";
// import { MenuIcon } from "../../icons";
// import {
//   LocationOn as LocationOnIcon,
//   Phone as PhoneIcon
// } from '@mui/icons-material';

export const SplashPage = () => {
  return (
    <section>
      
      <div
        className="splash-page-wrapper"

      >

        
        <div
          className="splash-page-main-text"
        >
          <div
            className="splash-page-main-text-wrapper"
          >
            <h3>{splash.title}</h3>
            <p>{splash.subTitle}</p>
          </div>
        </div>  

        
        <div
          className="splash-page-bottom-text"
        >
          <button className="splash-page-scroll-to-content-button">{splash.bottom.text}</button>
        </div>
      </div>

      <style jsx>{`
        section {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          padding: 4rem 0;
          background-color: var(--color-d);
          padding-top: 8rem;
        }
        
        .splash-page-wrapper {
          width: 90%;
          display: flex;
          flex-flow: column wrap;
          justify-content: space-between;
          height: 80vh;
        }

        .splash-page-more-details-button {
          font-weight: bold;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          gap: 1rem;
          /* background-color: var(--color-b); */
          /* color: var(--color-a); */
          border-radius: 1rem;
          border: 0;
        } 
        
        .splash-page-main-text {
          width: 100%;
          height: 60%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          justify-content: center;
          color: var(--color-b);
        }
        
        .splash-page-main-text-wrapper {
          display: flex;
          flex-flow: column wrap;
          align-items: flex-start;
          justify-content: center;
          text-align: left;
        }

        .splash-page-main-text-wrapper p {
          font-style: italic;
          color: var(--color-a);
        }

        .splash-page-bottom-text {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          align-items: center;
        }

        .splash-page-scroll-to-content-button {
          border: 0;
          background-color: transparent;
          font-weight: bold;
          color: var(--color-a);
        }
      `}</style>
    </section>
  )
}