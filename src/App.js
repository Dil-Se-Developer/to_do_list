import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import Home from "./components/Layout/Home";
import AddContact from "./components/Layout/AddContact";
import EditContact from "./components/Layout/EditContact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="addcontact" element={<AddContact />}></Route>
        <Route path="/editcontact/:id" element={<EditContact />}></Route>
      </Routes>
    </>
  );
}

export default App;
