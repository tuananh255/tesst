import React, {
  useEffect,
} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getAllproduct } from "../features/product/productSlice";

const Product = () => {
  const formatCurrencyToK = (
    amount
  ) => {
    const formatter =
      new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      });

    let formattedAmount =
      formatter.format(amount);
    formattedAmount =
      formattedAmount.replace(
        /\s*₫/,
        ""
      );

    return formattedAmount;
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllproduct());
  }, [dispatch]);

  const products = useSelector(
    (state) =>
      state.product.product.products
  );
  const filteredProducts = useSelector(
    (state) =>
      state.product.filterProduct
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const displayProducts =
    filteredProducts?.length > 0
      ? filteredProducts
      : products;

  return (
    <div>
      <Slider {...settings}>
        {displayProducts &&
          displayProducts.map(
            (item, index) => {
              return (
                <Card
                  key={index}
                  style={{
                    width: "100%",
                  }}>
                  <Card.Img
                    style={{
                      height: "250px",
                    }}
                    variant="top"
                    src={
                      item?.images[0]
                        ?.url
                    }
                  />
                  <Card.Body>
                    <Link
                      to={`/product/${item?._id}`}
                      key={item._id}>
                      <Card.Title>
                        {item?.title}
                      </Card.Title>
                    </Link>
                    <Card.Title>
                      {formatCurrencyToK(
                        item?.price
                      )}
                    </Card.Title>
                    <Card.Text>
                      {
                        item?.description
                      }
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            }
          )}
      </Slider>
    </div>
  );
};

export default Product;
