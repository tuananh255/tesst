import logo from "./logo.svg";
import "./App.css";
import Start from "./pages/Start";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BadmintonDetails from "./pages/BadmintonDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./pages/Post";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Start />}
        />
        <Route
          path="*"
          element={
            <>
              <Header />
              <div
                style={{
                  position: "absolute",
                  top: "170px",
                  left: 0,
                  right: 0,
                }}>
                <Routes>
                  <Route
                    path="/home/:id"
                    element={<Home />}
                  />
                  <Route
                    path="/badminton/:id"
                    element={
                      <BadmintonDetails />
                    }
                  />
                  <Route
                    path="/post"
                    element={<Post />}
                  />
                </Routes>
              </div>
            </>
          }
        />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
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
