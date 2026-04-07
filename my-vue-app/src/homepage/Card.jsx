import React from "react"

const Card = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price , 0)
  return (
    <div className="py-10 max-w-7xl mx-auto border m-10 rounded-4xl">
      {cartItems.length === 0 ? (
        <p className="text-center text-xl">Cart is empty</p>
      ) : (
        // <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        //   {cartItems.map(item => (
        //     <div key={item.id} className="border p-4 rounded-2xl space-y-2">
        //       <div className="flex justify-between">
        //         <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
        //         <h1>{item.tag}</h1>
        //       </div>
        //       <h1 className="text-2xl font-bold">{item.name}</h1>
        //       <div className="flex flex-col">
        //         {item.features.map((feature, idx) => (
        //           <p key={idx}>{feature}</p>
        //         ))}
        //       </div>
        //       <p>
        //         <span className="text-xl font-bold">{item.price}</span>/month
        //       </p>
        //     </div>
        //   ))}
        // </div>
        <div className="p-10">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          {
            cartItems.map(item =>
              <div className="flex gap-10 m-5 rounded-2xl bg-gray-100 py-5 " key={item.id}>
                <div>
                  <img className="h-2- w-20 object-contain" src={item.image} alt="" />
                </div>
                <div className="space-y-3">
                  <h1 className="text-xl font-bold ">{item.name}</h1>
                  <p>${item.price}</p>
                </div>
                
              </div>)

          }
          <div className="flex justify-between mx-8">
            <div>Total</div>
            <div className="text-xl font-bold">${totalPrice}</div>
          </div>
          <div className="proceed p-5 text-white text-center text-xl rounded-2xl mt-5">
            <h1>Proceed to Checkout</h1>
          </div>
        </div>
      )
      }
    </div >
  )
}

export default Card