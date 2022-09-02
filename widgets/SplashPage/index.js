import { splash } from "../../data";
import { MenuIcon } from "../../icons";
import {
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon
} from '@mui/icons-material';

export const SplashPage = () => {
  return (
    <section>
      
      <div
        className="splash-page-wrapper"

      >
        <div 
          className="splash-page-more-details"
        >
          <button className="icon-font-size splash-page-more-details-button"><PhoneIcon fontSize="inherit"/>{splash.contact.tel}</button>
          <button className="icon-font-size splash-page-more-details-button">
            <LocationOnIcon fontSize="inherit"/>
            
            {splash.location.city}, {splash.location.state}
          </button>
         
        </div>

        <div
          className="splash-page-main-container"
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
            className="splash-page-menu-icon"
          >
            <MenuIcon/>
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
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          padding: 4rem 0;
        }
        
        .splash-page-wrapper {
          width: 90%;
          display: flex;
          flex-flow: column wrap;
          justify-content: space-between;
          height: 80vh;
        }

        .splash-page-more-details {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          /* padding: 2rem 0; */
        }
        
        .splash-page-more-details-button {
          padding: 1rem;
          font-weight: bold;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          gap: 1rem;
          background-color: var(--secondary-color);
          color: var(--primary-color);
          border-radius: 1rem;
          border: 0;
          /* border: 1px solid red; */
        }

        .splash-page-main-container {
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 25%;
        }
        
        .splash-page-main-text {
          width: 90%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          justify-content: space-between;
        }
        
        .splash-page-main-text-wrapper {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          text-align: left;
        }

        .splash-page-bottom-text {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          justify-content: center;
          align-items: center;
        }

        .splash-page-scroll-to-content-button {
          border: 0;
          background-color: transparent;
          font-weight: bold;
        }
      `}</style>
    </section>
  )
}