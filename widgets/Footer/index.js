import { footer } from "../../data";

export const Footer = () => {
  return (
    <footer>
      
      <div
        className="footer-links"
      >
        {footer.links.map(link => {
          return (
            <a
              key={link.id}
              href={link.href}
            >{link.text}</a>
          )
        })}
      </div>
      
      <div
        className="footer-bottom-text-container"
      >
        <p>{footer.bottom.text}</p>
        <p
          className="footer-sub-text"
        
        >{footer.bottom.subText}</p>
      </div>

      <style jsx>{`
        footer {
          border-top: .2rem solid var(--primary-color);
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          padding: 8rem 0;
          gap: 8rem;
        }

        .footer-links {
          width: 90%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          gap: 4rem;
        }
        
        a {
          color: var(--primary-color);
        }

        .footer-bottom-text-container {
          width: 90%;
          display: flex;
          flex-flow: column wrap;
          align-items: flex-start;
          gap: 2rem;
        }

        .footer-sub-text {
          font-style: italic;
        }
      `}</style>
    </footer>
  )
}