"use client";

import { Navbar } from "../components";
import { LeftMenu, DashboardMain } from "../containers";
import { createContext, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const DashContext = createContext();
export const DataContext = createContext();

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const tableData = [
    {
      amount: 2500,
      account: "HDFC Acc",
      category: "Entertainment",
      group: "Loan / EMI",
      date: "2023-22-11",
      xpense_type: "received",
      remarks: "Finnable Loan EMI Every 5th of the Month",
    },
    {
      amount: 2500,
      account: "HDFC Acc",
      category: "Entertainment",
      group: "Loan / EMI",
      date: "2023-22-11",
      xpense_type: "received",
      remarks: "Finnable Loan EMI Every 5th of the Month",
    },
    {
      amount: 3000,
      account: "HDFC Credit Card",
      category: "Entertainment",
      group: "Loan / EMI",
      date: "2023-22-11",
      xpense_type: "spent",
      remarks: "Finnable Loan EMI Every 5th of the Month",
    },
    {
      amount: 4500,
      account: "HDFC Credit Card",
      category: "Entertainment",
      group: "Loan / EMI",
      date: "2023-22-11",
      xpense_type: "spent",
      remarks: "Finnable Loan EMI Every 5th of the Month",
    },
    {
      amount: 2900,
      account: "HDFC Acc",
      category: "Entertainment",
      group: "Loan / EMI",
      date: "2023-22-11",
      xpense_type: "received",
      remarks: "Finnable Loan EMI Every 5th of the Month",
    },
    {
      amount: 2000,
      account: "Axis Credit Card",
      category: "Entertainment",
      group: "Loan / EMI",
      date: "2023-22-11",
      xpense_type: "spent",
      remarks: "Finnable Loan EMI Every 5th of the Month",
    },
    {
      amount: 200,
      account: "Cash",
      category: "Entertainment",
      group: "Loan / EMI",
      date: "2022-09-01",
      xpense_type: "spent",
      remarks: "Finnable Loan EMI Every 5th of the Month",
    },
    {
      amount: 3000,
      account: "HDFC Credit Card",
      category: "Entertainment",
      group: "Loan / EMI",
      date: "2021-09-01",
      xpense_type: "spent",
      remarks: "Finnable Loan EMI Every 5th of the Month",
    },
    {
      amount: 1000,
      account: "HDFC Acc",
      category: "Entertainment",
      group: "Loan / EMI",
      date: "2023-22-11",
      xpense_type: "received",
      remarks: "Finnable Loan EMI Every 5th of the Month",
    },
    {
      amount: 200,
      account: "Cash",
      category: "Entertainment",
      group: "Loan / EMI",
      date: "2022-09-01",
      xpense_type: "spent",
      remarks: "Finnable Loan EMI Every 5th of the Month",
    },
    {
      amount: 3000,
      account: "HDFC Credit Card",
      category: "Entertainment",
      group: "Loan / EMI",
      date: "2021-09-02",
      xpense_type: "spent",
      remarks: "Finnable Loan EMI Every 5th of the Month",
    },
  ];

  return (
    <DashContext.Provider value={[activeComponent, setActiveComponent]}>
      <DataContext.Provider value={tableData}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <main>
            <Navbar />
            <div className="flex h-full w-full justify-between items-start">
              <LeftMenu />
              <DashboardMain />
            </div>
          </main>
        </LocalizationProvider>
      </DataContext.Provider>
    </DashContext.Provider>
  );
}
