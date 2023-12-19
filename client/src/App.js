import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import ListProductPage from "./Pages/ListProductPage";
import ListPharmacyPage from "./Pages/ListPharmacyPage";
import { useLayoutEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from "./Pages/ErrorPage";

function App() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="pt-16 md:pt-20">
        <Routes>
          <Route exact path="/" element={<Navigate to={"/home"} />}  />
          <Route exact path="/home" element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/products" element={<ListProductPage />} />
          <Route path="/pharmacies" element={<ListPharmacyPage />} />
          {/* <Route path="/product/:id" element={<ProductPage product={product} />} /> */}
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
          <ToastContainer />
    </div>

  );
}

export default App;
