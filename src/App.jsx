import FeaturedTrucks from "./components/FeaturedTruck";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import HowWork from "./components/HowWork";
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
        <HowWork/>
        <Newsletter/>
      </main>
       <Footer/>
    </>
 
  );
 
}
 
export default App;