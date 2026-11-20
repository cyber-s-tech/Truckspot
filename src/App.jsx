import FeaturedTrucks from "./components/FeaturedTruck";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import HowItWorks from "./components/HowitWorks";
import MapSection from "./components/MapSection";
import Newsletter from "./components/Newsletter";
import TruckCard from "./components/TruckCard";
 
function App() {
 
  return (
 
    <>
 
      <Header />
 
      <main>
 
        <HeroBanner />
        <MapSection/>
        <TruckCard/>
        <FeaturedTrucks/>
        <HowItWorks/>
        <Newsletter/>
      </main>
       <Footer/>
    </>
 
  );
 
}
 
export default App;