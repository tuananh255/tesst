import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const Product = () => {
  const data = [
    {
      id: "1",
      productName: "Test",
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",

      description: "Test",
      price: 9000,

      star: 1,
    },
    {
      id: "2",
      productName: "Test2",
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",

      description: "Test 2",
      price: 9999,

      star: 6,
    },
    {
      id: "3",
      productName: "Test 3",
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",

      description: "Test ",
      price: 900000,

      star: 2,
    },
    {
      id: "4",
      productName: "test 4",
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",

      description: "test 1",
      price: 900000,

      star: 1,
    },
    {
      id: "5",
      productName: "Test",
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",

      description: "Test",
      price: 9000,

      star: 1,
    },
    {
      id: "6",
      productName: "Test2",
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",

      description: "Test 2",
      price: 9999,

      star: 6,
    },
    {
      id: "7",
      productName: "Test 3",
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",

      description: "Test ",
      price: 900000,

      star: 2,
    },
    {
      id: "8",
      productName: "test 4",
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",

      description: "test 1",
      price: 900000,
      star: 1,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Link to="/" key={item.id}>
                  <Card.Title>{item.name}</Card.Title>
                </Link>
                <Card.Title>{item.price}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Slider>
    </div>
  );
};

export default Product;
