import { ButtonLink } from './base/ButtonLink'
import { Lockup } from './base/Lockup'
import { PressMark } from './components/PressMark'
import { HOME, HOME_HOW } from './lib/links'

/** The page the host serves, with a 404 status, for any address the site does not have. Static: it loads no script. */
export function NotFound() {
  return (
    <>
      <header className="nav">
        <div className="wrap">
          <Lockup product="press" Mark={PressMark} markSize={30} href={HOME} label="Morse Press home" />
        </div>
      </header>
      <main>
        <section className="hero">
          <span className="glow a" />
          {/* .hero is a flex row, so the wrap is given the full width it would otherwise shrink from. */}
          <div className="wrap" style={{ width: '100%' }}>
            <div className="hero__l">
              <span className="lab">404</span>
              <h1 className="thin">
                No page at
                <br />
                this address.
              </h1>
              <p className="sub">The link may be mistyped, or the page is not there yet. Nothing was lost: start from the top.</p>
              <div className="hero__cta">
                <ButtonLink variant="acc" label="Morse Press" href={HOME} />
                <ButtonLink variant="ghost" label="See how it works" href={HOME_HOW} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
