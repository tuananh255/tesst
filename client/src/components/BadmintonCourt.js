import React, {
  useEffect,
  useState,
} from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { BsCalendar2HeartFill } from "react-icons/bs";
import {
  Link,
  useLocation,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiLevelsdotfyi } from "react-icons/si";

import Product from "./Product";
import {
  Col,
  Row,
} from "react-bootstrap";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { getAllPost } from "../features/post/postSlice";
import Map from "./Map";
import {
  option4,
  option5,
  option6,
  options,
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
const BadmintonCourt = ({
  idName,
  data,
}) => {
  const location = useLocation();
  const [locationb, setLocationb] =
    useState(
      "Đại học kiến trúc Đà Nẵng - 566 Núi Thành, Hòa Cường Nam, Q. Hải Châu, Đà Nẵng"
    );
  const idslug = location.pathname
    .split("/")
    .pop();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);
  const postAll = useSelector(
    (state) => state.post.post.Posts
  );
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
  const filteredPosts = postAll?.filter(
    (post) => {
      if (
        idslug === "traodoi" &&
        post.type === "1"
      )
        return true;
      if (
        idslug === "sandau" &&
        post.type === "2"
      )
        return true;
      if (
        idslug === "giaoluu" &&
        post.type === "3"
      )
        return true;
      return false;
    }
  );

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
    <div>
      <Row>
        <Col sm={8}>
          <div className="d-flex flex-column gap-3">
            {idName === "traodoi" && (
              <>
                <strong>
                  Một vài sản phẩm
                </strong>
                <Product />
              </>
            )}

            <strong>
              Tìm thấy{" "}
              {filteredPosts?.length}{" "}
              hoạt động
            </strong>

            {filteredPosts?.map(
              (inf) => {
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
                              height:
                                "166px",
                              minWidth:
                                "200px",
                              maxWidth:
                                "200px",
                              objectFit:
                                "cover",
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
                              background:
                                "#f5002f",
                              fontSize:
                                "14px",
                              fontWeight: 600,
                            }}
                            className="btn btn-danger">
                            {formatCurrencyToK(
                              inf?.priceNu
                            ) +
                              " - " +
                              formatCurrencyToK(
                                inf?.priceNam
                              )}
                          </button>
                        </div>
                      </Link>

                      <div className="d-flex flex-column justify-content-evenly">
                        <span
                          style={{
                            color:
                              "#5b5b5b",
                          }}>
                          Đang xác định
                          vị trí của bạn
                        </span>
                        <Link
                          to={`/badminton/${inf?._id}`}>
                          <h4 className="text-dark">
                            {inf?.title}
                          </h4>
                        </Link>
                        <div className="d-flex gap-3 align-items-center">
                          <FaMapMarkerAlt
                            style={{
                              color:
                                "red",
                            }}
                          />
                          <span
                            style={{
                              color:
                                "#5b5b5b",
                            }}>
                            {getLBVSan(
                              inf?.san
                            ) +
                              ", " +
                              getLBVQuan(
                                inf?.quan
                              ) +
                              ", " +
                              getLBVCity(
                                inf?.city
                              )}
                          </span>
                        </div>
                        <div className="d-flex gap-3 align-items-center">
                          <FaCalendarAlt
                            style={{
                              color:
                                "red",
                            }}
                          />
                          <span
                            style={{
                              color:
                                "#5b5b5b",
                            }}>
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
                        <div className="d-flex gap-3 align-items-center">
                          <BsCalendar2HeartFill
                            style={{
                              color:
                                "red",
                            }}
                          />
                          <span
                            style={{
                              color:
                                "#5b5b5b",
                            }}>
                            {inf?.laplai ===
                            1
                              ? "Hàng ngày"
                              : "Hàng tuần"}
                          </span>
                        </div>
                        <div className="d-flex gap-3 align-items-center">
                          <SiLevelsdotfyi
                            style={{
                              color:
                                "red",
                            }}
                          />
                          <span
                            style={{
                              color:
                                "#5b5b5b",
                            }}>
                            Trình độ:
                            {getLBV(
                              inf?.minTrinhDo
                            )}{" "}
                            đến{" "}
                            {getLBV(
                              inf?.maxTrinhDo
                            )}
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
            <Map location={locationb} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BadmintonCourt;
