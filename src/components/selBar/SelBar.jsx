import React from "react";

export const SelBar = ({
  data,
  loading,
  error,
  catIds,
  catIdLoading,
  catIdError,
  maxPrice,
  setMaxPrice,
  setSort,
  handleChange,
  handleChangeCat,
}) => {
  return (
    <>
      <div className="flex gap-4 pr-4">
        {error ? (
          <p style={{ color: "red" }}>Something went wrong.</p>
        ) : loading ? (
          "Loading"
        ) : data?.length == 1 ? (
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-500 capitalize">
            {data[0]?.attributes.title}
          </h1>
        ) : (
          <></>
        )}
      </div>

      <div className="flex gap-4 pr-4">
        {catIdError ? (
          <p style={{ color: "red" }}>Something went wrong.</p>
        ) : catIdLoading ? (
          "Loading"
        ) : (
          <div className="flex flex-col gap-2">
            {catIds?.map((item) => (
              <div className="flex gap-2" key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleChangeCat}
                />
                <label
                  className="capitalize text-xs lg:text-sm font-bold text-gray-500"
                  htmlFor={item.id}
                >
                  {item.attributes.title}
                </label>
              </div>
            ))}
          </div>
        )}

        {error ? (
          <p style={{ color: "red" }}>Something went wrong.</p>
        ) : loading ? (
          "Loading"
        ) : data?.length == 1 ? (
          <> </>
        ) : (
          <div className="flex flex-col gap-2">
            {data?.map((item) => (
              <div className="flex gap-2" key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleChangeCat}
                />
                <label
                  className="capitalize text-xs lg:text-sm font-bold text-gray-500"
                  htmlFor={item.id}
                >
                  {item.attributes.title}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 pr-4">
        <h2 className="text-xs lg:text-xl font-bold  text-gray-500">Filter by Price</h2>
        <div className="flex gap-2">
          <span className="capitalize text-xs text-gray-500">0</span>
          <input className="w-24 lg:w-40"
            type="range"
            min={0}
            max={500}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <span className="capitalize text-xs text-gray-500">{500}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xs lg:text-xl font-bold  text-gray-500">Sort by</h2>
        <div className="flex gap-2">
          <input
            type="radio"
            id="asc"
            value="asc"
            name="price"
            onChange={(e) => setSort("asc")}
          />
          <label className="capitalize  text-gray-500 text-xs lg:text-lg" htmlFor="asc">
            Price (Lowest first)
          </label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            id="desc"
            value="desc"
            name="price"
            onChange={(e) => setSort("desc")}
          />
          <label className="capitalize text-xs lg:text-lg text-gray-500" htmlFor="desc">
            Price (Highest first)
          </label>
        </div>
      </div>
    </>
  );
};
