import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Analytics from './components/Analytics'
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
import BBQCatering from './pages/BBQCatering'
import BuffetCatering from './pages/BuffetCatering'
import CanapeCatering from './pages/CanapeCatering'
import FingerFoodCatering from './pages/FingerFoodCatering'
import LiveCookingStations from './pages/LiveCookingStations'
import GrazingTable from './pages/GrazingTable'
import DessertTableCatering from './pages/DessertTableCatering'
import CocktailPartyCatering from './pages/CocktailPartyCatering'
import MocktailBarCatering from './pages/MocktailBarCatering'
import IndianCatering from './pages/IndianCatering'
import ArabicCatering from './pages/ArabicCatering'
import MediterraneanCatering from './pages/MediterraneanCatering'
import ItalianCatering from './pages/ItalianCatering'
import AsianCatering from './pages/AsianCatering'
import SushiCatering from './pages/SushiCatering'
import VeganCatering from './pages/VeganCatering'
import VegetarianCatering from './pages/VegetarianCatering'
import HalalCatering from './pages/HalalCatering'
import HealthyCatering from './pages/HealthyCatering'
import OfficeCatering from './pages/OfficeCatering'
import BusinessLunchCatering from './pages/BusinessLunchCatering'
import CorporateEventCatering from './pages/CorporateEventCatering'
import ConferenceCatering from './pages/ConferenceCatering'
import StaffMealsCatering from './pages/StaffMealsCatering'
import FilmCrewCatering from './pages/FilmCrewCatering'
import ProductionCatering from './pages/ProductionCatering'
import SchoolCatering from './pages/SchoolCatering'
import NurseryCatering from './pages/NurseryCatering'
import CorporateMealPrep from './pages/CorporateMealPrep'
import RamadanCatering from './pages/RamadanCatering'
import SuhoorCatering from './pages/SuhoorCatering'
import EidCatering from './pages/EidCatering'
import DiwaliCatering from './pages/DiwaliCatering'

export default function App() {
  return (
    <Layout>
      <Analytics />
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
        <Route path="/bbq-catering-dubai" element={<BBQCatering />} />
        <Route path="/buffet-catering-dubai" element={<BuffetCatering />} />
        <Route path="/canape-catering-dubai" element={<CanapeCatering />} />
        <Route path="/finger-food-catering-dubai" element={<FingerFoodCatering />} />
        <Route path="/live-cooking-stations-dubai" element={<LiveCookingStations />} />
        <Route path="/grazing-table-dubai" element={<GrazingTable />} />
        <Route path="/dessert-table-catering-dubai" element={<DessertTableCatering />} />
        <Route path="/cocktail-party-catering-dubai" element={<CocktailPartyCatering />} />
        <Route path="/mocktail-bar-catering-dubai" element={<MocktailBarCatering />} />
        <Route path="/indian-catering-dubai" element={<IndianCatering />} />
        <Route path="/arabic-catering-dubai" element={<ArabicCatering />} />
        <Route path="/mediterranean-catering-dubai" element={<MediterraneanCatering />} />
        <Route path="/italian-catering-dubai" element={<ItalianCatering />} />
        <Route path="/asian-catering-dubai" element={<AsianCatering />} />
        <Route path="/sushi-catering-dubai" element={<SushiCatering />} />
        <Route path="/vegan-catering-dubai" element={<VeganCatering />} />
        <Route path="/vegetarian-catering-dubai" element={<VegetarianCatering />} />
        <Route path="/halal-catering-dubai" element={<HalalCatering />} />
        <Route path="/healthy-catering-dubai" element={<HealthyCatering />} />
        <Route path="/office-catering-dubai" element={<OfficeCatering />} />
        <Route path="/business-lunch-catering-dubai" element={<BusinessLunchCatering />} />
        <Route path="/corporate-event-catering-dubai" element={<CorporateEventCatering />} />
        <Route path="/conference-catering-dubai" element={<ConferenceCatering />} />
        <Route path="/staff-meals-catering-dubai" element={<StaffMealsCatering />} />
        <Route path="/film-crew-catering-dubai" element={<FilmCrewCatering />} />
        <Route path="/production-catering-dubai" element={<ProductionCatering />} />
        <Route path="/school-catering-dubai" element={<SchoolCatering />} />
        <Route path="/nursery-catering-dubai" element={<NurseryCatering />} />
        <Route path="/corporate-meal-prep-dubai" element={<CorporateMealPrep />} />
        <Route path="/ramadan-catering-dubai" element={<RamadanCatering />} />
        <Route path="/suhoor-catering-dubai" element={<SuhoorCatering />} />
        <Route path="/eid-catering-dubai" element={<EidCatering />} />
        <Route path="/diwali-catering-dubai" element={<DiwaliCatering />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}
