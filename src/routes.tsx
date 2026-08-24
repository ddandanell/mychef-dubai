// AUTO-GENERATED from App.tsx by scripts/gen-routes (do not hand-edit route list).
// Data-driven route table enabling per-route chunk preload before hydrateRoot.
import type { ReactElement } from 'react'
import { lazyPreloadable, type PreloadableComponent } from './lib/lazyPreloadable'
import HandoffPage from './components/HandoffPage'

// Preloadable lazy components (one per unique page module)
const Home: PreloadableComponent = lazyPreloadable(() => import('./pages/Home'))
const About: PreloadableComponent = lazyPreloadable(() => import('./pages/About'))
const Contact: PreloadableComponent = lazyPreloadable(() => import('./pages/Contact'))
const HowItWorks: PreloadableComponent = lazyPreloadable(() => import('./pages/HowItWorks'))
const OurChefs: PreloadableComponent = lazyPreloadable(() => import('./pages/OurChefs'))
const ChefAhmed: PreloadableComponent = lazyPreloadable(() => import('./pages/chefs/ChefAhmed'))
const ChefMatteo: PreloadableComponent = lazyPreloadable(() => import('./pages/chefs/ChefMatteo'))
const ChefMarco: PreloadableComponent = lazyPreloadable(() => import('./pages/chefs/ChefMarco'))
const ChefLayla: PreloadableComponent = lazyPreloadable(() => import('./pages/chefs/ChefLayla'))
const Menus: PreloadableComponent = lazyPreloadable(() => import('./pages/Menus'))
const PrivateChef: PreloadableComponent = lazyPreloadable(() => import('./pages/PrivateChef'))
const PrivateChefPrices: PreloadableComponent = lazyPreloadable(() => import('./pages/PrivateChefPrices'))
const Catering: PreloadableComponent = lazyPreloadable(() => import('./pages/Catering'))
const CateringPackages: PreloadableComponent = lazyPreloadable(() => import('./pages/CateringPackages'))
const DateNightPackage: PreloadableComponent = lazyPreloadable(() => import('./pages/DateNightPackage'))
const FamilyFeastPackage: PreloadableComponent = lazyPreloadable(() => import('./pages/FamilyFeastPackage'))
const BirthdayPackage: PreloadableComponent = lazyPreloadable(() => import('./pages/BirthdayPackage'))
const CorporateDinnerPackage: PreloadableComponent = lazyPreloadable(() => import('./pages/CorporateDinnerPackage'))
const LuxuryDining: PreloadableComponent = lazyPreloadable(() => import('./pages/LuxuryDining'))
const Events: PreloadableComponent = lazyPreloadable(() => import('./pages/Events'))
const Corporate: PreloadableComponent = lazyPreloadable(() => import('./pages/Corporate'))
const CorporateCateringDubai: PreloadableComponent = lazyPreloadable(() => import('./pages/CorporateCateringDubai'))
const Villas: PreloadableComponent = lazyPreloadable(() => import('./pages/Villas'))
const Yachts: PreloadableComponent = lazyPreloadable(() => import('./pages/Yachts'))
const RomanticDinner: PreloadableComponent = lazyPreloadable(() => import('./pages/RomanticDinner'))
const ValentinesDayCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/ValentinesDayCatering'))
const MothersDayCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/MothersDayCatering'))
const UaeNationalDayCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/UaeNationalDayCatering'))
const EasterCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/EasterCatering'))
const HalloweenCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/HalloweenCatering'))
const BirthdayCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/BirthdayCatering'))
const WeddingCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/WeddingCatering'))
const RamadanIftar: PreloadableComponent = lazyPreloadable(() => import('./pages/RamadanIftar'))
const ChristmasCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/ChristmasCatering'))
const NewYearCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/NewYearCatering'))
const BrunchCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/BrunchCatering'))
const BreakfastCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/BreakfastCatering'))
const DropOffCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/DropOffCatering'))
const TastingMenu: PreloadableComponent = lazyPreloadable(() => import('./pages/TastingMenu'))
const FestiveCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/FestiveCatering'))
const FAQ: PreloadableComponent = lazyPreloadable(() => import('./pages/FAQ'))
const Gallery: PreloadableComponent = lazyPreloadable(() => import('./pages/Gallery'))
const VenuePartners: PreloadableComponent = lazyPreloadable(() => import('./pages/VenuePartners'))
const Inquiry: PreloadableComponent = lazyPreloadable(() => import('./pages/Inquiry'))
const ThankYou: PreloadableComponent = lazyPreloadable(() => import('./pages/ThankYou'))
const Privacy: PreloadableComponent = lazyPreloadable(() => import('./pages/Privacy'))
const Terms: PreloadableComponent = lazyPreloadable(() => import('./pages/Terms'))
const Locations: PreloadableComponent = lazyPreloadable(() => import('./pages/Locations'))
const LocationDetail: PreloadableComponent = lazyPreloadable(() => import('./pages/LocationDetail'))
const PartyCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/PartyCatering'))
const BachelorPartyCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/BachelorPartyCatering'))
const BachelorettePartyCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/BachelorettePartyCatering'))
const EngagementCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/EngagementCatering'))
const AnniversaryCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/AnniversaryCatering'))
const BabyShowerCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/BabyShowerCatering'))
const PrivatePartyCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/PrivatePartyCatering'))
const KidsBirthdayCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/KidsBirthdayCatering'))
const PoolPartyCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/PoolPartyCatering'))
const BeachCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/BeachCatering'))
const DesertDining: PreloadableComponent = lazyPreloadable(() => import('./pages/DesertDining'))
const AfternoonTeaCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/AfternoonTeaCatering'))
const HousewarmingCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/HousewarmingCatering'))
const GraduationCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/GraduationCatering'))
const FarewellCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/FarewellCatering'))
const ReunionCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/ReunionCatering'))
const FathersDayCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/FathersDayCatering'))
const ChineseNewYearCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/ChineseNewYearCatering'))
const HoliCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/HoliCatering'))
const PicnicCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/PicnicCatering'))
const CoffeeTeaService: PreloadableComponent = lazyPreloadable(() => import('./pages/CoffeeTeaService'))
const DessertCart: PreloadableComponent = lazyPreloadable(() => import('./pages/DessertCart'))
const ShawarmaStation: PreloadableComponent = lazyPreloadable(() => import('./pages/ShawarmaStation'))
const OysterBar: PreloadableComponent = lazyPreloadable(() => import('./pages/OysterBar'))
const GovernmentEventCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/GovernmentEventCatering'))
const UniversityCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/UniversityCatering'))
const HealthcareCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/HealthcareCatering'))
const BBQCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/BBQCatering'))
const BuffetCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/BuffetCatering'))
const CanapeCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/CanapeCatering'))
const FingerFoodCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/FingerFoodCatering'))
const LiveCookingStations: PreloadableComponent = lazyPreloadable(() => import('./pages/LiveCookingStations'))
const GrazingTable: PreloadableComponent = lazyPreloadable(() => import('./pages/GrazingTable'))
const DessertTableCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/DessertTableCatering'))
const CocktailPartyCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/CocktailPartyCatering'))
const MocktailBarCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/MocktailBarCatering'))
const IndianCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/IndianCatering'))
const ArabicCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/ArabicCatering'))
const MediterraneanCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/MediterraneanCatering'))
const ItalianCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/ItalianCatering'))
const AsianCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/AsianCatering'))
const SushiCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/SushiCatering'))
const VeganCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/VeganCatering'))
const VegetarianCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/VegetarianCatering'))
const HalalCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/HalalCatering'))
const HealthyCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/HealthyCatering'))
const GlutenFreeCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/GlutenFreeCatering'))
const DairyFreeCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/DairyFreeCatering'))
const NutFreeCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/NutFreeCatering'))
const KetoCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/KetoCatering'))
const JainCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/JainCatering'))
const PescatarianCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/PescatarianCatering'))
const SugarFreeCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/SugarFreeCatering'))
const FodmapCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/FodmapCatering'))
const HalalPrivateDining: PreloadableComponent = lazyPreloadable(() => import('./pages/HalalPrivateDining'))
const Cuisines: PreloadableComponent = lazyPreloadable(() => import('./pages/Cuisines'))
const OfficeCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/OfficeCatering'))
const BusinessLunchCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/BusinessLunchCatering'))
const CorporateEventCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/CorporateEventCatering'))
const ConferenceCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/ConferenceCatering'))
const StaffMealsCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/StaffMealsCatering'))
const FilmCrewCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/FilmCrewCatering'))
const ProductionCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/ProductionCatering'))
const SchoolCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/SchoolCatering'))
const NurseryCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/NurseryCatering'))
const CorporateMealPrep: PreloadableComponent = lazyPreloadable(() => import('./pages/CorporateMealPrep'))
const RamadanCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/RamadanCatering'))
const SuhoorCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/SuhoorCatering'))
const EidCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/EidCatering'))
const DiwaliCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/DiwaliCatering'))
const Guides: PreloadableComponent = lazyPreloadable(() => import('./pages/Guides'))
const Blog: PreloadableComponent = lazyPreloadable(() => import('./pages/Blog'))
const RamadanIftarTrends2026: PreloadableComponent = lazyPreloadable(() => import('./pages/blog/RamadanIftarTrends2026'))
const YachtPartyMenuIdeas: PreloadableComponent = lazyPreloadable(() => import('./pages/blog/YachtPartyMenuIdeas'))
const PrivateChefCostDubai: PreloadableComponent = lazyPreloadable(() => import('./pages/blog/PrivateChefCostDubai'))
const CorporateCateringFullServiceVsDropOff: PreloadableComponent = lazyPreloadable(() => import('./pages/blog/CorporateCateringFullServiceVsDropOff'))
const WeeklyMealPrepVsFullTimeChef: PreloadableComponent = lazyPreloadable(() => import('./pages/blog/WeeklyMealPrepVsFullTimeChef'))
const BestPrivateChefBirthdayDinnerDubai: PreloadableComponent = lazyPreloadable(() => import('./pages/blog/BestPrivateChefBirthdayDinnerDubai'))
const PrivateChefPalmJumeirahGuide: PreloadableComponent = lazyPreloadable(() => import('./pages/blog/PrivateChefPalmJumeirahGuide'))
const HalalPrivateDiningDubaiWhatToAsk: PreloadableComponent = lazyPreloadable(() => import('./pages/blog/HalalPrivateDiningDubaiWhatToAsk'))
const DubaiCateringPricesGuide: PreloadableComponent = lazyPreloadable(() => import('./pages/guides/DubaiCateringPricesGuide'))
const CateringCostCalculator: PreloadableComponent = lazyPreloadable(() => import('./pages/CateringCostCalculator'))
const HowToChooseCatererDubai: PreloadableComponent = lazyPreloadable(() => import('./pages/guides/HowToChooseCatererDubai'))
const VillaCateringIdeas: PreloadableComponent = lazyPreloadable(() => import('./pages/guides/VillaCateringIdeas'))
const WeddingCateringChecklist: PreloadableComponent = lazyPreloadable(() => import('./pages/guides/WeddingCateringChecklist'))
const CorporateCateringChecklist: PreloadableComponent = lazyPreloadable(() => import('./pages/guides/CorporateCateringChecklist'))
const PrivateChefVsCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/guides/PrivateChefVsCatering'))
const BuffetVsPlated: PreloadableComponent = lazyPreloadable(() => import('./pages/guides/BuffetVsPlated'))
const YachtCateringGuide: PreloadableComponent = lazyPreloadable(() => import('./pages/guides/YachtCateringGuide'))
const RamadanCateringGuide: PreloadableComponent = lazyPreloadable(() => import('./pages/guides/RamadanCateringGuide'))
const LuxuryDinnerPlanningGuide: PreloadableComponent = lazyPreloadable(() => import('./pages/guides/LuxuryDinnerPlanningGuide'))
const PrivateDiningGuide: PreloadableComponent = lazyPreloadable(() => import('./pages/guides/PrivateDiningGuide'))
const EventCateringPriceGuide2026: PreloadableComponent = lazyPreloadable(() => import('./pages/EventCateringPriceGuide2026'))
const YachtCateringChecklist: PreloadableComponent = lazyPreloadable(() => import('./pages/guides/YachtCateringChecklist'))
const WeddingMenuPlanningGuide: PreloadableComponent = lazyPreloadable(() => import('./pages/guides/WeddingMenuPlanningGuide'))
const DubaiFoodTrendsReport2026: PreloadableComponent = lazyPreloadable(() => import('./pages/guides/DubaiFoodTrendsReport2026'))
const BarServices: PreloadableComponent = lazyPreloadable(() => import('./pages/BarServices'))
const ProductLaunchCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/ProductLaunchCatering'))
const BrandActivationCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/BrandActivationCatering'))
const ExhibitionCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/ExhibitionCatering'))
const GalaDinnerCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/GalaDinnerCatering'))
const PrivateCookingClassesDubai: PreloadableComponent = lazyPreloadable(() => import('./pages/PrivateCookingClassesDubai'))
const VIPClub: PreloadableComponent = lazyPreloadable(() => import('./pages/VIPClub'))
const GiftCards: PreloadableComponent = lazyPreloadable(() => import('./pages/GiftCards'))
const CaseStudies: PreloadableComponent = lazyPreloadable(() => import('./pages/CaseStudies'))
const WeeklyMealPrep: PreloadableComponent = lazyPreloadable(() => import('./pages/WeeklyMealPrep'))
const WellnessMealPrep: PreloadableComponent = lazyPreloadable(() => import('./pages/WellnessMealPrep'))
const HowWeVetOurChefs: PreloadableComponent = lazyPreloadable(() => import('./pages/HowWeVetOurChefs'))
const MyChefCertified: PreloadableComponent = lazyPreloadable(() => import('./pages/MyChefCertified'))
const FoundingCustomerOffer: PreloadableComponent = lazyPreloadable(() => import('./pages/FoundingCustomerOffer'))
const LoyaltyProgramme: PreloadableComponent = lazyPreloadable(() => import('./pages/LoyaltyProgramme'))
const MysteryDining: PreloadableComponent = lazyPreloadable(() => import('./pages/MysteryDining'))
const ChefTrainingAcademy: PreloadableComponent = lazyPreloadable(() => import('./pages/ChefTrainingAcademy'))
const InfluencerPartnerships: PreloadableComponent = lazyPreloadable(() => import('./pages/InfluencerPartnerships'))
const FullTimePrivateChef: PreloadableComponent = lazyPreloadable(() => import('./pages/FullTimePrivateChef'))
const KidsNutritionChef: PreloadableComponent = lazyPreloadable(() => import('./pages/KidsNutritionChef'))
const BookingProtectionInsurance: PreloadableComponent = lazyPreloadable(() => import('./pages/BookingProtectionInsurance'))
const BecomeAMyChef: PreloadableComponent = lazyPreloadable(() => import('./pages/BecomeAMyChef'))
const ReviewRequest: PreloadableComponent = lazyPreloadable(() => import('./pages/ReviewRequest'))
const ReferralProgramme: PreloadableComponent = lazyPreloadable(() => import('./pages/ReferralProgramme'))
const QualityGuarantee: PreloadableComponent = lazyPreloadable(() => import('./pages/QualityGuarantee'))
const AllergySafeCatering: PreloadableComponent = lazyPreloadable(() => import('./pages/AllergySafeCatering'))
const MyChefMembership: PreloadableComponent = lazyPreloadable(() => import('./pages/MyChefMembership'))
const CorporateRetainer: PreloadableComponent = lazyPreloadable(() => import('./pages/CorporateRetainer'))
const PostpartumMealPrep: PreloadableComponent = lazyPreloadable(() => import('./pages/PostpartumMealPrep'))
const FitnessMealPrep: PreloadableComponent = lazyPreloadable(() => import('./pages/FitnessMealPrep'))
const TouristVillaChef: PreloadableComponent = lazyPreloadable(() => import('./pages/TouristVillaChef'))
const ProposalDinner: PreloadableComponent = lazyPreloadable(() => import('./pages/ProposalDinner'))
const ApartmentPrivateDining: PreloadableComponent = lazyPreloadable(() => import('./pages/ApartmentPrivateDining'))
const ChefsTable: PreloadableComponent = lazyPreloadable(() => import('./pages/ChefsTable'))
const PartTimePrivateChef: PreloadableComponent = lazyPreloadable(() => import('./pages/PartTimePrivateChef'))
const PartnerWithUs: PreloadableComponent = lazyPreloadable(() => import('./pages/PartnerWithUs'))
const VillaRentalsPartner: PreloadableComponent = lazyPreloadable(() => import('./pages/partners/VillaRentalsPartner'))
const YachtChartersPartner: PreloadableComponent = lazyPreloadable(() => import('./pages/partners/YachtChartersPartner'))
const EventPlannersPartner: PreloadableComponent = lazyPreloadable(() => import('./pages/partners/EventPlannersPartner'))
const ConciergeServicesPartner: PreloadableComponent = lazyPreloadable(() => import('./pages/partners/ConciergeServicesPartner'))
const Press: PreloadableComponent = lazyPreloadable(() => import('./pages/Press'))
const SiteMap: PreloadableComponent = lazyPreloadable(() => import('./pages/SiteMap'))
const NotFound: PreloadableComponent = lazyPreloadable(() => import('./pages/NotFound'))

