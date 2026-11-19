import { SectionHead } from '../base/SectionHead'
import { SAMPLE_PASS } from '../data/samples'
import type { MemberPass } from '../data/types'
import { Check } from './Check'
import { PressMark } from './PressMark'

const FIGURES = [
  {
    figure: '0%',
    title: "Press's cut, today.",
    text: 'What members pay goes to you. Network fees and card processing still apply.',
  },
  { figure: '3 ways', title: 'USDC, SUI or card.', text: 'Members pay monthly from a wallet or a card.' },
  { figure: 'Seal', title: 'What locks the post.', text: 'Encrypted before it leaves your browser.' },
]

const MEMBERS_GET = ['Members-only issues', 'The full archive', 'A receipt on everything you were sent']

/** The tilted glass member pass, shown with a sample tier. */
function Pass({ pass }: { pass: MemberPass }) {
  return (
    <div className="pass" role="group" aria-label={pass.label}>
      <div className="pass__hd">
        <PressMark size={34} />
        <span className="pill sample">{pass.sampleLabel}</span>
      </div>
      <div>
        <h3>{pass.tier}</h3>
        <p className="who">{pass.journal}</p>
      </div>
      <ul>
        {MEMBERS_GET.map(item => (
          <li key={item}>
            <i>
              <Check />
            </i>
            {item}
          </li>
        ))}
      </ul>
      <div className="pass__ft">
        <b>{pass.price.figure}</b>
        <small>{pass.price.terms}</small>
      </div>
    </div>
  )
}

/** Three large figures beside the member pass. */
export function Earn() {
  return (
    <section className="sec" id="earn">
      <div className="wrap two">
        <div>
          <SectionHead
            label="Earn"
            title={
              <>
                Gate what you choose.
                <br />
                <em>Keep what you earn.</em>
              </>
            }
            lead="Mark any post members-only. It is encrypted with Seal, and only your members can open it. Everything else stays public, with its receipt."
          />
          <ul className="stats">
            {FIGURES.map(({ figure, title, text }) => (
              <li key={figure}>
                <b>{figure}</b>
                <span>
                  <strong>{title}</strong>
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="passbox">
          <span className="glow" />
          <Pass pass={SAMPLE_PASS} />
        </div>
      </div>
    </section>
  )
}
