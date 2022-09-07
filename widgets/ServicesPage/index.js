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
              <Button>
                {service.button.text}
              </Button>
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
          padding: 4rem 2rem;
          display: flex;
          flex-flow: column wrap;
          gap: 2rem;
          align-items: flex-start;
          border-radius: 1rem;
          border: .2rem solid var(--color-b);
          background-color: var(--color-b);
          box-shadow: 0 2px 10px 0 rgba(0,0,0,.75);
        }
        
        /*
          breakpoints:
            [ ] 576px for portrait phones
            [ ] 768px for tablets
            [ ] 992px for laptops
            [ ] 1200px for large devices
        */
        @media (min-width: 1200px) {
          .services-list {
            flex-flow: row wrap;
            justify-content: space-between;
          }
          
          .services-item {
            width: 30%;
          }
        }

      `}</style>
    </Section>
  )
}