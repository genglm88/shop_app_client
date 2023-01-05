import React, { useState } from "react";
import "../../index.css";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareOutlinedIcon from "@mui/icons-material/CompareOutlined";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

export const Product = () => {
  // const images = [
  //   "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
  // ];
  const id = useParams().id;

  const [mainImg, setMainImg] = useState("img");
  const [proNum, setProNum] = useState(0);

  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  //!loading && console.log(data);

  return (
    <div className="bg-gray-100 w-screen flex flex-col justify-center items-center   px-6 py-16 ">
      <div className="max-w-7xl">
        <div className="flex px-5 py-12 gap-6 bg-gray-100">
          {error ? (
            <p style={{ color: "red" }}>Something went wrong.</p>
          ) : loading ? (
            "loading..."
          ) : (
            <>
              <div className="flex-[1] flex flex-col gap-4 ">
                <img
                  className="w-full h-18 md:h-24 lg:h-48 overflow-hidden object-cover cursor-pointer"
                  src={
                    import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                    data?.attributes?.img?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setMainImg("img")}
                />
                <img
                  className="w-full h-18 md:h-24 lg:h-48 overflow-hidden object-cover cursor-pointer"
                  src={
                    import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setMainImg("img2")}
                />
              </div>

              <img
                className="flex-[4] flex w-full h-full max-h-fit overflow-hidden object-cover "
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes[mainImg]?.data?.attributes?.url //dynamic attributes of an object
                }
                alt=""
              />

              <div className="flex-[5] flex flex-col gap-8 h-full w-full">
                <h1 className="text-2xl font-bold capitalize">
                  {data?.attributes?.title}
                </h1>
                <span className="text-xl text-blue-400">
                  ${data?.attributes?.price}
                </span>
                <span className="text-sm text-gray-500">
                  {data?.attributes?.desc}
                </span>
                <div className="flex gap-2 items-center">
                  <button
                    className="text-xl font-bold w-8 h-8 bg-gray-300"
                    onClick={(e) => {
                      setProNum((prev) => (prev == 1 ? 1 : prev - 1));
                    }}
                  >
                    -
                  </button>
                  <span>{proNum}</span>
                  <button
                    className="text-xl font-bold w-8 h-8 bg-gray-300"
                    onClick={(e) => setProNum((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="text-md min-w-min px-6 py-2 w-2/6 text-blue-200  bg-blue-500 flex gap-6 justify-center uppercase text-sm items-center"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: data.id,
                        title: data.attributes.title,
                        desc: data.attributes.desc,
                        price: data.attributes.price,
                        img: data.attributes.img.data.attributes.url,
                        quantity: proNum,
                      })
                    )
                  }
                >
                  <AddShoppingCartOutlinedIcon />
                  <span> add to cart</span>
                </button>

                <div className="flex gap-4 text-blue-400 uppercase text-sm">
                  <div className="flex  gap-2 items-center">
                    <FavoriteBorderOutlinedIcon />
                    <span>Add to wishlist</span>
                  </div>
                  <div className="flex  gap-2 items-center">
                    <CompareOutlinedIcon />
                    <span>add to compare </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-8 text-gray-400 text-sm pb-8 border-b-2">
                  <span>Vendor: polo</span>
                  <span>Product Type: T-Shirt</span>
                  <span>Tag: T-Shirt, Women, Top</span>
                </div>

                <div className="flex flex-col gap-4 uppercase text-gray-400 text-sm">
                  <span className="">description </span>
                  <hr className="w-48" />
                  <span className="">Additional information</span>
                  <hr className="w-48" />
                  <span>FAQ</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
