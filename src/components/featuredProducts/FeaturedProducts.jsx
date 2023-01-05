import React, { useEffect, useState } from "react";
//import "./featuredProducts.scss";
import "../../index.css";
import { Card } from "../card/Card";

import { makeRequest } from "../../makeRequest";
import { useFetch } from "../../hooks/useFetch";

export const FeaturedProducts = ({ type }) => {
  // const data = [
  //   {
  //     id: 1,
  //     img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Long Sleeve Graphic T-shirt",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 2,
  //     img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Coat",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },

  //   {
  //     id: 3,
  //     img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Skirt",
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 4,
  //     img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Hat",
  //     oldPrice: 19,
  //     price: 12,
  //   },
  // ];

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="bg-gray-100 w-screen flex flex-col justify-center items-center   px-6 py-16 ">
      <div className="max-w-7xl ">
        <div className="grid grid-auto-fit mb-16">
          <h1 className="text-xl font-bold text-gray-500 mb-4">
            {type == "featured" ? "Featured" : "Trending"} Products
          </h1>
          <span className="col-span-3 text-gray-500 text-sm">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="grid grid-auto-fit gap-2">
          {error ? (
            <p style={{ color: "red" }}>Something went wrong.</p>
          ) : loading ? (
            "Loading ..."
          ) : (
            data?.map((item) => <Card item={item} key={item.id} />)
          )}
        </div>
      </div>
    </div>
  );
};
