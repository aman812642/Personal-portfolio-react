import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Cursor from "./Components/Cursor";


function App() {
  return (
    <>
      <div className="overflow-x-hidden">

      <div className="relative h-full w-full bg-slate-950">
        <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
      <div className="overflow-x-hidden text-neutral-300 selection:text-cyan-900 selection:bg-cyan-300 px-5">
        <Cursor/>
        <Navbar />
        <Hero />
        <About/>
        <Technologies/>
        <Projects/>
        <Contact/>
      </div>
      </div>
    </>
  );
}

export default App;
