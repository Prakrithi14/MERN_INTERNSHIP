import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Testing from "./Components/Testing";
import Firstapp from "./Components/Firstapp";
import Register from "./Components/MUI/Register";
import Arrowfunction from "./Components/ES7/Arrowfunction";
import BasicTable from "./Components/MUI/Basictable";
import ArrayMethod from "./Components/ES7/ArrayMethod";
import SpreadOperator from "./Components/ES7/SpreadOperator";
import Newcard from "./Components/MUI/Newcard";
import MUIAppbar from "./Components/MUI/MUIAppbar";
import Destructuring from "./Components/ES7/Destructuring";
import ImportModule from "./Components/ES7/ImportModule";
import TernaryOperator from "./Components/ES7/TernaryOperator";
import Props from "./Components/ES7/Props";
import Hookusestate from "./Components/Hook/Hookusestate";


function App() {
  return(
   <div>
     <BrowserRouter>
     <MUIAppbar/>
        <Routes>

          <Route path="/Testing" element={<Testing/>}/>
          <Route path="/" element={<Register/>}/>
          <Route path="/Arrowfunction" element={<Arrowfunction/>}/>
          <Route path="/BasicTable" element={<BasicTable/>}/>
          <Route path="/ArrayMethod" element={<ArrayMethod/>}/>
          <Route path="/SpreadOperator" element={<SpreadOperator/>}/>
          <Route path="/Newcard" element={<Newcard/>}/>
          <Route path="/MUIAppbar" element={<MUIAppbar/>}/>
          <Route path="/Destructuring" element={<Destructuring/>}/>
          <Route path="/ImportModule" element={<ImportModule/>}/>
          <Route path="/TernaryOperator" element={<TernaryOperator/>}/>
          <Route path="/Hookusestate" element={<Hookusestate/>}/>
          <Route path="/Props" element={<Props name="Prakrithi"/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  )
}
export default App;