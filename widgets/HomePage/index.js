import { Section, Button } from "../../components";
import { home } from "../../data";

export const HomePage = () => {
  return (
    <Section>

      <div
        className="homepage-card"
      >
        <h3
          className="homepage-card-title"
        >{home.title}</h3>
        
        {home.description.split('<br>').map((line, i) => {
          return (
          <p
            key={i}
          >{line}</p>
          )
        })}
        
        <Button>{home.button.text}</Button>
        
      </div>
      
      <style jsx>{`
        .homepage-card {
          width: 90%;
          display: flex;
          flex-flow: column wrap;
          gap: 2rem;
          align-items: flex-start;
        }
        .homepage-card-title {
          color: var(--color-b);
        }
      `}</style>
    </Section>
  )
}