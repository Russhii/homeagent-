import WorkerCard from './WorkerCard'

const workers = [
  {
    id: 1,
    name: 'Ramesh Patil',
    service: 'Plumber',
    price: 300,
    rating: 4.8,
    area: 'Pimpri, Pune',
    phone: '9876543210'
  },
  {
    id: 2,
    name: 'Suresh Kumar',
    service: 'Electrician',
    price: 350,
    rating: 4.6,
    area: 'Chinchwad, Pune',
    phone: '9876543211'
  },
  {
    id: 3,
    name: 'Mahesh Jadhav',
    service: 'Carpenter',
    price: 400,
    rating: 4.9,
    area: 'Akurdi, Pune',
    phone: '9876543212'
  },
  {
    id: 4,
    name: 'Ganesh Shinde',
    service: 'Painter',
    price: 250,
    rating: 4.5,
    area: 'Nigdi, Pune',
    phone: '9876543213'
  },
  {
    id:5,
    name:"Aditya Raj",
    service:'AC Repair',
    price:500,
    rating:4.7,
    area:'Dhayari',
    phone:'9823490433'
  },
]

function WorkersList() {
  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>Top Rated Workers Near You</h2>
      <p style={styles.subtext}>Verified professionals ready to help</p>
      <div style={styles.grid}>
        {workers.map((worker) => (
          <WorkerCard
            key={worker.id}
            name={worker.name}
            service={worker.service}
            price={worker.price}
            rating={worker.rating}
            area={worker.area}
            phone={worker.phone}
          />
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
}

export default WorkersList