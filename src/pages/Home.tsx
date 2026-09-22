// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /
//     primary:     "mychef dubai"
//     subkeywords: "my chef dubai" · "fine dining at home dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { ArrowDown, ArrowUpRight, Plus } from 'lucide-react'
import SEO from '@/components/SEO'
import { homepageGraph } from '@/lib/organizationSchema'
import '@/styles/home-editorial.css'

const HERO = '/images/home-editorial-2026/table-at-dusk'
const IMAGE_ROOT = '/images/private-chef-2026/'

function HomeImage({ name, alt, className = '', sizes = '(max-width: 760px) 100vw, 50vw' }: {
  name: 'craft' | 'family-table' | 'pasta' | 'planning'
  alt: string
  className?: string
  sizes?: string
}) {
  return <img className={className} src={`${IMAGE_ROOT}${name}-800.webp`}
    srcSet={[480, 800, 1200].map(width => `${IMAGE_ROOT}${name}-${width}.webp ${width}w`).join(', ')}
    sizes={sizes} alt={alt} width={1200} height={800} loading="lazy" decoding="async" />
}

function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return <Link className="hm-text-link" to={to}>{children}<ArrowUpRight size={17} aria-hidden="true" /></Link>
}

const occasions = [
  { number: '01', title: 'Gather for something special', to: '/events', link: 'Explore celebrations',
    body: 'A milestone birthday, an engagement or a long-awaited reunion deserves food that feels part of the occasion. Begin with the atmosphere you want, then shape the menu and service around your guests. A seated dinner, a generous sharing table and a standing reception each create a different rhythm. We help you choose the one that suits the room.' },
  { number: '02', title: 'Welcome guests to your villa', to: '/villas-private-residences', link: 'Discover villa dining',
    body: 'Make the most of the place you call home, or the residence you have chosen for your stay. A family lunch beside the terrace can become an unhurried evening with friends. Tell us about your kitchen, dining space and any community access arrangements so the chef can plan a service that works comfortably within your home.' },
  { number: '03', title: 'Take the occasion out to sea', to: '/yachts', link: 'Plan dining on a yacht',
    body: 'On the water, the best menu is one that belongs on board. Elegant bites, easy-to-share dishes and carefully timed service need to work with the yacht’s facilities and sailing schedule. Share the vessel details, marina and guest count early. Our yacht service page explains the practical choices, from food preparation to crew coordination and equipment.' },
  { number: '04', title: 'Make business feel personal', to: '/corporate', link: 'Arrange corporate dining',
    body: 'Food can set the tone for a client dinner, a team gathering or a business reception. The brief starts with your guests and programme: when people arrive, how long they have to eat and whether conversation or presentation takes the lead. Explore dining formats that complement the agenda, with staffing and venue requirements set out in the proposal.' },
]

const steps = [
  { title: 'Start with your plans', body: 'Tell us your date, location, number of guests and the kind of service you have in mind. For a household plan, share your weekly routine and the meals you would like covered. A few clear details give us a useful starting point; you do not need a finished menu.' },
  { title: 'Shape the menu together', body: 'Discuss cuisines, favourite dishes, dietary requirements and the pace of service. We review the kitchen or venue, the people needed and any equipment to arrange. This is the moment to talk through a special request, an important family preference or a detail you want the chef to know.' },
  { title: 'Review your proposal', body: 'Your written proposal should make the menu, service scope and price clear. Check the grocery arrangement, staffing, timings, equipment, payment schedule and booking terms before confirming. If something changes, return to the agreed brief so everyone understands the revised plan.' },
  { title: 'Enjoy being the host', body: 'With the details agreed, the chef and any booked service team follow the plan for your home or occasion. Preparation, cooking, service and the agreed clear-down each have their place. You can spend more of the meal with the people you invited, with a clear point of contact for practical questions.' },
]

