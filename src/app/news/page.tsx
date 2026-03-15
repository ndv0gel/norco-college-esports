import Link from 'next/link';
import { Container } from 'react-bootstrap';
import { news } from '@/lib/siteData';

export default function NewsPage() {
  return (
    <main className="page-main">
      <section className="section-navy page-header-section">
        <Container>
          <span className="section-label">Latest</span>
          <div className="gold-divider" />
          <h1 className="section-title mb-3">
            News and
            {' '}
            <span className="gold-text">Updates</span>
          </h1>
          <p className="page-subtitle">
            Follow roster announcements, event recaps, and tournament progress from the Norco College
            Esports program.
          </p>
        </Container>
      </section>

      <section className="section-dark page-content-section">
        <Container>
          <div className="d-flex flex-column gap-3">
            {news.map((item) => (
              <article key={item.title} className="news-card">
                <div className="news-card-body">
                  <p className="news-card-category mb-1">{item.category}</p>
                  <h2 className="news-card-title mb-2" style={{ fontSize: '1.1rem' }}>{item.title}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {item.summary}
                  </p>
                  <p className="news-card-date mb-0">{item.date}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="d-flex flex-wrap gap-3 mt-5">
            <Link href="/events" className="btn-outline-gold btn me-3">View Events</Link>
            <Link href="/" className="btn-outline-gold btn">Back to Home</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
