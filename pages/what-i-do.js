import { Footer, HomePage, Nav } from "../widgets"

export default function WhatIDoPage () {
  return <div>
    <Nav
      activeHref={"/what-i-do"}
    />
    <HomePage/>
    <Footer/>
  </div>
}