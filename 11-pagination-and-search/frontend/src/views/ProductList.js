import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { Select, Option } from "@mui/joy";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState(5);

  const getAllProducts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/product?size=${size}`)
      .then((res) => {
        setProducts(res?.data?.rows);
        console.log("Products ", res?.data?.rows);
      })
      .catch((error) => {
        console.error("Error", error?.message);
      });
  };

  useEffect(() => {
    getAllProducts();
    return () => {};
  }, [size]);

  return (
    <div className='flex flex-wrap justify-center mt-4'>
      <div className='w-full text-center'>
        <h1 className='font-semibold text-2xl my-2'>รายการสินค้าทั้งหมด</h1>
      </div>
      <div className='w-full lg:w-3/4'>
        <div className='flex justify-end my-2'>
          <div>
            <div>จำนวนสินค้าต่อหน้า</div>
            <Select
              value={size}
              onChange={(event, newValue) => setSize(newValue)}
            >
              <Option value={5}>5</Option>
              <Option value={10}>10</Option>
              <Option value={15}>15</Option>
              <Option value={20}>20</Option>
            </Select>
          </div>
        </div>
        <div className='container'>
          <div className='grid grid-cols-3 gap-2'>
            {_.map(products, (product) => (
              <div key={product?._id} className='border rounded-md p-2'>
                <img src='https://placehold.co/200' alt={product?.name} />
                <div>
                  <h3>{product?.name}</h3>
                  <p>{product?.description}</p>
                  <p>{product?.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
