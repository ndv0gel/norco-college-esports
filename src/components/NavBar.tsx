'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  const isStudentRoute = pathname === '/student' || pathname.startsWith('/student/');

  return (
    <Navbar
      className="nc-navbar"
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
      style={{
        backgroundColor: 'rgba(50, 4, 13, 0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: '2px solid var(--nc-gold)',
        padding: '0.6rem 0',
        zIndex: 1040,
      }}
    >
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand
          as={Link}
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
          className="nc-navbar-toggle"
          aria-controls="main-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setExpanded(!expanded)}
          style={{ borderColor: 'rgba(224,186,113,0.45)' }}
        >
          <span style={{ background: 'var(--nc-white)', display: 'block', width: 22, height: 2, margin: '4px 0' }} />
          <span style={{ background: 'var(--nc-white)', display: 'block', width: 22, height: 2, margin: '4px 0' }} />
          <span style={{ background: 'var(--nc-white)', display: 'block', width: 22, height: 2, margin: '4px 0' }} />
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav" className="nc-navbar-collapse">
          <Nav className="ms-lg-auto nc-navbar-nav" style={{ gap: '0.25rem', alignItems: 'center' }}>
            {[
              { label: 'Home', href: '/' },
              { label: 'Games', href: '/games' },
              { label: 'News', href: '/news' },
              { label: 'Events', href: '/events' },
              { label: 'About', href: '/about' },
            ].map(({ label, href }) => (
              <Nav.Link
                key={label}
                as={Link}
                href={href}
                className="nc-navbar-link"
                onClick={() => setExpanded(false)}
                // Keep route context visible for easier orientation.
                style={{
                  color: pathname === href ? 'var(--nc-gold)' : 'rgba(255,255,255,0.8)',
                  backgroundColor: pathname === href ? 'rgba(224,186,113,0.12)' : 'transparent',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  padding: '0.4rem 0.75rem',
                  borderRadius: 4,
                  transition: 'color 0.15s, background-color 0.15s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--nc-gold)';
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(224,186,113,0.12)';
                }}
                onMouseLeave={(e) => {
                  const linkColor = pathname === href ? 'var(--nc-gold)' : 'rgba(255,255,255,0.8)';
                  const linkBackground = pathname === href ? 'rgba(224,186,113,0.12)' : 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.color = linkColor;
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = linkBackground;
                }}
              >
                {label}
              </Nav.Link>
            ))}

            {/* Register CTA */}
            <Nav.Link
              as={Link}
              href="/student"
              className="nc-navbar-cta"
              onClick={() => setExpanded(false)}
              style={{
                background: isStudentRoute ? 'var(--nc-gold-dark)' : 'var(--nc-gold)',
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
