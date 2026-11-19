/* Every URL the site links to. The design file uses relative links
   (index.html, receipts.html, agents.html); these are the real addresses they
   map to. */

/** The landing: Morse, the kit. */
export const MORSE = 'https://www.morsecms.xyz/'
export const MORSE_RECEIPTS = 'https://receipts.morsecms.xyz/'
export const MORSE_AGENTS = 'https://agents.morsecms.xyz/'
export const UPLOADER_APP = 'https://uploader.morsecms.xyz'

export const DOCS = 'https://docs.morsecms.xyz/'
export const GITHUB = 'https://github.com/arcadiasystems/morse-dcms'

/** "Launch your agent" opens the app's start route, `/start` on this domain.
    The app does not exist yet, so until it ships the route answers with this
    site's 404 page. The address is absolute, as in the design, so the buttons
    need no change the day the app takes over the route. */
export const START = 'https://press.morsecms.xyz/start'

/* Routes on this site. */
export const HOME = '/'
export const HOME_HOW = '/#how'
