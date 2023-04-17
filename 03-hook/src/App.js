import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import Topbar from "./Components/Topbar";
import ControlCard from "./Components/ControlCard";
import { Card, CardContent, Input } from "@mui/joy";

function App() {
  const titleArray = ["banking", "logistic", "e-commerce", "computer"];
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Topbar appTitle='IARC Devboard' />
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

      {titleArray.map((titleElement) => (
        <ControlCard title={titleElement} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
