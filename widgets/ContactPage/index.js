import { Section } from "../../components";
import { contact } from "../../data";
import { ContactDetails } from "./ContactDetails";

export const ContactPage = () => {
  return (
    <Section>
      <div
        className="contact-page-card"
      >
        <h3
          className="contact-page-card-title"
        >{contact.title}</h3>
        {contact.description.split('<br>').map((line, i) => {
          return (
          <p
            key={i}
          >{line}</p>
          )
        })}
        <ContactDetails/>
      </div>

      <style jsx>{`

        .contact-page-card {
          width: 90%;
          display: flex;
          flex-flow: column wrap;
          gap: 2rem;
          align-items: flex-start;
        }

        .contact-page-card-title {
          color: var(--color-b);
        }
      
      `}</style>
    </Section>
  )
}