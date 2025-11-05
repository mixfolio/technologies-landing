import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import Form from "./components/Form";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Showcase />
      <Performance />
      <Highlights />
      <Form />
      <Footer />
    </main>
  );
};

export default App;
