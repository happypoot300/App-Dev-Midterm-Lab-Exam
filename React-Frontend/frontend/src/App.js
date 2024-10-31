//css
import "./App.css";
//route
import { Route, Routes } from "react-router-dom";
//pages
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import ViewBook from "./pages/ViewBook";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddBook" element={<AddBook />} />
        <Route path="/EditBook/:id" element={<EditBook />} />
        <Route path="/ViewBook/:id" element={<ViewBook />} />
      </Routes>
    </div>
  );
}
