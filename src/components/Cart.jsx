function Cart({ carrito, onActualizarCantidad, onEliminar, visible }) {
  if (!visible) return null

  const subtotal = carrito.reduce((sum, item) => sum + item.producto.precio * item.cantidad, 0)

  return (
    <section id="carrito" className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-stone-800 mb-8">Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p className="text-stone-500 text-lg">El carrito está vacío. Agregá productos desde la colección.</p>
      ) : (
        <>
          <div className="space-y-4">
            {carrito.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
                <img
                  src={item.producto.img}
                  alt={item.producto.nombre}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-stone-800">{item.producto.nombre}</h3>
                  <p className="text-amber-600 font-bold">${item.producto.precio.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onActualizarCantidad(i, item.cantidad - 1)}
                    className="bg-stone-200 hover:bg-stone-300 px-3 py-1 rounded-lg font-bold cursor-pointer"
                    disabled={item.cantidad <= 1}
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-semibold">{item.cantidad}</span>
                  <button
                    onClick={() => onActualizarCantidad(i, item.cantidad + 1)}
                    className="bg-stone-200 hover:bg-stone-300 px-3 py-1 rounded-lg font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold text-stone-700 w-24 text-right">
                  ${(item.producto.precio * item.cantidad).toFixed(2)}
                </p>
                <button
                  onClick={() => onEliminar(i)}
                  className="text-red-500 hover:text-red-700 text-xl cursor-pointer"
                  title="Eliminar"
                >
                  🗑
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <p className="text-lg text-stone-600">
              Subtotal ({carrito.reduce((s, i) => s + i.cantidad, 0)} productos):
              <span className="text-2xl font-bold text-stone-800 ml-2">${subtotal.toFixed(2)}</span>
            </p>
          </div>
        </>
      )}
    </section>
  )
}

export default Cart
