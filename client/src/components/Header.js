import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import {
  FaSearch,
  FaRegUserCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  Switch,
  Dropdown,
  Space,
  Modal,
  Form,
  Input,
  Button,
} from "antd";
import icon from "../images/icon.png";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Filter1 from "./Filter1";
import Filter2 from "./Filter2";
import Filter3 from "./Filter3";
import { toast } from "react-toastify";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import {
  login,
  register,
} from "../features/users/userSlice";
import Login from "./Login";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector(
    (state) => state.auth.user
  );
  const userSchema = Yup.object().shape(
    {
      email: Yup.string()
        .email("Email should be valid")
        .required("Yêu cầu nhập Email"),
      name: Yup.string().required(
        "Yêu cầu nhập tên"
      ),
      mobile: Yup.string().required(
        "Yêu cầu nhập số điện thoại"
      ),
      address: Yup.string().required(
        "Yêu cầu nhập địa chỉ"
      ),
      password: Yup.string().required(
        "Yêu cầu nhập mật khẩu"
      ),
    }
  );
  const [cfpassword, setCfpassword] =
    useState("");
  const dropdownContainerRef =
    useRef(null);
  const items =
    userState === null
      ? [
          {
            label: (
              <span
                onClick={() =>
                  handleMenuClick(
                    "register"
                  )
                }
                style={{
                  display: "block",
                  width: "100%",
                }}>
                Đăng ký
              </span>
            ),
            key: "0",
          },
          {
            label: (
              <span
                onClick={() =>
                  handleMenuClick(
                    "login"
                  )
                }
                style={{
                  display: "block",
                  width: "100%",
                }}>
                Đăng nhập
              </span>
            ),
            key: "1",
          },
        ]
      : [
          {
            label: (
              <span
                onClick={() => {
                  sessionStorage.removeItem(
                    "user"
                  );
                  window.location.reload();
                }}
                style={{
                  display: "block",
                  width: "100%",
                }}>
                Đăng xuất
              </span>
            ),
            key: "0",
          },
        ];

  const [
    isModalVisible,
    setIsModalVisible,
  ] = useState(false);
  const [modalType, setModalType] =
    useState(null);

  const handleMenuClick = (type) => {
    setModalType(type);
    setIsModalVisible(true);
    formik.resetForm();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setModalType(null);
    formik.resetForm();
  };

  const [
    activeComponent,
    setActiveComponent,
  ] = useState("Filter1");
  const [name, setName] =
    useState("Giao lưu");
  const [toggle, setToggle] =
    useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

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
    }
  };

  useEffect(() => {
    document.addEventListener(
      "mousedown",
      handleClickOutside
    );
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const click1 = () => {
    setActiveComponent("Filter3");
    setName("Giao lưu");
  };

  const click2 = () => {
    setActiveComponent("Filter2");
    setName("Sân đấu");
  };
  const click3 = () => {
    setActiveComponent("Filter1");
    setName("Trao đổi");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      mobile: "",
      address: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      if (modalType === "register") {
        if (
          values.password === cfpassword
        ) {
          dispatch(register(values));
          setTimeout(() => {
            formik.resetForm();
            setCfpassword("");
          }, 300);
        } else {
          toast.warning(
            "Mật khẩu không trùng khớp"
          );
        }
      }
    },
  });

  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "100%",
          padding: "30px",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99999,
          background: "white",
          boxShadow:
            "silver 0px 5px 10px",
        }}
        className="header">
        <div className="d-flex align-items-center justify-content-between px-3">
          <div className="d-flex justify-content-between">
            <Link to="/">
              <div
                style={{
                  color: "white",
                }}
                className="d-flex gap-2">
                <span className="text-black fs-4">
                  GiaoLưuCầuLông
                </span>
                <img
                  src={icon}
                  style={{
                    width: "40px",
                  }}
                  alt="icon"
                />
              </div>
            </Link>
          </div>
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              height: "100%",
              position: "relative",
            }}>
            <div className="d-flex align-items-center justify-content-center gap-2">
              <div
                style={{
                  background: "white",
                  width: "max-content",
                  display: "flex",
                  alignItems: "center",
                  padding: "2px 10px",
                  borderRadius: "50px",
                  border: "none",
                  height: "50px",
                  outline: "none",
                  width: "600px",
                  justifyContent:
                    "space-between",
                  boxShadow:
                    "#ccc 1px 1px 10px",
                }}>
                <input
                  type="text"
                  style={{
                    outline: "none",
                    border: "none",
                    width: "100%",
                    flex: 1,
                  }}
                  placeholder="Nhập địa điểm"
                  className="px-3"
                />
                <div
                  style={{
                    flex: 1,
                    borderLeft:
                      "2px solid silver",
                    paddingLeft: "20px",
                  }}
                  className=" d-flex">
                  <span
                    className="fs-5 block-inline"
                    onClick={() =>
                      setToggle(true)
                    }>
                    {name}
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
                      background:
                        "white",
                      borderRadius:
                        "20px",
                      left: 0,
                      right: "140px",
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
                          }}
                          onClick={
                            click1
                          }>
                          <FaMapMarkerAlt />
                          <div className="d-flex flex-column justify-content-center">
                            <span>
                              Giao lưu
                            </span>
                            <span>
                              Tìm ca
                              giao lưu
                              cầu lông
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
                          }}
                          onClick={
                            click2
                          }>
                          <FaMapMarkerAlt />
                          <div className="d-flex flex-column justify-content-center">
                            <span>
                              Sân đấu
                            </span>
                            <span>
                              Tìm sân
                              cầu lông
                              gần bạn
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
                          }}
                          onClick={
                            click3
                          }>
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
                <div
                  style={{
                    background: "red",
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                  }}
                  className="d-flex justify-content-center align-items-center fs-5 text-white">
                  <FaSearch />
                </div>
              </div>
              <div>
                <Link to="post">
                  <button
                    className="btn btn-danger fs-5"
                    style={{
                      borderRadius:
                        "50px",
                      padding:
                        "8px 20px",
                    }}>
                    Đăng tin
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <div className="d-flex align-items-center gap-3">
              <span className="fs-5">
                Ẩn bảng đồ
              </span>
              <Switch />
            </div>
            <div>
              <Dropdown
                menu={{ items }}
                getPopupContainer={() =>
                  dropdownContainerRef.current
                }
                trigger={["click"]}>
                <a
                  onClick={(e) =>
                    e.preventDefault()
                  }>
                  <Space
                    style={{
                      border:
                        "1px solid black",
                      padding:
                        "8px 20px",
                      borderRadius:
                        "50px",
                      display: "flex",
                      color: "black",
                      alignItems:
                        "center",
                    }}>
                    <FaRegUserCircle className="fs-4" />
                    {userState !== null
                      ? userState?.name
                      : "Tài khoản"}
                  </Space>
                </a>
              </Dropdown>
              <div
                ref={
                  dropdownContainerRef
                }
                style={{
                  zIndex: 9999999999999,
                }}
              />
              <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                centered
                style={{
                  top: 0,
                  zIndex: 10000,
                }}>
                <form
                  style={{
                    zIndex: 100000000000,
                  }}
                  onSubmit={
                    formik.handleSubmit
                  }>
                  {modalType ===
                    "register" && (
                    <>
                      <div className="d-flex flex-column justify-content-center align-item-center">
                        <div
                          style={{
                            width:
                              "100%",
                            display:
                              "flex",
                            justifyContent:
                              "center",
                          }}>
                          <img
                            src={icon}
                            width={70}
                            alt=""
                          />
                        </div>
                        <span className="text-center fs-2 fw-bold mt-2">
                          Đăng ký tài
                          khoản mới
                        </span>
                        <p className="text-center">
                          Đã có tài
                          khoản ?{" "}
                          <span
                            style={{
                              color:
                                "red",
                            }}
                            onClick={() =>
                              handleMenuClick(
                                "login"
                              )
                            }>
                            Đăng nhập
                          </span>
                        </p>
                      </div>
                      <div className="form-group">
                        <Input
                          name="email"
                          className="p-3 mb-3"
                          placeholder="Email"
                          value={
                            formik
                              .values
                              .email
                          }
                          onChange={
                            formik.handleChange
                          }
                          onBlur={
                            formik.handleBlur
                          }
                        />
                        {formik.errors
                          .email &&
                          formik.touched
                            .email && (
                            <div className="text-danger">
                              {
                                formik
                                  .errors
                                  .email
                              }
                            </div>
                          )}
                      </div>
                      <div className="form-group">
                        <Input
                          name="name"
                          className="p-3 mb-3"
                          placeholder="Nhập tên"
                          value={
                            formik
                              .values
                              .name
                          }
                          onChange={
                            formik.handleChange
                          }
                          onBlur={
                            formik.handleBlur
                          }
                        />
                        {formik.errors
                          .name &&
                          formik.touched
                            .name && (
                            <div className="text-danger">
                              {
                                formik
                                  .errors
                                  .name
                              }
                            </div>
                          )}
                      </div>
                      <div className="form-group">
                        <Input
                          name="mobile"
                          className="p-3 mb-3"
                          placeholder="Nhập số điện thoại"
                          value={
                            formik
                              .values
                              .mobile
                          }
                          onChange={
                            formik.handleChange
                          }
                          onBlur={
                            formik.handleBlur
                          }
                        />
                        {formik.errors
                          .mobile &&
                          formik.touched
                            .mobile && (
                            <div className="text-danger">
                              {
                                formik
                                  .errors
                                  .mobile
                              }
                            </div>
                          )}
                      </div>
                      <div className="form-group">
                        <Input
                          name="address"
                          className="p-3 mb-3"
                          placeholder="Nhập địa chỉ"
                          value={
                            formik
                              .values
                              .address
                          }
                          onChange={
                            formik.handleChange
                          }
                          onBlur={
                            formik.handleBlur
                          }
                        />
                        {formik.errors
                          .address &&
                          formik.touched
                            .address && (
                            <div className="text-danger">
                              {
                                formik
                                  .errors
                                  .address
                              }
                            </div>
                          )}
                      </div>
                      <div className="form-group">
                        <Input.Password
                          name="password"
                          className="p-3 mb-3"
                          placeholder="Password"
                          value={
                            formik
                              .values
                              .password
                          }
                          onChange={
                            formik.handleChange
                          }
                          onBlur={
                            formik.handleBlur
                          }
                        />
                        {formik.errors
                          .password &&
                          formik.touched
                            .password && (
                            <div className="text-danger">
                              {
                                formik
                                  .errors
                                  .password
                              }
                            </div>
                          )}
                      </div>
                      <div className="form-group">
                        <Input.Password
                          name="cfpassword"
                          className="p-3 mb-3"
                          placeholder="Confirm Password"
                          value={
                            cfpassword
                          }
                          onChange={(
                            e
                          ) =>
                            setCfpassword(
                              e.target
                                .value
                            )
                          }
                        />
                      </div>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                          width: "100%",
                        }}
                        className="p-4">
                        {modalType ===
                        "register"
                          ? "Đăng ký"
                          : "Đăng nhập"}
                      </Button>
                    </>
                  )}
                </form>
                {modalType ===
                  "login" && (
                  <Login
                    handleMenuClick={
                      handleMenuClick
                    }
                  />
                )}
              </Modal>
            </div>
          </div>
        </div>

        {location.pathname !==
          "/post" && (
          <>
            {activeComponent ===
              "Filter1" && <Filter1 />}
            {activeComponent ===
              "Filter2" && <Filter2 />}
            {activeComponent ===
              "Filter3" && <Filter3 />}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
