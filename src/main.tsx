import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'
import { armRevealFailsafe } from './lib/revealFailsafe'

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>,
)

// Safety net for the initial page load. Every subsequent navigation re-arms
// this from ScrollManager. See src/lib/revealFailsafe.ts for the rationale.
armRevealFailsafe()
