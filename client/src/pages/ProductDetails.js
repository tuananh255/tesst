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
import { getproduct } from "../features/product/productSlice";

const ProductDetails = () => {
  const { id } = useParams();

  // const data = [
  //   {
  //     id: "1",
  //     productName: "Test",
  //     image:
  //       "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
  //     description: "Test",
  //     price: 9000,
  //     status: "Old",
  //     category: "Giày",
  //     user: {
  //       name: "A",
  //       mobile: "123",
  //     },
  //   },
  //   {
  //     id: "2",
  //     productName: "Test2",
  //     image:
  //       "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",

  //     description: "Test 2",
  //     price: 9999,
  //     category: "Vợt",

  //     status: "New",

  //     user: {
  //       name: "A",
  //       mobile: "123",
  //     },
  //   },
  //   {
  //     id: "3",
  //     productName: "Test 3",
  //     image:
  //       "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",

  //     description: "Test ",
  //     price: 900000,
  //     category: "Quần áo",

  //     status: "Used 95% - 99%",

  //     user: {
  //       name: "A",
  //       mobile: "123",
  //     },
  //   },
  //   {
  //     id: "4",
  //     productName: "test 4",
  //     image:
  //       "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",

  //     description: "test 1",
  //     price: 900000,
  //     category: "Phụ kiện",

  //     status: "Used 95% - 99%",

  //     user: {
  //       name: "A",
  //       mobile: "123",
  //     },
  //   },
  //   {
  //     id: "5",
  //     productName: "Test",
  //     image:
  //       "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",

  //     description: "Test",
  //     price: 9000,
  //     category: "Giày",

  //     status: "New",

  //     user: {
  //       name: "A",
  //       mobile: "123",
  //     },
  //   },
  //   {
  //     id: "6",
  //     productName: "Test2",
  //     image:
  //       "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",

  //     description: "Test 2",
  //     price: 9999,
  //     status: "Old",
  //     category: "Giày",

  //     user: {
  //       name: "A",
  //       mobile: "123",
  //     },
  //   },
  //   {
  //     id: "7",
  //     productName: "Test 3",
  //     image:
  //       "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",

  //     description: "Test ",
  //     price: 900000,
  //     status: "New",
  //     category: "Vợt",

  //     user: {
  //       name: "A",
  //       mobile: "123",
  //     },
  //   },
  //   {
  //     id: "8",
  //     productName: "test 4",
  //     image:
  //       "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
  //     status: "Old",
  //     category: "Quần áo",

  //     description: "test 1",
  //     price: 900000,
  //     user: {
  //       name: "A",
  //       mobile: "123",
  //     },
  //   },
  // ];
  // const [clickFB, setClickFB] =
  //   useState(false);
  // const productId = data.find(
  //   (item) => item.id === id
  // );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproduct(id));
  }, []);
  const productId = useSelector(
    (state) =>
      state.product.getproduct
        .getProduct
  );
  console.log("id", productId);
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
                    productId?.images[0]
                      ?.url
                  }
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    height: "300px",
                    borderRadius:
                      "20px",
                  }}
                />
              </div>
              <div className="py-4">
                <div className="d-flex align-items-center gap-3">
                  <span className="fs-5">
                    Tên sản phẩm
                  </span>
                  <strong>
                    {productId?.title}
                  </strong>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span className="fs-5">
                    Loại
                  </span>
                  <strong>
                    {productId?.type}
                  </strong>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span className="fs-5">
                    Gía
                  </span>
                  <strong>
                    {productId?.price}
                  </strong>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span className="fs-5">
                    Tình trạng
                  </span>
                  <strong>
                    {productId?.action}
                  </strong>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span className="fs-5">
                    Mô tả
                  </span>
                  <strong>
                    {
                      productId?.description
                    }
                  </strong>
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
                      productId
                        ?.updateBy?.name
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
                        productId
                          ?.updateBy
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
            {/* <div>
              {post?.ratings.length === 0 ? (
                <span className="d-flex">Chưa có đánh giá nào</span>
              ) : (
                <>
                  {post?.ratings.map((fback) => (
                    <div key={fback._id}>
                      <div className="d-flex flex-col gap-2">
                        <span className="fw-bold text-yellow-300">
                          {fback.postedby?.name}
                        </span>
                        <div>
                          <Rating
                            name="size-small"
                            defaultValue={fback.star}
                            value={fback.star}
                            size="small"
                            readOnly
                          />
                        </div>
                      </div>
                      <div>
                        <p>{fback.comment}</p>
                      </div>
                      <hr />
                    </div>
                  ))}
                </>
              )}

              <button
                className="btn btn-primary mt-3"
                onClick={() => setClickFB(true)}
              >
                Viết đánh giá
              </button>
            </div> */}
          </div>

          {/* {clickFB && <FeedBack onClose={() => setClickFB(false)} />} */}
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
