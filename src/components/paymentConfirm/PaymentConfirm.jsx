import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeItem, resetCart } from "../../redux/cartReducer"
import { Link, Navigate } from "react-router-dom"

export const PaymentConfirm = () => {
  const products = useSelector((state) => state.cart.products)
  let total = 0
  const dispatch = useDispatch()
  return (
    <div className="bg-gray-100 w-screen flex justify-center  px-6 py-16   text-gray-500">
      <div className="max-w-4xl bg-white w-full  flex flex-col  p-16 gap-4  shaddow-xl">
        <h2 className="text-4xl font-bold capitalize mb-8">Order confirmed</h2>
        {products?.map((item) => {
          total += item.quantity * item.price
          return (
            <div
              className="flex gap-4 items-center justify-between  "
              key={item.id}
            >
              <div className="flex-[2]  ">
                <img
                  className=" w-3/6 overflow-hidden object-cover "
                  src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.img}
                  alt=""
                />
              </div>

              <div className="flex-[4] flex flex-col gap-8">
                <h2 className="text-xl font-bold capitalize">{item.title}</h2>
                <span className="text-xs mt-4">
                  {item.desc.substring(0, 100)}
                </span>
                <span className="text-blue-400 text-lg">
                  {item.quantity} X {item.price.toFixed(2)}
                </span>
              </div>
            </div>
          )
        })}

        <div className="flex text-lg w-full justify-between font-bold gap-16 mt-8 ">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>

 <Link to="/">
 <span
          className="text-lg font-bold  text-red-400 cursor-pointer mt-16"
          onClick={() => 
            dispatch(resetCart())
           }
        >
          Reset Cart
        </span>
    
 </Link>
   
      </div>
    </div>
  )
}
