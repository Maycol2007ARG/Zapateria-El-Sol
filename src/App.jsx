function App() {
  const productos = [
    { nombre: "Zapatos Clásicos", precio: "$89.99", img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400" },
    { nombre: "Botas de Cuero", precio: "$129.99", img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400" },
    { nombre: "Zapatillas Deportivas", precio: "$74.99", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400" },
    { nombre: "Mocasines", precio: "$99.99", img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400" },
    { nombre: "Sandalias", precio: "$49.99", img: "https://images.unsplash.com/photo-1603487742131-4160ec2f2966?w=400" },
    { nombre: "Zapatos Oxford", precio: "$119.99", img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400" },
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="bg-stone-900 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
        <h1 className="text-2xl font-bold tracking-tight">👞 Zapatería El Sol</h1>
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#inicio" className="hover:text-amber-400 transition">Inicio</a></li>
          <li><a href="#productos" className="hover:text-amber-400 transition">Productos</a></li>
          <li><a href="#nosotros" className="hover:text-amber-400 transition">Nosotros</a></li>
          <li><a href="#contacto" className="hover:text-amber-400 transition">Contacto</a></li>
        </ul>
      </nav>

      <section id="inicio" className="relative h-[90vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1590674899484-d5640d2f5edf?w=1600')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">Estilo que camina</h2>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">Descubre la mejor colección de calzado para cada ocasión. Calidad y diseño que marcan la diferencia.</p>
          <a href="#productos" className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-lg transition">Ver Colección</a>
        </div>
      </section>

      <section id="productos" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-stone-800 mb-4">Nuestros Productos</h2>
        <p className="text-center text-stone-500 mb-12 max-w-lg mx-auto">Calzado para hombres, mujeres y niños, fabricado con los mejores materiales.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img src={p.img} alt={p.nombre} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-stone-800">{p.nombre}</h3>
                <p className="text-amber-600 font-bold text-xl mt-1">{p.precio}</p>
                <button className="mt-3 w-full bg-stone-900 hover:bg-stone-800 text-white py-2 rounded-lg text-sm font-medium transition">Agregar al carrito</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="nosotros" className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Sobre Nosotros</h2>
          <p className="text-stone-300 text-lg leading-relaxed">
            En <span className="text-amber-400 font-semibold">Zapatería El Sol</span> llevamos más de 30 años
            creando calzado artesanal con los más altos estándares de calidad. Cada par de zapatos
            es elaborado por manos expertas que ponen dedicación en cada puntada. Nuestro compromiso
            es ofrecerte comodidad, durabilidad y estilo en cada paso que des.
          </p>
        </div>
      </section>

      <footer id="contacto" className="bg-stone-950 text-stone-400 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">👞 Zapatería El Sol</h3>
            <p className="text-sm">Calzado de calidad desde 1992. Tu estilo, nuestra pasión.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contacto</h4>
            <ul className="text-sm space-y-1">
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ info@zapateriaelsol.com</li>
              <li>📍 Av. Central 123, Ciudad</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Horarios</h4>
            <ul className="text-sm space-y-1">
              <li>Lun - Vie: 9:00 - 19:00</li>
              <li>Sáb: 9:00 - 14:00</li>
              <li>Dom: Cerrado</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-stone-800 text-center text-sm">
          &copy; {new Date().getFullYear()} Zapatería El Sol. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

export default App
