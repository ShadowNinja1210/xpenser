"use client";
import _ from "lodash";

const tableData = [
  {
    amount: 3000,
    account: "HDFC Credit Card",
    category: "Entertainment",
    group: "Loan / EMI",
    remarks: "Finnable Loan EMI Every 5th of the Month",
  },
  {
    amount: 2000,
    account: "Axis Credit Card",
    category: "Entertainment",
    group: "Loan / EMI",
    remarks: "Finnable Loan EMI Every 5th of the Month",
  },
  {
    amount: 200,
    account: "Cash",
    category: "Entertainment",
    group: "Loan / EMI",
    remarks: "Finnable Loan EMI Every 5th of the Month",
  },
  {
    amount: 3000,
    account: "HDFC Credit Card",
    category: "Entertainment",
    group: "Loan / EMI",
    remarks: "Finnable Loan EMI Every 5th of the Month",
  },
];

export default function TableComponent() {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 border px-3 py-2">
        <thead className="text-base text-gray-700 bg-gray-200">
          <tr>
            <th scope="col" className="px-3 py-3">
              Amount
            </th>
            <th scope="col" className="px-3 py-3">
              Account
            </th>
            <th scope="col" className="px-3 py-3">
              Category
            </th>
            <th scope="col" className="px-3 py-3">
              Group
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
          {tableData.map((data, index) => (
            <tr key={index} className="font-medium border-b">
              <th scope="row" className="px-3 py-2 text-gray-900 whitespace-nowrap">
                &#8377; {data.amount.toLocaleString("en-IN")}
              </th>
              <td className="px-3 py-2">{data.account}</td>
              <td className="px-3 py-2">{data.category}</td>
              <td className="px-3 py-2">{data.group}</td>
              <td className="px-3 py-2">
                <p>{_.truncate(data.remarks, { length: 20 })}</p>
              </td>
              <td className="flex gap-2 px-3 py-2">
                <button className="px-2 py-1 rounded-lg primary-btn box-border outline-none">Edit</button>
                <button className="px-2 py-1 rounded-lg border-2 text-red-500 border-red-500 hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 outline-none">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
