import { useState } from "react"

function Checkout({ carrito }) {
  const [descuentoInput, setDescuentoInput] = useState("")
  const [descuento, setDescuento] = useState(null)
  const [mensaje, setMensaje] = useState("")

  const subtotal = carrito.reduce((sum, item) => sum + item.producto.precio * item.cantidad, 0)
  const envio = subtotal > 100 ? 0 : 9.99
  const descuentoAplicado = descuento ? subtotal * (descuento / 100) : 0
  const iva = (subtotal - descuentoAplicado) * 0.21
  const total = subtotal - descuentoAplicado + envio + iva

  const aplicarDescuento = () => {
    const codigos = { "SOL10": 10, "SOL20": 20, "ZAPATO": 15 }
    const codigo = descuentoInput.trim().toUpperCase()
    if (codigos[codigo]) {
      setDescuento(codigos[codigo])
      setMensaje(`🎉 Descuento del ${codigos[codigo]}% aplicado`)
    } else {
      setDescuento(null)
      setMensaje("❌ Código inválido")
    }
  }

  if (carrito.length === 0) {
    return (
      <section id="checkout" className="bg-stone-100 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Resumen del Pedido</h2>
          <p className="text-stone-500">Agregá productos al carrito para ver el resumen.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="checkout" className="bg-stone-100 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-800 mb-8">Resumen del Pedido</h2>

        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          {carrito.map((item, i) => (
            <div key={i} className="flex justify-between text-stone-700">
              <span>
                {item.producto.nombre}{" "}
                <span className="text-stone-400">x{item.cantidad}</span>
              </span>
              <span className="font-semibold">
                ${(item.producto.precio * item.cantidad).toFixed(2)}
              </span>
            </div>
          ))}

          <hr className="border-stone-200" />

          <div className="flex justify-between text-stone-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-stone-600">
            <span>Envío</span>
            <span>{envio === 0 ? <span className="text-green-600 font-semibold">GRATIS</span> : `$${envio.toFixed(2)}`}</span>
          </div>

          {descuento && (
            <div className="flex justify-between text-green-600">
              <span>Descuento ({descuento}%)</span>
              <span>-${descuentoAplicado.toFixed(2)}</span>
            </div>
          )}

          <div className="flex justify-between text-stone-600">
            <span>IVA (21%)</span>
            <span>${iva.toFixed(2)}</span>
          </div>

          <hr className="border-stone-200" />

          <div className="flex justify-between text-xl font-bold text-stone-800">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="pt-4">
            <label className="block text-sm font-medium text-stone-600 mb-2">
              ¿Tenés un código de descuento?
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={descuentoInput}
                onChange={(e) => setDescuentoInput(e.target.value)}
                placeholder="Ej: SOL10"
                className="flex-1 border border-stone-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                onClick={aplicarDescuento}
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-2 rounded-lg text-sm transition cursor-pointer"
              >
                Aplicar
              </button>
            </div>
            {mensaje && (
              <p className={`text-sm mt-2 ${mensaje.includes("✅") || mensaje.includes("🎉") ? "text-green-600" : "text-red-500"}`}>
                {mensaje}
              </p>
            )}
            <p className="text-xs text-stone-400 mt-1">Códigos: SOL10, SOL20, ZAPATO</p>
          </div>

          <button className="mt-4 w-full bg-stone-900 hover:bg-stone-800 text-white py-3 rounded-xl font-semibold text-lg transition cursor-pointer">
            Confirmar Pedido
          </button>
        </div>
      </div>
    </section>
  )
}

export default Checkout
