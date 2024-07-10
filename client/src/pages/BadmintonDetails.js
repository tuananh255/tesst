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
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
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
import {
  options,
  option4,
  option5,
  option6,
} from "../data/data";
const formatCurrencyToK = (amount) => {
  const formatter =
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });

  // Format the amount
  let formattedAmount =
    formatter.format(amount);

  // Replace the default currency symbol with 'K'
  formattedAmount = formattedAmount =
    formattedAmount.replace(/\s*₫/, "");

  return formattedAmount;
};
const BadmintonDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  const post = useSelector(
    (state) =>
      state.post.getPost.getPost
  );
  const [clickFB, setClickFB] =
    useState(false);

  const getLBV = (value) => {
    const numericValue = parseInt(
      value,
      10
    );
    const option = options.find(
      (option) =>
        option.value === numericValue
    );
    return option
      ? option.label
      : value;
  };
  const getLabelByValue =
    (options) => (value) => {
      const option = options.find(
        (option) =>
          option.value ===
          parseInt(value, 10)
      );
      return option
        ? option.label
        : value;
    };
  const getLBVCity =
    getLabelByValue(option4);
  const getLBVQuan =
    getLabelByValue(option5);
  const getLBVSan =
    getLabelByValue(option6);
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
                    objectFit: "cover",
                    height: "300px",
                    borderRadius:
                      "20px",
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
                  Giá thuê :{" "}
                  {formatCurrencyToK(
                    post?.priceNu
                  ) +
                    " - " +
                    formatCurrencyToK(
                      post?.priceNam
                    )}
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
                    {getLBVSan(
                      post?.san
                    ) +
                      ", " +
                      getLBVQuan(
                        post?.quan
                      ) +
                      ", " +
                      getLBVCity(
                        post?.city
                      )}
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
                    Cần tuyển :{" "}
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
                    Trình độ:{" "}
                    {getLBV(
                      post?.minTrinhDo
                    )}{" "}
                    đến{" "}
                    {getLBV(
                      post?.maxTrinhDo
                    )}
                  </span>
                </div>
                <div className="fs-5 d-flex gap-2 align-items-center">
                  <IoMdPricetag
                    style={{
                      color: "red",
                    }}
                  />
                  <span>
                    Giá thuê :{" "}
                    {formatCurrencyToK(
                      post?.priceNu
                    ) +
                      " - " +
                      formatCurrencyToK(
                        post?.priceNam
                      )}
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
                    <FaRegUserCircle />
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
                    <Link to={`/`}>
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
                  {post?.ratings.map(
                    (fback) => (
                      <div
                        key={fback._id}>
                        <div className="d-flex flex-col gap-2">
                          <span className="fw-bold text-yellow-300">
                            {
                              fback
                                .postedby
                                ?.name
                            }
                          </span>
                          <div>
                            <Rating
                              name="size-small"
                              defaultValue={
                                fback.star
                              }
                              value={
                                fback.star
                              }
                              size="small"
                              readOnly
                            />
                          </div>
                        </div>
                        <div>
                          <p>
                            {
                              fback.comment
                            }
                          </p>
                        </div>
                        <hr />
                      </div>
                    )
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
