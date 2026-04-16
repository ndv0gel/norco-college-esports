import { Container } from 'react-bootstrap';
import CreateStudentForm from '../../components/CreateStudentForm';

type StudentPageProps = {
  searchParams: {
    game?: string;
  };
};

export default function StudentRegisterPage({ searchParams }: StudentPageProps) {
  const selectedGame = searchParams?.game?.trim();

  return (
    <main className="page-main" style={{ padding: '3rem 0' }}>
      <Container>
        <div className="text-center mb-4">
          <span className="section-label">Join the Team</span>
          <div className="gold-divider mx-auto" />
          <h1 style={{ color: 'var(--nc-white)', fontWeight: 800, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
            Player
            {' '}
            <span style={{ color: 'var(--nc-gold)' }}>Registration</span>
          </h1>
          <p style={{ color: 'var(--nc-text-muted)', maxWidth: 480, margin: '0.75rem auto 0', fontSize: '0.95rem' }}>
            Fill out the form below to register as a Norco College Esports player.
            All skill levels are welcome — we&apos;ll find the right team for you.
          </p>
          {selectedGame ? (
            <p
              style={{
                color: 'var(--nc-gold-light)',
                margin: '0.9rem auto 0',
                fontSize: '0.9rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
              }}
            >
              Game Signup:
              {' '}
              {selectedGame}
            </p>
          ) : null}
        </div>

        <div
          style={{
            background: 'var(--nc-card-bg)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderTop: '3px solid var(--nc-gold)',
            borderRadius: 10,
            padding: '0.5rem',
          }}
        >
          <CreateStudentForm selectedGame={selectedGame ?? ''} />
        </div>
      </Container>
    </main>
  );
}
