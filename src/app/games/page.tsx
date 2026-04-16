import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { games } from '@/lib/siteData';

export default function GamesPage() {
  return (
    <main className="page-main">
      <section className="section-navy page-header-section">
        <Container>
          <span className="section-label">Programs</span>
          <div className="gold-divider" />
          <h1 className="section-title mb-3">
            Featured
            {' '}
            <span className="gold-text">Games</span>
          </h1>
          <p className="page-subtitle">
            Norco College Esports supports multiple competitive titles and welcomes players across
            experience levels. Active titles are currently competing, while forming titles are recruiting.
          </p>
        </Container>
      </section>

      <section className="section-dark page-content-section">
        <Container>
          <Row className="g-3">
            {games.map((game) => (
              <Col key={game.title} xs={12} md={6} lg={4}>
                <article className="game-card">
                  <div className="game-card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <p className="game-card-title mb-0">{game.title}</p>
                      <span className="game-card-badge">{game.status}</span>
                    </div>
                    <p className="game-card-meta mb-2">{game.players}</p>
                    <p
                      style={{
                        color: 'var(--nc-text-muted)',
                        fontSize: '0.86rem',
                        lineHeight: 1.6,
                        marginBottom: 0,
                      }}
                    >
                      {game.summary}
                    </p>
                  </div>
                </article>
              </Col>
            ))}
          </Row>

          <div className="d-flex flex-wrap gap-3 mt-5">
            <Link href="/student" className="btn-outline-gold btn me-3">
              Register as a Player
            </Link>
            <Link href="/" className="btn-outline-gold btn">Back to Home</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
