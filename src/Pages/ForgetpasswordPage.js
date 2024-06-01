import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      setSuccessMessage('Password reset email sent. Please check your inbox.');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleResetPassword}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ForgotPassword;
