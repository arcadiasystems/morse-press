import { morseBars } from '../lib/morseBars'
import { cssVars } from '../lib/cssVars'

const BARS = morseBars('PRESS')

const QUIET = [
  { cause: 'The author gets busy.', effect: 'The journal stops.' },
  { cause: 'A bot fills the gap.', effect: 'Nobody can check what it wrote.' },
  { cause: 'The platform holds the audience.', effect: 'The creator starts over.' },
]

/** One row of the bars. The second row is the same one mirrored, as a reflection. */
function BarRow({ reflection = false }: { reflection?: boolean }) {
  return (
    <div className={reflection ? 'bars refl' : 'bars'}>
      {BARS.map((part, index) =>
        part.kind === 'gap' ? (
          <i key={index} className="gap" />
        ) : (
          <i
            key={index}
            className={part.dash ? 'bar dash' : 'bar'}
            style={cssVars({ '--h': part.height, '--d': part.delay })}
          />
        ),
      )}
    </div>
  )
}

/** PRESS spelled in Morse as a row of glass bars, with a pulse of light and a reflection. */
export function Why() {
  return (
    <section className="why" id="why">
      <span className="glow" />
      <div className="wrap">
        <span className="lab">Why an agent</span>
        <div className="barsbox" aria-hidden="true">
          <BarRow />
          <BarRow reflection />
        </div>
        <span className="barscap">PRESS, IN MORSE</span>
        <h2 className="thin">
          Without an agent, <em>journals go quiet.</em>
        </h2>
        <div className="trio">
          {QUIET.map(({ cause, effect }) => (
            <div key={cause}>
              <span>{cause}</span>
              <b>{effect}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
