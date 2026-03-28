import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import workers from '../data/workers'

function WorkerProfile() {
  const { id } = useParams()
  const worker = workers.find((w) => w.id === parseInt(id))

  if (!worker) {
    return (
      <div>
        <Navbar />
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <h2>Worker not found!</h2>
          <Link to="/" style={{ color: '#e94560' }}>Go Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>

        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '30px', display: 'flex', gap: '30px', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', marginBottom: '25px' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#1a1a2e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', fontWeight: 'bold' }}>
            {worker.name.charAt(0)}
          </div>
          <div>
            <h1 style={{ fontSize: '28px', color: '#1a1a2e', marginBottom: '8px' }}>{worker.name}</h1>
            <p style={{ color: '#666', marginBottom: '4px' }}>🔧 {worker.service}</p>
            <p style={{ color: '#666', marginBottom: '4px' }}>📍 {worker.area}</p>
            <p style={{ color: '#666', marginBottom: '15px' }}>💼 {worker.experience} experience</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <span style={{ backgroundColor: '#fff3cd', padding: '5px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>⭐ {worker.rating}</span>
              <span style={{ backgroundColor: '#d4edda', padding: '5px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold', color: '#155724' }}>₹{worker.price}/hr</span>
              <span style={{ backgroundColor: '#d1ecf1', padding: '5px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold', color: '#0c5460' }}>✅ Verified</span>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '25px 30px', marginBottom: '25px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
          <h2 style={{ fontSize: '20px', color: '#1a1a2e', marginBottom: '15px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>About</h2>
          <p style={{ color: '#555', lineHeight: '1.7' }}>{worker.about}</p>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '25px 30px', marginBottom: '25px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
          <h2 style={{ fontSize: '20px', color: '#1a1a2e', marginBottom: '15px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>Customer Reviews</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {worker.reviews.map((review, index) => (
              <div key={index} style={{ backgroundColor: '#f9f9f9', borderRadius: '10px', padding: '15px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <strong>{review.user}</strong>
                  <span style={{ backgroundColor: '#fff3cd', padding: '2px 10px', borderRadius: '20px', fontSize: '13px' }}>⭐ {review.rating}</span>
                </div>
                <p style={{ color: '#666', fontSize: '14px' }}>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
          <a href={'tel:' + worker.phone} style={{ flex: 1, padding: '16px', backgroundColor: '#e94560', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>
            📞 Call Now
          </a>
          <a href={'https://wa.me/91' + worker.phone} target="_blank" rel="noreferrer" style={{ flex: 1, padding: '16px', backgroundColor: '#25D366', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>
            💬 WhatsApp
          </a>
          <button style={{ flex: 1, padding: '16px', backgroundColor: '#1a1a2e', color: 'white', borderRadius: '10px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
            📅 Book Appointment
          </button>
        </div>

      </div>
    </div>
  )
}

export default WorkerProfile