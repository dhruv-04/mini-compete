'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';

// --- Helper Functions & Types ---
type User = {
  name: string;
  role: 'organizer' | 'participant';
  userId: string;
};

type Competition = {
  competitionId: string;
  title: string;
  description: string;
  tags: string[];
  capacity: number;
  registeredCount: number;
  regDeadLine: string; // ISO Date String
  startDate: string; // ISO Date String
};

type RegistrationState = {
  [competitionId: string]: {
    isLoading: boolean;
    error?: string;
    success?: string;
  };
};

// Function to decode JWT
const decodeToken = (token: string): User | null => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (error) {
    return null;
  }
};

// --- Component ---
export default function ViewCompetitionsPage() {
  const router = useRouter();

  // --- State Management ---
  const [user, setUser] = useState<User | null>(null);
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [registrationState, setRegistrationState] = useState<RegistrationState>({});

  // --- Auth & Data Fetching Effect ---
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const decodedUser = token ? decodeToken(token) : null;

    if (!decodedUser) {
      router.replace('/login');
      return;
    }
    setUser(decodedUser);

    const fetchCompetitions = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/competitions`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCompetitions(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to load competitions.');
      } finally {
        setLoading(false);
      }
    };

    fetchCompetitions();
  }, [router]);

  // --- Handlers ---
  const handleRegister = async (competitionId: string) => {
    setRegistrationState((prev) => ({
      ...prev,
      [competitionId]: { isLoading: true },
    }));

    try {
      const token = localStorage.getItem('accessToken');
      // Generate a unique idempotency key for this specific request
      const idempotencyKey = crypto.randomUUID();

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/competitions/${competitionId}/register`,
        {}, // Empty body as per requirements
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Idempotency-Key': idempotencyKey,
          },
        }
      );
      
      setRegistrationState((prev) => ({
        ...prev,
        [competitionId]: { isLoading: false, success: 'Registered successfully!' },
      }));

    } catch (err: any) {
      setRegistrationState((prev) => ({
        ...prev,
        [competitionId]: { isLoading: false, error: err.response?.data?.message || 'Registration failed.' },
      }));
    }
  };

  // --- Styles ---
  const styles = {
    container: { fontFamily: 'sans-serif', minHeight: '100vh', background: '#121212', color: '#ffffff', padding: '40px 20px' },
    header: { textAlign: 'center' as 'center', marginBottom: '40px', fontSize: '32px', fontWeight: '600' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px', maxWidth: '1200px', margin: '0 auto' },
    card: { background: '#1e1e1e', padding: '24px', borderRadius: '8px', border: '1px solid #333', display: 'flex', flexDirection: 'column' as 'column' },
    cardTitle: { fontSize: '20px', fontWeight: '600', marginBottom: '8px' },
    cardDescription: { color: '#bbbbbb', flexGrow: 1, marginBottom: '16px', lineHeight: '1.6' },
    tagContainer: { display: 'flex', flexWrap: 'wrap' as 'wrap', gap: '8px', marginBottom: '16px' },
    tag: { padding: '4px 10px', borderRadius: '16px', background: '#333', color: '#ccc', fontSize: '12px' },
    detailsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' },
    detailItem: { fontSize: '14px' },
    detailLabel: { color: '#888', display: 'block' },
    registerButton: { padding: '10px', borderRadius: '4px', border: 'none', background: '#6366f1', color: 'white', fontWeight: '600', cursor: 'pointer', transition: 'background-color 0.2s', marginTop: 'auto' },
    buttonDisabled: { background: '#4a4a4a', cursor: 'not-allowed' },
    statusText: { marginTop: '12px', textAlign: 'center' as 'center', fontWeight: '500' },
    errorText: { color: '#e53e3e' },
    successText: { color: '#38a169' },
  };

  // --- Render Logic ---
  if (loading) {
    return <div style={styles.container}><h1 style={styles.header}>Loading Competitions...</h1></div>;
  }

  if (error) {
    return <div style={styles.container}><h1 style={styles.header}><span style={styles.errorText}>{error}</span></h1></div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Available Competitions</h1>
      
      {competitions.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No competitions available at the moment. Check back soon!</p>
      ) : (
        <div style={styles.grid}>
          {competitions.map((comp) => {
            const state = registrationState[comp.competitionId] || { isLoading: false };
            const isFull = comp.registeredCount >= comp.capacity;
            const isDeadlinePassed = new Date(comp.regDeadLine) < new Date();
            const isButtonDisabled = user?.role !== 'participant' || isFull || isDeadlinePassed || state.isLoading || !!state.success;

            return (
              <div key={comp.competitionId} style={styles.card}>
                <h2 style={styles.cardTitle}>{comp.title}</h2>
                <p style={styles.cardDescription}>{comp.description}</p>
                <div style={styles.tagContainer}>
                  {comp.tags.map(tag => <span key={tag} style={styles.tag}>{tag}</span>)}
                </div>
                <div style={styles.detailsGrid}>
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>Capacity</span>
                    {comp.registeredCount} / {comp.capacity}
                  </div>
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>Deadline</span>
                    {new Date(comp.regDeadLine).toLocaleDateString()}
                  </div>
                </div>

                {/* Registration Button and Status */}
                {user?.role === 'participant' && (
                  <>
                    <button onClick={() => handleRegister(comp.competitionId)} disabled={isButtonDisabled} style={{...styles.registerButton, ...(isButtonDisabled && styles.buttonDisabled)}}>
                      {state.isLoading && 'Registering...'}
                      {state.success && 'Registered!'}
                      {!state.isLoading && !state.success && (isFull ? 'Full' : isDeadlinePassed ? 'Closed' : 'Register')}
                    </button>
                    {state.error && <p style={{ ...styles.statusText, ...styles.errorText }}>{state.error}</p>}
                    {state.success && <p style={{ ...styles.statusText, ...styles.successText }}>{state.success}</p>}
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

