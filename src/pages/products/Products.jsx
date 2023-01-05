import React from "react";
import "../../index.css";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id); //useParams.is is a string
  const headerImg = [
    "https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/998067/pexels-photo-998067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/167703/pexels-photo-167703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  ];

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;

    //const isChecked = e.target.checked
    setSelectedSubCats(
      checked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item != value)
    );
  };

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  ); //get subcateories of a category (men or women)
  //!loading && console.log(data);
  return (
    <div className="bg-gray-100 w-screen flex justify-center  px-6 py-16  ">
      <div className="max-w-7xl w-full h-full flex gap-4 ">
        <div className="flex-[1] h-full flex flex-col gap-10 sticky  top-[170px]">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm lg:text-xl font-bold text-gray-500">Product Categories</h2>

            {error ? (
              <p style={{ color: "red" }}>Something went wrong.</p>
            ) : loading ? (
              "Loading"
            ) : (
              data?.map((item) => (
                <div className="flex gap-2" key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    value={item.id}
                    onChange={handleChange}
                  />
                  <label className="capitalize text-xs lg:text-xl text-gray-500" htmlFor={item.id}>
                    {item.attributes.title}
                  </label>
                </div>
              ))
            )}
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xs lg:text-xl font-bold text-gray-500">Filter by Price</h2>
            <div className="flex gap-2">
              <span className="capitalize text-xs text-gray-500">0</span>
              <input className="w-24 lg:w-40  "
                type="range"
                min={0}
                max={500}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span className="capitalize text-xs  text-gray-500">500</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xs lg:text-xl font-bold text-gray-500">Sort by</h2>
            <div className="flex gap-2">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc" className="capitalize text-xs lg:text-lg text-gray-500">Price (Lowest first)</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="desc" className="capitalize text-xs lg:text-lg text-gray-500">Price (Highest first)</label>
            </div>
          </div>
        </div>

        <div className="flex-[4]">
          <img
            className="w-40 sm:w-full h-auto md:h-96  object-cover mb-12"
            src={headerImg[catId - 1]}
            alt=""
          />

          <List
            catIds={[catId]}
            maxPrice={maxPrice}
            sort={sort}
            selectedSubCats={selectedSubCats}
            newSeason={false}
            sale={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
