import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { games, news, events } from '@/lib/siteData';

/* ── Home page ────────────────────────────────────────────── */

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--nc-dark-bg)' }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-section" id="home">
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row className="align-items-center" style={{ minHeight: '85vh' }}>

            {/* Left copy */}
            <Col lg={7} className="py-5">
              <div className="hero-badge mb-3">
                Norco College Knights Program
              </div>

              <h1 className="hero-title mb-3">
                Compete at the
                <br />
                <span className="gold-text">College Level.</span>
              </h1>

              <p className="hero-subtitle mb-4">
                Join the official esports program of Norco College.
                Train with dedicated coaches, represent the Knights in collegiate tournaments,
                and build connections that last beyond the game.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-5">
                <Link href="/student" className="hero-cta-primary btn">
                  Join the Team
                </Link>
                <Link href="/games" className="hero-cta-secondary btn btn-outline-light">Explore Games</Link>
              </div>

              {/* Stats row */}
              <div className="d-flex gap-4 flex-wrap">
                {[
                  { n: '6+', l: 'Games Offered' },
                  { n: '50+', l: 'Active Players' },
                  { n: '3', l: 'Seasons Played' },
                  { n: '10+', l: 'Tournaments' },
                ].map(({ n, l }) => (
                  <div key={l} className="hero-stat">
                    <div className="stat-number">{n}</div>
                    <div className="stat-label">{l}</div>
                  </div>
                ))}
              </div>
            </Col>

            {/* Right visual */}
            <Col lg={5} className="d-none d-lg-flex justify-content-end py-5">
              <div
                className="hero-visual-card p-4 text-center"
                style={{ width: '100%', maxWidth: 360 }}
              >
                <h3 style={{ color: 'var(--nc-gold)', fontWeight: 800, marginBottom: '0.5rem' }}>
                  Knights Esports
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Norco, CA | CCCAA Affiliated
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  {['LoL', 'Val', 'RL', 'OW2'].map((tag) => (
                    <span
                      key={tag}
                      className="game-card-badge"
                      style={{ fontSize: '0.78rem', padding: '0.3rem 0.75rem' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* ── PAGE NAVIGATION ───────────────────────────────── */}
      <section className="section-dark">
        <Container>
          <div className="mb-5">
            <span className="section-label">Site Sections</span>
            <div className="gold-divider" />
            <h2 className="section-title">
              Explore
              {' '}
              <span className="gold-text">By Page</span>
            </h2>
            <p style={{ color: 'var(--nc-text-muted)', maxWidth: 520, fontSize: '0.95rem' }}>
              The site now uses dedicated pages for games, news, events, and program information.
            </p>
          </div>

          <Row className="g-3">
            {[
              {
                title: 'Games',
                href: '/games',
                summary: 'Explore active rosters, recruiting status, and program focus by title.',
              },
              {
                title: 'News',
                href: '/news',
                summary: 'Read tournament highlights, announcements, and weekly updates.',
              },
              {
                title: 'Events',
                href: '/events',
                summary: 'Track upcoming events, qualifiers, and campus activity dates.',
              },
              {
                title: 'About',
                href: '/about',
                summary: 'Learn about the mission, community, and student opportunities.',
              },
            ].map(({ title, href, summary }) => (
              <Col key={title} xs={12} sm={6}>
                <div className="game-card">
                  <div className="game-card-body">
                    <p className="game-card-title mb-2">{title}</p>
                    <p className="game-card-meta mb-3" style={{ lineHeight: 1.6 }}>{summary}</p>
                    <Link href={href} className="btn-outline-gold btn btn-sm">
                      Open
                      {' '}
                      {title}
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── SNAPSHOT ─────────────────────────────────────── */}
      <section className="section-navy" id="news">
        <Container>
          <Row className="g-5">

            <Col lg={4}>
              <span className="section-label">Games</span>
              <div className="gold-divider" />
              <h2 className="section-title mb-4">
                Program
                {' '}
                <span className="gold-text">Snapshot</span>
              </h2>

              <div className="d-flex flex-column gap-3">
                {games.slice(0, 3).map((game) => (
                  <div key={game.title} className="news-card">
                    <div className="news-card-body">
                      <p className="news-card-category mb-1">{game.status}</p>
                      <p className="news-card-title mb-1">{game.title}</p>
                      <p className="news-card-date mb-0">{game.players}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/games" className="btn-outline-gold btn mt-4" style={{ fontSize: '0.85rem' }}>
                View all games
              </Link>
            </Col>

            <Col lg={4}>
              <span className="section-label">News</span>
              <div className="gold-divider" />
              <h2 className="section-title mb-4">
                Recent
                {' '}
                <span className="gold-text">Updates</span>
              </h2>

              <div className="d-flex flex-column gap-2">
                {news.slice(0, 3).map((item) => (
                  <div key={item.title} className="news-card">
                    <div className="news-card-body">
                      <p className="news-card-category mb-1">{item.category}</p>
                      <p className="news-card-title mb-1">{item.title}</p>
                      <p className="news-card-date mb-0">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/news" className="btn-outline-gold btn mt-4" style={{ fontSize: '0.85rem' }}>
                View all news
              </Link>
            </Col>

            <Col lg={4} id="events">
              <span className="section-label">Events</span>
              <div className="gold-divider" />
              <h2 className="section-title mb-4">
                Upcoming
                {' '}
                <span className="gold-text">Calendar</span>
              </h2>

              <div className="d-flex flex-column gap-2">
                {events.slice(0, 3).map((item) => (
                  <div key={item.title} className="event-item">
                    <div className="event-date-box">
                      <span className="month">{item.month}</span>
                      <span className="day">{item.day}</span>
                    </div>
                    <div>
                      <p className="event-title mb-0">{item.title}</p>
                      <p className="event-meta mb-0">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/events" className="btn-outline-gold btn mt-4" style={{ fontSize: '0.85rem' }}>
                View full calendar
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── JOIN CTA ─────────────────────────────────────── */}
      <section className="cta-banner">
        <Container className="text-center">
          <h2 className="section-title mb-3">
            Ready to
            {' '}
            <span className="gold-text">Level Up?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto 2rem', fontSize: '1rem' }}>
            Register today and become part of the Norco College Esports family.
            Spots are limited. All skill levels are welcome.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link
              href="/student"
              className="btn-gold btn"
              style={{ padding: '0.75rem 2.5rem', fontSize: '1rem' }}
            >
              Register Now
            </Link>
            <a
              href="https://www.norcocollege.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold btn"
              style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
            >
              Norco College
            </a>
          </div>
        </Container>
      </section>

    </main>
  );
}
