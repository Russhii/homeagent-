import { Link } from 'react-router-dom'
import workers from '../data/workers'

function WorkersList() {
  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>Top Rated Workers Near You</h2>
      <p style={styles.subtext}>Verified professionals ready to help</p>
      <div style={styles.grid}>
        {workers.map((worker) => (
          <div key={worker.id} style={styles.card}>
            <div style={styles.avatar}>{worker.name.charAt(0)}</div>
            <div style={styles.info}>
              <h3 style={styles.name}>{worker.name}</h3>
              <p style={styles.service}>🔧 {worker.service}</p>
              <p style={styles.area}>📍 {worker.area}</p>
              <div style={styles.row}>
                <span style={styles.rating}>⭐ {worker.rating}</span>
                <span style={styles.price}>₹{worker.price}/hr</span>
              </div>
              <div style={styles.buttons}>
                <a href={`tel:${worker.phone}`} style={styles.callBtn}>
                  📞 Call Now
                </a>
                <Link to={`/worker/${worker.id}`} style={styles.profileBtn}>
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  section: {
    padding: '60px 40px',
    backgroundColor: '#f0f0f0',
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
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '25px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    gap: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#1a1a2e',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    flexShrink: 0,
  },
  info: { flex: 1 },
  name: {
    fontSize: '18px',
    color: '#1a1a2e',
    marginBottom: '5px',
  },
  service: {
    color: '#666',
    fontSize: '14px',
    marginBottom: '4px',
  },
  area: {
    color: '#666',
    fontSize: '14px',
    marginBottom: '10px',
  },
  row: {
    display: 'flex',
    gap: '15px',
    marginBottom: '15px',
    alignItems: 'center',
  },
  rating: {
    backgroundColor: '#fff3cd',
    padding: '3px 10px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  price: {
    backgroundColor: '#d4edda',
    padding: '3px 10px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#155724',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
  },
  callBtn: {
    backgroundColor: '#e94560',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  profileBtn: {
    backgroundColor: '#1a1a2e',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
  }
}

export default WorkersList