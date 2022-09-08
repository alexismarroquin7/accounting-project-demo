import { Section } from "../../components";
import { about } from "../../data";

import {
  AccountCircle as AccountCircleIcon
} from "@mui/icons-material";

export const AboutPage = () => {
  return (
    <Section>
      <h3
        className="about-page-title"
      >{about.title}</h3>
      <div
        className="about-page-card"
      >
        <div
          className="contact-profile-pic-container"
        >  
          <AccountCircleIcon fontSize="inherit"/>
          <p
            className="about-contact-name"
          >
            {about.name}
            <span
              className="about-contact-job-title"
            >
              {about.jobTitle}
            </span>
          </p>
        </div>
        <div
          className="about-page-description"
        >
          {about.description.split('<br>').map((line, i) => {
            return (
            <p
              key={i}
              className="about-page-description-p"
            >{line}</p>
            )
          })}
        </div>
      </div>

      <style jsx>{`

        .about-page-card {
          width: 90%;
          display: flex;
          flex-flow: column wrap;
          gap: 2rem;
          align-items: flex-start;
        }
        
        .about-page-title {
          width: 90%;
          padding-bottom: 2rem;
          color: var(--color-a);
        }

        .contact-profile-pic-container {
          font-size: 15rem;
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          gap: 2rem;
          padding: 2rem 0;
        }

        .about-contact-name {
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          gap: 1rem;
          color: var(--color-a);
        }
        
        .about-contact-job-title {
          color: var(--color-b);
        }

        .about-page-description {
          display: flex;
          flex-flow: column wrap;
          gap: 1rem;
        }

        .contact-profile-pic-container span {
          font-style: italic;
        }
        
        @media (min-width: 1200px){
          .about-page-card {
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;
            gap: 0;
          }

          .contact-profile-pic-container {
            width: 50%;
          }

          .about-contact-name {
            align-items: flex-start;
          }

          .about-page-description {
            width: 50%;
          }
        }
      `}</style>
    </Section>
  )
}