import { Box } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Modal} from "../";
import "./App.css";
import { dataPrice } from "../orderride/dataPrice";


function App() {
  const [data] = useState(dataPrice)
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path='/modal/:id' element={<Modal data={data}/> }/>
      </Routes>
     
    </Box>
  );
}

export default App;
