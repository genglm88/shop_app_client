import "../../index.css"

import React from "react"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import { useDispatch, useSelector } from "react-redux"
import { removeItem, resetCart } from "../../redux/cartReducer"
import { loadStripe } from "@stripe/stripe-js"
import { makeRequest } from "../../makeRequest"

export const Cart = () => {
  const products = useSelector((state) => state.cart.products)
  let total = 0
  const dispatch = useDispatch()
  //console.log(products)
  // const data = [
  //   {
  //     id: 1,
  //     img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Long Sleeve Graphic T-shirt",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //     desc: "Lorem ipsum dolor sit amet. Sit quas eaque sit voluptas aspernatur non nulla quia et saepe porro est ullam laborum ut dolorum nostrum. Qui deleniti molestias vel expedita galisum qui enim voluptas aut culpa velit. Qui velit possimus aut nostrum modi qui sint blanditiis non voluptas optio. Ex quia deleniti et labore perspiciatis ut tenetur voluptatem aut consectetur veniam 33 ducimus rerum.",
  //   },
  //   {
  //     id: 2,
  //     img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Coat",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //     desc: "Lorem ipsum dolor sit amet. Sit quas eaque sit voluptas aspernatur non nulla quia et saepe porro est ullam laborum ut dolorum nostrum. Qui deleniti molestias vel expedita galisum qui enim voluptas aut culpa velit. Qui velit possimus aut nostrum modi qui sint blanditiis non voluptas optio. Ex quia deleniti et labore perspiciatis ut tenetur voluptatem aut consectetur veniam 33 ducimus rerum.",
  //   },
  // ];
  const stripePromise = loadStripe(
    "pk_test_51MKvteDPO1BaEHKcFxr29sCqbuIvEnLPYKjgI1c4YxJdhCqwoTmOTmnsl88GpWjPSkPK761NMIolHNudfDNIFrpy00rEAEb6Y6")
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise
      const res = await makeRequest.post("/orders", {
        products,
      })
    
        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        })
       //const aar= ()=> dispatch(resetCart())
     
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="px-4 py-2 w-92 md:w-96 h-90 text-gray-400 bg-white z-40 flex flex-col gap-4 absolute top-[90px] lg:top-[110px] right-[10px] lg:right-[2%] xl:right-[7%] 2xl:right-[9%] shaddow-xl">
      <h2 className="text-lg">Products in your cart</h2>
      {products?.map((item) => {
        total += item.quantity * item.price
        return (
          <div className="flex gap-3 items-center" key={item.id}>
            <div className="flex-[2]  ">
              <img
                className=" h-5/6 overflow-hidden object-cover "
                src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.img}
                alt=""
              />
            </div>

            <div className="flex-[4] flex flex-col gap-2">
              <h2 className="text-sm font-bold capitalize">{item.title}</h2>
              <span className="text-xs mt-4">
                {item.desc.substring(0, 100)}
              </span>
              <span className="text-blue-400 text-sm">
                {item.quantity} X {item.price.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-[1] text-red-700">
              <DeleteOutlineOutlinedIcon
                onClick={() => dispatch(removeItem(item.id))}
              />
            </div>
          </div>
        )
      })}

      <div className="flex justify-between font-bold text-gray-500">
        <span>Subtotal</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button
        onClick={handlePayment}
        className="w-48 bg-blue-500 text-blue-100 py-2 text-xs uppercase"
      >
        Proceed to chekout
      </button>
      <span
        className="text-xs text-red-400 cursor-pointer"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </span>
    </div>
  )
}
