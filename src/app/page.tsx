import Link from 'next/link';
import Image from 'next/image';
import { Container } from 'react-bootstrap';

const featuredGames = [
  {
    game: 'Rainbow Six Siege',
    character: 'Valkyrie',
    role: 'Operator',
    href: '/student?game=Rainbow%20Six%20Siege',
    image: '/characters/rainbow6-valkyrie.png',
    className: 'lineup-card-r6',
  },
  {
    game: 'Marvel Rivals',
    character: 'Rivals Hero',
    role: 'Vanguard',
    href: '/student?game=Marvel%20Rivals',
    image: '/characters/marvel-rivals.png',
    className: 'lineup-card-marvel',
  },
  {
    game: 'League of Legends',
    character: 'League Main',
    role: 'Carry',
    href: '/student?game=League%20of%20Legends',
    image: '/characters/league-of-legends.png',
    className: 'lineup-card-lol',
  },
  {
    game: 'Valorant',
    character: 'Agent',
    role: 'Duelist',
    href: '/student?game=Valorant',
    image: '/characters/valorant.png',
    className: 'lineup-card-valorant',
  },
  {
    game: 'Call of Duty',
    character: 'Operator',
    role: 'Slayer',
    href: '/student?game=Call%20of%20Duty',
    image: '/characters/call-of-duty.png',
    className: 'lineup-card-cod',
  },
];

export default function Home() {
  return (
    <main className="page-main">
      <section className="home-shell" id="home">
        <Container>
          <div className="hero-wireframe">
            <div className="hero-copy">
              <p className="hero-kicker">Norco College Esports</p>
              <h1 className="hero-title-large">Compete. Create. Connect.</h1>
              <p className="hero-summary">
                Student-led competition, campus events, and game communities under one program.
                The color system now follows the official logo tones so content is easier to read and scan.
              </p>
              <div className="hero-actions">
                <Link href="/student" className="btn btn-outline-gold">Join a Team</Link>
                <Link href="/events" className="btn btn-outline-gold">See Events</Link>
              </div>
            </div>
            <div className="home-news-frame" id="news-home">
              <div className="frame-heading">
                <h2>News</h2>
                <p>Latest story, tournament recap, or feature spotlight</p>
              </div>
              <div className="frame-screen" />
              <div className="frame-dots" aria-label="Slide indicators">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <section className="events-strip" id="events-home">
            <div>
              <p className="section-eyebrow">Events</p>
              <h2>Campus + Tournament Calendar</h2>
            </div>
            <div className="events-list">
              {[
                'Open Arena Night - Apr 22',
                'Valorant Tryouts - Apr 29',
                'Smash Ladder Finals - May 04',
              ].map((eventItem) => (
                <p key={eventItem}>{eventItem}</p>
              ))}
            </div>
          </section>

          <section className="character-grid-section" aria-label="Featured game characters">
            <div className="character-section-head">
              <p className="section-eyebrow">Character Selection</p>
              <h2>Meet The Team Lineup</h2>
              <p>
                Hover over each character to spotlight them. Click a character to open a sign-up form
                pre-targeted for that specific game.
              </p>
            </div>

            <div className="character-lineup-stage">
              {featuredGames.map((item) => (
                <Link key={item.game} href={item.href} className={`lineup-card ${item.className}`}>
                  <Image src={item.image} alt={`${item.character} silhouette`} fill sizes="20vw" />
                  <div className="character-card-content">
                    <p className="character-role">{item.role}</p>
                    <h3>{item.character}</h3>
                    <p>{item.game}</p>
                  </div>
                  <span className="character-hover-hint">Sign Up</span>
                </Link>
              ))}
            </div>

            <div className="lineup-quick-links">
              {featuredGames.map((item) => (
                <Link key={`${item.game}-quick`} href={item.href}>{item.game}</Link>
              ))}
            </div>
          </section>

          <section className="media-shop-row" id="shop">
            <article className="shop-panel">
              <p className="section-eyebrow">Shop</p>
              <h2>Program Merch</h2>
              <p>Jerseys, hoodies, and club drops will connect here once your store links are ready.</p>
              <Link href="/about" className="btn btn-outline-gold">Learn More</Link>
            </article>

            <article className="photo-panel">
              <p className="section-eyebrow">Events / Team Photos</p>
              <h2>Gallery Reel</h2>
              <div className="photo-strip">
                <span />
                <span />
                <span />
                <span />
              </div>
            </article>
          </section>

          <section className="partners-section" id="partners">
            <div>
              <p className="section-eyebrow">Programs / Partners</p>
              <h2>Community and Campus Support</h2>
            </div>
            <div className="partner-badges">
              {['Norco College', 'Student Life', 'RCCD', 'Esports Lab', 'Athletics', 'Campus IT'].map((partner) => (
                <span key={partner}>{partner}</span>
              ))}
            </div>
          </section>
        </Container>
      </section>
    </main>
  );
}
