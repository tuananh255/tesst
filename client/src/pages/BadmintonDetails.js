import React, {
  useEffect,
  useState,
} from "react";
import {
  Link,
  useParams,
} from "react-router-dom";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { BsCalendar2HeartFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { SiLevelsdotfyi } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import Rating from "@mui/material/Rating";
import FeedBack from "../components/FeedBack";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { getPost } from "../features/post/postSlice";
const BadmintonDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPost(id));
  }, []);
  const post = useSelector(
    (state) =>
      state.post.getPost.getPost
  );
  console.log(post);
  const [feedBack, setFeedBack] =
    useState(false);
  const [clickFB, setClickFB] =
    useState(false);
  const dataFeedback = [
    {
      _id: "1",
      name: "Hoa",
      rating: 4,
      numberphone: "1203123123",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      userId:
        "6651a52825cdf87641678c4e",
      badmintonId: "2",

      __v: 0,
    },
    {
      _id: "2",
      name: "hoa",
      rating: 4,
      numberphone: "123123",
      review: "tốt",
      userId:
        "6651a52825cdf87641678c4e",
      badmintonId: "2",

      __v: 0,
    },
    {
      _id: "3",
      name: "sdasd",
      rating: 3,
      numberphone: "1",
      review: "test",
      userId:
        "6651a52825cdf87641678c4e",
      badmintonId: "3",

      __v: 0,
    },
    {
      _id: "4",
      name: "Hieu",
      rating: 3,
      numberphone: "0100111",
      review: "hello",
      userId:
        "6651a52825cdf87641678c4e",
      badmintonId: "4",

      __v: 0,
    },
  ];
  const data = [
    {
      id: "1",
      image:
        "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "70.000 - 100.000",
      name: "Tuyển giao lưu 1",
      address:
        "Sân THCS Thanh Xuân Nam - Cuối ngõ 214 Nguyễn Xiển, P. Thanh Xuân Nam, Q. Thanh Xuân, Hà Nội",
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
      image:
        "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "100.000",
      name: "Tuyển giao lưu 2",
      address:
        "Sân THCS Thanh Xuân Nam - Đà Nẵng",
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
      image:
        "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "500.000",
      name: "Tuyển giao lưu 3",
      address:
        "Sân THCS Thanh Xuân Nam - Cuối ngõ 214 Nguyễn Xiển, Sài Gòn",
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
      image:
        "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "70.000 - 100.000",
      name: "Tuyển giao lưu 1",
      address:
        "Sân THCS Thanh Xuân Nam - Cuối ngõ 214 Nguyễn Xiển, P. Thanh Xuân Nam, Q. Thanh Xuân, Hà Nội",
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
      image:
        "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "100.000",
      name: "Tuyển giao lưu 2",
      address:
        "Sân THCS Thanh Xuân Nam - Đà Nẵng",
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
      image:
        "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "500.000",
      name: "Tuyển giao lưu 3",
      address:
        "Sân THCS Thanh Xuân Nam - Cuối ngõ 214 Nguyễn Xiển, Sài Gòn",
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
  const filterData = data.find(
    (item) => item.id === id
  );
  const filterFeedBack =
    dataFeedback.filter(
      (fb) => fb.badmintonId === id
    );
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col sm={8}>
            <div>
              <div
                style={{
                  position: "relative",
                }}>
                <img
                  src={
                    post?.images[0]?.url
                  }
                  style={{
                    width: "100%",
                    height: "350px",
                    borderRadius:
                      "20px",
                    objectFit: "cover",
                  }}
                />
                <button
                  className="btn btn-danger"
                  style={{
                    borderRadius:
                      "20px",
                    position:
                      "absolute",
                    bottom: "10px",
                    right: "10px",
                  }}>
                  Giá thuê :
                  {post?.priceNu +
                    " - " +
                    post?.priceNam}
                </button>
              </div>
              <div className="py-4">
                <strong className="fs-3">
                  {post?.title}
                </strong>
                <div className="fs-5 d-flex gap-2 align-items-center">
                  <FaMapMarkerAlt
                    style={{
                      color: "red",
                    }}
                  />
                  <span>
                    {post?.location}
                  </span>
                </div>
                <div className="fs-5 d-flex gap-2 align-items-center">
                  <FaCalendarAlt
                    style={{
                      color: "red",
                    }}
                  />
                  <span>
                    {post?.dateStart
                      ?.date +
                      " / " +
                      post?.dateStart
                        ?.timeStart +
                      " đến " +
                      post?.dateStart
                        ?.timeEnd}
                  </span>
                </div>
                <div className="fs-5 d-flex gap-2 align-items-center">
                  <BsCalendar2HeartFill
                    style={{
                      color: "red",
                    }}
                  />
                  <span>
                    {post?.laplai === 1
                      ? "Hàng ngày"
                      : "Hàng tuần"}
                  </span>
                </div>
                <div className="fs-5 d-flex gap-2 align-items-center">
                  <FaUsers
                    style={{
                      color: "red",
                    }}
                  />
                  <span>
                    Cần tuyển :
                    {post?.countct}
                  </span>
                </div>
                <div className="fs-5 d-flex gap-2 align-items-center">
                  <SiLevelsdotfyi
                    style={{
                      color: "red",
                    }}
                  />
                  <span>
                    Trình độ :
                    {post?.minTrinhDo +
                      " đến " +
                      post?.maxTrinhDo}
                  </span>
                </div>
                <div className="fs-5 d-flex gap-2 align-items-center">
                  <IoMdPricetag
                    style={{
                      color: "red",
                    }}
                  />
                  <span>
                    Giá thuê :
                    {post?.priceNu +
                      " - " +
                      post?.priceNam}
                  </span>
                </div>
                <div>
                  <strong className="fs-4">
                    Mô tả
                  </strong>
                  <p>
                    {post?.description}
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div
              style={{
                border:
                  "1px solid black",
                padding: "15px",
                borderRadius: "15px",
              }}>
              <div
                style={{
                  width: "100%",
                }}>
                <strong className="fs-5 ">
                  Người đăng tin
                </strong>
                <div className="d-flex align-items-center gap-3">
                  <span className="fs-2">
                    ảnh
                    {/* {post?.user.image} */}
                  </span>
                  <span className="fs-4">
                    {
                      post?.updateBy
                        ?.name
                    }
                  </span>
                </div>
                <hr />
                <div>
                  <strong className="fs-5">
                    Liên hệ
                  </strong>
                  <div className="d-flex flex-column">
                    <span>
                      SDT:{" "}
                      {
                        post?.updateBy
                          ?.mobile
                      }
                    </span>
                    <Link
                      to={`${filterData?.user.link}`}>
                      Link facebook cá
                      nhân
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div
            style={{
              border: "1px solid white",
              borderRadius: "20px",
              padding: "10px",
            }}>
            <strong className="fs-4">
              Đánh giá
            </strong>
            <hr />
            <div>
              {post?.ratings.length ===
              0 ? (
                <span className="d-flex">
                  Chưa có đánh giá nào
                </span>
              ) : (
                <>
                  {post?.ratings?.map(
                    (fback) => {
                      return (
                        <div
                          key={
                            fback._id
                          }>
                          <div className="d-flex flex-col gap-2">
                            <span className="fw-bold text-yellow-300">
                              {
                                fback.name
                              }
                            </span>
                            <div>
                              <Rating
                                name="size-small"
                                defaultValue={
                                  fback.rating
                                }
                                size="small"
                              />
                            </div>
                          </div>
                          <div>
                            <p>
                              {
                                fback.review
                              }
                            </p>
                          </div>
                          <hr />
                        </div>
                      );
                    }
                  )}
                </>
              )}

              <button
                className="btn btn-primary mt-3"
                onClick={() =>
                  setClickFB(true)
                }>
                Viết đánh giá
              </button>
            </div>
          </div>

          {clickFB && (
            <FeedBack
              onClose={() =>
                setClickFB(false)
              }
            />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default BadmintonDetails;
