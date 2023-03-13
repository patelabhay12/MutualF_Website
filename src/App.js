import './App.css';
import About from './Components/AboutUs/About';
import Contact from './Components/contact/Contact';
import Feature from './Components/Feature/Feature';
import Hero from './Components/Hero/Hero';
import Market from './Components/Marketv/Market';
import MobileApp from './Components/Mobile/MobileApp';
import Mutual from './Components/MutualFun/Mutual';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <MobileApp />
      <Mutual />
      <Market />
      <Contact />
    </div>
  );
}
export default App;
