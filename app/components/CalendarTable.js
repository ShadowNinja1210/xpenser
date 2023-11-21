"use client";
import _ from "lodash";
import { useState } from "react";

const tableData = [
  {
    amount: 3000,
    account: "HDFC Credit Card",
    category: "Entertainment",
    group: "Loan / EMI",
    date: "2023-09-01",
    remarks: "Finnable Loan EMI Every 5th of the Month Finnable Loan EMI Every 5th of the Month Finnable Loan EMI Every 5th of the Month",
  },
  {
    amount: 2000,
    account: "Axis Credit Card",
    category: "Entertainment",
    group: "Loan / EMI",
    date: "2022-09-01",
    remarks: "Finnable Loan EMI Every 5th of the Month",
  },
  {
    amount: 200,
    account: "Cash",
    category: "Entertainment",
    group: "Loan / EMI",
    date: "2021-09-01",
    remarks: "Finnable Loan EMI Every 5th of the Month",
  },
  {
    amount: 3000,
    account: "HDFC Credit Card",
    category: "Entertainment",
    group: "Loan / EMI",
    date: "2021-09-01",
    remarks: "Finnable Loan EMI Every 5th of the Month",
  },
];

export default function CalendarTable() {
  const [sortedColumn, setSortedColumn] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (column) => {
    setSortedColumn(column);
    let order = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(order);
  };

  const sortedData = tableData.sort((a, b) => {
    const valueA = a[sortedColumn];
    const valueB = b[sortedColumn];

    if (valueA < valueB) {
      return sortOrder === "asc" ? -1 : 1;
    }

    if (valueA > valueB) {
      return sortOrder === "asc" ? 1 : -1;
    }

    console.log("Returning 0");
    return 0;
  });
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 border px-3 py-2">
        <thead className="text-base text-gray-700 bg-gray-200">
          <tr>
            <th scope="col" className="px-3 py-3 cursor-pointer" onClick={() => handleSort("date")}>
              Date {sortedColumn === "date" && <span>{sortOrder === "asc" ? "↓" : "↑"}</span>}
            </th>
            <th scope="col" className="px-3 py-3 cursor-pointer" onClick={() => handleSort("amount")}>
              Amount {sortedColumn === "amount" && <span>{sortOrder === "asc" ? "↓" : "↑"}</span>}
            </th>
            <th scope="col" className="px-3 py-3 cursor-pointer" onClick={() => handleSort("account")}>
              Account {sortedColumn === "account" && <span>{sortOrder === "asc" ? "↓" : "↑"}</span>}
            </th>
            <th scope="col" className="px-3 py-3 cursor-pointer" onClick={() => handleSort("category")}>
              Category {sortedColumn === "category" && <span>{sortOrder === "asc" ? "↓" : "↑"}</span>}
            </th>
            <th scope="col" className="px-3 py-3 cursor-pointer" onClick={() => handleSort("group")}>
              Group {sortedColumn === "group" && <span>{sortOrder === "asc" ? "↓" : "↑"}</span>}
            </th>
            <th scope="col" className="px-3 py-3">
              Remarks
            </th>
            <th scope="col" className="px-3 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-50">
          {sortedData.map((data, index) => (
            <tr key={index} className="font-medium border-b">
              <th className="px-3 py-2 text-gray-900">{data.date}</th>
              <th scope="row" className="px-3 py-2 text-gray-900 whitespace-nowrap">
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
  );
}
