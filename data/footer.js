import { v4 as uuid } from "uuid";

export const footer = {
  links: [
    {
      id: uuid(),
      text: 'Home',
      href: '/'
    },
    {
      id: uuid(),
      text: 'What I Do',
      href: '/'
    },
    {
      id: uuid(),
      text: 'Services',
      href: '/'
    },
    {
      id: uuid(),
      text: 'About',
      href: '/'
    },
    {
      id: uuid(),
      text: 'Contact',
      href: '/'
    },
  ],
  bottom: {
    text: 'John Smith',
    subText: 'Certified Public Accountant'

  }
}