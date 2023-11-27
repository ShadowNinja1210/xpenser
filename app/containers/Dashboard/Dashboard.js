"use client";
import { useState, useRef, useEffect } from "react";
import { TableComponent, ExpenseForm, Balance } from "../../components";
import { DataContext } from "../../dashboard/page";
import { useContext } from "react";

export default function Dashboard() {
  const tableData = useContext(DataContext).filter((data) => data.date === "2023-22-11");
  const [isForm, setIsForm] = useState(false);
  const formContainerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (formContainerRef.current && !formContainerRef.current.contains(event.target)) {
      setIsForm(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between w-full flex-1">
      <div className="flex flex-col px-8 w-max flex-1">
        {/* Heading */}
        <div className="flex justify-between items-start py-6">
          <p className="primary-color rounded-lg font-bold text-2xl">Today&rsquo;s Expenses</p>
          <button className="px-2 bg-primary-color py-1 rounded-lg hover:bg-blue-800 focus:bg-blue-800 outline-none">
            <p className="font-medium text-lg text-white" onClick={() => setIsForm(!isForm)}>
              Add +
            </p>
          </button>
        </div>

        {/* Form */}
        {isForm && (
          <div style={{ zIndex: "99999999" }} className="form-bg flex justify-center items-center">
            <div ref={formContainerRef} className="py-8 px-8 rounded-xl bg-white form-container">
              <h1 className="font-bold text-2xl text-center primary-color mb-6">Add a new Xpense</h1>
              <ExpenseForm />
            </div>
          </div>
        )}

        {/* Table */}
        <div>
          <TableComponent tableData={tableData} />
        </div>
      </div>

      {/* Balances */}
      <div style={{ height: "calc(100vh - 68px)" }} className="overflow-y-hidden">
        <Balance />
      </div>
    </div>
  );
}
