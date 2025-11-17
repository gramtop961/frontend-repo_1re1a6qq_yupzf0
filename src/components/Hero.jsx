import { useMemo } from 'react'

function Hero() {
  const bg = useMemo(() => (
    'bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50'
  ), [])

  return (
    <section className={`${bg} relative overflow-hidden`}> 
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-200/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center text-rose-600 font-semibold bg-rose-100 px-3 py-1 rounded-full mb-4">Jambi Skin Centre</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Klinik kecantikan terpercaya di Jambi
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Perawatan kulit menyeluruh dengan dokter berpengalaman dan teknologi modern. Kulit lebih sehat, cerah, dan percaya diri.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#booking" className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-rose-600 text-white font-semibold hover:bg-rose-700 transition-colors">Buat Janji</a>
            <a href="#services" className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-white text-rose-700 font-semibold border border-rose-200 hover:bg-rose-50 transition-colors">Lihat Layanan</a>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            Buka Senin - Sabtu, 09.00 - 19.00
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-white/60 backdrop-blur shadow-xl border border-white/40 p-4">
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-rose-200 via-pink-200 to-amber-200" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
