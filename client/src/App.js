import "./App.css";
import { useState} from "react";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import Footer from "./component/footer/Footer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Property from "./component/property/Property";
import City from "./component/search/City";
import News from "./component/news/News";
import ContactUs from "./component/contact/ContactUs";
import Privacy from "./component/Privacy/Privacy";
import AboutUs from "./component/About/AboutUs";
import Signin from "./component/Admin/Signin";
import CreateListings from "./component/Admin/CreateListings";
import Listing from "./component/Pages/Listing";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/property" element={<Property />} />
          <Route path="/search" element={<City />} />
          <Route path="/news" element={<News />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route
            path="/admin"
            element={<Signin setIsLoggedIn={setIsLoggedIn}/>}
          />
          <Route
            path="/listings"
            element={isLoggedIn ? <CreateListings setIsLoggedIn={setIsLoggedIn}/> : <Navigate to="/admin" />}
          />
          <Route path="/listing/:listingId" element={<Listing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
