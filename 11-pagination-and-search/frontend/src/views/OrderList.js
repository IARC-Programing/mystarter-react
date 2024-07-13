import React, { useState, useEffect } from "react";
import { Button, LinearProgress, Table } from "@mui/joy";
import axios from "axios";
import { Link } from "react-router-dom";
import _ from "lodash";

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [isReady, setIsReady] = useState(false);

  const getAllOrder = () => {
    setIsReady(false);
    axios
      .get(`${process.env.REACT_APP_API_URL}/order`)
      .then((res) => {
        console.log("res.data", res.data);
        setOrders(res?.data?.rows);
        setIsReady(true);
        console.log("Order ", res?.data?.rows);
      })
      .catch((error) => {
        console.error("Error", error?.message);
      });
  };

  useEffect(() => {
    getAllOrder();
    return () => {};
  }, []);

  const handleDeleteOrder = (orderId) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/order/${orderId}`)
      .then((res) => {
        getAllOrder();
      })
      .catch((error) => {
        alert(error?.message);
        console.error("Error", error?.message);
      });
  };

  if (!isReady) {
    return (
      <div>
        <LinearProgress />
      </div>
    );
  }

  return (
    <div>
      <div className='min-h-screen'>
        <div className='flex justify-center  flex-wrap'>
          <div className='w-full my-4'>
            <h1 className='font-bold text-2xl text-center'>รายการออเดอร์</h1>
          </div>
          <div className='lg:w-3/4'>
            <div>
              <Table>
                <thead>
                  <tr>
                    <th>ลำดับที่</th>
                    <th>วันที่ซื้อ</th>
                    <th>สินค้า</th>
                    <th>พนักงานขาย</th>
                    <th>ดำเนินการ</th>
                  </tr>
                </thead>
                {_.map(orders, (each, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{each?.createdAt}</td>
                    <td>
                      {_.map(each?.products, (eachProduct, prodIndex) => (
                        <div>
                          {prodIndex + 1}. {eachProduct?.product?.name} x{" "}
                          {eachProduct?.quantity}
                        </div>
                      ))}
                    </td>
                    <td>{each?.user?.name}</td>
                    <td>
                      <Link to={`/order/detail/${each?._id}`}>
                        <Button>รายละเอียด</Button>
                      </Link>
                      <Button
                        color='danger'
                        onClick={() => handleDeleteOrder(each?._id)}
                      >
                        ลบ
                      </Button>
                    </td>
                  </tr>
                ))}
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
