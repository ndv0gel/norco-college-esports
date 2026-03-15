import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { Container } from 'react-bootstrap';
import EditStudentForm from '../../../components/EditStudentForm';

const EditStudentPage = async ({ params }: { params: { email: string } }) => {
  const email = decodeURIComponent(params.email); // CAM: this is important

  const studentData = await prisma.studentData.findUnique({
    where: { email },
  });
  const enrollmentData = await prisma.enrollmentData.findUnique({
    where: { email },
  });
  if (!studentData || !enrollmentData) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw notFound();
  }
  const student = { ...studentData, ...enrollmentData };
  console.log('EditStudentPage: ', email, student); // Show server-side email.

  if (!student.bio) student.bio = '';
  return (
    <main style={{ backgroundColor: 'var(--nc-dark-bg)', minHeight: '80vh', padding: '3rem 0' }}>
      <Container>
        <div className="text-center mb-4">
          <span className="section-label">Player Profile</span>
          <div className="gold-divider mx-auto" />
          <h1 style={{ color: 'var(--nc-white)', fontWeight: 800, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
            Edit
            {' '}
            <span style={{ color: 'var(--nc-gold)' }}>Registration</span>
          </h1>
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
          <EditStudentForm student={student} />
        </div>
      </Container>
    </main>
  );
};

export default EditStudentPage;
