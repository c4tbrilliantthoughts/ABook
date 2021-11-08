import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddContact";
import UpdateContact from "./components/UpdateContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/" component={() => <Footer />} />
      <Route exact path="/add" component={() => <AddPost />} />
      <Route exact path="/edit/:id" component={() => <UpdateContact />} />
    </div>
  );
};
export default App;
