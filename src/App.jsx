import { useState } from "react"
import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"

const PRODUCTOS = [
  { id: 1,  categoria: "zapatos",     nombre: "Zapatos Clásicos",       precio: 89.99,  img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=400" },
  { id: 2,  categoria: "zapatos",     nombre: "Botas de Cuero",         precio: 129.99, img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400" },
  { id: 3,  categoria: "zapatos",     nombre: "Zapatillas Deportivas",  precio: 74.99,  img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400" },
  { id: 4,  categoria: "zapatos",     nombre: "Mocasines",              precio: 99.99,  img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400" },
  { id: 5,  categoria: "zapatos",     nombre: "Sandalias",              precio: 49.99,  img: "https://images.unsplash.com/photo-1603487742131-4160ec2f2966?w=400" },
  { id: 6,  categoria: "zapatos",     nombre: "Zapatos Oxford",         precio: 119.99, img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400" },
  { id: 7,  categoria: "televisores", nombre: 'Smart TV 43" LED',       precio: 349.99, img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",  pulgadas: 43,  resolucion: "4K UHD",  calidad: "LED" },
  { id: 8,  categoria: "televisores", nombre: 'TV QLED 55"',            precio: 599.99, img: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400",  pulgadas: 55,  resolucion: "4K UHD",  calidad: "QLED" },
  { id: 9,  categoria: "televisores", nombre: 'Smart TV OLED 65"',      precio: 899.99, img: "https://images.unsplash.com/photo-1601944177325-f88676b2e257?w=400",  pulgadas: 65,  resolucion: "8K UHD",  calidad: "OLED" },
  { id: 10, categoria: "perfumes",    nombre: "Perfume Elegance",       precio: 59.99,  img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400" },
  { id: 11, categoria: "perfumes",    nombre: "Colonia Fresh",          precio: 39.99,  img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400" },
  { id: 12, categoria: "perfumes",    nombre: "Perfume Noir",           precio: 79.99,  img: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400" },
  { id: 13, categoria: "vestimenta",  nombre: "Remera Algodón",         precio: 24.99,  img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",  tipo: "Remera" },
  { id: 14, categoria: "vestimenta",  nombre: "Pantalón Jeans",         precio: 49.99,  img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",  tipo: "Pantalón" },
  { id: 15, categoria: "vestimenta",  nombre: "Camisa Formal",          precio: 39.99,  img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",  tipo: "Camisa" },
  { id: 16, categoria: "vestimenta",  nombre: "Pantalón de Vestir",     precio: 59.99,  img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400",  tipo: "Pantalón" },
  { id: 17, categoria: "vestimenta",  nombre: "Chaqueta Cuero",         precio: 89.99,  img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400",  tipo: "Chaqueta" },
]

const CATEGORIAS = [
  { key: "todos",       label: "Todos",         emoji: "📦" },
  { key: "zapatos",     label: "Zapatos",       emoji: "👞" },
  { key: "televisores", label: "Televisores",   emoji: "📺" },
  { key: "perfumes",    label: "Perfumes",      emoji: "🧴" },
  { key: "vestimenta",  label: "Vestimenta",    emoji: "👕" },
]

const DESCRIPCIONES = {
  todos: "Descubre nuestra tienda con las mejores marcas y productos.",
  zapatos: "Calzado para hombres, mujeres y niños, fabricado con los mejores materiales.",
  televisores: "Los mejores televisores con la más alta calidad de imagen y sonido.",
  perfumes: "Fragancias exclusivas para cada ocasión.",
  vestimenta: "Vestimenta moderna y clásica para todo estilo.",
}

function App() {
  const [carrito, setCarrito] = useState([])
  const [cartVisible, setCartVisible] = useState(false)
  const [categoriaActiva, setCategoriaActiva] = useState("todos")

  const productosFiltrados = categoriaActiva === "todos"
    ? PRODUCTOS
    : PRODUCTOS.filter((p) => p.categoria === categoriaActiva)

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existente = prev.findIndex((i) => i.producto.id === producto.id)
      if (existente >= 0) {
        const copia = [...prev]
        copia[existente] = { ...copia[existente], cantidad: copia[existente].cantidad + 1 }
        return copia
      }
      return [...prev, { producto, cantidad: 1 }]
    })
  }

  const actualizarCantidad = (index, nuevaCantidad) => {
    setCarrito((prev) => {
      const copia = [...prev]
      if (nuevaCantidad <= 0) {
        copia.splice(index, 1)
      } else {
        copia[index] = { ...copia[index], cantidad: nuevaCantidad }
      }
      return copia
    })
  }

  const eliminarDelCarrito = (index) => {
    setCarrito((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar carrito={carrito} onCartClick={() => setCartVisible(!cartVisible)} />

      <section id="inicio" className="relative h-[90vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1590674899484-d5640d2f5edf?w=1600')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">Bienvenido a El Sol</h2>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">Encontrá zapatos, televisores, perfumes y vestimenta. Todo en un solo lugar.</p>
          <a href="#productos" className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-lg transition">Ver Productos</a>
        </div>
      </section>

      <section id="productos" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-stone-800 mb-4">Nuestros Productos</h2>
        <p className="text-center text-stone-500 mb-8 max-w-lg mx-auto">{DESCRIPCIONES[categoriaActiva]}</p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategoriaActiva(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
                categoriaActiva === cat.key
                  ? "bg-stone-900 text-white"
                  : "bg-white text-stone-600 hover:bg-stone-200 border border-stone-300"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((p) => (
            <ProductCard key={p.id} producto={p} onAgregar={() => agregarAlCarrito(p)} />
          ))}
        </div>
      </section>

      <Cart
        carrito={carrito}
        onActualizarCantidad={actualizarCantidad}
        onEliminar={eliminarDelCarrito}
        visible={cartVisible}
      />

      <Checkout carrito={carrito} />

      <section id="nosotros" className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Sobre Nosotros</h2>
          <p className="text-stone-300 text-lg leading-relaxed">
            En <span className="text-amber-400 font-semibold">Zapatería El Sol</span> llevamos más de 30 años
            ofreciendo productos de calidad. Hoy expandimos nuestro catálogo para ofrecerte zapatos,
            televisores, perfumes y vestimenta con los mejores precios y atención personalizada.
          </p>
        </div>
      </section>

      <footer id="contacto" className="bg-stone-950 text-stone-400 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">👞 Zapatería El Sol</h3>
            <p className="text-sm">Calidad y variedad desde 1992.</p>
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
