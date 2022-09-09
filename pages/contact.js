import { ContactPage, Footer, Nav } from "../widgets"

export default function Services () {
  return <div>
    <Nav
      activeHref={"/contact"}
    />
    <ContactPage/>
    <Footer/>
  </div>
}