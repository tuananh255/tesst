import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  Select,
  DatePicker,
  TimePicker,
  Input,
  Button,
} from "antd";
import moment from "moment";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import {
  option4,
  option5,
  option6,
} from "../data/data";
const { Option } = Select;
const { RangePicker } = DatePicker;

const Filter3 = ({
  onFilterChange,
}) => {
  const [filters, setFilters] =
    useState({
      city: null,
      quan: null,
      san: "",
      date: null,
      timeRange: [null, null],
    });

  const getLabelByValue = useCallback(
    (options) => (value) => {
      const option = options.find(
        (option) =>
          option.value ===
          parseInt(value, 10)
      );
      return option
        ? option.label
        : value;
    },
    []
  );

  const getLBVCity = useMemo(
    () => getLabelByValue(option4),
    [getLabelByValue]
  );
  const getLBVQuan = useMemo(
    () => getLabelByValue(option5),
    [getLabelByValue]
  );
  const getLBVSan = useMemo(
    () => getLabelByValue(option6),
    [getLabelByValue]
  );

  const dispatch = useDispatch();
  const postAll = useSelector(
    (state) => state.post.post.Posts
  );

  const handleFilterChange =
    useCallback((key, value) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [key]: value,
      }));
    }, []);

  const resetFilters = () => {
    setFilters({
      city: null,
      quan: null,
      san: "",
      date: null,
      timeRange: [null, null],
    });
  };

  const filteredPosts = useMemo(() => {
    return postAll?.filter((item) => {
      const matchesCity =
        !filters.city ||
        (getLBVCity(item.city) &&
          getLBVCity(
            item.city
          ).toLowerCase() ===
            filters.city.toLowerCase());
      const matchesQuan =
        !filters.quan ||
        (getLBVQuan(item.quan) &&
          getLBVQuan(
            item.quan
          ).toLowerCase() ===
            filters.quan.toLowerCase());
      const matchesSan =
        !filters.san ||
        (getLBVSan(item.san) &&
          getLBVSan(item.san)
            .toLowerCase()
            .includes(
              filters.san.toLowerCase()
            ));
      const matchesDate =
        !filters.date ||
        moment(
          item.dateStart.date
        ).isSame(filters.date, "day");
      const matchesTimeRange =
        !filters.timeRange[0] ||
        !filters.timeRange[1] ||
        (moment(
          item.dateStart.timeStart,
          "HH:mm:ss"
        ).isBetween(
          moment(
            filters.timeRange[0]
          ).startOf("day"),
          moment(
            filters.timeRange[1]
          ).endOf("day"),
          "minute",
          "[]"
        ) &&
          moment(
            item.dateStart.timeEnd,
            "HH:mm:ss"
          ).isBetween(
            moment(
              filters.timeRange[0]
            ).startOf("day"),
            moment(
              filters.timeRange[1]
            ).endOf("day"),
            "minute",
            "[]"
          ));

      return (
        matchesCity &&
        matchesQuan &&
        matchesSan &&
        matchesDate &&
        matchesTimeRange
      );
    });
  }, [
    filters,
    postAll,
    getLBVCity,
    getLBVQuan,
    getLBVSan,
  ]);

  useEffect(() => {
    if (
      typeof onFilterChange ===
      "function"
    ) {
      onFilterChange(filteredPosts);
    }
  }, [filteredPosts, onFilterChange]);
  return (
    <div>
      <div className="d-flex gap-3 pt-4 align-items-center">
        <Select
          placeholder="Thành phố"
          style={{
            width: "max-content",
          }}
          onChange={(value) =>
            handleFilterChange(
              "city",
              value
            )
          }
          options={[
            {
              value: "TP HCM",
              label: "TP HCM",
            },
            {
              value: "Hà Nội",
              label: "Hà Nội",
            },
            {
              value: "Đà Nẵng",
              label: "Đà Nẵng",
            },
            {
              value: "Các tỉnh khác",
              label: "Tỉnh thành khác",
            },
          ]}
          dropdownStyle={{
            zIndex: 999999999,
          }}
        />
        <Select
          placeholder="Quận"
          style={{
            width: "max-content",
          }}
          onChange={(value) =>
            handleFilterChange(
              "quan",
              value
            )
          }
          options={[
            {
              value: "Quận Hải Châu",
              label: "Quận Hải Châu",
            },
            {
              value: "Quận Hòan Kiếm",
              label: "Quận Hòan Kiếm",
            },
            {
              value: "Quận Liên Chiểu",
              label: "Quận Liên Chiểu",
            },
          ]}
          dropdownStyle={{
            zIndex: 999999999,
          }}
        />
        <DatePicker
          placeholder="Ngày"
          style={{ width: "20%" }}
          onChange={(date) =>
            handleFilterChange(
              "date",
              date
            )
          }
        />
        <TimePicker.RangePicker
          placeholder={[
            "Bắt đầu",
            "Kết thúc",
          ]}
          onChange={(times) =>
            handleFilterChange(
              "timeRange",
              times
            )
          }
          style={{ width: "20%" }}
          format="HH:mm"
        />
        <Input
          placeholder="Sân"
          style={{
            width: "max-content",
          }}
          onChange={(e) =>
            handleFilterChange(
              "san",
              e.target.value
            )
          }
        />
        <Button onClick={resetFilters}>
          Xóa lọc
        </Button>
      </div>
    </div>
  );
};

export default Filter3;
