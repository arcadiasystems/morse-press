import type { CSSProperties } from 'react'

/** An inline style that sets CSS custom properties, which React's own type leaves out. */
export function cssVars(vars: Record<`--${string}`, string | number>): CSSProperties {
  return vars
}
