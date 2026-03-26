import { useState } from 'react'
import Navbar from '../components/Navbar'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    // Basic validation
    if (email === '') {
      setError('Please enter your email!')
      return
    }
    if (password === '') {
      setError('Please enter your password!')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters!')
      return
    }
    // If all good
    setError('')
    alert(`Welcome back! Logging in as ${email}`)
  }

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.box}>
          <h2 style={styles.heading}>Welcome Back 👋</h2>
          <p style={styles.subtext}>Login to your HomeAgent account</p>

          {error && (
            <div style={styles.errorBox}>
              ⚠️ {error}
            </div>
          )}

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button
            onClick={handleLogin}
            style={styles.button}
          >
            Login
          </button>

          <p style={styles.bottomText}>
            Don't have an account?{' '}
            <a href="/register" style={styles.link}>Register here</a>
          </p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  box: {
    backgroundColor: 'white',
    padding: '50px 40px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '420px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  heading: {
    fontSize: '28px',
    color: '#1a1a2e',
    textAlign: 'center',
  },
  subtext: {
    color: '#888',
    textAlign: 'center',
    fontSize: '15px',
    marginBottom: '10px',
  },
  errorBox: {
    backgroundColor: '#ffe0e0',
    color: '#cc0000',
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    textAlign: 'center',
  },
  input: {
    padding: '14px 16px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '16px',
    outline: 'none',
    width: '100%',
  },
  button: {
    padding: '14px',
    backgroundColor: '#e94560',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '5px',
  },
  bottomText: {
    textAlign: 'center',
    color: '#666',
    fontSize: '14px',
  },
  link: {
    color: '#e94560',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
}

export default Login