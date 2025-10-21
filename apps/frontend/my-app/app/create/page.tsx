'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';

// --- Helper Functions & Types ---
type User = {
  name: string;
  role: 'organizer' | 'participant' | null;
  userId: string;
};

// Function to decode JWT (simple version for client-side)
const decodeToken = (token: string): User | null => {
  try {
    const payloadBase64 = token.split('.')[1];
    return JSON.parse(atob(payloadBase64));
  } catch (error) {
    return null;
  }
};

// --- Pre-defined Tags ---
const PREDEFINED_TAGS = ['Tech', 'Hackathon', 'Design', 'Business', 'Gaming', 'Web3', 'AI'];

// --- Component ---
export default function CreateCompetitionPage() {
  const router = useRouter();

  // --- State Management ---
  const [user, setUser] = useState<User | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [capacity, setCapacity] = useState('');
  const [regDeadline, setRegDeadline] = useState('');

  const [errors, setErrors] = useState<{ api?: string }>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  // --- Auth Effect: Protect the page ---
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const decodedUser = token ? decodeToken(token) : null;
    
    if (!decodedUser || decodedUser.role !== 'organizer') {
      router.replace('/login'); // Redirect if not an organizer
    } else {
      setUser(decodedUser);
      setAuthLoading(false);
    }
  }, [router]);

  // --- Form Validation Effect ---
  useEffect(() => {
    // All fields except tags are mandatory
    const isTitleValid = title.trim().length > 3;
    const isDescValid = description.trim().length > 10;
    const isCapacityValid = Number(capacity) > 0;
    const isDeadlineValid = !!regDeadline && new Date(regDeadline) > new Date();

    // Form becomes valid only when all mandatory fields are valid
    setIsFormValid(isTitleValid && isDescValid && isCapacityValid && isDeadlineValid);
  }, [title, description, capacity, regDeadline]);

  // --- Handlers ---
  const handleTagClick = (tag: string) => {
    setTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid || isLoading) return;

    setIsLoading(true);
    setErrors({});

    try {
      const token = localStorage.getItem('accessToken');
      const deadlineISO = new Date(regDeadline + 'T23:59:59.000Z').toISOString();

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/competitions`,
        {
          title,
          description,
          tags,
          capacity: Number(capacity),
          regDeadline: deadlineISO,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      router.push('/dashboard');
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || error.message || 'Failed to create competition.';
      setErrors({ api: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  // --- Styles ---
  const styles = {
    container: {
      fontFamily: 'sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#121212',
      padding: '40px 20px',
    },
    form: {
      background: '#1e1e1e',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      width: '100%',
      maxWidth: '600px',
      border: '1px solid #333',
    },
    title: {
      textAlign: 'center' as const,
      marginBottom: '32px',
      fontSize: '28px',
      fontWeight: '600',
      color: '#ffffff',
    },
    inputGroup: { marginBottom: '20px' },
    label: { display: 'block', marginBottom: '8px', fontWeight: '500', color: '#bbbbbb' },
    input: {
      width: '100%',
      padding: '12px',
      borderRadius: '4px',
      border: '1px solid #444',
      background: '#2c2c2c',
      color: '#ffffff',
      fontSize: '16px',
    },
    textarea: { minHeight: '100px', resize: 'vertical' as const },
    tagContainer: { display: 'flex', flexWrap: 'wrap' as const, gap: '8px' },
    tag: {
      padding: '6px 12px',
      borderRadius: '16px',
      cursor: 'pointer',
      border: '1px solid #6366f1',
      background: 'transparent',
      color: '#6366f1',
      transition: 'all 0.2s',
    },
    tagSelected: { background: '#6366f1', color: '#ffffff' },
    apiErrorText: {
      color: '#e53e3e',
      fontSize: '14px',
      textAlign: 'center' as const,
      marginBottom: '16px',
    },
    button: {
      width: '100%',
      padding: '14px',
      borderRadius: '4px',
      border: 'none',
      background: '#6366f1',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      fontSize: '16px',
    },
    buttonDisabled: { background: '#4a4a4a', cursor: 'not-allowed' },
  };

  // --- Auth loading ---
  if (authLoading) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Verifying Access...</h1>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.title}>Create a New Competition</h1>

        {/* Title */}
        <div style={styles.inputGroup}>
          <label htmlFor="title" style={styles.label}>Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Annual Tech Hackathon"
            style={styles.input}
            required
          />
        </div>

        {/* Description */}
        <div style={styles.inputGroup}>
          <label htmlFor="description" style={styles.label}>Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the event, rules, and prizes..."
            style={{ ...styles.input, ...styles.textarea }}
            required
          />
        </div>

        {/* Capacity & Deadline */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="capacity" style={styles.label}>Capacity</label>
            <input
              type="number"
              id="capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              placeholder="100"
              style={styles.input}
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="regDeadline" style={styles.label}>Registration Deadline</label>
            <input
              type="date"
              id="regDeadline"
              value={regDeadline}
              onChange={(e) => setRegDeadline(e.target.value)}
              style={styles.input}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
        </div>

        {/* Tags (Optional) */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Tags (Optional)</label>
          <div style={styles.tagContainer}>
            {PREDEFINED_TAGS.map((tag) => (
              <button
                type="button"
                key={tag}
                onClick={() => handleTagClick(tag)}
                style={{
                  ...styles.tag,
                  ...(tags.includes(tag) && styles.tagSelected),
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {errors.api && <p style={styles.apiErrorText}>{errors.api}</p>}

        <button
          type="submit"
          disabled={!isFormValid || isLoading}
          style={{
            ...styles.button,
            ...((!isFormValid || isLoading) && styles.buttonDisabled),
          }}
        >
          {isLoading ? 'Creating...' : 'Create Competition'}
        </button>
      </form>
    </div>
  );
}
