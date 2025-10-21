'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios'; // ⭐️ Using axios now

// Basic email validation regex
const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string; api?: string }>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isEmailOk = isEmailValid(email);
    const isPasswordOk = password.length >= 6;
    setIsFormValid(isEmailOk && isPasswordOk);
  }, [email, password]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!isEmailValid(newEmail)) {
      setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
    } else {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length > 0 && newPassword.length < 6) {
      setErrors((prev) => ({ ...prev, password: 'Password must be at least 6 characters.' }));
    } else {
      setErrors((prev) => ({ ...prev, password: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    setErrors((prev) => ({ ...prev, api: undefined }));

    try {
      // ⭐️ Using axios.post now
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        email,
        password,
      });

      const { accessToken } = response.data;

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        router.push('/dashboard');
      }

    } catch (error: any) {
      // ⭐️ Handling axios-specific error structure
      const errorMessage = error.response?.data?.message || error.message || 'An unknown error occurred.';
      setErrors((prev) => ({ ...prev, api: errorMessage }));
    } finally {
      setIsLoading(false);
    }
  };

  // ⭐️ Dark theme styles
  const styles = {
    container: { fontFamily: 'sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#121212' },
    form: { background: '#1e1e1e', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)', width: '100%', maxWidth: '400px', border: '1px solid #333' },
    title: { textAlign: 'center', marginBottom: '24px', fontSize: '24px', fontWeight: '600', color: '#ffffff' },
    inputGroup: { marginBottom: '16px' },
    label: { display: 'block', marginBottom: '8px', fontWeight: '500', color: '#bbbbbb' },
    input: { width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #444', background: '#2c2c2c', color: '#ffffff', fontSize: '16px' },
    inputError: { border: '1px solid #e53e3e' },
    errorText: { color: '#e53e3e', fontSize: '12px', marginTop: '4px' },
    apiErrorText: { color: '#e53e3e', fontSize: '14px', textAlign: 'center', marginBottom: '16px' },
    button: {
      width: '100%',
      padding: '12px',
      borderRadius: '4px',
      border: 'none',
      background: '#6366f1',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    buttonDisabled: { background: '#4a4a4a', cursor: 'not-allowed' },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.title}>Login</h1>
        
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="you@example.com"
            style={{...styles.input, ...(errors.email && styles.inputError)}}
            required
          />
          {errors.email && <p style={styles.errorText}>{errors.email}</p>}
        </div>

        <div style={{ ...styles.inputGroup, marginBottom: '24px' }}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="••••••••"
            style={{...styles.input, ...(errors.password && styles.inputError)}}
            required
          />
          {errors.password && <p style={styles.errorText}>{errors.password}</p>}
        </div>

        {errors.api && <p style={styles.apiErrorText}>{errors.api}</p>}
        
        <button
          type="submit"
          disabled={!isFormValid || isLoading}
          style={{...styles.button, ...((!isFormValid || isLoading) && styles.buttonDisabled)}}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

