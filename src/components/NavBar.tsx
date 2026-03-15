'use client';

import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      style={{
        backgroundColor: 'var(--nc-navy-dark)',
        borderBottom: '2px solid var(--nc-gold)',
        padding: '0.6rem 0',
      }}
    >
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              background: 'var(--nc-gold)',
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '1.1rem',
              color: 'var(--nc-navy-dark)',
              flexShrink: 0,
            }}
          >
            NC
          </div>
          <span style={{ color: 'var(--nc-white)', fontWeight: 800, fontSize: '1rem', lineHeight: 1.1 }}>
            Norco College
            <span
              style={{
                display: 'block',
                color: 'var(--nc-gold)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              Esports
            </span>
          </span>
        </Navbar.Brand>

        {/* Mobile toggle */}
        <Navbar.Toggle
          aria-controls="main-nav"
          onClick={() => setExpanded(!expanded)}
          style={{ borderColor: 'rgba(253,183,26,0.4)' }}
        >
          <span style={{ background: 'var(--nc-white)', display: 'block', width: 22, height: 2, margin: '4px 0' }} />
          <span style={{ background: 'var(--nc-white)', display: 'block', width: 22, height: 2, margin: '4px 0' }} />
          <span style={{ background: 'var(--nc-white)', display: 'block', width: 22, height: 2, margin: '4px 0' }} />
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto" style={{ gap: '0.25rem', alignItems: 'center' }}>
            {[
              { label: 'Home', href: '/' },
              { label: 'Games', href: '#games' },
              { label: 'News', href: '#news' },
              { label: 'Events', href: '#events' },
              { label: 'About', href: '#about' },
            ].map(({ label, href }) => (
              <Nav.Link
                key={label}
                href={href}
                onClick={() => setExpanded(false)}
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  padding: '0.4rem 0.75rem',
                  borderRadius: 4,
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--nc-gold)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)'; }}
              >
                {label}
              </Nav.Link>
            ))}

            {/* Register CTA */}
            <Nav.Link
              href="/student"
              onClick={() => setExpanded(false)}
              style={{
                background: 'var(--nc-gold)',
                color: 'var(--nc-navy-dark)',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '0.4rem 1.1rem',
                borderRadius: 4,
                marginLeft: '0.5rem',
                transition: 'background-color 0.15s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--nc-gold-dark)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--nc-gold)';
              }}
            >
              Join Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
