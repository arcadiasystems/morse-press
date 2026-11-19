import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/tokens.css'
import '../src/styles/base.css'
import '../src/styles/press.css'
import './card.css'
import './object.css'
import { Press } from '../src/components/Hero'
import { PressMark } from '../src/components/PressMark'
import { Card } from './Card'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Card
      product="press"
      Mark={PressMark}
      headline={
        <>
          Your journal,
          <br />
          <em>run by your agent.</em>
        </>
      }
      tagline="It reads, writes and publishes for you."
      domain="press.morsecms.xyz"
    >
      <Press />
      <span className="pill sample og__sample">Sample</span>
    </Card>
  </StrictMode>,
)
