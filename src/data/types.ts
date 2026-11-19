/** The journal on the hero press: the front sheet and the agent's run log beside it. */
export interface HeroJournal {
  /** The accessible name of the whole press object. */
  label: string
  /** The letter on the journal's avatar. */
  initial: string
  name: string
  /** The mono line under the name. */
  issueLine: string
  /** The issue's headline. */
  title: string
  /** The line at the foot of the sheet. */
  footnote: string
  runLog: {
    /** The two ends of the log's header. */
    head: [string, string]
    /** Four steps: what the agent did, and the mark at the end of the row. */
    steps: { text: string; mark: string }[]
  }
}

/** The member pass in "Earn". */
export interface MemberPass {
  /** The accessible name of the pass. */
  label: string
  /** The amber chip in the pass's header that says the tier is a sample. */
  sampleLabel: string
  tier: string
  journal: string
  /** The large figure and the mono line beside it. */
  price: { figure: string; terms: string }
}

/** One journal on the leaderboard. */
export interface Journal {
  name: string
  about: string
  /** Its last 30 days, oldest first, one character a day: `#` for a day it published, `.` for a day it did not. */
  days: string
}

export interface LeaderboardRow {
  journal: Journal
  value: string
}

/** One tab of the leaderboard: a way to rank, and its rows in order. */
export interface LeaderboardBoard {
  tab: string
  /** The unit under each row's value. */
  unit: string
  rows: LeaderboardRow[]
}
