import React from "react";
import { Select } from "antd";

const Filter2 = () => {
  const handleChange = () => {};
  return (
    <div className="d-flex gap-3 pt-4">
      <Select
        placeholder="Thành phố"
        style={{
          width: "max-content",
        }}
        onChange={handleChange}
        options={[
          {
            value: "1",
            label: "Hồ Chí Minh",
          },
          {
            value: "2",
            label: "Hà Nội",
          },
          {
            value: "3",
            label: "Tỉnh thành khác",
          },
        ]}
        dropdownStyle={{
          zIndex: 9999999999,
          borderRadius: "20px",
        }}
      />
      <Select
        placeholder="Quận"
        style={{
          width: "max-content",
        }}
        onChange={handleChange}
        options={[
          {
            value: "1",
            label: "Tây hồ",
          },
          {
            value: "2",
            label: "Gò vấp",
          },
          {
            value: "3",
            label: "Tỉnh thành khác",
          },
        ]}
        dropdownStyle={{
          zIndex: 9999999999,
          borderRadius: "20px",
        }}
      />
      <Select
        placeholder="Ngày"
        style={{
          width: "max-content",
        }}
        onChange={handleChange}
        options={[
          {
            value: "1",
            label: "Tây hồ",
          },
          {
            value: "2",
            label: "Gò vấp",
          },
          {
            value: "3",
            label: "Tỉnh thành khác",
          },
        ]}
        dropdownStyle={{
          zIndex: 9999999999,
          borderRadius: "20px",
        }}
      />
      <Select
        placeholder="Quận"
        style={{
          width: "Khung giờ",
        }}
        onChange={handleChange}
        options={[
          {
            value: "1",
            label: "Tây hồ",
          },
          {
            value: "2",
            label: "Gò vấp",
          },
          {
            value: "3",
            label: "Tỉnh thành khác",
          },
        ]}
        dropdownStyle={{
          zIndex: 9999999999,
          borderRadius: "20px",
        }}
      />
      <Select
        placeholder="Sân"
        style={{
          width: "max-content",
        }}
        onChange={handleChange}
        options={[
          {
            value: "1",
            label: "Tây hồ",
          },
          {
            value: "2",
            label: "Gò vấp",
          },
          {
            value: "3",
            label: "Tỉnh thành khác",
          },
        ]}
        dropdownStyle={{
          zIndex: 9999999999,
          borderRadius: "20px",
        }}
      />
    </div>
  );
};

export default Filter2;
