'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Validation functions
const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const isPasswordValid = (password: string): boolean => password.length >= 6;
const isNameValid = (name: string): boolean => name.trim().length > 0;

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'participant' | 'organizer'>('participant'); // Default role
  
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; api?: string }>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Effect to re-validate the form whenever any field changes
  useEffect(() => {
    const isAllValid = isNameValid(name) && isEmailValid(email) && isPasswordValid(password);
    setIsFormValid(isAllValid);
  }, [name, email, password]);

  // --- Input Handlers with Validation ---
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    setErrors((prev) => ({ ...prev, name: isNameValid(newName) ? undefined : 'Name cannot be empty.' }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setErrors((prev) => ({ ...prev, email: isEmailValid(newEmail) ? undefined : 'Please enter a valid email.' }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setErrors((prev) => ({ ...prev, password: isPasswordValid(newPassword) ? undefined : 'Password must be at least 6 characters.' }));
  };
  
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value as 'participant' | 'organizer');
  };

  // --- Form Submission ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    setErrors((prev) => ({ ...prev, api: undefined }));

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
        name,
        email,
        password,
        role,
      });

      const { accessToken } = response.data;

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        router.push('/'); // Redirect to home on successful signup
      }

    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'An unknown error occurred.';
      setErrors((prev) => ({ ...prev, api: errorMessage }));
    } finally {
      setIsLoading(false);
    }
  };

  // --- Styles ---
  const styles = {
    container: { fontFamily: 'sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#121212', padding: '20px 0' },
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
      marginTop: '10px'
    },
    buttonDisabled: { background: '#4a4a4a', cursor: 'not-allowed' },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.title}>Create Account</h1>
        
        {/* Name Field */}
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Full Name</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} placeholder="John Doe" style={{...styles.input, ...(errors.name && styles.inputError)}} required />
          {errors.name && <p style={styles.errorText}>{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email Address</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder="you@example.com" style={{...styles.input, ...(errors.email && styles.inputError)}} required />
          {errors.email && <p style={styles.errorText}>{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} placeholder="••••••••" style={{...styles.input, ...(errors.password && styles.inputError)}} required />
          {errors.password && <p style={styles.errorText}>{errors.password}</p>}
        </div>

        {/* Role Dropdown */}
        <div style={styles.inputGroup}>
          <label htmlFor="role" style={styles.label}>I am a...</label>
          <select id="role" value={role} onChange={handleRoleChange} style={styles.input}>
            <option value="participant">Participant</option>
            <option value="organizer">Organizer</option>
          </select>
        </div>

        {errors.api && <p style={styles.apiErrorText}>{errors.api}</p>}
        
        <button type="submit" disabled={!isFormValid || isLoading} style={{...styles.button, ...((!isFormValid || isLoading) && styles.buttonDisabled)}}>
          {isLoading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}
