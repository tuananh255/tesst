import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import bgStart from "../images/bg.jpg";
import icon from "../images/icon.png";
import {
  FaSearch,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Start = () => {
  const [toggle, setToggle] =
    useState(false);
  const [
    toggleMenuCity,
    setToggleMenuCity,
  ] = useState(false);
  const menuRef = useRef(null);
  const menuCityRef = useRef(null);

  const handleClickOutside = (
    event
  ) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(
        event.target
      )
    ) {
      setToggle(false);
    } else if (
      menuCityRef.current &&
      menuCityRef.current.contains(
        event.target
      )
    ) {
      setToggle(false);
      setToggleMenuCity(true);
    }
  };

  const handleClickOutside2 = (
    event
  ) => {
    if (
      menuCityRef.current &&
      !menuCityRef.current.contains(
        event.target
      )
    ) {
      setToggleMenuCity(false);
    } else if (
      menuRef.current &&
      menuRef.current.contains(
        event.target
      )
    ) {
      setToggleMenuCity(false);
      setToggle(true);
    }
  };

  useEffect(() => {
    document.addEventListener(
      "mousedown",
      handleClickOutside
    );
    document.addEventListener(
      "mousedown",
      handleClickOutside2
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
      document.removeEventListener(
        "mousedown",
        handleClickOutside2
      );
    };
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgStart})`,
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
        className="d-flex flex-column justify-content-center">
        <div
          className="d-flex justify-content-between p-5"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          }}>
          <div
            style={{ color: "white" }}
            className="d-flex gap-2 justify-content-between">
            <span className="text-white fs-4">
              GiaoLưuCầuLông
            </span>
            <img
              src={icon}
              style={{ width: "40px" }}
              alt="icon"
            />
          </div>
          <div>
            <Link to="/post">
              <button
                className="btn btn-danger"
                style={{
                  borderRadius: "20px",
                }}>
                Đăng tin
              </button>
            </Link>
          </div>
        </div>
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            height: "100%",
            marginBottom: "80px",
          }}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <span
              className="text-white"
              style={{
                fontWeight: "bold",
                fontSize: "60px",
              }}>
              GiaoLuuCauLong.vn
            </span>
            <p className="text-white fs-4">
              Tìm kiếm cơ hội giao lưu
              cầu lông gần bạn
            </p>
            <div
              style={{
                background: "white",
                width: "max-content",
                display: "flex",
                alignItems: "center",
                padding: "5px",
                borderRadius: "50px",
                border: "none",
                outline: "none",
                width: "100%",
                display: "flex",
                justifyContent:
                  "space-between",
                position: "relative",
              }}>
              <input
                onClick={() =>
                  setToggleMenuCity(
                    true
                  )
                }
                type="text"
                defaultValue="Hà Nội"
                style={{
                  outline: "none",
                  border: "none",
                  width: "100%",
                  flex: 1,
                }}
                placeholder="Nhập địa điểm"
                className="fs-5 px-3"
              />
              <div
                style={{
                  flex: 1,
                  borderLeft:
                    "2px solid #ccc",
                  paddingLeft: "20px",
                }}>
                <span
                  className="fs-5"
                  onClick={() =>
                    setToggle(true)
                  }>
                  Giao lưu
                </span>
              </div>
              {toggle && (
                <div
                  ref={menuRef}
                  style={{
                    position:
                      "absolute",
                    bottom: "-370px",
                    zIndex: 9999999999,
                    background: "white",
                    borderRadius:
                      "20px",
                    left: 0,
                    right: "0px",
                    padding: "20px",
                    boxShadow:
                      "#ccc 1px 1px 10px",
                  }}>
                  <div className="d-flex flex-column gap-3">
                    <span className="fs-4 fw-bold">
                      Loại
                    </span>
                    <Link to="/home/giaoluu">
                      <div
                        className="d-flex align-items-center gap-4"
                        style={{
                          border:
                            "1px solid #ccc",
                          padding:
                            "15px",
                          borderRadius:
                            "15px",
                        }}>
                        <FaMapMarkerAlt />
                        <div className="d-flex flex-column justify-content-center">
                          <span>
                            Giao lưu
                          </span>
                          <span>
                            Tìm ca giao
                            lưu cầu lông
                            gần bạn
                          </span>
                        </div>
                      </div>
                    </Link>
                    <Link to="/home/sandau">
                      <div
                        className="d-flex align-items-center gap-4"
                        style={{
                          border:
                            "1px solid #ccc",
                          padding:
                            "15px",
                          borderRadius:
                            "15px",
                        }}>
                        <FaMapMarkerAlt />
                        <div className="d-flex flex-column justify-content-center">
                          <span>
                            Sân đấu
                          </span>
                          <span>
                            Tìm sân cầu
                            lông gần bạn
                          </span>
                        </div>
                      </div>
                    </Link>
                    <Link to="/home/traodoi">
                      <div
                        className="d-flex align-items-center gap-4"
                        style={{
                          border:
                            "1px solid #ccc",
                          padding:
                            "15px",
                          borderRadius:
                            "15px",
                        }}>
                        <FaMapMarkerAlt />
                        <div className="d-flex flex-column justify-content-center">
                          <span>
                            Trao đổi
                          </span>
                          <span>
                            Bạn muốn
                            trao đổi
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
              {toggleMenuCity && (
                <div
                  ref={menuCityRef}
                  style={{
                    position:
                      "absolute",
                    bottom: "-300px",
                    zIndex: 9999999999,
                    background: "white",
                    borderRadius:
                      "20px",
                    left: 0,
                    right: "0px",
                    padding: "20px",
                    boxShadow:
                      "#ccc 1px 1px 10px",
                  }}>
                  <div className="d-flex flex-column gap-3">
                    <span className="fs-4 fw-bold">
                      Địa chỉ phổ biển
                    </span>
                    <div
                      className="d-flex align-items-center gap-4"
                      style={{
                        border:
                          "1px solid #ccc",
                        padding: "15px",
                        borderRadius:
                          "15px",
                      }}>
                      <FaMapMarkerAlt />
                      <div className="d-flex flex-column justify-content-center">
                        <span>
                          Hà Nội
                        </span>
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center gap-4"
                      style={{
                        border:
                          "1px solid #ccc",
                        padding: "15px",
                        borderRadius:
                          "15px",
                      }}>
                      <FaMapMarkerAlt />
                      <div className="d-flex flex-column justify-content-center">
                        <span>
                          Hồ Chí Minh
                        </span>
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center gap-4"
                      style={{
                        border:
                          "1px solid #ccc",
                        padding: "15px",
                        borderRadius:
                          "15px",
                      }}>
                      <FaMapMarkerAlt />
                      <div className="d-flex flex-column justify-content-center">
                        <span>
                          Các tỉnh thành
                          khác
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <Link to="/home">
                <div
                  style={{
                    background: "red",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                  className="d-flex justify-content-center align-items-center fs-3 text-white">
                  <FaSearch />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
