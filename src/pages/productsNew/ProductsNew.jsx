import React from "react";
import "../../index.css";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { SelBar } from "../../components/selBar/SelBar";

const ProductsNew = () => {
  //const catId = parseInt(useParams().id); //useParams.is is a string

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [selectedCatIds, setSelectedCatIds] = useState([]);
 

  const handleChange = (e) => {
    const { value, checked } = e.target;

    //const isChecked = e.target.checked
    setSelectedSubCats(
      checked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item != value)
    );
  };

  const handleChangeCat = (e) => {
    const { value, checked } = e.target;

    //const isChecked = e.target.checked
    setSelectedCatIds(
      checked
        ? [...selectedCatIds, value]
        : selectedCatIds.filter((item) => item != value)
    );
  };

  const { data, loading, error } = useFetch(`/sub-categories?`); //get subcateories of a category (men or women)
  //!loading && console.log(data);
  !loading && console.log(  data);

  const {
    data: catIds,
    loading: catIdLoading,
    error: catIdError,
  } = useFetch(`/categories?`); //get subcateories of a category (men or women)
  //!loading && console.log(data);
  !catIdLoading && console.log(catIds);
  console.log(selectedSubCats)

  return (
    <div className="bg-gray-100 w-screen flex justify-center  px-6 py-16 ">
      <div className="max-w-7xl w-full h-full flex justify-between">
        <div className="flex-[1] flex flex-col gap-10 sticky h-full top-[180px] ">
          <SelBar
            data={data}
            loading={loading}
            error={error}
            catIds={catIds}
            catIdLoading={catIdLoading}
            catIdError={catIdError}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            setSort={setSort}
            handleChange={handleChange}
            handleChangeCat ={handleChangeCat}
          />
        </div>

        <div className="flex-[4]">
          <img
            className="w-40 sm:w-full h-auto md:h-96  object-cover mb-12"
            src="https://images.pexels.com/photos/6136879/pexels-photo-6136879.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
          />

          <List
            catIds={selectedCatIds}
            maxPrice={maxPrice}
            sort={sort}
            selectedSubCats={selectedSubCats}
            newSeason={true}
            sale={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsNew;
