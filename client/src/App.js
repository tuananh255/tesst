import logo from "./logo.svg";
import "./App.css";
import Start from "./pages/Start";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BadmintonDetails from "./pages/BadmintonDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./pages/Post";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Footer from "./components/Footer";
import { useState } from "react";
import MyPost from "./pages/MyPost";
import PostProduct from "./pages/PostProduct";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
function App() {
  const [filterData, setFilterData] = useState(null);

  const handleFilterChange = (newFilterData) => {
    setFilterData(newFilterData);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="*"
          element={
            <>
              <Header onFilterChange={handleFilterChange} />
              <div
                style={{
                  position: "absolute",
                  top: "170px",
                  left: 0,
                  right: 0,
                }}
              >
                <Routes>
                  <Route
                    path="/home/:id"
                    element={<Home data={filterData} />}
                  />
                  <Route path="/badminton/:id" element={<BadmintonDetails />} />
                  <Route path="/product/:id" element={<ProductDetails />} />

                  <Route path="/post" element={<Post />} />
                  <Route path="/mypost" element={<MyPost />} />
                  <Route path="/post-product" element={<PostProduct />} />
                </Routes>
              </div>
              {/* <Footer /> */}
            </>
          }
        />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
