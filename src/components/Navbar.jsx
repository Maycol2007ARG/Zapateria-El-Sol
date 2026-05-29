function Navbar({ carrito, onCartClick }) {
  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0)

  return (
    <nav className="bg-stone-900 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      <h1 className="text-2xl font-bold tracking-tight">👞 Zapatería El Sol</h1>
      <div className="flex items-center gap-6">
        <ul className="flex gap-6 text-sm font-medium max-sm:hidden">
          <li><a href="#inicio" className="hover:text-amber-400 transition">Inicio</a></li>
          <li><a href="#productos" className="hover:text-amber-400 transition">Productos</a></li>
          <li><a href="#carrito" className="hover:text-amber-400 transition">Carrito</a></li>
          <li><a href="#checkout" className="hover:text-amber-400 transition">Pedido</a></li>
        </ul>
        <button onClick={onCartClick} className="relative text-xl" title="Carrito">
          🛒
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
