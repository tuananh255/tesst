import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import {
  Button,
  Modal,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { CgClose } from "react-icons/cg";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getPost,
  ratingPost,
} from "../features/post/postSlice";

const FeedBack = ({
  data,
  onClose,
  onSubmit,
}) => {
  const [rating, setRating] =
    useState(null);
  const [hover, setHover] =
    useState(null);
  const [review, setReview] =
    useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedbackData = {
      star: rating,
      comment: review,
      id: id,
    };
    dispatch(ratingPost(feedbackData));
    setTimeout(() => {
      onClose();
      dispatch(getPost(id));
    }, 300);
  };

  return (
    <Modal
      show
      onHide={onClose}
      centered>
      <Modal.Header>
        <Modal.Title>
          Đánh giá sản phẩm
        </Modal.Title>
        <Button
          variant="link"
          onClick={onClose}>
          <CgClose />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Container>
            <Row className="justify-content-center">
              {[...Array(5)].map(
                (star, index) => {
                  const currentRating =
                    index + 1;
                  return (
                    <Col
                      key={index}
                      className="text-center">
                      <Form.Check
                        type="radio"
                        name="rating"
                        value={
                          currentRating
                        }
                        id={`star-${index}`}
                        className="d-none"
                        onChange={() =>
                          setRating(
                            currentRating
                          )
                        }
                      />
                      <label
                        htmlFor={`star-${index}`}>
                        <FaStar
                          size={50}
                          className="star"
                          color={
                            currentRating <=
                            (hover ||
                              rating)
                              ? "#ffc107"
                              : "#e4e5e9"
                          }
                          onMouseEnter={() =>
                            setHover(
                              currentRating
                            )
                          }
                          onMouseLeave={() =>
                            setHover(
                              null
                            )
                          }
                        />
                      </label>
                    </Col>
                  );
                }
              )}
            </Row>
            <Row className="mt-4">
              <Col>
                <Form.Group controlId="review">
                  <Form.Label>
                    Nhận xét của bạn
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={review}
                    onChange={(e) =>
                      setReview(
                        e.target.value
                      )
                    }
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Button
                  type="submit"
                  className="w-100">
                  Gửi đánh giá
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FeedBack;
