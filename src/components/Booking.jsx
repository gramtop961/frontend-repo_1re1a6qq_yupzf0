import { useState } from 'react'

function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', preferred_date: '', note: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Gagal mengirim')
      setStatus({ ok: true, message: 'Permintaan janji berhasil dikirim. Kami akan segera menghubungi via WhatsApp.' })
      setForm({ name: '', phone: '', service: '', preferred_date: '', note: '' })
    } catch (e) {
      setStatus({ ok: false, message: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="booking" className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Buat Janji</h2>
      <p className="text-gray-600 mb-8">Isi formulir di bawah ini untuk membuat janji. Tim kami akan menghubungi Anda untuk konfirmasi.</p>
      <form onSubmit={submit} className="bg-white rounded-xl border border-rose-100 p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
          <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg border-gray-300 focus:border-rose-500 focus:ring-rose-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">No. WhatsApp</label>
          <input name="phone" value={form.phone} onChange={handleChange} required className="mt-1 w-full rounded-lg border-gray-300 focus:border-rose-500 focus:ring-rose-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Layanan</label>
          <input name="service" value={form.service} onChange={handleChange} required placeholder="Contoh: Acne Peel" className="mt-1 w-full rounded-lg border-gray-300 focus:border-rose-500 focus:ring-rose-500" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Tanggal Pilihan</label>
            <input name="preferred_date" value={form.preferred_date} onChange={handleChange} placeholder="YYYY-MM-DD" className="mt-1 w-full rounded-lg border-gray-300 focus:border-rose-500 focus:ring-rose-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Catatan</label>
            <input name="note" value={form.note} onChange={handleChange} className="mt-1 w-full rounded-lg border-gray-300 focus:border-rose-500 focus:ring-rose-500" />
          </div>
        </div>
        <button disabled={loading} className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-rose-600 text-white font-semibold hover:bg-rose-700 disabled:opacity-50">
          {loading ? 'Mengirim...' : 'Kirim Permintaan'}
        </button>
        {status && (
          <p className={`text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.message}</p>
        )}
      </form>
    </section>
  )
}

export default Booking
