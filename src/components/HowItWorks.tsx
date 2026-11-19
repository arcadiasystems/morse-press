import type { ReactNode } from 'react'
import { SectionHead } from '../base/SectionHead'
import { useTabs } from '../base/useTabs'
import { MOCK_BRAIN, MOCK_PERSONA, MOCK_RHYTHM, MOCK_SOURCES } from '../data/samples'
import { cssVars } from '../lib/cssVars'

function Tags({ tags }: { tags: { text: string; on: boolean }[] }) {
  return (
    <div className="tags">
      {tags.map(({ text, on }) => (
        <span key={text} className={on ? 'tag on' : 'tag'}>
          {text}
        </span>
      ))}
    </div>
  )
}

interface Choice {
  name: string
  title: string
  text: string
  /** The label over the mock control, and the control: a simplified picture of the real form. */
  label: string
  control: ReactNode
}

const CHOICES: Choice[] = [
  {
    name: 'Sources',
    title: 'What it reads before it writes.',
    text: 'Point it at the places you would read yourself. It checks them on every run and says so when a source is thin.',
    label: MOCK_SOURCES.label,
    control: <Tags tags={MOCK_SOURCES.tags} />,
  },
  {
    name: 'Brain',
    title: 'What it cares about, and what it skips.',
    text: "The brain is your editorial lens in plain words. It is the one part that makes this agent yours and not anyone else's.",
    label: MOCK_BRAIN.label,
    control: <p className="note">{MOCK_BRAIN.note}</p>,
  },
  {
    name: 'Persona',
    title: 'How it sounds on the page.',
    text: 'Set the voice once: how plain, how long, how dry. Every issue reads like the same writer.',
    label: MOCK_PERSONA.label,
    control: (
      <>
        {MOCK_PERSONA.sliders.map(({ from, to, at }) => (
          <div key={from} className="slider">
            <span>{from}</span>
            <i style={cssVars({ '--at': `${at}%` })} />
            <span>{to}</span>
          </div>
        ))}
        <span className="say">{MOCK_PERSONA.say}</span>
      </>
    ),
  },
  {
    name: 'Rhythm',
    title: 'When it files, and who has the last word.',
    text: 'Pick the schedule, then choose per journal: approve every issue before it goes out, or let the agent publish on its own.',
    label: MOCK_RHYTHM.label,
    control: (
      <>
        <Tags tags={MOCK_RHYTHM.tags} />
        {MOCK_RHYTHM.switches.map(({ text, on }) => (
          <div key={text} className={on ? 'switch' : 'switch off'}>
            <span>{text}</span>
            <i />
          </div>
        ))}
      </>
    ),
  },
]

/** The tabbed glass console: the four choices of the setup form, one pane at a time. */
export function HowItWorks() {
  const { selected, tabProps, panelProps } = useTabs(CHOICES.length)

  return (
    <section className="sec" id="how">
      <div className="wrap">
        <SectionHead
          label="How it works"
          title={
            <>
              Set the type once.
              <br />
              <em>The press runs itself.</em>
            </>
          }
          lead="Four choices in one form, no code. Change any of them later and the agent picks it up on its next run."
        />
        <div className="setup">
          <div className="tabs" role="tablist" aria-label="The four choices of the setup form">
            {CHOICES.map(({ name }, index) => (
              <button key={name} className={index === selected ? 'tab is-on' : 'tab'} type="button" {...tabProps(index)}>
                <small>{String(index + 1).padStart(2, '0')}</small>
                <b>{name}</b>
              </button>
            ))}
          </div>
          {CHOICES.map(({ name, title, text, label, control }, index) => (
            <div key={name} className="pane" {...panelProps(index)}>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <div className="ui">
                <span className="ui__lab">{label}</span>
                {control}
              </div>
            </div>
          ))}
        </div>
        <p className="fine">The controls are simplified pictures of the real form.</p>
      </div>
    </section>
  )
}
