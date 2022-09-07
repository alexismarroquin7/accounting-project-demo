import { useState } from "react"

export const useToggle = (initialActive = false) => {
  const [active, setActive] = useState();

  const toggle = () => setActive(!active);
  
  return {
    active,
    setActive,
    toggle
  }
}