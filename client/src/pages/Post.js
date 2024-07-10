import React, {
  useEffect,
  useState,
} from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import {
  Input,
  InputNumber,
  Select,
  DatePicker,
  TimePicker,
} from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useFormik } from "formik";
import * as Yup from "yup";
import Dropzone from "react-dropzone";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { Modal } from "react-bootstrap";

import {
  delImg,
  resetImages,
  uploadImg,
} from "../features/upload/uploadSlice";
import { toast } from "react-toastify";
import { addPost } from "../features/post/postSlice";
import {
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  options,
} from "../data/data";
const { RangePicker: TimeRangePicker } =
  TimePicker;
const { TextArea } = Input;

dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";

let userSchema = Yup.object().shape({
  city: Yup.string().required(
    "Yêu cầu nhập thành phố"
  ),
  quan: Yup.string().required(
    "Yêu cầu nhập quận"
  ),
  san: Yup.string().required(
    "Yêu cầu nhập sân"
  ),

  title: Yup.string().required(
    "Yêu cầu nhập tiêu đề"
  ),
  description: Yup.string().required(
    "Yêu cầu nhập mô tả"
  ),
  countct: Yup.number().required(
    "Nhập số lượng thành viên"
  ),
  namnu: Yup.string().required(
    "Yêu cầu chọn giới tính"
  ),
  minTrinhDo: Yup.string().required(
    "Nhập số trình độ tối thiểu"
  ),
  maxTrinhDo: Yup.string().required(
    "Nhập số trình độ tối đa"
  ),
  dateStart: Yup.object().shape({
    date: Yup.string().required(
      "Nhập ngày bắt đầu"
    ),
    timeStart: Yup.string().required(
      "Nhập thời gian bắt đầu"
    ),
    timeEnd: Yup.string().required(
      "Nhập thời gian kết thúc"
    ),
  }),
  priceNam: Yup.number().required(
    "Nhập giá tiền nam"
  ),
  priceNu: Yup.number().required(
    "Nhập giá tiền nữ"
  ),
  contact: Yup.string().required(
    "Nhập số điện thoại liên hệ"
  ),
});

