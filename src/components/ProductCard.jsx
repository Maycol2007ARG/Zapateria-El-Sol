function ProductCard({ producto, onAgregar }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group">
      <div className="h-64 overflow-hidden">
        <img
          src={producto.img}
          alt={producto.nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-stone-800">{producto.nombre}</h3>

        {producto.categoria === "televisores" && (
          <div className="flex flex-wrap gap-2 mt-2 text-xs text-stone-500">
            <span className="bg-stone-100 px-2 py-1 rounded">📺 {producto.pulgadas}"</span>
            <span className="bg-stone-100 px-2 py-1 rounded">{producto.resolucion}</span>
            <span className="bg-stone-100 px-2 py-1 rounded">{producto.calidad}</span>
          </div>
        )}

        {producto.categoria === "vestimenta" && (
          <p className="text-xs text-stone-400 mt-2 uppercase tracking-wide">{producto.tipo}</p>
        )}

        {producto.categoria === "perfumes" && (
          <p className="text-xs text-stone-400 mt-2 uppercase tracking-wide">🧴 Fragancia</p>
        )}

        {producto.categoria === "zapatos" && (
          <p className="text-xs text-stone-400 mt-2 uppercase tracking-wide">👞 Calzado</p>
        )}

        <p className="text-amber-600 font-bold text-xl mt-1">${producto.precio.toFixed(2)}</p>
        <button
          onClick={onAgregar}
          className="mt-3 w-full bg-stone-900 hover:bg-stone-800 text-white py-2 rounded-lg text-sm font-medium transition cursor-pointer"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductCard
