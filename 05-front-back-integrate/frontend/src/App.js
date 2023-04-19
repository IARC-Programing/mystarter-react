import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Input,
  LinearProgress,
  Table,
} from "@mui/joy";
import axios from "axios";
import _ from "lodash";

import Footer from "./Components/Footer";
import Topbar from "./Components/Topbar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [isReady, setIsReady] = useState(false);

  const getAllUser = () => {
    setIsReady(false);
    axios
      .get("http://localhost:3001/api/user")
      .then((res) => {
        setUsers(res?.data?.rows);
        setIsReady(true);
        console.log("User ", res?.data?.rows);
      })
      .catch((error) => {
        console.error("Error", error?.message);
      });
  };

  useEffect(() => {
    getAllUser();
    return () => {};
  }, []);

  const handleDeleteUser = (userId) => {
    axios
      .delete("http://localhost:3001/api/user/" + userId)
      .then((res) => {
        getAllUser();
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
      <Topbar appTitle='IARC Devboard' />{" "}
      <div className='min-h-screen'>
        <div className='flex justify-center '>
          <div className='lg:w-3/4'>
            <Card>
              <CardContent>
                <div>Search Box</div>
                <Input
                  placeholder='Input Some Search Word'
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div>
                  You Search <span className='text-blue-500'>{searchTerm}</span>
                </div>
              </CardContent>
            </Card>
            <div>
              <h3 className='font-bold'>User List</h3>
              <Table>
                <thead>
                  <tr>
                    <th>ลำดับที่</th>
                    <th>ชื่อ</th>
                    <th>แผนก</th>
                    <th>ดำเนินการ</th>
                  </tr>
                </thead>
                {_.map(users, (eachUser, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{eachUser?.name}</td>
                    <td>{eachUser?.department}</td>
                    <td>
                      <Button
                        color='danger'
                        onClick={() => handleDeleteUser(eachUser?._id)}
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
      <Footer />
    </div>
  );
}

export default App;