const Post = () => {
  const dispatch = useDispatch();
  const [
    toggleLocation,
    setToggleLocation,
  ] = useState(false);
  const imgState = useSelector(
    (state) => state.upload.images
  );
  const img = [];
  imgState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });

  const currentDate = new Date();
  const currentDayjsDate = dayjs(
    currentDate
  );
  const formik = useFormik({
    initialValues: {
      location: {
        city: null,
        quan: null,
        san: null,
      },
      city: null,
      quan: null,
      san: null,
      title: "",
      description: "",
      countct: null,
      namnu: null,
      minTrinhDo: null,
      maxTrinhDo: null,
      dateStart: {
        date: null,
        timeStart: null,
        timeEnd: null,
      },
      priceNam: "",
      priceNu: "",
      contact: "",
      images: "",
      laplai: "",
      type: null,
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      if (values.images === "") {
        toast.warning("Chưa chọn ảnh");
      } else {
        console.log("values:", values);
        dispatch(addPost(values));
        toast.success(
          "Đăng bài thành công 😆"
        );
        setTimeout(() => {
          formik.resetForm();
          dispatch(resetImages());
        }, 300);
      }
    },
  });
  useEffect(() => {
    formik.values.images = img;
  }, [img]);
  const handleClose = () => {
    setToggleLocation(false);
    formik.values.city = "";
    formik.values.quan = "";
    formik.values.san = "";
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
  const getOptionLabel =
    (options) => (value) => {
      const option = options.find(
        (option) =>
          option.value === value
      );
      return option ? option.label : "";
    };
  return (
    <Container>
      <div className="border rounded-3 p-4">
        <form
          onSubmit={
            formik.handleSubmit
          }>
          <Row>
            <Col sm={8}>
              <div className="d-flex flex-column gap-3">
                <strong>
                  Thông tin chung
                </strong>
                <div className="d-flex flex-column gap-3">
                  <Input
                    placeholder="Địa chỉ sân"
                    onClick={() =>
                      setToggleLocation(
                        true
                      )
                    }
                    value={`${
                      getLBVCity(
                        formik.values
                          .city
                      ) || ""
                    } - ${
                      getLBVQuan(
                        formik.values
                          .quan
                      ) || ""
                    } - ${
                      getLBVSan(
                        formik.values
                          .san
                      ) || ""
                    }`}
                    readOnly
                    onChange={(e) => {
                      formik.handleChange(
                        "location"
                      )(e);
                    }}
                    onBlur={formik.handleBlur(
                      "location"
                    )}
                    className="form-control"
                  />
                  {formik.touched
                    .location &&
                    formik.errors
                      .location && (
                      <div className="text-danger">
                        {
                          formik.errors
                            .location
                        }
                      </div>
                    )}
                  {toggleLocation && (
                    <Modal
                      show
                      centered>
                      <Container className="p-3">
                        <Row className="mt-4 d-flex flex-column gap-3">
                          <span className="text-center fs-5 fw-bold">
                            Chọn địa chỉ
                          </span>
                          <Col>
                            <Select
                              placeholder="Thành phố"
                              value={
                                formik
                                  .values
                                  .city
                              }
                              onChange={(
                                value
                              ) => {
                                formik.setFieldValue(
                                  "city",
                                  value
                                );
                              }}
                              options={
                                option4
                              }
                              style={{
                                border:
                                  "none",
                                width:
                                  "100%",
                              }}
                              dropdownStyle={{
                                zIndex: 9191919191919,
                              }}
                            />
                          </Col>
                          <Col>
                            <Select
                              placeholder="Quận"
                              value={
                                formik
                                  .values
                                  .quan
                              }
                              onChange={(
                                value
                              ) => {
                                formik.setFieldValue(
                                  "quan",
                                  value
                                );
                              }}
                              options={
                                option5
                              }
                              style={{
                                border:
                                  "none",
                                width:
                                  "100%",
                              }}
                              dropdownStyle={{
                                zIndex: 9191919191919,
                              }}
                            />
                          </Col>
                          <Col>
                            <Select
                              placeholder="Sân"
                              value={
                                formik
                                  .values
                                  .san
                              }
                              onChange={(
                                value
                              ) => {
                                formik.setFieldValue(
                                  "san",
                                  value
                                );
                              }}
                              options={
                                option6
                              }
                              style={{
                                border:
                                  "none",
                                width:
                                  "100%",
                              }}
                              dropdownStyle={{
                                zIndex: 9191919191919,
                              }}
                            />
                          </Col>
                        </Row>
                        <div className="d-flex gap-3 justify-content-end mt-3">
                          <btn
                            className="btn btn-warning"
                            onClick={
                              handleClose
                            }>
                            Hủy
                          </btn>
                          <btn
                            className="btn btn-danger"
                            onClick={() =>
                              setToggleLocation(
                                false
                              )
                            }>
                            Đồng ý
                          </btn>
                        </div>
                      </Container>
                    </Modal>
                  )}
                  <Input
                    placeholder="Tiêu đề"
                    value={
                      formik.values
                        .title
                    }
                    onChange={(e) => {
                      formik.handleChange(
                        "title"
                      )(e);
                    }}
                    onBlur={formik.handleBlur(
                      "title"
                    )}
                    className="form-control"
                  />
                  {formik.touched
                    .title &&
                    formik.errors
                      .title && (
                      <div className="text-danger">
                        {
                          formik.errors
                            .title
                        }
                      </div>
                    )}
                  <TextArea
                    rows={4}
                    value={
                      formik.values
                        .description
                    }
                    onChange={(e) => {
                      formik.handleChange(
                        "description"
                      )(e);
                    }}
                    onBlur={formik.handleBlur(
                      "description"
                    )}
                    placeholder="Mô tả chi tiết"
                    className="form-control"
                  />
                  {formik.touched
                    .description &&
                    formik.errors
                      .description && (
                      <div className="text-danger">
                        {
                          formik.errors
                            .description
                        }
                      </div>
                    )}
                </div>
                <strong>
                  Yêu cầu về thành viên
                </strong>
                <div className="d-flex gap-3">
                  <InputNumber
                    min={1}
                    max={10}
                    value={
                      formik.values
                        .countct
                    }
                    placeholder="Số lượng cần tuyển"
                    // defaultValue={1}
                    onChange={(
                      value
                    ) => {
                      formik.setFieldValue(
                        "countct",
                        value
                      );
                    }}
                    style={{
                      width: "100%",
                    }}
                  />
                  <Select
                    placeholder="Cả nam và nữ"
                    value={
                      formik.values
                        .namnu
                    }
                    onChange={(
                      value
                    ) => {
                      formik.setFieldValue(
                        "namnu",
                        value
                      );
                    }}
                    options={option1}
                    style={{
                      border: "none",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="d-flex gap-3">
                  <Select
                    placeholder="Trình độ tối thiểu"
                    value={
                      formik.values
                        .minTrinhDo
                    }
                    onChange={(
                      value
                    ) => {
                      formik.setFieldValue(
                        "minTrinhDo",
                        value
                      );
                    }}
                    options={options}
                    style={{
                      border: "none",
                      width: "100%",
                    }}
                  />
                  <Select
                    placeholder="Trình độ tối đa"
                    value={
                      formik.values
                        .maxTrinhDo
                    }
                    onChange={(
                      value
                    ) => {
                      formik.setFieldValue(
                        "maxTrinhDo",
                        value
                      );
                    }}
                    options={options}
                    style={{
                      border: "none",
                      width: "100%",
                    }}
                  />
                </div>
                <strong>
                  Thời gian và Chi phí
                </strong>
                <div className="border p-4 rounded-3">
                  <div className="d-flex justify-between gap-5 mb-3">
                    <div className="w-50">
                      <span className="mb-3 d-block">
                        Ngày bắt đầu
                      </span>
                      <DatePicker
                        defaultValue={
                          currentDayjsDate
                        }
                        format={
                          dateFormat
                        }
                        onChange={(
                          date,
                          dateString
                        ) => {
                          formik.setFieldValue(
                            "dateStart.date",
                            dateString
                          );
                        }}
                        className="form-control"
                      />
                    </div>
                    <div className="w-50 d-flex align-items-end">
                      <TimeRangePicker
                        onChange={(
                          time,
                          timeString
                        ) => {
                          formik.setFieldValue(
                            "dateStart.timeStart",
                            timeString[0]
                          );
                          formik.setFieldValue(
                            "dateStart.timeEnd",
                            timeString[1]
                          );
                        }}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div>
                    <label>
                      Lặp lại
                    </label>
                    <Select
                      placeholder="Lặp lại"
                      value={
                        formik.values
                          .laplai
                      }
                      onChange={(
                        value
                      ) => {
                        formik.setFieldValue(
                          "laplai",
                          value
                        );
                      }}
                      options={option2}
                      style={{
                        border: "none",
                        width: "20%",
                        marginLeft:
                          "40px",
                      }}
                    />
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <div className="w-50">
                    <Input
                      placeholder="Giá thuê nữ"
                      value={
                        formik.values
                          .priceNu
                      }
                      onChange={(e) => {
                        formik.handleChange(
                          "priceNu"
                        )(e);
                      }}
                      onBlur={formik.handleBlur(
                        "priceNu"
                      )}
                      className="form-control"
                    />
                    {formik.touched
                      .priceNu &&
                      formik.errors
                        .priceNu && (
                        <div className="text-danger">
                          {
                            formik
                              .errors
                              .priceNu
                          }
                        </div>
                      )}
                  </div>
                  <div className="w-50">
                    <Input
                      placeholder="Giá thuê nam"
                      value={
                        formik.values
                          .priceNam
                      }
                      onChange={(e) => {
                        formik.handleChange(
                          "priceNam"
                        )(e);
                      }}
                      onBlur={formik.handleBlur(
                        "priceNam"
                      )}
                      className="form-control"
                    />
                    {formik.touched
                      .priceNam &&
                      formik.errors
                        .priceNam && (
                        <div className="text-danger">
                          {
                            formik
                              .errors
                              .priceNam
                          }
                        </div>
                      )}
                  </div>
                </div>
                <div className="d-flex justify-content-end gap-3">
                  <button
                    type="button"
                    className="btn btn-danger">
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="btn btn-warning">
                    Đăng tin
                  </button>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="d-flex flex-column gap-3">
                <strong>
                  Thông tin liên hệ
                </strong>
                <div>
                  <Input
                    placeholder="Số điện thoại"
                    value={
                      formik.values
                        .contact
                    }
                    onChange={(e) => {
                      formik.handleChange(
                        "contact"
                      )(e);
                      console.log(
                        "Số điện thoại liên hệ:",
                        e.target.value
                      );
                    }}
                    onBlur={formik.handleBlur(
                      "contact"
                    )}
                    className="form-control"
                  />
                  {formik.touched
                    .contact &&
                    formik.errors
                      .contact && (
                      <div className="text-danger">
                        {
                          formik.errors
                            .contact
                        }
                      </div>
                    )}
                </div>
                <Select
                  placeholder="Phân loại"
                  value={
                    formik.values.type
                  }
                  onChange={(value) => {
                    formik.setFieldValue(
                      "type",
                      value
                    );
                  }}
                  options={option3}
                  style={{
                    border: "none",
                    width: "100%",
                  }}
                />
                <strong>
                  Hình ảnh mô tả
                </strong>
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
                                hình ảnh{" "}
                              </p>
                            )}
                          </div>{" "}
                        </section>{" "}
                        {imgState &&
                          imgState?.map(
                            (i, j) => (
                              <div
                                className=" position-relative"
                                key={j}>
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
            </Col>
          </Row>
        </form>
      </div>
    </Container>
  );
};

export default Post;
