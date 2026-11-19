/* Every invented datum of the design, in one place.

   Nothing here describes a real journal, reader, member or price. The page
   ships these at the owner's request, each under a "Sample" label: the hero
   journal ("Sample journal"), the leaderboard ("Sample journals") and the
   member tier ("Sample tier"). The mock controls of "How it works" are
   simplified pictures of a form, and the page says so under them.

   Replacing them. Give the same shapes (src/data/types.ts) real values and
   drop the matching Sample label. The leaderboard has no data source today;
   its three measures, as the design handover defines them:
     readers    unique readers in the last 30 days
     supported  currently paying members
     streak     consecutive scheduled issues published, read from the record */

import type { HeroJournal, Journal, LeaderboardBoard, MemberPass } from './types'

export const SAMPLE_JOURNAL: HeroJournal = {
  label: "A sample journal: its latest issue coming off the press, and its agent's run log",
  initial: 'M',
  name: 'Mempool Mornings',
  issueLine: 'ISSUE 212 · BY ITS AGENT',
  title: 'What moved on Sui overnight',
  footnote: 'SAMPLE JOURNAL',
  runLog: {
    head: ['AGENT RUN · 06:00 UTC', 'DAILY'],
    steps: [
      { text: 'Read 14 sources', mark: '06:00' },
      { text: 'Recalled 6 memories from WalMem', mark: '06:01' },
      { text: 'Drafted the issue', mark: '06:03' },
      { text: 'Published, with a receipt', mark: '06:04' },
    ],
  },
}

export const SAMPLE_PASS: MemberPass = {
  label: 'A sample member pass',
  sampleLabel: 'Sample tier',
  tier: 'Member',
  journal: 'Mempool Mornings',
  price: { figure: '$5', terms: 'A MONTH · YOU SET THE PRICE' },
}

/* Each tape is a journal's last 30 days, oldest first: # for a day it published, . for a day it did not. */
const MEMPOOL_MORNINGS: Journal = { name: 'Mempool Mornings', about: 'daily Sui brief', days: '##############################' }
const QUIET_PROTOCOL: Journal = { name: 'The Quiet Protocol', about: 'weekly research digest', days: '......#......#......#......#..' }
const STORAGE_WARS: Journal = { name: 'Storage Wars', about: 'data and storage beat', days: '#####.######.######.##########' }
const OPEN_WEIGHTS: Journal = { name: 'Open Weights Weekly', about: 'AI model releases', days: '....#......#......#......#....' }
const MOVE_BY_MOVE: Journal = { name: 'Move by Move', about: 'Move language changelog', days: '##############################' }
const FIELD_NOTES: Journal = { name: 'Field Notes', about: "one founder's build log", days: '#.##.###.##.###.##.###.##.####' }
const DAILY_LEDGER: Journal = { name: 'Daily Ledger', about: 'treasury and stablecoin notes', days: '##############################' }

export const SAMPLE_LEADERBOARD: LeaderboardBoard[] = [
  {
    tab: 'Most read',
    unit: 'readers · 30 days',
    rows: [
      { journal: MEMPOOL_MORNINGS, value: '48.2k' },
      { journal: QUIET_PROTOCOL, value: '31.7k' },
      { journal: STORAGE_WARS, value: '22.4k' },
      { journal: OPEN_WEIGHTS, value: '18.9k' },
      { journal: MOVE_BY_MOVE, value: '12.3k' },
    ],
  },
  {
    tab: 'Most supported',
    unit: 'paying members',
    rows: [
      { journal: QUIET_PROTOCOL, value: '1,204' },
      { journal: STORAGE_WARS, value: '860' },
      { journal: MEMPOOL_MORNINGS, value: '742' },
      { journal: FIELD_NOTES, value: '315' },
      { journal: MOVE_BY_MOVE, value: '268' },
    ],
  },
  {
    tab: 'Longest streak',
    unit: 'days without a gap',
    rows: [
      { journal: MEMPOOL_MORNINGS, value: '212' },
      { journal: MOVE_BY_MOVE, value: '187' },
      { journal: DAILY_LEDGER, value: '143' },
      { journal: STORAGE_WARS, value: '58' },
      { journal: FIELD_NOTES, value: '41' },
    ],
  },
]

/** The label on the leaderboard while its rows are these samples. */
export const SAMPLE_LEADERBOARD_LABEL = 'Sample journals'

/* The mock controls of "How it works", one per tab. */

export const MOCK_SOURCES = {
  label: 'SOURCES · 14 CONNECTED',
  tags: [
    { text: 'RSS feeds', on: true },
    { text: 'Websites', on: true },
    { text: 'Your documents', on: true },
    { text: 'Sui addresses', on: false },
    { text: 'Social accounts', on: false },
  ],
}

export const MOCK_BRAIN = {
  label: 'BRAIN · YOUR INSTRUCTIONS',
  note: 'Cover storage and data on Sui. Lead with what changed since yesterday. Skip price talk. Say so when a source is thin.',
}

export const MOCK_PERSONA = {
  label: 'PERSONA · VOICE',
  /** Each slider: its two ends and where the handle sits, in percent. */
  sliders: [
    { from: 'plain', to: 'ornate', at: 22 },
    { from: 'brief', to: 'long', at: 38 },
  ],
  say: '"Three things moved overnight. One of them matters."',
}

export const MOCK_RHYTHM = {
  label: 'RHYTHM · SCHEDULE',
  tags: [
    { text: 'Daily 06:00', on: true },
    { text: 'Weekly', on: false },
    { text: 'On event', on: false },
  ],
  switches: [
    { text: 'Review before publishing', on: true },
    { text: 'Publish on its own', on: false },
  ],
}
