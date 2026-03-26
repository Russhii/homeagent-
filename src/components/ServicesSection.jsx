const services = [
  { id: 1, icon: '🔧', name: 'Plumber', desc: 'Fix leaks, pipes & more' },
  { id: 2, icon: '⚡', name: 'Electrician', desc: 'Wiring, switches & repairs' },
  { id: 3, icon: '🪚', name: 'Carpenter', desc: 'Furniture & woodwork' },
  { id: 4, icon: '🎨', name: 'Painter', desc: 'Home & office painting' },
  { id: 5, icon: '❄️', name: 'AC Repair', desc: 'AC service & installation' },
  { id: 6, icon: '🧹', name: 'Maid', desc: 'Daily & deep cleaning' },
]

function ServicesSection() {
  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>Our Services</h2>
      <p style={styles.subtext}>What do you need help with today?</p>
      <div style={styles.grid}>
        {services.map((service) => (
          <div key={service.id} style={styles.card}>
            <div style={styles.icon}>{service.icon}</div>
            <h3 style={styles.cardTitle}>{service.name}</h3>
            <p style={styles.cardDesc}>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  section: {
    padding: '60px 40px',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    color: '#1a1a2e',
    marginBottom: '10px',
  },
  subtext: {
    color: '#666',
    fontSize: '16px',
    marginBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '25px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '30px 20px',
    cursor: 'pointer',
    boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
    transition: 'transform 0.2s',
  },
  icon: {
    fontSize: '40px',
    marginBottom: '15px',
  },
  cardTitle: {
    fontSize: '18px',
    color: '#1a1a2e',
    marginBottom: '8px',
  },
  cardDesc: {
    fontSize: '14px',
    color: '#888',
  }
}

export default ServicesSection