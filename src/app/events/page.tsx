import Link from 'next/link';
import { Container } from 'react-bootstrap';
import { events } from '@/lib/siteData';

export default function EventsPage() {
  return (
    <main className="page-main">
      <section className="section-navy page-header-section">
        <Container>
          <span className="section-label">Schedule</span>
          <div className="gold-divider" />
          <h1 className="section-title mb-3">
            Upcoming
            {' '}
            <span className="gold-text">Events</span>
          </h1>
          <p className="page-subtitle">
            Keep up with LAN nights, tryouts, and competitive tournament dates.
          </p>
        </Container>
      </section>

      <section className="section-dark page-content-section">
        <Container>
          <div className="d-flex flex-column gap-2" style={{ maxWidth: 860 }}>
            {events.map((item) => (
              <article key={item.title} className="event-item">
                <div className="event-date-box">
                  <span className="month">{item.month}</span>
                  <span className="day">{item.day}</span>
                </div>
                <div>
                  <p className="event-title mb-1" style={{ fontSize: '1rem' }}>{item.title}</p>
                  <p className="event-meta mb-0">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="d-flex flex-wrap gap-3 mt-5">
            <Link href="/student" className="btn-outline-gold btn me-3">Join the Team</Link>
            <Link href="/" className="btn-outline-gold btn">Back to Home</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
