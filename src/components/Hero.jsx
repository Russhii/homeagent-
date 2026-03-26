function Hero(){
  return (
    <div style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>
          Find Trusted Home Service Workers
        </h1>
        <p style={styles.subtext}>
          Plumbers, Electricians, Carpenters & more — near you, at the best price
        </p>
        <div style={styles.searchBox}>
          <select style={styles.select}>
             <option>Select Service</option>
             <option>Plumber</option>
             <option>Electrician</option>
             <option>Carpenter</option>
             <option>Painter</option>
             <option>AC Repair</option>
             <option>Home Security</option>
             <option>Gardner</option>
             <option>Maid</option>
          </select>
          <input type="text" 
           placeholder="Enter your area or pincode..."
           style={styles.input}
          />
          <button style={styles.button}>Search 🔍</button>
        </div>
      </div>
    </div>
      
  )
}
const styles = {
  hero: {
    backgroundColor: '#1a1a2e',
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 20px',
  },
  overlay: {
    textAlign: 'center',
    maxWidth: '700px',
  },
  heading: {
    color: 'white',
    fontSize: '42px',
    fontWeight: 'bold',
    marginBottom: '20px',
    lineHeight: '1.3',
  },
  subtext: {
    color: '#aaa',
    fontSize: '18px',
    marginBottom: '40px',
  },
  searchBox: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  select: {
    padding: '14px 18px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: 'white',
  },
  input: {
    padding: '14px 18px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    width: '280px',
    outline: 'none',
  },
  button: {
    padding: '14px 28px',
    backgroundColor: '#e94560',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
}
export default Hero