"use client";
import { useContext } from "react";
import { Dashboard, Calendar, Reports, Feedback, Receipts, Savings } from "../containers";
import { DashContext } from "../dashboard/page";

export default function Home() {
  const [activeComponent] = useContext(DashContext);

  return (
    <main className="w-full">
      {activeComponent === "Dashboard" && <Dashboard />}
      {activeComponent === "Feedback" && <Feedback />}
      {activeComponent === "Receipts" && <Receipts />}
      {activeComponent === "Savings" && <Savings />}
      {activeComponent === "Calendar" && <Calendar />}
      {activeComponent === "Reports" && <Reports />}
    </main>
  );
}
