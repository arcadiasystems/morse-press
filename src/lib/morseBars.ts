import { morseLetters } from '../base/morse'

/* The glass bars of "Why": a word in Morse, generated from the word. A dot is
   a narrow bar and a dash a wide one (22 and 58 units, set in press.css), a
   gap separates the letters (18 units), and the heights follow a sine arc
   across the whole word. One CSS variable, --u, scales the object. To change
   the word, change the argument: never edit bars by hand. */

/** The arc runs a little past both ends of a half turn, so the first and last bars are not the lowest point of the wave. */
const ARC_OVERSHOOT = 0.3
/** The middle of the wave and its swing, in units: bars run from about 99 to about 279 tall. */
const ARC_MIDDLE = 140
const ARC_SWING = 139.7
/** The pulse of light reaches each bar this many seconds after the one before. */
const PULSE_STEP = 0.13

export type BarPart =
  | { kind: 'bar'; dash: boolean; /** Height in units. */ height: number; /** Pulse delay, as a CSS time. */ delay: string }
  | { kind: 'gap' }

/** The row of bars and letter gaps for a word. */
export function morseBars(word: string): BarPart[] {
  const letters = morseLetters(word)
  const count = letters.reduce((total, symbols) => total + symbols.length, 0)
  const parts: BarPart[] = []
  let index = 0

  letters.forEach((symbols, letterIndex) => {
    if (letterIndex > 0) parts.push({ kind: 'gap' })
    for (const symbol of symbols) {
      const progress = count > 1 ? index / (count - 1) : 0.5
      const angle = -ARC_OVERSHOOT + (Math.PI + 2 * ARC_OVERSHOOT) * progress
      parts.push({
        kind: 'bar',
        dash: symbol === 'dash',
        height: Math.round(ARC_MIDDLE + ARC_SWING * Math.sin(angle)),
        delay: `${(index * PULSE_STEP).toFixed(2)}s`,
      })
      index += 1
    }
  })
  return parts
}
