import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./page/Homepage/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from "./page/create/Create";
import Update from "./page/update/Update";
import Read from "./page/Readbook/Read";
import Login from "./page/Login/Login";
import PrivateRoute from "./components/AdminRoute/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/read/:_id" element={<Read />} />
        <Route path="/Login" element={<Login />} />
        
        {/* Use PrivateRoute within a Route */}
        <Route path="/create" element={<PrivateRoute element={<Create/>} />} />
        <Route path="/update/:_id" element={<PrivateRoute element={<Update/>} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
