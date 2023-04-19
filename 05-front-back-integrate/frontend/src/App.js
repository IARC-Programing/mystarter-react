import React, { useState, useEffect } from "react";
import { Card, CardContent, Input } from "@mui/joy";
import axios from "axios";
import _ from "lodash";

import Footer from "./Components/Footer";
import Topbar from "./Components/Topbar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user")
      .then((res) => {
        setUsers(res?.data?.rows);
        console.log("User ", res?.data?.rows);
      })
      .catch((error) => {
        console.error("Error", error?.message);
      });

    return () => {};
  }, []);

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
              {_.map(users, (eachUser, index) => (
                <div>
                  {index + 1}. - {eachUser?.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
