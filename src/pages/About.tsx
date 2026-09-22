// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /about
//     primary:     "private chef company dubai"
//     subkeywords: "about mychef dubai" · "luxury catering company dubai" · "private chef agency dubai" · "chef recruitment agencies in dubai" · "personal chef services availability in dubai" · "personal chef services on offer in dubai" · "top personal chef services provider in dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { ArrowDown, ArrowUpRight, Plus } from 'lucide-react'
import SEO from '@/components/SEO'
import { aboutGraph } from '@/lib/organizationSchema'
import '@/styles/about-editorial.css'

const IMAGE_ROOT = '/images/about-2026'
const images = {
  'hospitality-team': 'Chefs, coordinators and service colleagues gathered around a kitchen pass for a briefing',
  'kitchen-team': 'Culinary and service colleagues preparing dishes together in a spacious professional kitchen',
  'event-coordinator': 'An event coordinator and chef discussing the table plan in a light-filled venue',
  'chef-at-the-pass': 'A chef placing a finishing herb on a plated fish dish at the kitchen pass',
  'corporate-reception': 'A server offering canapés to guests at an evening business reception',
  'shared-table-evening': 'Guests sharing dinner around a candlelit table on a villa terrace',
}
function AboutImage({ name, priority = false, sizes = '(min-width: 900px) 50vw, calc(100vw - 40px)' }: {
  name: keyof typeof images
  priority?: boolean
  sizes?: string
}) {
  return <img className="ab-photo" src={IMAGE_ROOT + '/' + name + '-1200.webp'}
    srcSet={[480, 800, 1200, 1536].map(width => IMAGE_ROOT + '/' + name + '-' + width + '.webp ' + width + 'w').join(', ')}
    sizes={sizes} alt={images[name]} width={1536} height={1024}
    loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" />
}
const destinations = [
  { name: 'Dubai', region: 'United Arab Emirates', href: '/', link: 'Discover myCHEF Dubai', text: 'Our newest chapter, opened in February. We bring the group’s international experience to households, private celebrations and business occasions across Dubai, with planning shaped around the city’s homes, venues and ways of hosting.' },
  { name: 'Bali', region: 'Indonesia', href: 'https://mychef.id', link: 'Visit myCHEF Bali', text: 'Part of our established international operations. Bali connects our wider team with a place where private villas, shared meals and a warm welcome are central to the guest experience.' },
  { name: 'Cape Town', region: 'South Africa', href: 'https://www.mychefs.co.za', link: 'Visit myCHEF South Africa', text: 'Our catering group also operates in Cape Town. It is another home for the same belief that a memorable occasion starts with good food and the people who know how to look after a room.' },
  { name: 'Hawaii', region: 'United States', href: 'https://mychef-hawaii.com', link: 'Visit myCHEF Hawaii', text: 'Hawaii is part of our international footprint, bringing another setting and perspective to the group. Across destinations, we value thoughtful preparation, generous hospitality and a meal that belongs to its occasion.' },
]
const roles = [
  { title: 'Culinary talent', body: 'Chefs turn your preferences into a menu that works for the occasion. Cuisine, ingredients, dietary requirements and the available kitchen all matter. We match the culinary approach to your brief, with independent, licensed chefs and catering partners carrying out the cooking.' },
  { title: 'Event coordination', body: 'Your coordinator brings the moving parts together: the menu, guest numbers, service style, arrival arrangements and agreed timings. You have a clear point of contact who understands the whole brief and can take a question to the right person.' },
  { title: 'Service and hospitality', body: 'Service professionals look after the experience around the food. For staffed bookings, we agree the support your occasion needs, from welcoming guests and offering canapés to serving courses and clearing the table. The right presence is attentive, warm and appropriate to the room.' },
  { title: 'Operations and support', body: 'Behind the guest-facing team are the people checking schedules, access, equipment and the practical details of delivery. Their work connects the plan with the venue, so the chef and service team arrive with a shared understanding of what has been agreed.' },
]
const standards = [
  { title: 'People selected with care', body: 'We check the suitability of our culinary partners for the work they take on. Our selection process considers identity, experience, references and practical cooking ability, alongside the credentials relevant to the service. A good match includes both the food and the way a chef works in your space.' },
  { title: 'Details agreed in writing', body: 'Your proposal should make the scope understandable: menu, guest numbers, staffing, timings, equipment and price. We identify inclusions and any additional requirements before you confirm. If the brief changes, we discuss what that means for the plan and the quote.' },
  { title: 'Dietary needs taken seriously', body: 'Tell us about allergies, dietary requirements and ingredient preferences at the beginning. We take them to the culinary team and discuss the preparation arrangements for your booking. Clear information allows an informed decision about what can be accommodated; it also helps each guest receive the right meal.' },
  { title: 'Respect for your space', body: 'A home is personal, and a company event carries your reputation. We brief the team on access, household or venue expectations, privacy and the agreed service areas. The end-of-service plan covers clearing and the kitchen handover, so you know what the team will take care of.' },
]
const journey = [
  { title: 'Tell us what matters', body: 'Share your date, location, approximate guest count and the feeling you want to create. A favourite dish, a family tradition or a business objective can be a useful starting point.' },
  { title: 'Shape the occasion', body: 'We discuss the menu and the way it will be served, then work through the venue, dietary needs and level of support. Your proposal brings those choices together with the costs.' },
  { title: 'Bring the team together', body: 'Once you confirm, we finalise the agreed arrangements and brief the people delivering them. For full-service events, your coordinator keeps the planning connected and confirms the practical details with you.' },
  { title: 'Welcome your guests', body: 'The team works to the agreed plan while you spend time with the people you invited. Afterwards, your feedback helps us understand what you enjoyed and what you would like next time.' },
]
const questions = [
  { question: 'Is myCHEF new to Dubai?', answer: 'Yes. We opened in Dubai in February. Our local business is new, while our wider team brings more than ten years of international catering experience. We are part of a catering group with operations in Bali, Cape Town and Hawaii as well as Dubai.' },
  { question: 'What does the international group mean for my booking?', answer: 'It gives the Dubai business a wider base of culinary and hospitality experience to draw on. Your booking is still planned around your own location, guests and requirements. We confirm the team, service arrangements and scope for your Dubai occasion; we do not assume the same menu or format suits every destination.' },
  { question: 'Do I get a free event coordinator?', answer: 'Complimentary event coordination is included with our full-service event bookings. Your coordinator helps organise the catering brief, menu decisions, service timings and agreed arrangements. Food, service staff, equipment and any additional event services are itemised in your proposal. For a simpler delivery or household booking, we explain the support included in that service.' },
  { question: 'How big will the team at my event be?', answer: 'We have a large international team and partner network, but the people assigned to your occasion depend on the brief. Guest count, menu, service style, venue layout and timing determine the chef and service requirements. We discuss the proposed staffing with you instead of treating every event as the same package.' },
  { question: 'Can I speak to someone before deciding?', answer: 'Of course. Tell us what you are considering, even if the guest numbers or menu are still taking shape. We can help you understand the options and what information is needed for a useful proposal. You can use the enquiry form, contact the team or start a conversation on WhatsApp.' },
]
const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'About myCHEF', item: 'https://www.mychef.ae/about' },
  ],
}
const whatsapp = 'https://wa.me/971551744849?text=' + encodeURIComponent('Hi myCHEF, I would like to discuss a booking after reading your About page.')

