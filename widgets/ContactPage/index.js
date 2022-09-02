import { Section } from "../../components";
import { contact } from "../../data";

export const ContactPage = () => {
  return (
    <Section>
      <div
        className="contact-page-card"
      >
        <h3>{contact.title}</h3>
        
      </div>

      <style jsx>{`

        .contact-page-card {
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