import { Fragment } from 'react'
import { SectionHead } from '../base/SectionHead'

const POINTS = [
  {
    title: 'Every run starts from the last one.',
    text: 'What it covered, what you corrected, what you cut before publishing.',
  },
  {
    title: 'It learns what your readers open.',
    text: 'The next issue leans toward what was read and away from what was skipped.',
  },
  {
    title: 'The memory belongs to the journal.',
    text: "It lives on WalMem with the rest of your publication, not in a vendor's database.",
  },
]

/* The ring is drawn in a 660 by 540 box around the centre (260, 260). */
const CENTRE = 260

/** The five steps of the loop: the node on the ring, and where its two lines of text sit. */
const STEPS = [
  { name: 'Read', note: 'YOUR SOURCES', node: [260, 84], text: [260, 50] },
  { name: 'Write', note: 'IN YOUR VOICE', node: [427, 206], text: [511, 204] },
  { name: 'Publish', note: 'WITH A RECEIPT', node: [363, 402], text: [393, 446] },
  { name: 'Readers', note: 'WHAT THEY OPEN', node: [157, 402], text: [127, 446] },
  { name: 'Remember', note: 'WHAT WORKED', node: [93, 206], text: [9, 204] },
]

/** The memory ring: five steps around a WalMem core, with a light travelling the ring.
    Inline SVG cannot read CSS variables, so the hexes here are literal. */
function Ring() {
  return (
    <svg
      className="ring"
      viewBox="-70 0 660 540"
      role="img"
      aria-label="The agent loop: read, write, publish, readers respond, remember, around a WalMem core"
    >
      <defs>
        <radialGradient id="core" cx="50%" cy="40%" r="70%">
          <stop offset="0" stopColor="#FF5A36" stopOpacity=".55" />
          <stop offset="1" stopColor="#FF5A36" stopOpacity=".08" />
        </radialGradient>
      </defs>
      <circle cx={CENTRE} cy={CENTRE} r={236} fill="none" stroke="rgba(255,255,255,.05)" />
      <circle cx={CENTRE} cy={CENTRE} r={176} fill="none" stroke="rgba(255,255,255,.14)" strokeWidth={1.5} />
      {/* The light. It travels by a CSS animation (`orbit` in press.css), so it stops under reduced motion. */}
      <circle
        className="ring__light"
        cx={CENTRE}
        cy={CENTRE}
        r={176}
        fill="none"
        stroke="#FF5A36"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray="80 1026"
      />
      <rect x={186} y={186} width={148} height={148} rx={34} fill="url(#core)" stroke="rgba(255,255,255,.3)" />
      <text x={CENTRE} y={262} textAnchor="middle">
        WalMem
      </text>
      <text className="s" x={CENTRE} y={284} textAnchor="middle">
        ITS MEMORY
      </text>
      {STEPS.map(({ name, note, node: [nodeX, nodeY], text: [textX, textY] }) => (
        <Fragment key={name}>
          <circle cx={nodeX} cy={nodeY} r={10} fill="#0A0807" stroke="#FF5A36" strokeWidth={3} />
          <text x={textX} y={textY} textAnchor="middle">
            {name}
          </text>
          <text className="s" x={textX} y={textY + 19} textAnchor="middle">
            {note}
          </text>
        </Fragment>
      ))}
    </svg>
  )
}

export function Memory() {
  return (
    <section className="sec" id="memory">
      <div className="wrap two">
        <div>
          <SectionHead
            label="Memory"
            title={
              <>
                It remembers.
                <br />
                <em>So it improves.</em>
              </>
            }
            lead="A script writes the same post forever. Your agent keeps a memory of its own, on WalMem, and manages it itself."
          />
          <ul className="pts">
            {POINTS.map(({ title, text }, index) => (
              <li key={title}>
                <span className="n">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <b>{title}</b>
                  <span>{text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Ring />
      </div>
    </section>
  )
}
