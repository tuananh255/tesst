import React, { useState, useContext } from "react";
import { Select } from "antd";
import { FaRegUserCircle } from "react-icons/fa";
const Filter1 = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const data = [
    {
      id: "1",
      type: "traodoi",
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "70.000 - 100.000",
      name: "Tuyển giao lưu 1",
      address:
        "Sân THCS Thanh Xuân Nam - Cuối ngõ 214 Nguyễn Xiển, P. Thanh Xuân Nam, Q. Thanh Xuân, Hà Nội",
      city: "Hà Nội",
      calendarNow: "02/07/2024, 19:30 - 19:30",
      calendar: "Lặp lại hàng tuần (T3, T5, CN)",
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
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "100.000",
      name: "Tuyển giao lưu 2",
      address: "Sân THCS Thanh Xuân Nam - Đà Nẵng",
      city: "Đà Nẵng",
      calendarNow: "02/07/2024, 19:30 - 19:30",
      calendar: "Lặp lại hàng tuần (T3, T5, CN)",
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
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "500.000",
      name: "Tuyển giao lưu 3",
      address: "Sân THCS Thanh Xuân Nam - Cuối ngõ 214 Nguyễn Xiển, Sài Gòn",
      city: "Đà Nẵng",
      calendarNow: "02/07/2024, 19:30 - 19:30",
      calendar: "Lặp lại hàng tuần (T3, T5, CN)",
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
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "70.000 - 100.000",
      name: "Tuyển giao lưu 1",
      address:
        "Sân THCS Thanh Xuân Nam - Cuối ngõ 214 Nguyễn Xiển, P. Thanh Xuân Nam, Q. Thanh Xuân, Hà Nội",
      city: "Hà Nội",
      calendarNow: "02/07/2024, 19:30 - 19:30",
      calendar: "Lặp lại hàng tuần (T3, T5, CN)",
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
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "100.000",
      name: "Tuyển giao lưu 2",
      address: "Sân THCS Thanh Xuân Nam - Đà Nẵng",
      city: "Đà Nẵng",
      calendarNow: "02/07/2024, 19:30 - 19:30",
      calendar: "Lặp lại hàng tuần (T3, T5, CN)",
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
      image: "https://cabasports.vn/wp-content/uploads/2021/02/30.jpg",
      price: "500.000",
      name: "Tuyển giao lưu 3",
      address: "Sân THCS Thanh Xuân Nam - Cuối ngõ 214 Nguyễn Xiển, Sài Gòn",
      city: "Sài Gòn",
      calendarNow: "02/07/2024, 19:30 - 19:30",
      calendar: "Lặp lại hàng tuần (T3, T5, CN)",
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
  const handleChange = (value) => {
    setSelectedCity(value);
  };

  const filteredData = selectedCity
    ? data.filter((item) => item.city === selectedCity)
    : data;

  return (
    <div className="d-flex gap-3 pt-4 filter">
      <Select
        // showSearch
        // placeholder="Thành Phố"
        // filterOption={(input, option) =>
        //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        // }
        placeholder="Thành phố"
        style={{
          width: "max-content",
        }}
        onChange={handleChange}
        options={[
          { value: "1", label: "Hồ Chí Minh" },
          { value: "2", label: "Hà Nội" },
          { value: "3", label: "Tỉnh thành khác" },
        ]}
        dropdownStyle={{ zIndex: 9999999999, borderRadius: "20px" }}
      />
      <Select
        placeholder="Sản phẩm"
        style={{
          width: "max-content",
        }}
        onChange={handleChange}
        options={[
          { value: "1", label: "Giày" },
          { value: "2", label: "Vợt" },
          { value: "3", label: "Quần áo" },
          { value: "4", label: "Phụ kiện" },
        ]}
        dropdownStyle={{ zIndex: 9999999999 }}
      />
      <Select
        placeholder="Khoảng giá"
        style={{
          width: "max-content",
        }}
        onChange={handleChange}
        options={[
          { value: "1", label: "Dưới 500k" },
          { value: "2", label: "500.000 - 1.000.000" },
          { value: "3", label: "1.000.000 - 2.000.000" },
          { value: "4", label: "2.000.000 - 3.000.000" },
          { value: "5", label: "Trên 3.000.000" },
        ]}
        dropdownStyle={{ zIndex: 9999999999 }}
      />
      <Select
        placeholder="Tình trạng"
        style={{
          width: "max-content",
        }}
        onChange={handleChange}
        options={[
          { value: "1", label: "New 100%" },
          { value: "2", label: "Used 95% - 99%" },
          { value: "3", label: "Cũ" },
        ]}
        dropdownStyle={{ zIndex: 9999999999, borderRadius: "20px" }}
      />
    </div>
  );
};

export default Filter1;
