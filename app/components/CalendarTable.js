"use client";
import _ from "lodash";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../dashboard/page";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FaFilter } from "react-icons/fa";
import dayjs from "dayjs";
const isBetween = require("dayjs/plugin/isBetween");

const today = dayjs();

export default function CalendarTable() {
  // -------------UseContexts------------- //
  const tableData = useContext(DataContext); // TABLE - Data

  // -------------UseStates------------- //
  // SORTING
  const [sortedColumn, setSortedColumn] = useState("date"); // SORTING - Column selector
  const [sortOrder, setSortOrder] = useState("desc"); // SORTING - Order selector
  const [filteredData, setFilteredData] = useState(tableData); // FILTERING - Filtered Data
  const [fromDate, setFromDate] = useState(today); // FILTERING - From Date
  const [toDate, setToDate] = useState(today); // FILTERING - To Date
  const [Period, setPeriod] = useState("Today"); // FILTERING - Period
  const [isFilterOn, setIsFilterOn] = useState(false); // FILTERING - Filter Button

  // -------------Filtering Functions------------- //
  // FILTERING - To filter the data based on the date range //
  const dateBasedFilter = () => {
    let startDate = fromDate.subtract(1, "day");
    let endDate = fromDate.add(1, "day");
    setFilteredData(tableData.filter((data) => dayjs(data.date).isBetween(startDate, endDate)));
    console.log("Filtered Data:");
    console.log(filteredData);
  };

  // -------------Sorting Functions------------- //
  // SORTING - To handle changing of sorting order //
  const handleSort = (column) => {
    setSortedColumn(column);
    let order = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(order);
  };

  // SORTING - To store the sorted data //
  const sortedData = filteredData.sort((a, b) => {
    const valueA = a[sortedColumn];
    const valueB = b[sortedColumn];

    if (valueA < valueB) {
      return sortOrder === "asc" ? -1 : 1;
    }

    if (valueA > valueB) {
      return sortOrder === "asc" ? 1 : -1;
    }

    return 0;
  });

  // THEME - Making a new theme for the MUI Date component  //
  const newTheme = (theme) =>
    createTheme({
      ...theme,
      components: {
        MuiPickersToolbar: {
          styleOverrides: {
            root: {
              color: "#bbdefb",
              borderRadius: 13,
              borderWidth: 4,
              borderColor: "#2196f3",
              border: "4px solid",
              backgroundColor: "#0d47a1",
            },
          },
        },
      },
    });

  // -----------------UseEffects----------------- //
  // FILTERING - To filter the data based on the date range //
  useEffect(() => {
    if (Period === "Today") {
      setFromDate(today);
      setToDate(today);
    } else if (Period === "Yesterday") {
      setFromDate(today.subtract(1, "day"));
      setToDate(today.subtract(1, "day"));
    } else if (Period === "This Week") {
      setFromDate(today.startOf("week"));
      setToDate(today.endOf("week"));
    } else if (Period === "Last Week") {
      setFromDate(today.subtract(1, "week").startOf("week"));
      setToDate(today.subtract(1, "week").endOf("week"));
    } else if (Period === "This Month") {
      setFromDate(today.startOf("month"));
      setToDate(today);
    } else if (Period === "Last Month") {
      setFromDate(today.subtract(1, "month").startOf("month"));
      setToDate(today.subtract(1, "month").endOf("month"));
    }
  }, [Period]);

  return (
    <div className="flex flex-col gap-4">
      {/* --------------------------------------------------- */}
      {/* Buttons section for Filtering the data */}
      <div className="flex gap-4 items-center">
        {/* Period option */}
        <div class="relative">
          <select
            id="period_options"
            style={{ height: "56px", width: "117px" }}
            class=" font-medium block rounded-md py-4 px-3 w-full text-sm text-gray-800 border border-neutral-300  appearance-none outline-none focus:ring-0 active:border-blue-600 focus:border-2 focus:border-blue-600 hover:border-black"
            placeholder=" "
            onClick={(e) => {
              setPeriod(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value="">Select Period</option>
            <option value="Today">Today</option>
            <option value="Yesterday">Yesterday</option>
            <option value="This Week">This Week</option>
            <option value="Last Week">Last Week</option>
            <option value="This Month">This Month</option>
            <option value="Last Month">Last Month</option>
          </select>
          <label for="period_options" class="absolute px-2 text-gray-500 bg-white duration-300 transform -translate-y-7 scale-75 top-4 z-10 outline-none ">
            Period
          </label>
        </div>

        {/* From Date */}
        <DatePicker
          disableFuture
          maxDate={toDate}
          theme={newTheme}
          className="w-40"
          label="From"
          value={fromDate}
          onChange={(newFromValue) => {
            setFromDate(newFromValue);
            dateBasedFilter();
          }}
        />

        {/* To Date */}
        <DatePicker
          disableFuture
          theme={newTheme}
          className="w-40"
          label="To"
          value={toDate}
          onChange={(newToValue) => {
            setToDate(newToValue);
            dateBasedFilter();
          }}
        />

        {/* Filter Button */}
        <button
          id="filter_btn"
          onClick={() => setIsFilterOn(!isFilterOn)}
          style={{ height: "56px", width: "56px" }}
          class={`font-medium text-xl text-center flex justify-center items-center rounded-md py-4 px-3 w-full border ${
            isFilterOn ? "text-blue-600 border-blue-600 bg-gray-100 border-2" : "text-gray-800 border-neutral-300 hover:border-black"
          }  appearance-none outline-none focus:ring-0`}
        >
          <FaFilter />
        </button>
      </div>

      {/* --------------------------------------------------- */}
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border px-3 py-2">
          <thead className="text-base text-gray-700 bg-gray-200 sticky top-0">
            <tr>
              <th scope="col" className="px-3 py-3 cursor-pointer" onClick={() => handleSort("date")}>
                Date {sortedColumn === "date" && <span className="primary-color">{sortOrder === "asc" ? "↑" : "↓"}</span>}
              </th>
              <th scope="col" className="px-3 py-3 cursor-pointer" onClick={() => handleSort("amount")}>
                Amount {sortedColumn === "amount" && <span className="primary-color">{sortOrder === "asc" ? "↑" : "↓"}</span>}
              </th>
              <th scope="col" className="px-3 py-3 cursor-pointer" onClick={() => handleSort("account")}>
                Account {sortedColumn === "account" && <span className="primary-color">{sortOrder === "asc" ? "↑" : "↓"}</span>}
              </th>
              <th scope="col" className="px-3 py-3 cursor-pointer" onClick={() => handleSort("category")}>
                Category {sortedColumn === "category" && <span className="primary-color">{sortOrder === "asc" ? "↑" : "↓"}</span>}
              </th>
              <th scope="col" className="px-3 py-3 cursor-pointer" onClick={() => handleSort("group")}>
                Group {sortedColumn === "group" && <span className="primary-color">{sortOrder === "asc" ? "↑" : "↓"}</span>}
              </th>
              <th scope="col" className="px-3 py-3">
                Remarks
              </th>
              <th scope="col" className="px-3 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-50 h-96 overflow-scroll">
            {sortedData.map((data, index) => (
              <tr key={index} className="font-medium border-b">
                <th className="px-3 py-2 text-gray-900">{data.date}</th>
                <th scope="row" className={`px-3 py-2 whitespace-nowrap ${data.xpense_type === "spent" ? "text-red-600" : "text-green-700"}`}>
                  &#8377; {data.amount.toLocaleString("en-IN")}
                </th>
                <td className="px-3 py-2">{data.account}</td>
                <td className="px-3 py-2">{data.category}</td>
                <td className="px-3 py-2">{data.group}</td>
                <td className="px-3 py-2">
                  <p style={{ maxWidth: "240px" }}>{data.remarks}</p>
                </td>
                <td className="px-3 py-2">
                  <div className="flex gap-2">
                    <button className="px-2 py-1 rounded-lg primary-btn box-border">Edit</button>
                    <button className="px-2 py-1 rounded-lg border-2 text-red-500 border-red-500 hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 outline-none">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
