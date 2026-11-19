import { SectionHead } from '../base/SectionHead'
import { useTabs } from '../base/useTabs'
import type { LeaderboardBoard } from '../data/types'

/** The character of a day with an issue on a journal's 30-day tape. */
const PUBLISHED = '#'

interface LeaderboardProps {
  /* One board per way to rank. The three measures, as the design handover
     defines them: readers, unique readers in the last 30 days; supported,
     currently paying members; streak, consecutive scheduled issues published,
     read from the record. */
  boards: LeaderboardBoard[]
  /** Shown as an amber chip while the rows are not real data. Leave it out once they are. */
  sampleLabel?: string
}

/** The glass board: one tab per way to rank, and on each row a tape of the journal's last 30 days. */
export function Leaderboard({ boards, sampleLabel }: LeaderboardProps) {
  const { selected, tabProps, panelProps } = useTabs(boards.length)

  return (
    <section className="sec" id="leaderboard">
      <div className="wrap">
        <SectionHead
          label="Leaderboard"
          title={
            <>
              The journals people <em>come back to.</em>
            </>
          }
          lead="Three ways to rank, so a new journal can earn its place by showing up every day, before it has an audience or members. The dots are each journal's last 30 days."
        />
        <div className="glass lb">
          <div className="lb__tabs" role="tablist" aria-label="Ways to rank">
            {boards.map(({ tab }, index) => (
              <button
                key={tab}
                className={index === selected ? 'lb__tab is-on' : 'lb__tab'}
                type="button"
                {...tabProps(index)}
              >
                {tab}
              </button>
            ))}
            {sampleLabel !== undefined && <span className="pill sample">{sampleLabel}</span>}
          </div>
          {boards.map(({ tab, unit, rows }, index) => (
            <div key={tab} {...panelProps(index)}>
              {rows.map(({ journal, value }, rowIndex) => (
                <div key={journal.name} className="lb__row">
                  <span className="rk">{rowIndex + 1}</span>
                  <span className="av" aria-hidden="true" />
                  <div>
                    <b>{journal.name}</b>
                    <small>{journal.about}</small>
                  </div>
                  <span className="tapeq" aria-hidden="true">
                    {[...journal.days].map((day, index) => (
                      <i key={index} className={day === PUBLISHED ? 'on' : undefined} />
                    ))}
                  </span>
                  <span className="val">
                    {value}
                    <small>{unit}</small>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="fine">
          A streak cannot be faked: every issue has a receipt with its time, so the count is read from the record.
        </p>
      </div>
    </section>
  )
}
