import Link from "next/link";
import { v4 as uuid } from "uuid";

const links = [
  {
    id: uuid(),
    href: "/",
    text: "Home"
  },
  {
    id: uuid(),
    href: "/what-i-do",
    text: "What I Do"
  },
  {
    id: uuid(),
    href: "/services",
    text: "Services"
  },
  {
    id: uuid(),
    href: "/about",
    text: "About"
  },
  {
    id: uuid(),
    href: "/contact",
    text: "Contact"
  }
]

export const NavTabs = ({ activeHref = '/' }) => {
  return (
    <div
      className="nav-desktop-links"
    >
      {links.map(link => {
        return (
          <Link
            key={link.id}
            href={link.href}
            passHref
          >
            <a
              className={`${activeHref === link.href ? 'active' : ''}`}
            >{link.text}</a>
          </Link>
        )
      })}
      
      
      <style jsx>{`
        .nav-desktop-links {
          display: none;
        }

        a {
          color: var(--color-c);
          text-decoration: none;
          font-weight: bold;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          border-bottom: .2rem solid transparent;
          transition: all .2s;
        }
        
        a.active {
          border-bottom-color: var(--color-c);
        }
        a:hover {
          border-bottom-color: var(--color-c);
        }

        @media (min-width: 996px) { 
          .nav-desktop-links {
            display: flex;
            flex-flow: row wrap; 
            align-items: center;
            gap: 4rem;
          }
        }
        
      `}</style>
    </div>
  )
}