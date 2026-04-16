import Link from 'next/link';
import { Container } from 'react-bootstrap';

const HomeBottomCta = () => (
  <section className="cta-banner">
    <Container className="text-center">
      <h2 className="section-title mb-3">
        Ready to
        {' '}
        <span className="gold-text">Level Up?</span>
      </h2>
      <p style={{ color: 'var(--nc-text-muted)', maxWidth: 520, margin: '0 auto 2rem', fontSize: '1rem' }}>
        Register today and become part of the Norco College Esports family.
        Spots are limited. All skill levels are welcome.
      </p>
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <Link href="/student" className="btn-gold btn" style={{ padding: '0.75rem 2.5rem', fontSize: '1rem' }}>
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
);

export default HomeBottomCta;
