import { v4 as uuid } from "uuid";

export const services = {
  title: 'Services',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  list: [
    {
      id: uuid(),
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      button: {
        text: 'Book an appointment'
      }
    },
    {
      id: uuid(),
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      button: {
        text: 'Book an appointment'
      }
    },
    {
      id: uuid(),
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      button: {
        text: 'Book an appointment'
      }
    },
  ]
}