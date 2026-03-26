import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import WorkersList from '../components/WorkersList'
import Footer from '../components/Footer'
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesSection />
      <WorkersList />
        <Footer />
    </div>
  )
}

export default Home