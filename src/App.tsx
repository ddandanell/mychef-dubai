import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import HowItWorks from './pages/HowItWorks'
import OurChefs from './pages/OurChefs'
import Menus from './pages/Menus'
import PrivateChef from './pages/PrivateChef'
import Catering from './pages/Catering'
import LuxuryDining from './pages/LuxuryDining'
import Events from './pages/Events'
import Corporate from './pages/Corporate'
import Villas from './pages/Villas'
import Yachts from './pages/Yachts'
import RomanticDinner from './pages/RomanticDinner'
import BirthdayCatering from './pages/BirthdayCatering'
import WeddingCatering from './pages/WeddingCatering'
import RamadanIftar from './pages/RamadanIftar'
import ChristmasCatering from './pages/ChristmasCatering'
import NewYearCatering from './pages/NewYearCatering'
import BrunchCatering from './pages/BrunchCatering'
import FAQ from './pages/FAQ'
import Inquiry from './pages/Inquiry'
import ThankYou from './pages/ThankYou'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Locations from './pages/Locations'
import LocationDetail from './pages/LocationDetail'
import ServiceDetail from './pages/ServiceDetail'
import PartyCatering from './pages/PartyCatering'
import BachelorPartyCatering from './pages/BachelorPartyCatering'
import BachelorettePartyCatering from './pages/BachelorettePartyCatering'
import EngagementCatering from './pages/EngagementCatering'
import AnniversaryCatering from './pages/AnniversaryCatering'
import BabyShowerCatering from './pages/BabyShowerCatering'
import PrivatePartyCatering from './pages/PrivatePartyCatering'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/our-chefs" element={<OurChefs />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/private-chef-dubai" element={<PrivateChef />} />
        <Route path="/catering-dubai" element={<Catering />} />
        <Route path="/luxury-dining-experiences" element={<LuxuryDining />} />
        <Route path="/events" element={<Events />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/villas-private-residences" element={<Villas />} />
        <Route path="/yachts" element={<Yachts />} />
        <Route path="/romantic-dinner-dubai" element={<RomanticDinner />} />
        <Route path="/birthday-catering-dubai" element={<BirthdayCatering />} />
        <Route path="/wedding-catering-dubai" element={<WeddingCatering />} />
        <Route path="/iftar-catering-dubai" element={<RamadanIftar />} />
        <Route path="/christmas-catering-dubai" element={<ChristmasCatering />} />
        <Route path="/new-year-catering-dubai" element={<NewYearCatering />} />
        <Route path="/brunch-catering-dubai" element={<BrunchCatering />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:slug" element={<LocationDetail />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/party-catering-dubai" element={<PartyCatering />} />
        <Route path="/bachelor-party-catering-dubai" element={<BachelorPartyCatering />} />
        <Route path="/bachelorette-party-catering-dubai" element={<BachelorettePartyCatering />} />
        <Route path="/engagement-catering-dubai" element={<EngagementCatering />} />
        <Route path="/anniversary-catering-dubai" element={<AnniversaryCatering />} />
        <Route path="/baby-shower-catering-dubai" element={<BabyShowerCatering />} />
        <Route path="/private-party-catering-dubai" element={<PrivatePartyCatering />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}