const questions = [
  { question: 'What is myCHEF, and how does the service work?', answer: <>myCHEF Dubai, also written as My Chef Dubai, arranges private chefs and catering through a network of chefs and culinary partners. The service brings the food and hospitality to your home or chosen venue. You begin with a brief, discuss the menu and practical arrangements, then review a proposal before confirming. Read <Link to="/about">about the company</Link> and the people behind your experience.</> },
  { question: 'Should I choose a household chef or catering?', answer: <>A household chef is usually the right starting point when you want regular cooking in your kitchen or a meal built around a small group at home. Catering is the better starting point when you need an event format, a broader service team or food organised around a venue and programme. Our <Link to="/private-chef-vs-catering-dubai">chef and catering comparison</Link> explains the difference.</> },
  { question: 'Can the menu reflect allergies and dietary preferences?', answer: <>Tell us about allergies, intolerances, religious requirements and personal preferences in your first enquiry, then confirm the details in writing. The chef or catering partner needs to assess ingredients, preparation space and potential cross-contact before agreeing the menu. A preference and a severe allergy require different conversations. Explore the <Link to="/cuisines-dubai">cuisine options</Link>, then discuss what is suitable for your guests.</> },
  { question: 'Are groceries, service staff and tableware included?', answer: <>Inclusions depend on the service you select. A regular cooking plan, an intimate dinner and a catered event can have different grocery, staffing and equipment arrangements. Check the itemised proposal rather than assuming that a starting price includes everything. The <Link to="/private-chef-dubai/pricing">household pricing page</Link> and <Link to="/dubai-catering-prices-guide">catering price guide</Link> are useful places to begin that conversation.</> },
  { question: 'How early should I enquire?', answer: <>Enquire once you have a likely date and a useful estimate of guest numbers. Larger events, popular dates and bookings that need additional staff or equipment benefit from more planning time. Availability is confirmed for your specific brief; sending an enquiry does not reserve the date. Our <Link to="/blog/how-far-ahead-book-caterer-dubai#separate-enquiry-proposal-and-confirmation">booking timeline guide</Link> explains the steps from an initial conversation to confirmation.</> },
  { question: 'What should I share about my kitchen or venue?', answer: <>The address, available cooking equipment, refrigeration, preparation space and access arrangements all help. For apartments, mention service lifts and building rules; for villas, include the dining area and any outdoor plans. Yacht bookings also need vessel and marina information. Start with what you know in the <Link to="/inquiry?from=home">enquiry form</Link>, and the team can help identify the remaining details.</> },
]

