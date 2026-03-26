import { useState } from 'react'
import Navbar from '../components/Navbar'

function Register() {
  const [role, setRole] = useState('customer')

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.box}>
          <h2 style={styles.heading}>Create Account 🏠</h2>
          <p style={styles.subtext}>Join HomeAgent today</p>

          <div style={styles.roleRow}>
            <button
              onClick={() => setRole('customer')}
              style={role === 'customer' ? styles.roleBtnActive : styles.roleBtn}
            >
              👤 Customer
            </button>
            <button
              onClick={() => setRole('worker')}
              style={role === 'worker' ? styles.roleBtnActive : styles.roleBtn}
            >
              🔧 Worker
            </button>
          </div>

          <input
            type="text"
            placeholder="Full name"
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email address"
            style={styles.input}
          />
          <input
            type="tel"
            placeholder="Phone number"
            style={styles.input}
          />
          {role === 'worker' && (
            <input
              type="text"
              placeholder="Your service (e.g. Plumber)"
              style={styles.input}
            />
          )}
          {role === 'worker' && (
            <input
              type="text"
              placeholder="Your area (e.g. Pune)"
              style={styles.input}
            />
          )}
          <input
            type="password"
            placeholder="Create password"
            style={styles.input}
          />
          <button style={styles.button}>
            Create {role === 'customer' ? 'Customer' : 'Worker'} Account
          </button>

          <p style={styles.bottomText}>
            Already have an account?{' '}
            <a href="/login" style={styles.link}>Login here</a>
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
    padding: '40px 20px',
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
  },
  roleRow: {
    display: 'flex',
    gap: '10px',
    marginBottom: '5px',
  },
  roleBtn: {
    flex: 1,
    padding: '12px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#888',
  },
  roleBtnActive: {
    flex: 1,
    padding: '12px',
    border: '2px solid #e94560',
    borderRadius: '8px',
    backgroundColor: '#e94560',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 'bold',
    color: 'white',
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
    backgroundColor: '#1a1a2e',
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

export default Register