import { useEffect, useState } from 'react'

function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/services`)
        const data = await res.json()
        setServices(data)
      } catch (e) {
        setServices([])
      } finally {
        setLoading(false)
      }
    }
    fetchServices()
  }, [])

  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Layanan Populer</h2>
      {loading ? (
        <p className="text-gray-600">Memuat layanan...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.id} className="rounded-xl border border-rose-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">{s.name}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-rose-600 font-bold">Rp {s.price.toLocaleString('id-ID')}</span>
                <span className="text-gray-500 text-sm">{s.duration} menit</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Services
