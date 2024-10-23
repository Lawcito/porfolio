import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Yohoho from "./pages/Yohoho";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />}></Route>
          <Route path="work" element={<Work />}></Route>
          <Route path="youaretrolled" element={<Yohoho/>}></Route>
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
