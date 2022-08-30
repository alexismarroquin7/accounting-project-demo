import { Section, Button } from "../../components";
import { home } from "../../data";

export const HomePage = () => {
  return (
    <Section>

      <div
        className="homepage-card"
      >
        <h3>{home.title}</h3>
        
        <p>{home.description}</p>
        
        <Button
          className="Button"
          text={home.button.text}
        />
      </div>
      
      <style jsx>{`
        .homepage-card {
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