import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { aboutFeatures } from '@/lib/siteData';

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: 'var(--nc-dark-bg)', minHeight: '80vh' }}>
      <section className="section-navy">
        <Container>
          <span className="section-label">About Us</span>
          <div className="gold-divider" />
          <h1 className="section-title mb-3">
            Norco College
            {' '}
            <span className="gold-text">Esports</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 760, lineHeight: 1.7 }}>
            Norco College Esports creates a competitive and community-driven environment where
            students can grow as players, leaders, and teammates.
          </p>
        </Container>
      </section>

      <section className="section-dark">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <h2 className="section-title mb-3" style={{ fontSize: '1.9rem' }}>
                More Than Just
                {' '}
                <span className="gold-text">Gaming</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.75 }}>
                We support students who want to compete, build friendships, and represent Norco
                College with pride. Our program emphasizes teamwork, communication, and accountability.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.75 }}>
                Whether you are aiming for varsity-level competition or looking for a stronger campus
                community, there is a place for you in Knights Esports.
              </p>
            </Col>
            <Col lg={6}>
              <Row className="g-3">
                {aboutFeatures.map((feature) => (
                  <Col xs={12} sm={6} key={feature.title}>
                    <article
                      style={{
                        background: 'var(--nc-card-bg)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 10,
                        padding: '1.1rem',
                        height: '100%',
                      }}
                    >
                      <p
                        style={{
                          color: 'var(--nc-white)',
                          fontWeight: 700,
                          marginBottom: '0.35rem',
                          fontSize: '0.95rem',
                        }}
                      >
                        {feature.title}
                      </p>
                      <p
                        style={{
                          color: 'var(--nc-text-muted)',
                          fontSize: '0.84rem',
                          lineHeight: 1.55,
                          marginBottom: 0,
                        }}
                      >
                        {feature.desc}
                      </p>
                    </article>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          <div className="mt-5">
            <Link href="/student" className="btn-gold btn me-3">Register Today</Link>
            <Link href="/" className="btn-outline-gold btn">Back to Home</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
