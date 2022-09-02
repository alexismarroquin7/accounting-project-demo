import { useState } from "react"

const initialValues = {
  firstName: '',
  
}


export const ContactForm = () => {
  const [values, setValues] = useState(initialValues);
  return (
    <form>
      <input />
      <button>Submit</button>
    </form>
  )
}