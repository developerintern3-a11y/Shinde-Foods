import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import HeroSection from "./Components/HomePage/HeroSection";
import Footer from "./Components/Common/Fotter";
import CompanyIntro from "./Components/HomePage/Companyoverview";
import FeaturedProducts from "./Components/HomePage/Featured";
import AboutUs from "./Components/Page/AboutUs";
import Contactus from "./Components/Page/ContactUs";
import Recipies from "./Components/Page/Recipies";
import GetProducts from "./Components/Page/GetProducts";
import FoodServicesPage from "./Components/Page/FoodServices";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <CompanyIntro />
              <FeaturedProducts />
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<AboutUs/>} />

          <Route path="/Recipies" element={<Recipies/>} />
        <Route path="/GetProducts" element={<GetProducts/>} />
        {/* Contact Page */}
        <Route path="/contact" element={<Contactus />} />
        <Route path="/foodservices" element={<FoodServicesPage />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;