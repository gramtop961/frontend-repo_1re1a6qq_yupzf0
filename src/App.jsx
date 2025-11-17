import Hero from './components/Hero'
import Services from './components/Services'
import Booking from './components/Booking'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/60 border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-gray-900">Jambi Skin Centre</a>
          <nav className="hidden sm:flex gap-6 text-gray-700">
            <a href="#services" className="hover:text-rose-600">Layanan</a>
            <a href="#booking" className="hover:text-rose-600">Buat Janji</a>
            <a href="/test" className="hover:text-rose-600">Tes Koneksi</a>
          </nav>
          <a href="#booking" className="inline-flex items-center px-4 py-2 rounded-lg bg-rose-600 text-white font-semibold hover:bg-rose-700">Reservasi</a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Booking />
      </main>

      <Footer />
    </div>
  )
}

export default App
