import React from "react";
import { Hero, Navbar, About } from "./childcomponents";

const Header = () => (
  <section className="grid__layout">
    <About />
    <Hero />
    <Navbar />
  </section>
);
export default Header;
