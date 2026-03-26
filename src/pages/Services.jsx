import Navbar from '../components/Navbar'
import WorkersList from '../components/WorkersList'

function Services() {
  return (
    <div>
      <Navbar />
      <div style={styles.header}>
        <h1 style={styles.heading}>All Service Workers</h1>
        <p style={styles.subtext}>Browse and contact verified professionals</p>
      </div>
      <WorkersList />
    </div>
  )
}

const styles = {
  header: {
    backgroundColor: '#1a1a2e',
    padding: '50px 20px',
    textAlign: 'center',
  },
  heading: {
    color: 'white',
    fontSize: '36px',
    marginBottom: '10px',
  },
  subtext: {
    color: '#aaa',
    fontSize: '16px',
  }
}

export default Services