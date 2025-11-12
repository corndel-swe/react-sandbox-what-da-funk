import "./App.css";

import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import AlbumGallery from "./pages/AlbumGallery/AlbumGallery";
import AlbumInfo from "./pages/AlbumInfo/AlbumInfo";
import Footer from "./components/Footer/Footer";

import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
  });

  const handleSubmit = (event) => {};

  return (
    <Router>
      <div className="app">
        <Nav
          userName={`${user.firstName} ${user.lastName}`}
          handleSubmit={handleSubmit}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/albums"
            element={
              <AlbumGallery key="albums" albumsArr={[]} title={"All Albums"} />
            }
          />
          <Route
            path="/album/:albumId"
            element={<AlbumInfo albumsArr={[]} />}
          />
          <Route
            path="/albums/rated"
            element={
              <AlbumGallery key="rated" albumsArr={[]} title={"Rated Albums"} />
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
