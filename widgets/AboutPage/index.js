import { Section } from "../../components";
import { about } from "../../data";

import {
  AccountCircle as AccountCircleIcon
} from "@mui/icons-material";

export const AboutPage = () => {
  return (
    <Section>
      <div
        className="about-page-card"
      >
        <h3>{about.title}</h3>
        <div
          className="contact-profile-pic-container"
        >  
          <AccountCircleIcon fontSize="inherit"/>
          <p>{about.name} <span>{about.jobTitle}</span></p>
        </div>
        {about.description.split('<br>').map((line, i) => {
          return (
          <p
            key={i}
          >{line}</p>
          )
        })}
      </div>

      <style jsx>{`

        .about-page-card {
          width: 90%;
          display: flex;
          flex-flow: column wrap;
          gap: 2rem;
          align-items: flex-start;
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

        .contact-profile-pic-container span {
          font-style: italic;
        }
      
      `}</style>
    </Section>
  )
}