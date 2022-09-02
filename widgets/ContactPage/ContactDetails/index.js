import { contact } from "../../../data";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Business as BusinessIcon
} from "@mui/icons-material";

export const ContactDetails = () => {
  return (
    <div
      className="contact-details"
    >
      
      <a
        className="icon-font-size"
        href={`tel:${contact.phoneNumber}`}
      >
        <PhoneIcon fontSize="inherit"/>
        {contact.phoneNumber}
      </a>
      
      <a
        className="icon-font-size"
        href={`mailto:${contact.email}`}
      >
        <EmailIcon fontSize="inherit"/>
        {contact.email}
      </a>
      <a
        className="icon-font-size"
        href={`http://maps.google.com/?q=${contact.address}`}
      >
        <BusinessIcon fontSize="inherit"/>
        {contact.address}
      </a>
      <style jsx>{`
        .contact-details {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: flex-start;
          gap: 4rem;
        }

        

        a {
          width: 100%;
          display: flex;
          flex-flow: row nowrap;
          gap: 1rem;
          color: var(--primary-color);
        }
        
      `}</style>
    </div>
  )
}