export default function About() {
  return <article className="ab-page" data-about-page>
    <SEO title="Private Chef Company Dubai | Our Story | myCHEF"
      description="Meet myCHEF, a private chef company Dubai hosts can turn to. Opened here in February, backed by a global catering team with over 10 years of experience."
      canonicalPath="/about" ogImage={IMAGE_ROOT + '/hospitality-team-1536.webp'}
      schema={aboutGraph(breadcrumbSchema)} />

    <header className="ab-hero">
      <div className="ab-container">
        <nav className="ab-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">About myCHEF</span></nav>
        <div className="ab-hero-top">
          <h1><span className="ab-kicker">Private Chef Company Dubai</span>{' '}A new chapter.<br />{' '}<em>A world of experience.</em></h1>
          <div className="ab-hero-copy">
            <p>Welcome to myCHEF, a private chef company Dubai hosts can call on for thoughtful food, warm service and a team that brings the details together. We opened in Dubai in February, building on more than ten years of international catering experience across our team.</p>
            <div className="ab-actions"><Link className="ab-button" to="/inquiry?from=/about">Tell us about your occasion<ArrowUpRight size={17} aria-hidden="true" /></Link><a className="ab-text-link" href="#our-story">Our story<ArrowDown size={15} aria-hidden="true" /></a></div>
          </div>
        </div>
        <div className="ab-hero-image"><AboutImage name="hospitality-team" priority sizes="(min-width: 1400px) 1280px, (min-width: 700px) calc(100vw - 80px), calc(100vw - 40px)" /></div>
        <div className="ab-facts" aria-label="myCHEF at a glance">
          <div><strong>10+ years</strong><span>International experience across our team</span></div>
          <div><strong>Four destinations</strong><span>Dubai · Bali · Cape Town · Hawaii</span></div>
          <div><strong>One considered experience</strong><span>Food, people and planning, brought together</span></div>
        </div>
      </div>
    </header>

    <nav className="ab-chapters" aria-label="On this page"><div className="ab-container">
      <a href="#our-story">Our story</a><a href="#our-world">Our world</a><a href="#our-people">Our people</a><a href="#your-coordinator">Your coordinator</a><a href="#our-food">Our food</a><a href="#your-occasion">Your occasion</a><a href="#our-standards">Our standards</a>
    </div></nav>

    <section className="ab-section" id="our-story" aria-labelledby="story-heading">
      <div className="ab-container ab-story-grid">
        <div><p className="ab-kicker">01 / The Dubai chapter</p><h2 id="story-heading">The private chef company Dubai hosts can get to know.</h2><p className="ab-statement">New to the city.<br /><em>Experienced in bringing people together.</em></p></div>
        <div className="ab-prose">
          <p>There is a point in a good evening when the host finally settles into their chair. The first plates arrive, conversation finds its rhythm, and nobody needs to leave the table to check what happens next. That is the feeling we want to make possible.</p>
          <p>Our Dubai chapter began in February. We arrived as part of an international catering group already operating in Bali, Cape Town and Hawaii, with a large team whose experience spans more than ten years of catering around the world. Dubai is a new home for that experience and a new community to get to know.</p>
          <p>We are building the local business around a simple idea: exceptional hospitality starts with listening. Before suggesting a menu, we want to understand who is coming, what you are celebrating and how you want people to feel. A relaxed family gathering and an important company reception ask different things of the kitchen and the service team.</p>
          <p>Our role is to connect those details. We bring together culinary talent, event coordination and practical support, so your experience feels considered from the first conversation to the final clear-down. The ambition is personal: food you are excited to serve, people you feel comfortable welcoming and more time to enjoy your own occasion.</p>
        </div>
      </div>
    </section>

    <section className="ab-section ab-dark" id="our-world" aria-labelledby="world-heading">
      <div className="ab-container">
        <div className="ab-section-intro"><div><p className="ab-kicker">02 / An international family</p><h2 id="world-heading">Four places.<br /><em>A shared love of hospitality.</em></h2></div><p>myCHEF is part of a wider catering group, with operations in Dubai, Bali, Cape Town and Hawaii. Each destination has its own character. What connects us is the care behind the meal: understanding the brief, preparing properly and making people feel welcome.</p></div>
        <div className="ab-destinations">{destinations.map((place, index) => <div className="ab-destination" key={place.name}>
          <span className="ab-destination-number" aria-hidden="true">0{index + 1}</span><p className="ab-kicker">{place.region}</p><h3>{place.name}</h3><p>{place.text}</p>
          {place.href.startsWith('/') ? <Link className="ab-text-link" to={place.href}>{place.link}<ArrowUpRight size={15} aria-hidden="true" /></Link> : <a className="ab-text-link" href={place.href} target="_blank" rel="noopener noreferrer">{place.link}<ArrowUpRight size={15} aria-hidden="true" /></a>}
        </div>)}</div>
        <p className="ab-group-note">International experience informs our approach. Your Dubai booking is shaped around your guests, your venue and the service you choose.</p>
      </div>
    </section>

    <section className="ab-section" id="our-people" aria-labelledby="people-heading">
      <div className="ab-container">
        <div className="ab-section-intro"><div><p className="ab-kicker">03 / The people behind the welcome</p><h2 id="people-heading">A big team.<br /><em>Care in every role.</em></h2></div><div className="ab-prose"><p>A beautifully finished plate is one part of the experience. Behind it are the people choosing the ingredients, checking the schedule, preparing the kitchen, setting the table and looking after your guests.</p><p>Our strength is the breadth of our international team and partner network. For each Dubai booking, we bring together the skills the occasion needs. A smaller dinner calls for a different team from a company reception, and we make that distinction when we plan your service.</p></div></div>
        <div className="ab-team-image"><AboutImage name="kitchen-team" sizes="(min-width: 1400px) 1280px, (min-width: 600px) calc(100vw - 80px), calc(100vw - 40px)" /></div>
        <div className="ab-roles">{roles.map((role, index) => <div key={role.title}><span className="ab-index" aria-hidden="true">0{index + 1}</span><h3>{role.title}</h3><p>{role.body}</p></div>)}</div>
        <div className="ab-related-links"><Link className="ab-text-link" to="/our-chefs">Explore our chefs<ArrowUpRight size={16} aria-hidden="true" /></Link><Link className="ab-text-link" to="/how-we-vet-our-chefs">How chefs are vetted<ArrowUpRight size={16} aria-hidden="true" /></Link></div>
      </div>
    </section>

    <section className="ab-section ab-cream" id="your-coordinator" aria-labelledby="coordinator-heading">
      <div className="ab-container ab-split">
        <div className="ab-split-image"><AboutImage name="event-coordinator" sizes="(min-width: 1101px) 1536px, (min-width: 600px) calc(100vw - 80px), 125vw" /></div>
        <div className="ab-prose"><p className="ab-kicker">04 / Someone keeping it all together</p><h2 id="coordinator-heading">Your event coordinator.<br /><em>One less thing to think about.</em></h2>
          <p className="ab-lead">A complimentary event coordinator is included with our full-service event bookings.</p>
          <p>You may have a clear picture of the evening, or just a date and a reason to gather. Your coordinator helps turn that starting point into a practical catering plan, bringing your preferences and the team’s requirements into the same conversation.</p>
          <p>They help you work through the menu, guest count, dietary needs and service timings. They also connect the kitchen and service arrangements with the venue: access, setup, the space available and when everything needs to be ready. You have someone who knows the brief when a question comes up.</p>
          <p>We keep the scope clear. Coordination is complimentary within the full-service booking; food, service staff, equipment and any additional event services are set out in your proposal. If you need help beyond the catering arrangements, tell us at the start so we can explain the options and any additional costs.</p>
          <Link className="ab-text-link" to="/inquiry?from=/about">Start planning with us<ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>

    <section className="ab-section" id="our-food" aria-labelledby="food-heading">
      <div className="ab-container ab-split ab-split-reverse">
        <div className="ab-split-image"><AboutImage name="chef-at-the-pass" sizes="(min-width: 1101px) 1536px, (min-width: 600px) calc(100vw - 80px), 125vw" /></div>
        <div className="ab-prose"><p className="ab-kicker">05 / Food with a sense of occasion</p><h2 id="food-heading">Made for the people<br /><em>around your table.</em></h2>
          <p className="ab-lead">The food should be a reason people remember the occasion.</p>
          <p>That can mean a generous sharing table, delicate canapés that are easy to enjoy while talking, or a carefully paced sequence of plated courses. We start with the people eating and the way you want to host, then shape the dishes around that experience.</p>
          <p>Our international background gives us a broad perspective on flavour and hospitality. The menu itself is developed for your booking, with attention to ingredient preferences, dietary requirements, portion sizes and the practical conditions of service. A dish has to work beautifully where it will be prepared and served.</p>
          <p>We value the details that make food enjoyable: balance, texture, temperature and presentation. Just as much thought goes into the flow of the meal. Guests should feel comfortably looked after, whether they are sitting down for dinner or moving between conversations at a reception.</p>
          <Link className="ab-text-link" to="/catering-dubai">Explore our catering approach<ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>

    <section className="ab-section ab-cream" id="your-occasion" aria-labelledby="occasion-heading">
      <div className="ab-container">
        <div className="ab-section-intro"><div><p className="ab-kicker">06 / The moments we help make</p><h2 id="occasion-heading">You bring the people.<br /><em>We help you welcome them.</em></h2></div><p>Some occasions are deeply personal. Others represent a company, a team or a new beginning. We listen to what yours means, then recommend the food and level of service that fit. Hospitality should feel at home in the setting you have chosen.</p></div>
        <div className="ab-occasions">
          <div><AboutImage name="shared-table-evening" /><div className="ab-occasion-copy"><p className="ab-kicker">At home & together</p><h3>For the moments that become memories.</h3><p>A birthday, an anniversary or simply a long-overdue dinner with friends deserves a host who has time to enjoy it. We help shape the menu and service around your guests, your home and the kind of evening you want to share.</p><p>Some hosts want an intimate plated dinner. Others prefer generous dishes passed around the table. We discuss the possibilities, including the practical kitchen and service needs, before settling on a plan.</p><Link className="ab-text-link" to="/events">Explore private occasions<ArrowUpRight size={16} aria-hidden="true" /></Link></div></div>
          <div><AboutImage name="corporate-reception" /><div className="ab-occasion-copy"><p className="ab-kicker">For your company & your guests</p><h3>Hospitality that represents you well.</h3><p>When you host on behalf of a company, every detail contributes to the impression people take away. We plan food and service around the purpose of the gathering, whether you are welcoming clients, bringing colleagues together or marking an important milestone.</p><p>The agenda matters as much as the menu. We discuss serving times, the room layout, guest movement and the level of staffing, so the catering supports the event and gives your team space to focus on its guests.</p><Link className="ab-text-link" to="/corporate">Explore company occasions<ArrowUpRight size={16} aria-hidden="true" /></Link></div></div>
        </div>
        <p className="ab-service-note">Looking beyond a single event? Discover our <Link to="/private-chef-dubai">chef service for everyday life at home</Link>. Hosting on the water? Explore <Link to="/yachts">our yacht service</Link>, with planning shaped around the vessel and itinerary.</p>
      </div>
    </section>

    <section className="ab-section" id="our-standards" aria-labelledby="standards-heading">
      <div className="ab-container ab-standards-grid">
        <div><p className="ab-kicker">07 / Confidence in the details</p><h2 id="standards-heading">Trust starts before<br /><em>the first plate.</em></h2><p className="ab-lead">Experience matters. So does knowing exactly what to expect from the people you invite into your home or event.</p><p className="ab-muted">We want you to feel comfortable asking questions. Clear answers, a considered proposal and a team that understands the brief are part of the service.</p></div>
        <div className="ab-standards">{standards.map((standard, index) => <div key={standard.title}><span className="ab-index" aria-hidden="true">0{index + 1}</span><div><h3>{standard.title}</h3><p>{standard.body}</p></div></div>)}</div>
      </div>
    </section>

    <section className="ab-section ab-dark" aria-labelledby="journey-heading">
      <div className="ab-container"><p className="ab-kicker">08 / From an idea to an occasion</p><h2 id="journey-heading">A clear plan.<br /><em>A warmer welcome.</em></h2>
        <ol className="ab-journey">{journey.map((step, index) => <li key={step.title}><span className="ab-index" aria-hidden="true">0{index + 1}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}</ol>
      </div>
    </section>

    <section className="ab-section ab-cream" aria-labelledby="questions-heading">
      <div className="ab-container ab-faq-grid"><div><p className="ab-kicker">Good to know</p><h2 id="questions-heading">A little more<br /><em>about myCHEF.</em></h2><p>Have a different question? <Link className="ab-inline-link" to="/contact">Talk to our team</Link>. We are happy to explain how the service could work for you.</p></div>
        <div className="ab-faqs">{questions.map(item => <details key={item.question}><summary>{item.question}<Plus size={19} aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>
      </div>
    </section>

    <section className="ab-section ab-close" aria-labelledby="enquiry-heading">
      <div className="ab-container"><p className="ab-kicker">Your next chapter</p><h2 id="enquiry-heading">Let’s make something<br /><em>worth gathering for.</em></h2><p>Tell us who you are bringing together and what you have in mind. We will help you explore the food, service and team that can make the occasion feel like yours.</p><div className="ab-actions"><Link className="ab-button" to="/inquiry?from=/about">Tell us about your occasion<ArrowUpRight size={17} aria-hidden="true" /></Link><a className="ab-text-link" href={whatsapp} target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp<ArrowUpRight size={16} aria-hidden="true" /></a></div><p className="ab-coverage-note">Serving homes and event venues across Dubai. <Link to="/locations">See the areas we serve</Link>.</p></div>
    </section>
  </article>
}
