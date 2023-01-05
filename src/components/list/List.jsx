import { Card } from "../card/Card";
import "../../index.css";

import React from "react";
import { useFetch } from "../../hooks/useFetch";

const List = ({ catIds, maxPrice, sort, selectedSubCats, newSeason, sale }) => {
  // const data = [
  //     {
  //       id: 1,
  //       img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //       img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //       title: "Long Sleeve Graphic T-shirt",
  //       isNew: true,
  //       oldPrice: 19,
  //       price: 12,
  //     },
  //     {
  //       id: 2,
  //       img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //       title: "Coat",
  //       isNew: true,
  //       oldPrice: 19,
  //       price: 12,
  //     },

  //     {
  //       id: 3,
  //       img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //       title: "Skirt",
  //       oldPrice: 19,
  //       price: 12,
  //     },
  //     {
  //       id: 4,
  //       img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //       title: "Hat",
  //       oldPrice: 19,
  //       price: 12,
  //     },
  //   ];
  //console.log("catIds   " + catIds);
  const { data, loading, error } = useFetch(
    `/products?populate=*${catIds.map(
      (catId) => `&[filters][categories][id][$eq]=${catId}`
    )}${selectedSubCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}${
      newSeason ? `&[filters][isNew][$eq]=true` : ""
    }${sale ? `&[filters][isSale][$eq]=true` : ""}&sort=price:${sort}`
  ); //get subcateories of a category (men or women)
  //!loading && console.log(data); //&sort=price:${sort}

  return (
    <div className="flex justify-between flex-wrap">
      {error ? (
        <p style={{ color: "red" }}>Something went wrong.</p>
      ) : loading ? (
        "Loading..."
      ) : (
        data?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
};

export default List;
