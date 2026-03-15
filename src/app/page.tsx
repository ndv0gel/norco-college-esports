import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

/* ── Data ─────────────────────────────────────────────────── */

const games = [
  { emoji: '⚔️', title: 'League of Legends', players: '12 players', status: 'Active' },
  { emoji: '🔫', title: 'Valorant', players: '10 players', status: 'Active' },
  { emoji: '🚀', title: 'Rocket League', players: '6 players', status: 'Active' },
  { emoji: '🛡️', title: 'Overwatch 2', players: '12 players', status: 'Forming' },
  { emoji: '🥊', title: 'Street Fighter 6', players: '4 players', status: 'Active' },
  { emoji: '🎮', title: 'Super Smash Bros.', players: '8 players', status: 'Forming' },
];

const news = [
  {
    emoji: '🏆',
    category: 'Tournament',
    title: 'Knights advance to CCCAA Regional Finals in League of Legends',
    date: 'Mar 10, 2026',
  },
  {
    emoji: '📢',
    category: 'Announcement',
    title: 'Spring 2026 tryouts now open — all skill levels welcome',
    date: 'Mar 3, 2026',
  },
  {
    emoji: '🎉',
    category: 'Highlight',
    title: 'Valorant squad wins intra-college invitational, goes 5-0',
    date: 'Feb 24, 2026',
  },
];

const events = [
  { month: 'Mar', day: '20', title: 'Spring Kick-Off LAN Party', detail: 'Student Center — 3 PM' },
  { month: 'Apr', day: '5', title: 'Valorant Open Tournament', detail: 'Online — 6 PM' },
  { month: 'Apr', day: '19', title: 'CCCAA Regional Qualifier', detail: 'Live Stream + On-Campus' },
  { month: 'May', day: '3', title: 'End-of-Semester Celebration', detail: 'Gaming Lab — 5 PM' },
];

const aboutFeatures = [
  {
    emoji: '🏅',
    title: 'Competitive Teams',
    desc: 'Represent Norco College in collegiate leagues and invitational tournaments.',
  },
  {
    emoji: '📡',
    title: 'Live Streaming',
    desc: 'Watch and broadcast matches through our official channels.',
  },
  {
    emoji: '🤝',
    title: 'Community Events',
    desc: 'LAN parties, casual brackets, and campus gaming nights for everyone.',
  },
  {
    emoji: '📚',
    title: 'Scholarships',
    desc: 'Explore esports scholarship opportunities available to student athletes.',
  },
];

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
                <span>⚡</span>
                {' '}
                Norco College Knights — Est. 2024
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
                <a href="#games" className="hero-cta-secondary btn btn-outline-light">
                  Explore Games
                </a>
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
                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🎮</div>
                <h3 style={{ color: 'var(--nc-gold)', fontWeight: 800, marginBottom: '0.5rem' }}>
                  Knights Esports
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Norco, CA · CCCAA Affiliated
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

      {/* ── FEATURED GAMES ───────────────────────────────── */}
      <section className="section-dark" id="games">
        <Container>
          <div className="mb-5">
            <span className="section-label">Our Programs</span>
            <div className="gold-divider" />
            <h2 className="section-title">
              Featured
              {' '}
              <span className="gold-text">Games</span>
            </h2>
            <p style={{ color: 'var(--nc-text-muted)', maxWidth: 520, fontSize: '0.95rem' }}>
              We field competitive rosters across a variety of titles.
              Whether you&apos;re a casual fan or a ranked grinder, there&apos;s a spot for you.
            </p>
          </div>

          <Row className="g-3">
            {games.map(({ emoji, title, players, status }) => (
              <Col key={title} xs={12} sm={6} md={4}>
                <div className="game-card">
                  <div className="game-card-icon">{emoji}</div>
                  <div className="game-card-body">
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <p className="game-card-title mb-0">{title}</p>
                      <span className="game-card-badge">{status}</span>
                    </div>
                    <p className="game-card-meta mb-0">{players}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── NEWS & EVENTS ────────────────────────────────── */}
      <section className="section-navy" id="news">
        <Container>
          <Row className="g-5">

            {/* News column */}
            <Col lg={7}>
              <span className="section-label">Latest</span>
              <div className="gold-divider" />
              <h2 className="section-title mb-4">
                News &amp;
                {' '}
                <span className="gold-text">Updates</span>
              </h2>

              <div className="d-flex flex-column gap-3">
                {news.map(({ emoji, category, title, date }) => (
                  <div key={title} className="news-card d-flex" style={{ flexDirection: 'column' }}>
                    <div className="d-flex gap-0" style={{ flex: 1 }}>
                      <div
                        className="news-card-img d-flex align-items-center justify-content-center"
                        style={{
                          minWidth: 90,
                          width: 90,
                          height: 'auto',
                          background: 'linear-gradient(135deg, var(--nc-navy), #004080)',
                          fontSize: '2rem',
                        }}
                      >
                        {emoji}
                      </div>
                      <div className="news-card-body">
                        <p className="news-card-category mb-1">{category}</p>
                        <p className="news-card-title">{title}</p>
                        <p className="news-card-date mb-0">{date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/news"
                className="btn-outline-gold btn mt-4"
                style={{ fontSize: '0.85rem' }}
              >
                View all news →
              </a>
            </Col>

            {/* Events column */}
            <Col lg={5} id="events">
              <span className="section-label">Schedule</span>
              <div className="gold-divider" />
              <h2 className="section-title mb-4">
                Upcoming
                {' '}
                <span className="gold-text">Events</span>
              </h2>

              <div className="d-flex flex-column gap-2">
                {events.map(({ month, day, title, detail }) => (
                  <div key={title} className="event-item">
                    <div className="event-date-box">
                      <span className="month">{month}</span>
                      <span className="day">{day}</span>
                    </div>
                    <div>
                      <p className="event-title mb-0">{title}</p>
                      <p className="event-meta mb-0">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/events"
                className="btn-outline-gold btn mt-4"
                style={{ fontSize: '0.85rem' }}
              >
                Full calendar →
              </a>
            </Col>

          </Row>
        </Container>
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section className="section-dark" id="about">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <span className="section-label">About Us</span>
              <div className="gold-divider" />
              <h2 className="section-title mb-3">
                More Than Just
                {' '}
                <span className="gold-text">Gaming</span>
              </h2>
              <p
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  marginBottom: '1rem',
                }}
              >
                Norco College Esports was founded to give students a competitive, community-driven
                outlet on campus. We partner with the California Community College
                Athletic Association (CCCAA) and host our own LAN events throughout
                each semester.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                Whether you want to compete at the varsity level, contribute as a
                caster or analyst, or simply meet fellow gamers — Knights Esports
                has a place for you.
              </p>
            </Col>
            <Col lg={6}>
              <Row className="g-3">
                {aboutFeatures.map(({ emoji, title, desc }) => (
                  <Col xs={12} sm={6} key={title}>
                    <div
                      style={{
                        background: 'var(--nc-card-bg)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: 10,
                        padding: '1.25rem',
                      }}
                    >
                      <div style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{emoji}</div>
                      <p
                        style={{
                          color: 'var(--nc-white)',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          marginBottom: '0.3rem',
                        }}
                      >
                        {title}
                      </p>
                      <p style={{ color: 'var(--nc-text-muted)', fontSize: '0.82rem', margin: 0 }}>{desc}</p>
                    </div>
                  </Col>
                ))}
              </Row>
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
            Spots are limited — all skill levels are welcome.
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
              Norco College ↗
            </a>
          </div>
        </Container>
      </section>

    </main>
  );
}
