import React, { useState } from "react";
import { Button, Select } from "antd";
import { useDispatch } from "react-redux";
import {
  filterProduct,
  resetProduct,
} from "../features/product/productSlice";

const Filter1 = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] =
    useState({
      city: undefined,
      type: undefined,
      price: undefined,
      action: undefined,
    });

  const handleChange = (
    value,
    field
  ) => {
    const newFilters = {
      ...filters,
      [field]: value,
    };
    setFilters(newFilters);
    dispatch(filterProduct(newFilters));
  };

  const handleReset = () => {
    setFilters({
      city: undefined,
      type: undefined,
      price: undefined,
      action: undefined,
    });
    dispatch(resetProduct());
  };

  return (
    <div className="d-flex gap-3 pt-4 filter align-items-center">
      <Select
        placeholder="Thành phố"
        value={filters.city}
        style={{ width: "max-content" }}
        onChange={(value) =>
          handleChange(value, "city")
        }
        options={[
          {
            value: "Hồ Chí Minh",
            label: "Hồ Chí Minh",
          },
          {
            value: "Hà Nội",
            label: "Hà Nội",
          },
          {
            value: "Tỉnh thành khác",
            label: "Tỉnh thành khác",
          },
        ]}
        dropdownStyle={{
          zIndex: 9999999999,
          borderRadius: "20px",
        }}
      />
      <Select
        placeholder="Sản phẩm"
        value={filters.type}
        style={{ width: "max-content" }}
        onChange={(value) =>
          handleChange(value, "type")
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
            value: "Quần áo",
            label: "Quần áo",
          },
          {
            value: "Phụ kiện",
            label: "Phụ kiện",
          },
        ]}
        dropdownStyle={{
          zIndex: 9999999999,
        }}
      />
      <Select
        placeholder="Khoảng giá"
        value={filters.price}
        style={{ width: "max-content" }}
        onChange={(value) =>
          handleChange(value, "price")
        }
        options={[
          {
            value: "1",
            label: "Dưới 500k",
          },
          {
            value: "2",
            label:
              "500.000 - 1.000.000",
          },
          {
            value: "3",
            label:
              "1.000.000 - 2.000.000",
          },
          {
            value: "4",
            label:
              "2.000.000 - 3.000.000",
          },
          {
            value: "5",
            label: "Trên 3.000.000",
          },
        ]}
        dropdownStyle={{
          zIndex: 9999999999,
        }}
      />
      <Select
        placeholder="Tình trạng"
        value={filters.action}
        style={{ width: "max-content" }}
        onChange={(value) =>
          handleChange(value, "action")
        }
        options={[
          {
            value: "New 100%",
            label: "New 100%",
          },
          {
            value: "Used 95% - 99%",
            label: "Used 95% - 99%",
          },
          { value: "Cũ", label: "Cũ" },
        ]}
        dropdownStyle={{
          zIndex: 9999999999,
          borderRadius: "20px",
        }}
      />
      <Button onClick={handleReset}>
        Xóa lọc
      </Button>
    </div>
  );
};

export default Filter1;
