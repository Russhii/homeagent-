function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.top}>
        <div style={styles.brand}>
          <h2 style={styles.logo}>🏠 HomeAgent</h2>
          <p style={styles.tagline}>
            Connecting homes with trusted professionals since 2026
          </p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.colHeading}>Services</h4>
          <p style={styles.colLink}>Plumber</p>
          <p style={styles.colLink}>Electrician</p>
          <p style={styles.colLink}>Carpenter</p>
          <p style={styles.colLink}>Painter</p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.colHeading}>Company</h4>
          <p style={styles.colLink}>About Us</p>
          <p style={styles.colLink}>Contact</p>
          <p style={styles.colLink}>Privacy Policy</p>
          <p style={styles.colLink}>Terms of Use</p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.colHeading}>Contact Us</h4>
          <p style={styles.colLink}>📧 hello@homeagent.in</p>
          <p style={styles.colLink}>📞 9403179242</p>
          <p style={styles.colLink}>📍 Pune, Maharashtra</p>
        </div>
      </div>

      <div style={styles.bottom}>
        <p style={styles.copy}>© 2026 HomeAgent. All rights reserved.</p>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#1a1a2e',
    color: 'white',
    padding: '60px 40px 20px 40px',
  },
  top: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: '40px',
    marginBottom: '40px',
  },
  brand: {
    maxWidth: '250px',
  },
  logo: {
    color: '#e94560',
    fontSize: '24px',
    marginBottom: '15px',
  },
  tagline: {
    color: '#aaa',
    fontSize: '14px',
    lineHeight: '1.6',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  colHeading: {
    color: 'white',
    fontSize: '16px',
    marginBottom: '5px',
  },
  colLink: {
    color: '#aaa',
    fontSize: '14px',
    cursor: 'pointer',
  },
  bottom: {
    borderTop: '1px solid #333',
    paddingTop: '20px',
    textAlign: 'center',
  },
  copy: {
    color: '#666',
    fontSize: '14px',
  }
}

export default Footer