import { Section } from "../../components";
import { about } from "../../data";

export const AboutPage = () => {
  return (
    <Section>
      <div
        className="about-page-card"
      >
        <h3>{about.title}</h3>
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
      
      `}</style>
    </Section>
  )
}