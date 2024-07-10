import React, {
  useEffect,
  useState,
} from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Input, Select } from "antd";
import Dropzone from "react-dropzone";
import {
  delImg,
  resetImages,
  uploadImg,
} from "../features/upload/uploadSlice";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { addProduct } from "../features/product/productSlice";
const { TextArea } = Input;
let userSchema = Yup.object().shape({
  title: Yup.string().required(
    "Yêu cầu nhập tiêu đề"
  ),
  price: Yup.number().required(
    "Nhập giá tiền"
  ),
  description: Yup.string().required(
    "Yêu cầu nhập mô tả"
  ),
  type: Yup.string().required(
    "Chọn loại sản phẩm"
  ),
  action: Yup.string().required(
    "Chọn tình trạng"
  ),
  mobile: Yup.string().required(
    "Nhập số điện thoại"
  ),
});
const PostProduct = () => {
  const dispatch = useDispatch();
  const imgState = useSelector(
    (state) => state.upload.images
  );
  const user = useSelector(
    (state) => state.auth.user
  );
  const img = [];
  imgState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });
  useEffect(() => {
    formik.values.images = img;
  }, [img]);
  const formik = useFormik({
    initialValues: {
      city: "Hồ Chí Minh",
      title: "",
      price: "",
      description: "",
      type: "Giày",
      action: "New",
      images: "",
      mobile: null,
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      if (user !== null) {
        if (values.images === "") {
          toast.warning(
            "Chưa chọn ảnh"
          );
        } else {
          console.log(
            "values:",
            values
          );
          dispatch(addProduct(values));
          toast.success(
            "Đã gửi yêu cầu đăng sản phẩm 😆"
          );
          setTimeout(() => {
            formik.resetForm();
            dispatch(resetImages());
          }, 300);
        }
      } else {
        toast.warn(
          "Bạn chưa đăng nhập"
        );
      }
    },
  });
  return (
    <Container className="">
      <div className="border rounded-3 p-4">
        <form
          onSubmit={
            formik.handleSubmit
          }>
          <Row>
            <Col sm={8}>
              <strong>
                Thông tin sản phẩm
              </strong>
              <div className="d-flex flex-column gap-3 mt-4">
                <div className="d-flex gap-3 align-items-center">
                  <label>
                    Thành phố
                  </label>
                  <Select
                    style={{
                      width: "100px",
                    }}
                    value={
                      formik.values.city
                    }
                    onChange={(value) =>
                      formik.setFieldValue(
                        "city",
                        value
                      )
                    }
                    options={[
                      {
                        value:
                          "Hồ Chí Minh",
                        label:
                          "Hồ Chí Minh",
                      },
                      {
                        value: "Hà Nội",
                        label: "Hà Nội",
                      },
                      {
                        value:
                          "Tỉnh thành khác",
                        label:
                          "Tỉnh thành khác",
                      },
                    ]}
                  />
                </div>
                <div>
                  <label>
                    Tên sản phẩm
                  </label>
                  <Input
                    placeholder="Tên sản phẩm"
                    value={
                      formik.values
                        .title
                    }
                    onChange={formik.handleChange(
                      "title"
                    )}
                    onBlur={formik.handleBlur(
                      "title"
                    )}
                  />
                  {formik.touched
                    .title &&
                    formik.errors
                      .title && (
                      <div className="text-danger error">
                        {
                          formik.errors
                            .title
                        }
                      </div>
                    )}
                </div>
                <div>
                  <label>Giá</label>
                  <Input
                    type="number"
                    placeholder="Giá"
                    value={
                      formik.values
                        .price
                    }
                    onChange={formik.handleChange(
                      "price"
                    )}
                    onBlur={formik.handleBlur(
                      "price"
                    )}
                  />
                  {formik.touched
                    .price &&
                    formik.errors
                      .price && (
                      <div className="text-danger error">
                        {
                          formik.errors
                            .price
                        }
                      </div>
                    )}
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <label>
                    Sản phẩm
                  </label>
                  <Select
                    style={{
                      width: "100px",
                    }}
                    value={
                      formik.values.type
                    }
                    onChange={(value) =>
                      formik.setFieldValue(
                        "type",
                        value
                      )
                    }
                    options={[
                      {
                        value: "Giày",
                        label: "Giày",
                      },
                      {
                        value: "Vợt",
                        label: "Vợt",
                      },
                      {
                        value:
                          "Quần áo",
                        label:
                          "Quần áo",
                      },
                      {
                        value:
                          "Phụ kiện",
                        label:
                          "Phụ kiện",
                      },
                    ]}
                  />
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <label>
                    Tình trạng
                  </label>
                  <Select
                    style={{
                      width: "100px",
                    }}
                    value={
                      formik.values
                        .action
                    }
                    onChange={(value) =>
                      formik.setFieldValue(
                        "action",
                        value
                      )
                    }
                    options={[
                      {
                        value: "New",
                        label: "New",
                      },
                      {
                        value:
                          "Used 95% - 99%",
                        label:
                          "Used 95% - 99%",
                      },
                      {
                        value: "Old",
                        label: "Old",
                      },
                    ]}
                  />
                </div>
                <div>
                  <label>Mô tả</label>
                  <TextArea
                    rows={4}
                    value={
                      formik.values
                        .description
                    }
                    onChange={formik.handleChange(
                      "description"
                    )}
                    onBlur={formik.handleBlur(
                      "description"
                    )}
                  />
                  {formik.touched
                    .description &&
                    formik.errors
                      .description && (
                      <div className="text-danger error">
                        {
                          formik.errors
                            .description
                        }
                      </div>
                    )}
                </div>
                <div>
                  <label>
                    Hình ảnh
                  </label>
                  <div className="img_post">
                    <Dropzone
                      onDrop={(
                        acceptedFiles
                      ) =>
                        dispatch(
                          uploadImg(
                            acceptedFiles
                          )
                        )
                      }>
                      {({
                        getRootProps,
                        getInputProps,
                      }) => (
                        <>
                          {" "}
                          <section className="h-100">
                            {" "}
                            <div
                              className="h-100"
                              {...getRootProps()}>
                              {" "}
                              <input
                                {...getInputProps()}
                              />{" "}
                              {imgState?.length <
                                1 && (
                                <p className="mb-0 h-100 text-center">
                                  {" "}
                                  Thêm
                                  hình
                                  ảnh{" "}
                                </p>
                              )}
                            </div>{" "}
                          </section>{" "}
                          {imgState &&
                            imgState?.map(
                              (
                                i,
                                j
                              ) => (
                                <div
                                  className=" position-relative"
                                  key={
                                    j
                                  }>
                                  {" "}
                                  <button
                                    type="button"
                                    onClick={() =>
                                      dispatch(
                                        delImg(
                                          i.public_id
                                        )
                                      )
                                    }
                                    className="btn-close position-absolute"
                                    style={{
                                      top: "10px",
                                      right:
                                        "10px",
                                    }}></button>{" "}
                                  <img
                                    src={
                                      i.url
                                    }
                                    alt=""
                                    width={
                                      200
                                    }
                                    height={
                                      200
                                    }
                                  />{" "}
                                </div>
                              )
                            )}
                        </>
                      )}
                    </Dropzone>
                  </div>
                </div>
              </div>
              <div className="mt-3 justify-content-end d-flex">
                <button className="btn btn-danger">
                  Đăng tin
                </button>
              </div>
            </Col>
            <Col sm={4}>
              <strong>
                Thông tin liên hệ
              </strong>
              <div>
                <div className="d-flex flex-column gap-2 mt-4">
                  <label>
                    Số điện thoại
                  </label>
                  <Input
                    placeholder="Số điện thoại"
                    value={
                      formik.values
                        .mobile
                    }
                    onChange={formik.handleChange(
                      "mobile"
                    )}
                    onBlur={formik.handleBlur(
                      "mobile"
                    )}
                  />
                  {formik.touched
                    .mobile &&
                    formik.errors
                      .mobile && (
                      <div className="text-danger error">
                        {
                          formik.errors
                            .mobile
                        }
                      </div>
                    )}
                </div>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </Container>
  );
};

export default PostProduct;
