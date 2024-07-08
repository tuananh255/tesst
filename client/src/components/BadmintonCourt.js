import React, {
  useEffect,
} from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { BsCalendar2HeartFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product";
import {
  Col,
  Container,
  Row,
} from "react-bootstrap";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { getAllPost } from "../features/post/postSlice";
const BadmintonCourt = ({ idName }) => {
  const data = [
    {
      id: "1",
      type: "traodoi",
      image:
        "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "70.000 - 100.000",
      name: "Tuyển giao lưu 1",
      address:
        "Sân THCS Thanh Xuân Nam - Cuối ngõ 214 Nguyễn Xiển, P. Thanh Xuân Nam, Q. Thanh Xuân, Hà Nội",
      city: "Hà Nội",
      calendarNow:
        "02/07/2024, 19:30 - 19:30",
      calendar:
        "Lặp lại hàng tuần (T3, T5, CN)",
      apply: "3 người (Nam)",
      level: "TBK",
      hirePrice: "80.000",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      user: {
        image: <FaRegUserCircle />,
        username: "Nguyen Van A",
        numberphone: "098765432",
        link: "https://docs.google.com/spreadsheets/d/1ybB9nrTB6TEFSFCxYtuFCZaHj1zyHQB2lO2LSNHpwe8/edit?gid=0#gid=0",
      },
    },
    {
      id: "2",
      type: "sandau",
      image:
        "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "100.000",
      name: "Tuyển giao lưu 2",
      address:
        "Sân THCS Thanh Xuân Nam - Đà Nẵng",
      city: "Đà Nẵng",
      calendarNow:
        "02/07/2024, 19:30 - 19:30",
      calendar:
        "Lặp lại hàng tuần (T3, T5, CN)",
      apply: "1 người (Nữ)",
      level: "TBK",
      hirePrice: "80.000",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      user: {
        image: <FaRegUserCircle />,
        username: "Nguyen Van B",
        numberphone: "098765432",
        link: "https://docs.google.com/spreadsheets/d/1ybB9nrTB6TEFSFCxYtuFCZaHj1zyHQB2lO2LSNHpwe8/edit?gid=0#gid=0",
      },
    },
    {
      id: "3",
      type: "giaoluu",
      image:
        "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "500.000",
      name: "Tuyển giao lưu 3",
      address:
        "Sân THCS Thanh Xuân Nam - Cuối ngõ 214 Nguyễn Xiển, Sài Gòn",
      city: "Đà Nẵng",
      calendarNow:
        "02/07/2024, 19:30 - 19:30",
      calendar:
        "Lặp lại hàng tuần (T3, T5, CN)",
      apply: "3 người (Nam)",
      level: "TBK",
      hirePrice: "80.000",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      user: {
        image: <FaRegUserCircle />,
        username: "Nguyen Van C",
        numberphone: "098765432",
        link: "https://docs.google.com/spreadsheets/d/1ybB9nrTB6TEFSFCxYtuFCZaHj1zyHQB2lO2LSNHpwe8/edit?gid=0#gid=0",
      },
    },
    {
      id: "4",
      type: "traodoi",
      image:
        "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "70.000 - 100.000",
      name: "Tuyển giao lưu 1",
      address:
        "Sân THCS Thanh Xuân Nam - Cuối ngõ 214 Nguyễn Xiển, P. Thanh Xuân Nam, Q. Thanh Xuân, Hà Nội",
      city: "Hà Nội",
      calendarNow:
        "02/07/2024, 19:30 - 19:30",
      calendar:
        "Lặp lại hàng tuần (T3, T5, CN)",
      apply: "3 người (Nam)",
      level: "TBK",
      hirePrice: "80.000",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      user: {
        image: <FaRegUserCircle />,
        username: "Nguyen Van A",
        numberphone: "098765432",
        link: "https://docs.google.com/spreadsheets/d/1ybB9nrTB6TEFSFCxYtuFCZaHj1zyHQB2lO2LSNHpwe8/edit?gid=0#gid=0",
      },
    },
    {
      id: "5",
      type: "sandau",
      image:
        "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "100.000",
      name: "Tuyển giao lưu 2",
      address:
        "Sân THCS Thanh Xuân Nam - Đà Nẵng",
      city: "Đà Nẵng",
      calendarNow:
        "02/07/2024, 19:30 - 19:30",
      calendar:
        "Lặp lại hàng tuần (T3, T5, CN)",
      apply: "1 người (Nữ)",
      level: "TBK",
      hirePrice: "80.000",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      user: {
        image: <FaRegUserCircle />,
        username: "Nguyen Van B",
        numberphone: "098765432",
        link: "https://docs.google.com/spreadsheets/d/1ybB9nrTB6TEFSFCxYtuFCZaHj1zyHQB2lO2LSNHpwe8/edit?gid=0#gid=0",
      },
    },
    {
      id: "6",
      type: "giaoluu",
      image:
        "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "500.000",
      name: "Tuyển giao lưu 3",
      address:
        "Sân THCS Thanh Xuân Nam - Cuối ngõ 214 Nguyễn Xiển, Sài Gòn",
      city: "Sài Gòn",
      calendarNow:
        "02/07/2024, 19:30 - 19:30",
      calendar:
        "Lặp lại hàng tuần (T3, T5, CN)",
      apply: "3 người (Nam)",
      level: "TBK",
      hirePrice: "80.000",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      user: {
        image: <FaRegUserCircle />,
        username: "Nguyen Van C",
        numberphone: "098765432",
        link: "https://docs.google.com/spreadsheets/d/1ybB9nrTB6TEFSFCxYtuFCZaHj1zyHQB2lO2LSNHpwe8/edit?gid=0#gid=0",
      },
    },
  ];
  const filterType = data.filter(
    (item) => item.type === idName
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPost());
  }, []);
  const postAll = useSelector(
    (state) => state.post.post.Posts
  );
  return (
    <div>
      <Row>
        <Col sm={8}>
          <div className="d-flex flex-column gap-3">
            {idName === "traodoi" ? (
              <>
                <strong>
                  Một vài sản phẩm
                </strong>

                <Product />
              </>
            ) : (
              ""
            )}

            <strong>
              Tìm thấy {postAll?.length}{" "}
              hoạt động
            </strong>

            {postAll?.map(
              (inf, index) => {
                return (
                  <div
                    style={{
                      background:
                        "white",
                      padding: "10px",
                      borderRadius:
                        "20px",
                      width: "100%",
                      boxShadow:
                        "#ccc 1px 1px 10px",
                    }}
                    key={inf?._id}>
                    <div className="d-flex gap-3">
                      <Link
                        to={`/badminton/${inf?._id}`}>
                        <div
                          style={{
                            position:
                              "relative",
                          }}>
                          <img
                            src={
                              inf
                                ?.images[0]
                                ?.url
                            }
                            alt=""
                            style={{
                              width:
                                "300px",
                              borderRadius:
                                "20px",
                            }}
                          />
                          <button
                            style={{
                              position:
                                "absolute",
                              right:
                                "10px",
                              top: "10px",
                              borderRadius:
                                "20px",
                            }}
                            className="btn btn-danger">
                            {
                              inf?.priceNam
                            }
                          </button>
                        </div>
                      </Link>

                      <div className="d-flex flex-column justify-content-evenly">
                        <span>
                          Đang xác định
                          vị trí của bạn
                        </span>
                        <Link
                          to={`/badminton/${inf?._id}`}>
                          <h3>
                            {inf?.title}
                          </h3>
                        </Link>
                        <div>
                          <FaMapMarkerAlt />
                          <span>
                            {
                              inf?.location
                            }
                          </span>
                        </div>
                        <div>
                          <FaCalendarAlt />
                          <span>
                            {inf
                              ?.dateStart
                              ?.date +
                              " " +
                              inf
                                ?.dateStart
                                ?.timeStart +
                              " " +
                              inf
                                ?.dateStart
                                ?.timeEnd}
                          </span>
                        </div>
                        <div>
                          <BsCalendar2HeartFill />
                          <span>
                            {inf?.laplai ===
                            1
                              ? "Hàng ngày"
                              : "Hàng tuần"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </Col>
        <Col sm={4}>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1720131593393!5m2!1svi!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BadmintonCourt;
