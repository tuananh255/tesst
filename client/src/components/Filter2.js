import React from "react";
import { Select } from "antd";

const Filter2 = () => {
const handleChange = () => {}
  return (
    <div className="d-flex gap-3 pt-4">
      <Select
         placeholder="Tình trạng"
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
    </div>
  );
};

export default Filter2;
