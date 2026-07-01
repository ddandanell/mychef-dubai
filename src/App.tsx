import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Analytics from './components/Analytics'
import PageLoader from './components/PageLoader'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const HowItWorks = lazy(() => import('./pages/HowItWorks'))
const OurChefs = lazy(() => import('./pages/OurChefs'))
const Menus = lazy(() => import('./pages/Menus'))
const PrivateChef = lazy(() => import('./pages/PrivateChef'))
const PrivateChefPrices = lazy(() => import('./pages/PrivateChefPrices'))
const Catering = lazy(() => import('./pages/Catering'))
const CateringPackages = lazy(() => import('./pages/CateringPackages'))
const LuxuryDining = lazy(() => import('./pages/LuxuryDining'))
const Events = lazy(() => import('./pages/Events'))
const Corporate = lazy(() => import('./pages/Corporate'))
const Villas = lazy(() => import('./pages/Villas'))
const Yachts = lazy(() => import('./pages/Yachts'))
const RomanticDinner = lazy(() => import('./pages/RomanticDinner'))
const ValentinesDayCatering = lazy(() => import('./pages/ValentinesDayCatering'))
const MothersDayCatering = lazy(() => import('./pages/MothersDayCatering'))
const UaeNationalDayCatering = lazy(() => import('./pages/UaeNationalDayCatering'))
const EasterCatering = lazy(() => import('./pages/EasterCatering'))
const HalloweenCatering = lazy(() => import('./pages/HalloweenCatering'))
const BirthdayCatering = lazy(() => import('./pages/BirthdayCatering'))
const WeddingCatering = lazy(() => import('./pages/WeddingCatering'))
const RamadanIftar = lazy(() => import('./pages/RamadanIftar'))
const ChristmasCatering = lazy(() => import('./pages/ChristmasCatering'))
const NewYearCatering = lazy(() => import('./pages/NewYearCatering'))
const BrunchCatering = lazy(() => import('./pages/BrunchCatering'))
const FestiveCatering = lazy(() => import('./pages/FestiveCatering'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Gallery = lazy(() => import('./pages/Gallery'))
const VenuePartners = lazy(() => import('./pages/VenuePartners'))
const Inquiry = lazy(() => import('./pages/Inquiry'))
const ThankYou = lazy(() => import('./pages/ThankYou'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Locations = lazy(() => import('./pages/Locations'))
const LocationDetail = lazy(() => import('./pages/LocationDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))
const PartyCatering = lazy(() => import('./pages/PartyCatering'))
const BachelorPartyCatering = lazy(() => import('./pages/BachelorPartyCatering'))
const BachelorettePartyCatering = lazy(() => import('./pages/BachelorettePartyCatering'))
const EngagementCatering = lazy(() => import('./pages/EngagementCatering'))
const AnniversaryCatering = lazy(() => import('./pages/AnniversaryCatering'))
const BabyShowerCatering = lazy(() => import('./pages/BabyShowerCatering'))
const PrivatePartyCatering = lazy(() => import('./pages/PrivatePartyCatering'))
const KidsBirthdayCatering = lazy(() => import('./pages/KidsBirthdayCatering'))
const PoolPartyCatering = lazy(() => import('./pages/PoolPartyCatering'))
const BeachCatering = lazy(() => import('./pages/BeachCatering'))
const DesertDining = lazy(() => import('./pages/DesertDining'))
const AfternoonTeaCatering = lazy(() => import('./pages/AfternoonTeaCatering'))
const BBQCatering = lazy(() => import('./pages/BBQCatering'))
const BuffetCatering = lazy(() => import('./pages/BuffetCatering'))
const CanapeCatering = lazy(() => import('./pages/CanapeCatering'))
const FingerFoodCatering = lazy(() => import('./pages/FingerFoodCatering'))
const LiveCookingStations = lazy(() => import('./pages/LiveCookingStations'))
const GrazingTable = lazy(() => import('./pages/GrazingTable'))
const DessertTableCatering = lazy(() => import('./pages/DessertTableCatering'))
const CocktailPartyCatering = lazy(() => import('./pages/CocktailPartyCatering'))
const MocktailBarCatering = lazy(() => import('./pages/MocktailBarCatering'))
const IndianCatering = lazy(() => import('./pages/IndianCatering'))
const ArabicCatering = lazy(() => import('./pages/ArabicCatering'))
const MediterraneanCatering = lazy(() => import('./pages/MediterraneanCatering'))
const ItalianCatering = lazy(() => import('./pages/ItalianCatering'))
const AsianCatering = lazy(() => import('./pages/AsianCatering'))
const SushiCatering = lazy(() => import('./pages/SushiCatering'))
const VeganCatering = lazy(() => import('./pages/VeganCatering'))
const VegetarianCatering = lazy(() => import('./pages/VegetarianCatering'))
const HalalCatering = lazy(() => import('./pages/HalalCatering'))
const HealthyCatering = lazy(() => import('./pages/HealthyCatering'))
const GlutenFreeCatering = lazy(() => import('./pages/GlutenFreeCatering'))
const DairyFreeCatering = lazy(() => import('./pages/DairyFreeCatering'))
const NutFreeCatering = lazy(() => import('./pages/NutFreeCatering'))
const KetoCatering = lazy(() => import('./pages/KetoCatering'))
const JainCatering = lazy(() => import('./pages/JainCatering'))
const PescatarianCatering = lazy(() => import('./pages/PescatarianCatering'))
const HalalPrivateDining = lazy(() => import('./pages/HalalPrivateDining'))
const Cuisines = lazy(() => import('./pages/Cuisines'))
const OfficeCatering = lazy(() => import('./pages/OfficeCatering'))
const BusinessLunchCatering = lazy(() => import('./pages/BusinessLunchCatering'))
const CorporateEventCatering = lazy(() => import('./pages/CorporateEventCatering'))
const ConferenceCatering = lazy(() => import('./pages/ConferenceCatering'))
const StaffMealsCatering = lazy(() => import('./pages/StaffMealsCatering'))
const FilmCrewCatering = lazy(() => import('./pages/FilmCrewCatering'))
const ProductionCatering = lazy(() => import('./pages/ProductionCatering'))
const SchoolCatering = lazy(() => import('./pages/SchoolCatering'))
const NurseryCatering = lazy(() => import('./pages/NurseryCatering'))
const CorporateMealPrep = lazy(() => import('./pages/CorporateMealPrep'))
const RamadanCatering = lazy(() => import('./pages/RamadanCatering'))
const SuhoorCatering = lazy(() => import('./pages/SuhoorCatering'))
const EidCatering = lazy(() => import('./pages/EidCatering'))
const DiwaliCatering = lazy(() => import('./pages/DiwaliCatering'))
const Guides = lazy(() => import('./pages/Guides'))
const Blog = lazy(() => import('./pages/Blog'))
const RamadanIftarTrends2026 = lazy(() => import('./pages/blog/RamadanIftarTrends2026'))
const YachtPartyMenuIdeas = lazy(() => import('./pages/blog/YachtPartyMenuIdeas'))
const PrivateChefCostDubai = lazy(() => import('./pages/blog/PrivateChefCostDubai'))
const CorporateCateringFullServiceVsDropOff = lazy(() => import('./pages/blog/CorporateCateringFullServiceVsDropOff'))
const WeeklyMealPrepVsFullTimeChef = lazy(() => import('./pages/blog/WeeklyMealPrepVsFullTimeChef'))
const BestPrivateChefBirthdayDinnerDubai = lazy(() => import('./pages/blog/BestPrivateChefBirthdayDinnerDubai'))
const PrivateChefPalmJumeirahGuide = lazy(() => import('./pages/blog/PrivateChefPalmJumeirahGuide'))
const HalalPrivateDiningDubaiWhatToAsk = lazy(() => import('./pages/blog/HalalPrivateDiningDubaiWhatToAsk'))
const DubaiCateringPricesGuide = lazy(() => import('./pages/guides/DubaiCateringPricesGuide'))
const ChefAhmed = lazy(() => import('./pages/chefs/ChefAhmed'))
const ChefSofia = lazy(() => import('./pages/chefs/ChefSofia'))
const ChefMarco = lazy(() => import('./pages/chefs/ChefMarco'))
const ChefLayla = lazy(() => import('./pages/chefs/ChefLayla'))
const CateringCostCalculator = lazy(() => import('./pages/CateringCostCalculator'))
const HowToChooseCatererDubai = lazy(() => import('./pages/guides/HowToChooseCatererDubai'))
const VillaCateringIdeas = lazy(() => import('./pages/guides/VillaCateringIdeas'))
const WeddingCateringChecklist = lazy(() => import('./pages/guides/WeddingCateringChecklist'))
const CorporateCateringChecklist = lazy(() => import('./pages/guides/CorporateCateringChecklist'))
const PrivateChefVsCatering = lazy(() => import('./pages/guides/PrivateChefVsCatering'))
const BuffetVsPlated = lazy(() => import('./pages/guides/BuffetVsPlated'))
const YachtCateringGuide = lazy(() => import('./pages/guides/YachtCateringGuide'))
const RamadanCateringGuide = lazy(() => import('./pages/guides/RamadanCateringGuide'))
const LuxuryDinnerPlanningGuide = lazy(() => import('./pages/guides/LuxuryDinnerPlanningGuide'))
const PrivateDiningGuide = lazy(() => import('./pages/guides/PrivateDiningGuide'))
const EventCateringPriceGuide2026 = lazy(() => import('./pages/EventCateringPriceGuide2026'))
const YachtCateringChecklist = lazy(() => import('./pages/guides/YachtCateringChecklist'))
const WeddingMenuPlanningGuide = lazy(() => import('./pages/guides/WeddingMenuPlanningGuide'))
const DubaiFoodTrendsReport2026 = lazy(() => import('./pages/guides/DubaiFoodTrendsReport2026'))
const BarServices = lazy(() => import('./pages/BarServices'))
const ProductLaunchCatering = lazy(() => import('./pages/ProductLaunchCatering'))
const BrandActivationCatering = lazy(() => import('./pages/BrandActivationCatering'))
const GalaDinnerCatering = lazy(() => import('./pages/GalaDinnerCatering'))
const PrivateCookingClassesDubai = lazy(() => import('./pages/PrivateCookingClassesDubai'))
const VIPClub = lazy(() => import('./pages/VIPClub'))
const GiftCards = lazy(() => import('./pages/GiftCards'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const WeeklyMealPrep = lazy(() => import('./pages/WeeklyMealPrep'))
const HowWeVetOurChefs = lazy(() => import('./pages/HowWeVetOurChefs'))
const BookingProtectionInsurance = lazy(() => import('./pages/BookingProtectionInsurance'))
const BecomeAMyChef = lazy(() => import('./pages/BecomeAMyChef'))
const ReviewRequest = lazy(() => import('./pages/ReviewRequest'))
const PartnerWithUs = lazy(() => import('./pages/PartnerWithUs'))

export default function App() {
  return (
    <Layout>
      <Analytics />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/our-chefs" element={<OurChefs />} />
          <Route path="/chefs/ahmed-executive-chef" element={<ChefAhmed />} />
          <Route path="/chefs/sofia-pastry-chef" element={<ChefSofia />} />
          <Route path="/chefs/marco-italian-chef" element={<ChefMarco />} />
          <Route path="/chefs/layla-middle-eastern-chef" element={<ChefLayla />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/private-chef-dubai" element={<PrivateChef />} />
          <Route path="/private-chef-prices-dubai" element={<PrivateChefPrices />} />
          <Route path="/catering-dubai" element={<Catering />} />
          <Route path="/catering-packages-dubai" element={<CateringPackages />} />
          <Route path="/luxury-dining-experiences" element={<LuxuryDining />} />
          <Route path="/events" element={<Events />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/villas-private-residences" element={<Villas />} />
          <Route path="/yachts" element={<Yachts />} />
          <Route path="/romantic-dinner-dubai" element={<RomanticDinner />} />
          <Route path="/valentines-day-catering-dubai" element={<ValentinesDayCatering />} />
          <Route path="/mothers-day-catering-dubai" element={<MothersDayCatering />} />
          <Route path="/uae-national-day-catering-dubai" element={<UaeNationalDayCatering />} />
          <Route path="/easter-catering-dubai" element={<EasterCatering />} />
          <Route path="/halloween-catering-dubai" element={<HalloweenCatering />} />
          <Route path="/birthday-catering-dubai" element={<BirthdayCatering />} />
          <Route path="/wedding-catering-dubai" element={<WeddingCatering />} />
          <Route path="/iftar-catering-dubai" element={<RamadanIftar />} />
          <Route path="/christmas-catering-dubai" element={<ChristmasCatering />} />
          <Route path="/new-year-catering-dubai" element={<NewYearCatering />} />
          <Route path="/brunch-catering-dubai" element={<BrunchCatering />} />
          <Route path="/festive-catering-dubai" element={<FestiveCatering />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/venue-partners" element={<VenuePartners />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:slug" element={<LocationDetail />} />
          <Route path="/party-catering-dubai" element={<PartyCatering />} />
          <Route path="/bachelor-party-catering-dubai" element={<BachelorPartyCatering />} />
          <Route path="/bachelorette-party-catering-dubai" element={<BachelorettePartyCatering />} />
          <Route path="/engagement-catering-dubai" element={<EngagementCatering />} />
          <Route path="/anniversary-catering-dubai" element={<AnniversaryCatering />} />
          <Route path="/baby-shower-catering-dubai" element={<BabyShowerCatering />} />
          <Route path="/private-party-catering-dubai" element={<PrivatePartyCatering />} />
          <Route path="/kids-birthday-catering-dubai" element={<KidsBirthdayCatering />} />
          <Route path="/pool-party-catering-dubai" element={<PoolPartyCatering />} />
          <Route path="/beach-catering-dubai" element={<BeachCatering />} />
          <Route path="/desert-dining-dubai" element={<DesertDining />} />
          <Route path="/afternoon-tea-catering-dubai" element={<AfternoonTeaCatering />} />
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
          <Route path="/gluten-free-catering-dubai" element={<GlutenFreeCatering />} />
          <Route path="/dairy-free-catering-dubai" element={<DairyFreeCatering />} />
          <Route path="/nut-free-catering-dubai" element={<NutFreeCatering />} />
          <Route path="/keto-catering-dubai" element={<KetoCatering />} />
          <Route path="/jain-catering-dubai" element={<JainCatering />} />
          <Route path="/pescatarian-catering-dubai" element={<PescatarianCatering />} />
          <Route path="/halal-private-dining-dubai" element={<HalalPrivateDining />} />
          <Route path="/cuisines-dubai" element={<Cuisines />} />
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
          <Route path="/guides" element={<Guides />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/ramadan-iftar-catering-trends-2026" element={<RamadanIftarTrends2026 />} />
          <Route path="/blog/yacht-party-menu-ideas-dubai" element={<YachtPartyMenuIdeas />} />
          <Route path="/blog/how-much-does-private-chef-cost-dubai" element={<PrivateChefCostDubai />} />
          <Route path="/blog/corporate-catering-full-service-vs-drop-off" element={<CorporateCateringFullServiceVsDropOff />} />
          <Route path="/blog/weekly-meal-prep-vs-full-time-chef-dubai" element={<WeeklyMealPrepVsFullTimeChef />} />
          <Route path="/blog/best-private-chef-birthday-dinner-dubai" element={<BestPrivateChefBirthdayDinnerDubai />} />
          <Route path="/blog/private-chef-palm-jumeirah-guide" element={<PrivateChefPalmJumeirahGuide />} />
          <Route path="/blog/halal-private-dining-dubai-what-to-ask" element={<HalalPrivateDiningDubaiWhatToAsk />} />
          <Route path="/dubai-catering-prices-guide" element={<DubaiCateringPricesGuide />} />
          <Route path="/catering-cost-calculator-dubai" element={<CateringCostCalculator />} />
          <Route path="/how-to-choose-caterer-dubai" element={<HowToChooseCatererDubai />} />
          <Route path="/villa-catering-ideas-dubai" element={<VillaCateringIdeas />} />
          <Route path="/wedding-catering-checklist-dubai" element={<WeddingCateringChecklist />} />
          <Route path="/corporate-catering-checklist-dubai" element={<CorporateCateringChecklist />} />
          <Route path="/private-chef-vs-catering-dubai" element={<PrivateChefVsCatering />} />
          <Route path="/buffet-vs-plated-dubai" element={<BuffetVsPlated />} />
          <Route path="/yacht-catering-guide-dubai" element={<YachtCateringGuide />} />
          <Route path="/ramadan-catering-guide-dubai" element={<RamadanCateringGuide />} />
          <Route path="/luxury-dinner-planning-guide-dubai" element={<LuxuryDinnerPlanningGuide />} />
          <Route path="/guide/private-dining-dubai" element={<PrivateDiningGuide />} />
          <Route path="/dubai-event-catering-price-guide-2026" element={<EventCateringPriceGuide2026 />} />
          <Route path="/yacht-catering-checklist-dubai" element={<YachtCateringChecklist />} />
          <Route path="/wedding-catering-menu-planning-dubai" element={<WeddingMenuPlanningGuide />} />
          <Route path="/dubai-food-trends-report-2026" element={<DubaiFoodTrendsReport2026 />} />
          <Route path="/bar-services-dubai" element={<BarServices />} />
          <Route path="/product-launch-catering-dubai" element={<ProductLaunchCatering />} />
          <Route path="/brand-activation-catering-dubai" element={<BrandActivationCatering />} />
          <Route path="/gala-dinner-catering-dubai" element={<GalaDinnerCatering />} />
          <Route path="/private-cooking-classes-dubai" element={<PrivateCookingClassesDubai />} />
          <Route path="/vip-club" element={<VIPClub />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/weekly-meal-prep-dubai" element={<WeeklyMealPrep />} />
          <Route path="/how-we-vet-our-chefs" element={<HowWeVetOurChefs />} />
          <Route path="/booking-protection-insurance" element={<BookingProtectionInsurance />} />
          <Route path="/become-a-mychef" element={<BecomeAMyChef />} />
          <Route path="/review" element={<ReviewRequest />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
