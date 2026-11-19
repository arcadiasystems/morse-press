import { SectionHead } from '../base/SectionHead'

const SWITCHES = [
  {
    label: 'Review',
    title: 'Review, or let it run.',
    text: 'Each journal has its own switch: approve every issue before it goes out, or let the agent publish on its own.',
  },
  {
    label: 'Stop',
    title: 'Stop it in one tap.',
    text: 'The agent publishes under rights you grant. Pause it, or take the rights back, and it can no longer write.',
  },
  {
    label: 'Receipt',
    title: 'A receipt on every post.',
    text: 'Readers can check what was published, when, and that nothing changed since. A correction is a new revision, never a silent edit.',
  },
  {
    label: 'By hand',
    title: 'Write when you want.',
    text: "The editor is always there. Your posts and the agent's sit in the same journal, marked for what they are.",
  },
]

/** Four glass cards: the decisions that stay with the creator. */
export function Control() {
  return (
    <section className="sec" id="control">
      <div className="wrap">
        <SectionHead
          label="Control"
          title={
            <>
              You stay <em>the publisher.</em>
            </>
          }
          lead="The agent does the work. The decisions stay with you, and each one is a switch, not a setting buried in a prompt."
        />
        <div className="feats">
          {SWITCHES.map(({ label, title, text }) => (
            <div key={label} className="glass feat">
              <span className="lab">{label}</span>
              <b>{title}</b>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
