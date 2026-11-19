import { Band } from '../base/Band'
import { Lockup } from '../base/Lockup'
import { TraceMark } from '../base/TraceMark'
import { MORSE_AGENTS } from '../lib/links'

const RUNS_ON = ['The Morse kit', 'Walrus', 'Sui', 'Seal', 'WalMem']

/** One glass band that sends developers to Morse Agents, whose wordmark carries its own colour, lime. Then what Press runs on. */
export function Developers() {
  return (
    <section className="sec flush" id="developers">
      <div className="wrap">
        <Band
          href={MORSE_AGENTS}
          link="morse-agents"
          lockup={<Lockup product="agents" Mark={TraceMark} markSize={40} productColor="#C6F135" fontSize={22} />}
          title="Built on an open template."
          text="The agent behind every journal is Morse Agents. Developers can fork it and run their own."
          action="For developers"
        />
        <div className="runs">
          <span className="lab">Runs on</span>
          {RUNS_ON.map(name => (
            <span key={name} className="pill">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
