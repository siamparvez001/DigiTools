import React from "react"

const Card = ({ cartItems }) => {
  return (
    <div className="py-10 max-w-7xl mx-auto">
      {cartItems.length === 0 ? (
        <p className="text-center text-xl">Cart is empty</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cartItems.map(item => (
            <div key={item.id} className="border p-4 rounded-2xl space-y-2">
              <div className="flex justify-between">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                <h1>{item.tag}</h1>
              </div>
              <h1 className="text-2xl font-bold">{item.name}</h1>
              <div className="flex flex-col">
                {item.features.map((feature, idx) => (
                  <p key={idx}>{feature}</p>
                ))}
              </div>
              <p>
                <span className="text-xl font-bold">{item.price}</span>/month
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Card