'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { EnvelopeFill, Instagram, Tiktok, Discord } from 'react-bootstrap-icons';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  const isStudentRoute = pathname === '/student' || pathname.startsWith('/student/');
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <Navbar
      className="nc-navbar"
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
      style={{ zIndex: 1040 }}
    >
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand
          as={Link}
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.7rem',
            textDecoration: 'none',
          }}
        >
          {!logoFailed ? (
            <img
              src="/Asset%209.png"
              alt="Norco College Esports logo"
              width={46}
              height={46}
              onError={() => setLogoFailed(true)}
              style={{
                objectFit: 'contain',
                borderRadius: 8,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(224,186,113,0.35)',
                padding: '2px',
              }}
            />
          ) : (
            <div
              style={{
                width: 46,
                height: 46,
                background: 'var(--nc-gold)',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1.05rem',
                color: 'var(--nc-navy-dark)',
                flexShrink: 0,
              }}
            >
              NCE
            </div>
          )}
          <span style={{ color: 'var(--nc-white)', fontWeight: 800, fontSize: '1rem', lineHeight: 1.1 }}>
            Norco College
            <span
              style={{
                display: 'block',
                color: 'var(--nc-gold)',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              Esports Club
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
              { label: 'Teams', href: '/games' },
              { label: 'Organization', href: '/about' },
              { label: 'Events', href: '/events' },
              { label: 'Store', href: '/#shop' },
            ].map(({ label, href }) => (
              <Nav.Link
                key={label}
                as={Link}
                href={href}
                className="nc-navbar-link"
                onClick={() => setExpanded(false)}
                // Keep route context visible for easier orientation.
                style={{
                  color: pathname === href ? 'var(--nc-gold)' : 'var(--nc-white)',
                  backgroundColor: pathname === href ? 'rgba(224,186,113,0.12)' : 'transparent',
                  fontWeight: 600,
                  fontSize: '0.87rem',
                  letterSpacing: '0.03em',
                  padding: '0.45rem 0.8rem',
                  borderRadius: 8,
                  transition: 'color 0.15s, background-color 0.15s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--nc-gold)';
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(224,186,113,0.12)';
                }}
                onMouseLeave={(e) => {
                  const linkColor = pathname === href ? 'var(--nc-gold)' : 'var(--nc-white)';
                  const linkBackground = pathname === href ? 'rgba(224,186,113,0.12)' : 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.color = linkColor;
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = linkBackground;
                }}
              >
                {label}
              </Nav.Link>
            ))}

            <div className="nc-social-icons" aria-label="Social links">
              {[
                { href: 'https://instagram.com', label: 'Instagram', icon: <Instagram /> },
                { href: 'https://tiktok.com', label: 'TikTok', icon: <Tiktok /> },
                { href: 'https://discord.com', label: 'Discord', icon: <Discord /> },
                { href: 'mailto:esports@norcocollege.edu', label: 'Email', icon: <EnvelopeFill /> },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <Nav.Link
              as={Link}
              href="mailto:esports@norcocollege.edu?subject=Donation%20Inquiry"
              className="nc-navbar-cta"
              onClick={() => setExpanded(false)}
              style={{
                background: isStudentRoute ? 'var(--nc-gold-dark)' : 'var(--nc-gold)',
                color: 'var(--nc-navy-dark)',
                fontWeight: 800,
                fontSize: '0.84rem',
                padding: '0.42rem 1.05rem',
                borderRadius: 999,
                marginLeft: '0.45rem',
                transition: 'background-color 0.15s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--nc-gold-dark)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--nc-gold)';
              }}
            >
              Donate
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
