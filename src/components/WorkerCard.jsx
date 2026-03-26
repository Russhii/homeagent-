function WorkerCard({name, service, price, rating, area, phone}){
  return(

    <div style={styles.card}>
      <div style={styles.avatar} >
        {name.charAt(0)}
      </div>
      <div style={styles.info}>
        <h3 style={styles.name}>{name}</h3>
       <p style={styles.service}>🔧 {service}</p>
        <p style={styles.area}>📍 {area}</p>
        <div style={styles.row}>
          <span style={styles.rating}>⭐ {rating}</span>
          <span style={styles.price}>₹{price}/hr</span>
        </div>
        <div style={styles.buttons}>
          <a href={`tel:${phone}`} style={styles.callBtn}>
            📞 Call Now
          </a>
          <button style={styles.profileBtn}>
            View Profile
          </button>
        </div>
      </div>
    </div>
  )
}

const styles ={
  card: {
    backgroundColor:'White',
    borderRadius:'12px',
    padding:'20px',
    display:'flex',
    gap:'20px',
    boxShadow:'0 2px 10px rgba(0,0,0,0.08)',
    alignItems: 'flex-start',
  },
  avatar:{
    width:'60px',
    height:'60px',
    borderRadius:'50%',
    backgroundColor:'#1a1a2e',
    color:'white',
    display:'flex',
    alignItems:"center",
    fontSize:'24px',
    fontWeight:'bold',
    flexShrink:0,
   }, 
  info: {
    flex: 1,
  },
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
    border: 'none',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
}

export default WorkerCard