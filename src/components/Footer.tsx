import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => (
  <footer className="mt-auto" style={{ backgroundColor: 'var(--nc-navy-dark)', borderTop: '2px solid var(--nc-gold)' }}>
    <Container style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
      <Row className="g-4">
        {/* Brand column */}
        <Col md={4}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <div
              style={{
                width: 36,
                height: 36,
                background: 'var(--nc-gold)',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                color: 'var(--nc-navy-dark)',
                fontSize: '0.95rem',
                flexShrink: 0,
              }}
            >
              NC
            </div>
            <span style={{ color: 'var(--nc-white)', fontWeight: 800, fontSize: '0.95rem', lineHeight: 1.1 }}>
              Norco College
              <span
                style={{
                  display: 'block',
                  color: 'var(--nc-gold)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                Esports
              </span>
            </span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: 1.6, maxWidth: 280 }}>
            Compete. Connect. Level Up. — Norco College&apos;s official collegiate esports program.
          </p>
        </Col>

        {/* Quick links */}
        <Col md={2}>
          <h6
            style={{
              color: 'var(--nc-gold)',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Quick Links
          </h6>
          {[
            { label: 'Home', href: '/' },
            { label: 'Games', href: '/games' },
            { label: 'Events', href: '/events' },
            { label: 'News', href: '/news' },
            { label: 'About', href: '/about' },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                display: 'block',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.85rem',
                marginBottom: '0.5rem',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </Col>

        {/* Programs */}
        <Col md={3}>
          <h6
            style={{
              color: 'var(--nc-gold)',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Our Programs
          </h6>
          {['League of Legends', 'Valorant', 'Rocket League', 'Overwatch 2', 'Street Fighter'].map((game) => (
            <p key={game} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
              {game}
            </p>
          ))}
        </Col>

        {/* Contact */}
        <Col md={3}>
          <h6
            style={{
              color: 'var(--nc-gold)',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Contact
          </h6>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
            2001 Third Street
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
            Norco, CA 92860
          </p>
          <a
            href="https://www.norcocollege.edu"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--nc-gold)', fontSize: '0.85rem', textDecoration: 'none' }}
          >
            norcocollege.edu ↗
          </a>
        </Col>
      </Row>

      {/* Bottom bar */}
      <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '2rem 0 1rem' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', margin: 0 }}>
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Norco College Esports. All rights reserved.
        </p>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', margin: 0 }}>
          Part of the Riverside Community College District
        </p>
      </div>
    </Container>
  </footer>
);

export default Footer;