export interface AppRoute { path: string; element: ReactElement; preload?: () => Promise<void> }

export const routes: AppRoute[] = [
  { path: "/", element: <Home />, preload: Home.preload },
  { path: "/about", element: <About />, preload: About.preload },
  { path: "/contact", element: <Contact />, preload: Contact.preload },
  { path: "/how-it-works", element: <HowItWorks />, preload: HowItWorks.preload },
  { path: "/our-chefs", element: <OurChefs />, preload: OurChefs.preload },
  { path: "/chefs/ahmed-executive-chef", element: <ChefAhmed />, preload: ChefAhmed.preload },
  { path: "/chefs/matteo-pastry-chef", element: <ChefMatteo />, preload: ChefMatteo.preload },
  { path: "/chefs/marco-italian-chef", element: <ChefMarco />, preload: ChefMarco.preload },
  { path: "/chefs/layla-middle-eastern-chef", element: <ChefLayla />, preload: ChefLayla.preload },
  { path: "/menus", element: <Menus />, preload: Menus.preload },
  { path: "/private-chef-dubai", element: <PrivateChef />, preload: PrivateChef.preload },
  { path: "/private-chef-prices-dubai", element: <PrivateChefPrices />, preload: PrivateChefPrices.preload },
  { path: "/catering-dubai", element: <Catering />, preload: Catering.preload },
  { path: "/catering-packages-dubai", element: <CateringPackages />, preload: CateringPackages.preload },
  { path: "/date-night-package-dubai", element: <DateNightPackage />, preload: DateNightPackage.preload },
  { path: "/family-feast-package-dubai", element: <FamilyFeastPackage />, preload: FamilyFeastPackage.preload },
  { path: "/birthday-catering-package-dubai", element: <BirthdayPackage />, preload: BirthdayPackage.preload },
  { path: "/corporate-dinner-package-dubai", element: <CorporateDinnerPackage />, preload: CorporateDinnerPackage.preload },
  { path: "/luxury-dining-experiences", element: <LuxuryDining />, preload: LuxuryDining.preload },
  { path: "/events", element: <Events />, preload: Events.preload },
  { path: "/corporate", element: <Corporate />, preload: Corporate.preload },
  { path: "/corporate-catering-dubai", element: <CorporateCateringDubai />, preload: CorporateCateringDubai.preload },
  { path: "/villas-private-residences", element: <Villas />, preload: Villas.preload },
  { path: "/yachts", element: <Yachts />, preload: Yachts.preload },
  { path: "/romantic-dinner-dubai", element: <RomanticDinner />, preload: RomanticDinner.preload },
  { path: "/valentines-day-catering-dubai", element: <ValentinesDayCatering />, preload: ValentinesDayCatering.preload },
  { path: "/mothers-day-catering-dubai", element: <MothersDayCatering />, preload: MothersDayCatering.preload },
  { path: "/uae-national-day-catering-dubai", element: <UaeNationalDayCatering />, preload: UaeNationalDayCatering.preload },
  { path: "/easter-catering-dubai", element: <EasterCatering />, preload: EasterCatering.preload },
  { path: "/halloween-catering-dubai", element: <HalloweenCatering />, preload: HalloweenCatering.preload },
  { path: "/birthday-catering-dubai", element: <BirthdayCatering />, preload: BirthdayCatering.preload },
  { path: "/wedding-catering-dubai", element: <WeddingCatering />, preload: WeddingCatering.preload },
  { path: "/iftar-catering-dubai", element: <RamadanIftar />, preload: RamadanIftar.preload },
  { path: "/christmas-catering-dubai", element: <ChristmasCatering />, preload: ChristmasCatering.preload },
  { path: "/new-year-catering-dubai", element: <NewYearCatering />, preload: NewYearCatering.preload },
  { path: "/brunch-catering-dubai", element: <BrunchCatering />, preload: BrunchCatering.preload },
  { path: "/breakfast-catering-dubai", element: <BreakfastCatering />, preload: BreakfastCatering.preload },
  { path: "/drop-off-catering-dubai", element: <DropOffCatering />, preload: DropOffCatering.preload },
  { path: "/tasting-menu-dubai", element: <TastingMenu />, preload: TastingMenu.preload },
  { path: "/festive-catering-dubai", element: <FestiveCatering />, preload: FestiveCatering.preload },
  { path: "/faq", element: <FAQ />, preload: FAQ.preload },
  { path: "/gallery", element: <Gallery />, preload: Gallery.preload },
  { path: "/venue-partners", element: <VenuePartners />, preload: VenuePartners.preload },
  { path: "/inquiry", element: <Inquiry />, preload: Inquiry.preload },
  { path: "/thank-you", element: <ThankYou />, preload: ThankYou.preload },
  { path: "/privacy-policy", element: <Privacy />, preload: Privacy.preload },
  { path: "/terms", element: <Terms />, preload: Terms.preload },
  { path: "/locations", element: <Locations />, preload: Locations.preload },
  { path: "/locations/:slug", element: <LocationDetail />, preload: LocationDetail.preload },
  { path: "/party-catering-dubai", element: <PartyCatering />, preload: PartyCatering.preload },
  { path: "/bachelor-party-catering-dubai", element: <BachelorPartyCatering />, preload: BachelorPartyCatering.preload },
  { path: "/bachelorette-party-catering-dubai", element: <BachelorettePartyCatering />, preload: BachelorettePartyCatering.preload },
  { path: "/engagement-catering-dubai", element: <EngagementCatering />, preload: EngagementCatering.preload },
  { path: "/anniversary-catering-dubai", element: <AnniversaryCatering />, preload: AnniversaryCatering.preload },
  { path: "/baby-shower-catering-dubai", element: <BabyShowerCatering />, preload: BabyShowerCatering.preload },
  { path: "/private-party-catering-dubai", element: <PrivatePartyCatering />, preload: PrivatePartyCatering.preload },
  { path: "/kids-birthday-catering-dubai", element: <KidsBirthdayCatering />, preload: KidsBirthdayCatering.preload },
  { path: "/pool-party-catering-dubai", element: <PoolPartyCatering />, preload: PoolPartyCatering.preload },
  { path: "/beach-catering-dubai", element: <BeachCatering />, preload: BeachCatering.preload },
  { path: "/desert-dining-dubai", element: <DesertDining />, preload: DesertDining.preload },
  { path: "/afternoon-tea-catering-dubai", element: <AfternoonTeaCatering />, preload: AfternoonTeaCatering.preload },
  { path: "/housewarming-catering-dubai", element: <HousewarmingCatering />, preload: HousewarmingCatering.preload },
  { path: "/graduation-catering-dubai", element: <GraduationCatering />, preload: GraduationCatering.preload },
  { path: "/farewell-catering-dubai", element: <FarewellCatering />, preload: FarewellCatering.preload },
  { path: "/reunion-catering-dubai", element: <ReunionCatering />, preload: ReunionCatering.preload },
  { path: "/fathers-day-catering-dubai", element: <FathersDayCatering />, preload: FathersDayCatering.preload },
  { path: "/chinese-new-year-catering-dubai", element: <ChineseNewYearCatering />, preload: ChineseNewYearCatering.preload },
  { path: "/holi-catering-dubai", element: <HoliCatering />, preload: HoliCatering.preload },
  { path: "/picnic-catering-dubai", element: <PicnicCatering />, preload: PicnicCatering.preload },
  { path: "/coffee-tea-service-dubai", element: <CoffeeTeaService />, preload: CoffeeTeaService.preload },
  { path: "/dessert-cart-dubai", element: <DessertCart />, preload: DessertCart.preload },
  { path: "/shawarma-station-dubai", element: <ShawarmaStation />, preload: ShawarmaStation.preload },
  { path: "/oyster-bar-dubai", element: <OysterBar />, preload: OysterBar.preload },
  { path: "/government-event-catering-dubai", element: <GovernmentEventCatering />, preload: GovernmentEventCatering.preload },
  { path: "/university-catering-dubai", element: <UniversityCatering />, preload: UniversityCatering.preload },
  { path: "/healthcare-catering-dubai", element: <HealthcareCatering />, preload: HealthcareCatering.preload },
  { path: "/bbq-catering-dubai", element: <BBQCatering />, preload: BBQCatering.preload },
  { path: "/buffet-catering-dubai", element: <BuffetCatering />, preload: BuffetCatering.preload },
  { path: "/canape-catering-dubai", element: <CanapeCatering />, preload: CanapeCatering.preload },
  { path: "/finger-food-catering-dubai", element: <FingerFoodCatering />, preload: FingerFoodCatering.preload },
  { path: "/live-cooking-stations-dubai", element: <LiveCookingStations />, preload: LiveCookingStations.preload },
  { path: "/grazing-table-dubai", element: <GrazingTable />, preload: GrazingTable.preload },
  { path: "/dessert-table-catering-dubai", element: <DessertTableCatering />, preload: DessertTableCatering.preload },
  { path: "/cocktail-party-catering-dubai", element: <CocktailPartyCatering />, preload: CocktailPartyCatering.preload },
  { path: "/mocktail-bar-catering-dubai", element: <MocktailBarCatering />, preload: MocktailBarCatering.preload },
  { path: "/indian-catering-dubai", element: <IndianCatering />, preload: IndianCatering.preload },
  { path: "/arabic-catering-dubai", element: <ArabicCatering />, preload: ArabicCatering.preload },
  { path: "/mediterranean-catering-dubai", element: <MediterraneanCatering />, preload: MediterraneanCatering.preload },
  { path: "/italian-catering-dubai", element: <ItalianCatering />, preload: ItalianCatering.preload },
  { path: "/asian-catering-dubai", element: <AsianCatering />, preload: AsianCatering.preload },
  { path: "/sushi-catering-dubai", element: <SushiCatering />, preload: SushiCatering.preload },
  { path: "/vegan-catering-dubai", element: <VeganCatering />, preload: VeganCatering.preload },
  { path: "/vegetarian-catering-dubai", element: <VegetarianCatering />, preload: VegetarianCatering.preload },
  { path: "/halal-catering-dubai", element: <HalalCatering />, preload: HalalCatering.preload },
  { path: "/healthy-catering-dubai", element: <HealthyCatering />, preload: HealthyCatering.preload },
  { path: "/gluten-free-catering-dubai", element: <GlutenFreeCatering />, preload: GlutenFreeCatering.preload },
  { path: "/dairy-free-catering-dubai", element: <DairyFreeCatering />, preload: DairyFreeCatering.preload },
  { path: "/nut-free-catering-dubai", element: <NutFreeCatering />, preload: NutFreeCatering.preload },
  { path: "/keto-catering-dubai", element: <KetoCatering />, preload: KetoCatering.preload },
  { path: "/jain-catering-dubai", element: <JainCatering />, preload: JainCatering.preload },
  { path: "/pescatarian-catering-dubai", element: <PescatarianCatering />, preload: PescatarianCatering.preload },
  { path: "/sugar-free-catering-dubai", element: <SugarFreeCatering />, preload: SugarFreeCatering.preload },
  { path: "/fodmap-catering-dubai", element: <FodmapCatering />, preload: FodmapCatering.preload },
  { path: "/halal-private-dining-dubai", element: <HalalPrivateDining />, preload: HalalPrivateDining.preload },
  { path: "/cuisines-dubai", element: <Cuisines />, preload: Cuisines.preload },
  { path: "/office-catering-dubai", element: <OfficeCatering />, preload: OfficeCatering.preload },
  { path: "/business-lunch-catering-dubai", element: <BusinessLunchCatering />, preload: BusinessLunchCatering.preload },
  { path: "/corporate-event-catering-dubai", element: <CorporateEventCatering />, preload: CorporateEventCatering.preload },
  { path: "/conference-catering-dubai", element: <ConferenceCatering />, preload: ConferenceCatering.preload },
  { path: "/staff-meals-catering-dubai", element: <StaffMealsCatering />, preload: StaffMealsCatering.preload },
  { path: "/film-crew-catering-dubai", element: <FilmCrewCatering />, preload: FilmCrewCatering.preload },
  { path: "/production-catering-dubai", element: <ProductionCatering />, preload: ProductionCatering.preload },
  { path: "/school-catering-dubai", element: <SchoolCatering />, preload: SchoolCatering.preload },
  { path: "/nursery-catering-dubai", element: <NurseryCatering />, preload: NurseryCatering.preload },
  { path: "/corporate-meal-prep-dubai", element: <CorporateMealPrep />, preload: CorporateMealPrep.preload },
  { path: "/ramadan-catering-dubai", element: <RamadanCatering />, preload: RamadanCatering.preload },
  { path: "/suhoor-catering-dubai", element: <SuhoorCatering />, preload: SuhoorCatering.preload },
  { path: "/eid-catering-dubai", element: <EidCatering />, preload: EidCatering.preload },
  { path: "/diwali-catering-dubai", element: <DiwaliCatering />, preload: DiwaliCatering.preload },
  { path: "/guides", element: <Guides />, preload: Guides.preload },
  { path: "/blog", element: <Blog />, preload: Blog.preload },
  { path: "/blog/ramadan-iftar-catering-trends-2026", element: <RamadanIftarTrends2026 />, preload: RamadanIftarTrends2026.preload },
  { path: "/blog/yacht-party-menu-ideas-dubai", element: <YachtPartyMenuIdeas />, preload: YachtPartyMenuIdeas.preload },
  { path: "/blog/how-much-does-private-chef-cost-dubai", element: <PrivateChefCostDubai />, preload: PrivateChefCostDubai.preload },
  { path: "/blog/corporate-catering-full-service-vs-drop-off", element: <CorporateCateringFullServiceVsDropOff />, preload: CorporateCateringFullServiceVsDropOff.preload },
  { path: "/blog/weekly-meal-prep-vs-full-time-chef-dubai", element: <WeeklyMealPrepVsFullTimeChef />, preload: WeeklyMealPrepVsFullTimeChef.preload },
  { path: "/blog/best-private-chef-birthday-dinner-dubai", element: <BestPrivateChefBirthdayDinnerDubai />, preload: BestPrivateChefBirthdayDinnerDubai.preload },
  { path: "/blog/private-chef-palm-jumeirah-guide", element: <PrivateChefPalmJumeirahGuide />, preload: PrivateChefPalmJumeirahGuide.preload },
  { path: "/blog/halal-private-dining-dubai-what-to-ask", element: <HalalPrivateDiningDubaiWhatToAsk />, preload: HalalPrivateDiningDubaiWhatToAsk.preload },
  { path: "/dubai-catering-prices-guide", element: <DubaiCateringPricesGuide />, preload: DubaiCateringPricesGuide.preload },
  { path: "/catering-cost-calculator-dubai", element: <CateringCostCalculator />, preload: CateringCostCalculator.preload },
  { path: "/how-to-choose-caterer-dubai", element: <HowToChooseCatererDubai />, preload: HowToChooseCatererDubai.preload },
  { path: "/villa-catering-ideas-dubai", element: <VillaCateringIdeas />, preload: VillaCateringIdeas.preload },
  { path: "/wedding-catering-checklist-dubai", element: <WeddingCateringChecklist />, preload: WeddingCateringChecklist.preload },
  { path: "/corporate-catering-checklist-dubai", element: <CorporateCateringChecklist />, preload: CorporateCateringChecklist.preload },
  { path: "/private-chef-vs-catering-dubai", element: <PrivateChefVsCatering />, preload: PrivateChefVsCatering.preload },
  { path: "/buffet-vs-plated-dubai", element: <BuffetVsPlated />, preload: BuffetVsPlated.preload },
  { path: "/yacht-catering-guide-dubai", element: <YachtCateringGuide />, preload: YachtCateringGuide.preload },
  { path: "/ramadan-catering-guide-dubai", element: <RamadanCateringGuide />, preload: RamadanCateringGuide.preload },
  { path: "/luxury-dinner-planning-guide-dubai", element: <LuxuryDinnerPlanningGuide />, preload: LuxuryDinnerPlanningGuide.preload },
  { path: "/guide/private-dining-dubai", element: <PrivateDiningGuide />, preload: PrivateDiningGuide.preload },
  { path: "/dubai-event-catering-price-guide-2026", element: <EventCateringPriceGuide2026 />, preload: EventCateringPriceGuide2026.preload },
  { path: "/yacht-catering-checklist-dubai", element: <YachtCateringChecklist />, preload: YachtCateringChecklist.preload },
  { path: "/wedding-catering-menu-planning-dubai", element: <WeddingMenuPlanningGuide />, preload: WeddingMenuPlanningGuide.preload },
  { path: "/dubai-food-trends-report-2026", element: <DubaiFoodTrendsReport2026 />, preload: DubaiFoodTrendsReport2026.preload },
  { path: "/bar-services-dubai", element: <BarServices />, preload: BarServices.preload },
  { path: "/product-launch-catering-dubai", element: <ProductLaunchCatering />, preload: ProductLaunchCatering.preload },
  { path: "/brand-activation-catering-dubai", element: <BrandActivationCatering />, preload: BrandActivationCatering.preload },
  { path: "/exhibition-catering-dubai", element: <ExhibitionCatering />, preload: ExhibitionCatering.preload },
  { path: "/gala-dinner-catering-dubai", element: <GalaDinnerCatering />, preload: GalaDinnerCatering.preload },
  { path: "/private-cooking-classes-dubai", element: <PrivateCookingClassesDubai />, preload: PrivateCookingClassesDubai.preload },
  { path: "/vip-club", element: <VIPClub />, preload: VIPClub.preload },
  { path: "/gift-cards", element: <GiftCards />, preload: GiftCards.preload },
  { path: "/case-studies", element: <CaseStudies />, preload: CaseStudies.preload },
  { path: "/weekly-meal-prep-dubai", element: <WeeklyMealPrep />, preload: WeeklyMealPrep.preload },
  { path: "/wellness-meal-prep-dubai", element: <WellnessMealPrep />, preload: WellnessMealPrep.preload },
  { path: "/how-we-vet-our-chefs", element: <HowWeVetOurChefs />, preload: HowWeVetOurChefs.preload },
  { path: "/mychef-certified", element: <MyChefCertified />, preload: MyChefCertified.preload },
  { path: "/founding-customer-offer", element: <FoundingCustomerOffer />, preload: FoundingCustomerOffer.preload },
  { path: "/loyalty-programme", element: <LoyaltyProgramme />, preload: LoyaltyProgramme.preload },
  { path: "/mystery-dining-dubai", element: <MysteryDining />, preload: MysteryDining.preload },
  { path: "/chef-training-academy", element: <ChefTrainingAcademy />, preload: ChefTrainingAcademy.preload },
  { path: "/influencer-partnerships", element: <InfluencerPartnerships />, preload: InfluencerPartnerships.preload },
  { path: "/full-time-private-chef-dubai", element: <FullTimePrivateChef />, preload: FullTimePrivateChef.preload },
  { path: "/kids-nutrition-chef-dubai", element: <KidsNutritionChef />, preload: KidsNutritionChef.preload },
  { path: "/booking-protection-insurance", element: <BookingProtectionInsurance />, preload: BookingProtectionInsurance.preload },
  { path: "/become-a-mychef", element: <BecomeAMyChef />, preload: BecomeAMyChef.preload },
  { path: "/review", element: <ReviewRequest />, preload: ReviewRequest.preload },
  { path: "/referral-programme", element: <ReferralProgramme />, preload: ReferralProgramme.preload },
  { path: "/quality-guarantee-dubai", element: <QualityGuarantee />, preload: QualityGuarantee.preload },
  { path: "/allergy-safe-catering-dubai", element: <AllergySafeCatering />, preload: AllergySafeCatering.preload },
  { path: "/mychef-membership", element: <MyChefMembership />, preload: MyChefMembership.preload },
  { path: "/corporate-retainer-dubai", element: <CorporateRetainer />, preload: CorporateRetainer.preload },
  { path: "/postpartum-meal-prep-dubai", element: <PostpartumMealPrep />, preload: PostpartumMealPrep.preload },
  { path: "/fitness-meal-prep-dubai", element: <FitnessMealPrep />, preload: FitnessMealPrep.preload },
  { path: "/tourist-villa-chef-dubai", element: <TouristVillaChef />, preload: TouristVillaChef.preload },
  { path: "/proposal-dinner-dubai", element: <ProposalDinner />, preload: ProposalDinner.preload },
  { path: "/apartment-private-dining-dubai", element: <ApartmentPrivateDining />, preload: ApartmentPrivateDining.preload },
  { path: "/chefs-table-dubai", element: <ChefsTable />, preload: ChefsTable.preload },
  { path: "/part-time-private-chef-dubai", element: <PartTimePrivateChef />, preload: PartTimePrivateChef.preload },
  { path: "/partner-with-us", element: <PartnerWithUs />, preload: PartnerWithUs.preload },
  { path: "/partners/villa-rentals-dubai", element: <VillaRentalsPartner />, preload: VillaRentalsPartner.preload },
  { path: "/partners/yacht-charters-dubai", element: <YachtChartersPartner />, preload: YachtChartersPartner.preload },
  { path: "/partners/event-planners-dubai", element: <EventPlannersPartner />, preload: EventPlannersPartner.preload },
  { path: "/partners/concierge-services-dubai", element: <ConciergeServicesPartner />, preload: ConciergeServicesPartner.preload },
  { path: "/press", element: <Press />, preload: Press.preload },
  { path: "/site-map", element: <SiteMap />, preload: SiteMap.preload },
  { path: "/best-catering-companies-dubai", element: <HandoffPage /> },
  { path: "/blog/brunch-at-home-dubai", element: <HandoffPage /> },
  { path: "/blog/corporate-event-catering-ideas-dubai", element: <HandoffPage /> },
  { path: "/blog/desert-dinner-party-dubai", element: <HandoffPage /> },
  { path: "/blog/dinner-party-menu-ideas-dubai", element: <HandoffPage /> },
  { path: "/blog/grazing-table-vs-buffet-dubai", element: <HandoffPage /> },
  { path: "/blog/how-far-ahead-book-caterer-dubai", element: <HandoffPage /> },
  { path: "/blog/how-to-hire-a-private-chef-dubai", element: <HandoffPage /> },
  { path: "/blog/iftar-at-home-dubai", element: <HandoffPage /> },
  { path: "/blog/nye-party-catering-dubai", element: <HandoffPage /> },
  { path: "/blog/private-chef-date-night-dubai", element: <HandoffPage /> },
  { path: "/blog/private-chef-vs-restaurant-dubai", element: <HandoffPage /> },
  { path: "/blog/vegan-catering-dubai-guide", element: <HandoffPage /> },
  { path: "/blog/wedding-catering-cost-dubai", element: <HandoffPage /> },
  { path: "*", element: <NotFound />, preload: NotFound.preload },
]

const exactPreload: Record<string, () => Promise<void>> = {}
for (const r of routes) { if (r.preload) exactPreload[r.path] = r.preload }

/** Preload the chunk for the current pathname before hydration (flash-free). */
export function preloadRoute(pathname: string): Promise<void> {
  const p = exactPreload[pathname]
  if (p) return p()
  // No exact match → the "*" (NotFound) route; preload it if lazy.
  const star = routes.find((r) => r.path === '*')
  return star?.preload ? star.preload() : Promise.resolve()
}
