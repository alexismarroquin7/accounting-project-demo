import { Footer, Nav, ServicesPage } from "../widgets"

export default function Services () {
  return <div>
    <Nav
      activeHref={"/services"}
    />
    <ServicesPage/>
    <Footer/>
  </div>
}