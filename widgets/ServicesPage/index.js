import { Section, Button } from "../../components";
import { services } from "../../data";

export const ServicesPage = () => {
  return (
    <Section>

      <div
        className="services-page-card"
      >

        <h3>{services.title}</h3>
        
        <p>{services.description}</p>
        
        <div
          className="services-list"
        >
          {services.list.map(service => {
            return (
            <div
              key={service.id}
              className="services-item"
            >
              <h5>{service.title}</h5>
              <p>{service.description}</p>
              <Button
                text={service.button.text}
              />
            </div>
            )
          })}
        </div>
      
      </div>

      
      <style jsx>{`
        .services-page-card {
          width: 90%;
          display: flex;
          flex-flow: column wrap;
          gap: 2rem;
          align-items: flex-start;
        }

        .services-list {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          gap: 2rem;
          align-items: flex-start;
        }
        
        .services-item {
          width: 100%;
          border: 1px solid black;
          padding: 4rem 2rem;
          display: flex;
          flex-flow: column wrap;
          gap: 2rem;
          align-items: flex-start;
        }
      `}</style>
    </Section>
  )
}