export default function Home() {
  return <>
    <SEO title="myCHEF Dubai | Exceptional Dining, Beautifully Arranged"
      description="Discover myCHEF Dubai: private chefs, tailored menus and elegant catering for your home or occasion. Explore the services and begin your personal proposal."
      canonicalPath="/" ogImage={`${HERO}-1120.webp`} hideSiteName schema={homepageGraph()} />

    <div className="home-editorial">
      <section className="hm-hero" aria-labelledby="home-title">
        <div className="hm-container hm-hero-grid">
          <div className="hm-hero-copy">
            <p className="hm-eyebrow">Private chefs · Dining · Celebrations</p>
            <h1 id="home-title"><span>myCHEF Dubai.</span> Every meal,<br /><em>thoughtfully yours.</em></h1>
            <p className="hm-hero-lead">Beautiful food. Gracious service. More time with your people. From the everyday pleasure of a chef at home to an evening worth dressing the table for, we make the details feel personal.</p>
            <div className="hm-actions">
              <Link className="hm-button" to="/inquiry?from=home">Plan your experience<ArrowUpRight size={18} aria-hidden="true" /></Link>
              <a className="hm-text-link" href="#services">Explore our services<ArrowDown size={16} aria-hidden="true" /></a>
            </div>
            <p className="hm-hero-note">Your home. Your occasion. Your kind of hospitality.</p>
          </div>
          <figure className="hm-hero-figure">
            <img src={`${HERO}-800.webp`} srcSet={`${HERO}-480.webp 480w, ${HERO}-800.webp 800w, ${HERO}-1120.webp 1120w`}
              sizes="(max-width: 760px) 100vw, (max-width: 1400px) 49vw, 650px"
              width={1120} height={1400} fetchPriority="high" loading="eager" decoding="async"
              alt="Candlelit terrace table with elegant fish dishes, ivory flowers and a softly lit Dubai skyline" />
            <figcaption>A sense of occasion. A feeling of home.</figcaption>
          </figure>
        </div>
      </section>

      <nav className="hm-page-nav" aria-label="Explore this page">
        <div className="hm-container"><span>Your table, your way</span>
          <a href="#services">The services</a><a href="#occasions">The occasions</a><a href="#menus">The menu</a><a href="#planning">The details</a><a href="#questions">Your questions</a>
        </div>
      </nav>

      <section className="hm-section hm-intro" aria-labelledby="welcome-heading">
        <div className="hm-container hm-intro-grid">
          <div><p className="hm-eyebrow">A warmer welcome</p><h2 id="welcome-heading">Welcome to<br />myCHEF Dubai.</h2></div>
          <div className="hm-prose">
            <p className="hm-lead">The luxury is being there. At the table, in the conversation, enjoying the food while someone else takes care of the cooking.</p>
            <p>We bring together private chefs, tailored menus and service for the way you live and entertain. That might mean familiar family favourites prepared during the week, a candlelit dinner at home or a celebration with a full catering team. Each begins with a conversation about what matters to you.</p>
            <p>Your taste, your setting and your guests guide the plan. We help turn those details into a practical brief, connect you with the appropriate culinary team and make the scope clear before you book. The result should feel natural to your home and generous to the people around your table.</p>
            <TextLink to="/about">The story behind myCHEF</TextLink>
          </div>
        </div>
      </section>

      <section id="services" className="hm-section hm-services" aria-labelledby="services-heading">
        <div className="hm-container">
          <div className="hm-section-heading"><div><p className="hm-eyebrow">Find your service</p><h2 id="services-heading">Everyday ease.<br /><em>Exceptional occasions.</em></h2></div><p>Begin with the kind of support you need. We will help you refine the details from there.</p></div>
          <div className="hm-service-grid">
            <article className="hm-service">
              <Link to="/private-chef-dubai" className="hm-image-link" aria-label="Explore private chef services"><HomeImage name="family-table" alt="Roast chicken, seasonal vegetables and fresh salad arranged for a relaxed family lunch" /></Link>
              <div className="hm-service-body"><p className="hm-eyebrow">01 / At home</p><h3>A chef who fits your life.</h3>
                <p>Come home to cooking that reflects how you like to eat. A household chef plan can support busy weekdays, family mealtimes and the quiet pleasure of a good dinner without the preparation. Discuss the days you need, your preferred cuisines and the people at your table.</p>
                <p>For a more focused routine, weekly meal preparation brings several meals together in an agreed session. The right arrangement depends on your schedule, kitchen and preferences. Explore the plans, then decide how much support would make a difference to your week.</p>
                <div className="hm-link-group"><TextLink to="/private-chef-dubai">Explore household chefs</TextLink><TextLink to="/weekly-meal-prep-dubai">Discover weekly meal prep</TextLink></div>
              </div>
            </article>
            <article className="hm-service">
              <Link to="/catering-dubai" className="hm-image-link" aria-label="Explore catering services"><HomeImage name="craft" alt="Chef finishing a plated fish dish with fresh vegetables and sauce in a home kitchen" /></Link>
              <div className="hm-service-body"><p className="hm-eyebrow">02 / For your guests</p><h3>Hospitality with a sense of occasion.</h3>
                <p>Bring people together over food that suits the moment. From intimate celebrations to business gatherings, the menu is only one part of the experience. Service style, arrival times, the layout of the room and the attention your guests need all help shape a successful event.</p>
                <p>Explore catering for your chosen setting, with options for plated dining, sharing menus, receptions and buffets. We discuss the chef, service staff, equipment and clear-down required for your brief, then put the agreed arrangements into a proposal you can review.</p>
                <div className="hm-link-group"><TextLink to="/catering-dubai">Explore catering</TextLink><TextLink to="/events">Discover events and celebrations</TextLink></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="hm-dining" aria-labelledby="dining-heading">
        <div className="hm-container hm-dining-grid">
          <div className="hm-dining-title"><p className="hm-eyebrow">The private dining collection</p><h2 id="dining-heading">Some evenings<br />deserve to<br /><em>linger.</em></h2><TextLink to="/luxury-dining-experiences">Explore dining experiences</TextLink></div>
          <div className="hm-prose"><p className="hm-lead">The first plate arrives. The conversation settles. There is nowhere else you need to be.</p>
            <p>For fine dining at home, Dubai hosts can create an evening around their own table, with a menu and pace chosen for the people joining them. A chef can finish dishes in your kitchen while the meal unfolds in the privacy of a familiar setting.</p>
            <p>Start with the experience you want: a relaxed sequence of sharing dishes, a more formal plated menu or an intimate dinner with a few personal touches. We discuss your preferences, the cooking space and any additional service required. Flowers, tableware and other finishing details should be agreed in the proposal, so the evening is as clear in its planning as it is inviting at the table.</p>
          </div>
        </div>
      </section>

      <section id="occasions" className="hm-section" aria-labelledby="occasions-heading">
        <div className="hm-container"><div className="hm-section-heading"><div><p className="hm-eyebrow">The places we gather</p><h2 id="occasions-heading">Different settings.<br /><em>The same care.</em></h2></div><p>A private residence, a yacht or a room full of colleagues. Good hospitality belongs wherever you bring people together.</p></div>
          <div className="hm-occasions">{occasions.map(item => <article key={item.number} className="hm-occasion"><span className="hm-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.body}</p><TextLink to={item.to}>{item.link}</TextLink></div></article>)}</div>
        </div>
      </section>

      <section id="menus" className="hm-section hm-menu" aria-labelledby="menus-heading">
        <div className="hm-container hm-menu-grid">
          <figure className="hm-menu-figure"><HomeImage name="pasta" alt="Fresh ravioli being carefully folded by hand on a floured wooden board" /><figcaption>Made with care. Chosen around your taste.</figcaption></figure>
          <div className="hm-prose"><p className="hm-eyebrow">A menu with your signature</p><h2 id="menus-heading">Begin with<br /><em>what you love.</em></h2>
            <p className="hm-lead">A favourite cuisine. A dish that brings everyone back for more. An ingredient you look forward to each season.</p>
            <p>Those are better starting points than a menu chosen at random. Tell us whether you prefer the warmth of Middle Eastern sharing dishes, the comfort of Italian cooking or a lighter menu built around vegetables, fish and fresh herbs. Your chef can help shape a sequence that feels coherent from the first bite to dessert.</p>
            <p>The way food is served matters, too. Sharing platters invite people to help themselves and stay in conversation. Individually plated courses create a more deliberate pace. For a mixed group, discuss children’s portions and dietary preferences early so the menu works as a whole.</p>
            <p>Allergies and other dietary requirements need a specific discussion with the culinary team. Share them before the menu is agreed, including any preparation or cross-contact concerns, so suitability can be assessed for your kitchen and service.</p>
            <TextLink to="/cuisines-dubai">Find your menu inspiration</TextLink>
          </div>
        </div>
      </section>

      <section id="planning" className="hm-section" aria-labelledby="planning-heading">
        <div className="hm-container"><div className="hm-section-heading"><div><p className="hm-eyebrow">From the first conversation</p><h2 id="planning-heading">Beautifully hosted.<br /><em>Clearly arranged.</em></h2></div><p>A little care before the day gives you more freedom to enjoy it. Here is how we approach the details together.</p></div>
          <ol className="hm-steps">{steps.map((step, index) => <li key={step.title}><span className="hm-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}</ol>
          <div className="hm-planning-links"><TextLink to="/private-chef-dubai/how-it-works">How a household chef plan works</TextLink><TextLink to="/inquiry?from=home">Start your brief</TextLink></div>
        </div>
      </section>

      <section id="pricing" className="hm-section hm-pricing" aria-labelledby="pricing-heading">
        <div className="hm-container hm-pricing-grid"><div><p className="hm-eyebrow">Understand the investment</p><h2 id="pricing-heading">The right service.<br /><em>A clear proposal.</em></h2><p>Choose the experience first, then understand what is included. Our dedicated pricing pages explain the published starting points and the choices that can change the final quote.</p></div>
          <div className="hm-price-options"><article><h3>For your household</h3><p>Frequency, session length, menu complexity and the number of people being cooked for all matter. Compare the available chef plans and grocery arrangements, then discuss the routine you want. Regular support should be practical for your household as well as enjoyable at the table.</p><TextLink to="/private-chef-dubai/pricing">View chef plans and pricing</TextLink></article>
            <article><h3>For your occasion</h3><p>Guest count is a starting point. Service format, menu, staffing, equipment and venue access also shape an event proposal. Use the catering guide to understand the main choices, or try the calculator for an initial estimate before sharing the full brief.</p><div className="hm-link-group"><TextLink to="/dubai-catering-prices-guide">Read the catering price guide</TextLink><TextLink to="/catering-cost-calculator-dubai">Estimate your event</TextLink></div></article>
          </div>
        </div>
      </section>

      <section className="hm-section" aria-labelledby="people-heading">
        <div className="hm-container hm-people-grid"><div className="hm-prose"><p className="hm-eyebrow">The people behind the plate</p><h2 id="people-heading">Skill in the kitchen.<br /><em>Care in your home.</em></h2>
          <p className="hm-lead">Inviting a chef into your home is personal. The introduction should feel that way, too.</p><p>We look at the food you enjoy, the service you need and the setting in which the chef will work. Culinary ability matters, alongside communication, preparation and respect for your space. Before you confirm, ask about the proposed chef’s relevant experience and how the service will be coordinated.</p><p>Learn about our chef network and the vetting process, then tell us what would help you feel comfortable. For a regular household plan, it is also useful to discuss feedback, scheduling and how changes to your routine will be handled.</p>
          <div className="hm-link-group"><TextLink to="/our-chefs">Meet the chef network</TextLink><TextLink to="/how-we-vet-our-chefs">Read about chef vetting</TextLink></div></div>
          <HomeImage className="hm-people-image" name="planning" alt="Chef and homeowner discussing menu preferences together at a kitchen table" />
        </div>
      </section>

      <section className="hm-section hm-locations" aria-labelledby="locations-heading">
        <div className="hm-container hm-location-grid"><div><p className="hm-eyebrow">At home in Dubai</p><h2 id="locations-heading">Wherever your<br /><em>table is waiting.</em></h2></div><div className="hm-prose"><p>From waterfront apartments to family villas and business venues, the address is part of the planning. Tell us your neighbourhood, building or community and any access requirements. Kitchen facilities, parking, service lifts and outdoor conditions help determine what the team needs to arrange.</p><p>Explore local information for <Link to="/locations/palm-jumeirah">Palm Jumeirah</Link>, <Link to="/locations/dubai-marina">Dubai Marina</Link> and <Link to="/locations/difc">DIFC</Link>, or browse the complete coverage guide. Availability and any location-specific arrangements are confirmed against your date and brief.</p><TextLink to="/locations">Explore the areas we serve</TextLink></div></div>
      </section>

      <section className="hm-section hm-journal" aria-labelledby="journal-heading">
        <div className="hm-container"><div className="hm-section-heading"><div><p className="hm-eyebrow">Notes for a good host</p><h2 id="journal-heading">A little inspiration.<br /><em>A better plan.</em></h2></div><TextLink to="/blog">Visit the journal</TextLink></div>
          <div className="hm-journal-grid">
            <article><p className="hm-eyebrow">Choosing your chef</p><h3>The questions worth asking.</h3><p>Understand the brief, the kitchen requirements and the details to confirm before inviting a chef into your home. A useful guide for your first booking or a new household routine.</p><TextLink to="/blog/how-to-hire-a-private-chef-dubai">Read the hiring guide</TextLink></article>
            <article><p className="hm-eyebrow">Around the table</p><h3>A menu that suits the evening.</h3><p>Think about balance, timing and how dishes will be served. Explore dinner party ideas that help the meal flow, with room for your guests’ preferences and your own style of hosting.</p><TextLink to="/blog/dinner-party-menu-ideas-dubai">Explore dinner party menus</TextLink></article>
            <article><p className="hm-eyebrow">Before the date</p><h3>Give the details their time.</h3><p>A simple dinner and a larger event need different planning. See which decisions to make early, what to include in an enquiry and when a proposal becomes a confirmed booking.</p><TextLink to="/blog/how-far-ahead-book-caterer-dubai#start-with-the-complexity-of-the-event">Read the planning timeline</TextLink></article>
          </div>
        </div>
      </section>

      <section id="questions" className="hm-section hm-faq" aria-labelledby="questions-heading">
        <div className="hm-container hm-faq-grid"><div><p className="hm-eyebrow">Good to know</p><h2 id="questions-heading">Before we<br /><em>set the table.</em></h2><p>A few answers to help you begin. For anything specific to your home or occasion, <Link to="/contact">speak with our team</Link>.</p></div><div className="hm-faq-list">{questions.map(item => <details key={item.question}><summary>{item.question}<Plus size={18} aria-hidden="true" /></summary><div className="hm-answer"><p>{item.answer}</p></div></details>)}</div></div>
      </section>

      <section className="hm-final" aria-labelledby="enquiry-heading"><div className="hm-container"><p className="hm-eyebrow">Your next occasion starts here</p><h2 id="enquiry-heading">Let’s make room<br />for <em>something special.</em></h2><p>A quieter week. A memorable dinner. A celebration with everyone you love. Tell us what you have in mind, and we will help you shape the food and service around it.</p><div className="hm-actions"><Link className="hm-button" to="/inquiry?from=home">Begin your personal proposal<ArrowUpRight size={18} aria-hidden="true" /></Link><TextLink to="/contact">Talk to the team</TextLink></div></div></section>
    </div>
  </>
}
