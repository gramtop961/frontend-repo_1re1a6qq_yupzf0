function Footer() {
  return (
    <footer className="mt-16 bg-white/70 border-t border-rose-100">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Jambi Skin Centre</h3>
          <p className="text-gray-600 mt-2">Perawatan kulit tepercaya di Jambi.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-800">Kontak</h4>
          <p className="text-gray-600 mt-2">Jl. Contoh No. 123, Jambi</p>
          <p className="text-gray-600">WhatsApp: +62 811-1234-567</p>
          <p className="text-gray-600">Senin - Sabtu: 09.00 - 19.00</p>
        </div>
        <div className="text-sm text-gray-500 self-end md:text-right">© {new Date().getFullYear()} Jambi Skin Centre. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
