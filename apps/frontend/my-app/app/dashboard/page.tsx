'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Define a type for our user payload from the JWT
type User = {
  name: string;
  role: 'organizer' | 'participant' | null;
  userId: string;
};

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Start in loading state
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      // If no token, redirect to login page
      router.replace('/login');
      return;
    }

    try {
      // Decode the payload part of the JWT (the middle part)
      const payloadBase64 = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(payloadBase64));
      
      setUser({
        name: decodedPayload.name,
        role: decodedPayload.role,
        userId: decodedPayload.userId,
      });

    } catch (error) {
      console.error("Failed to decode token, redirecting to login.", error);
      // If token is invalid, clear it and redirect
      localStorage.removeItem('accessToken');
      router.replace('/login');
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  // --- Styles ---
  const styles = {
    container: { fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column' as 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#121212', color: '#ffffff', textAlign: 'center' as 'center', padding: '20px' },
    title: { fontSize: '48px', fontWeight: 'bold', marginBottom: '24px' },
    buttonContainer: { display: 'flex', gap: '20px', marginTop: '32px' },
    button: {
      padding: '12px 24px',
      fontSize: '16px',
      borderRadius: '8px',
      border: 'none',
      background: '#6366f1',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'background-color 0.2s, transform 0.2s',
    },
  };

  // Render a loading state while checking for the token
  if (isLoading) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Loading...</h1>
      </div>
    );
  }

  // If user is null after checking, it means redirect is in progress
  if (!user) {
    return null;
  }
  
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hey, {user.name}!</h1>
      
      {/* Organizer View */}
      {user.role === 'organizer' && (
        <div style={styles.buttonContainer}>
          <Link href="/create" style={styles.button}>
            Create Competition
          </Link>
          <Link href="/competitions" style={styles.button}>
            View Competitions
          </Link>
        </div>
      )}

      {/* Participant View */}
      {user.role === 'participant' && (
        <div style={styles.buttonContainer}>
          <Link href="/competitions" style={styles.button}>
            Register for Competition
          </Link>
          <Link href="/competitions/my-registrations" style={styles.button}>
            View My Registrations
          </Link>
        </div>
      )}
    </div>
  );
}

