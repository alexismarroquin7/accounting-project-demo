import { AboutPage, Footer, Nav } from "../widgets"

export default function Services () {
  return <div>
    <Nav
      activeHref={"/about"}
    />
    <AboutPage/>
    <Footer/>
  </div>
}