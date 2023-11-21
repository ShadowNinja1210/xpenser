"use client";

import { Navbar } from "../components";
import { LeftMenu, DashboardMain, DashboardRight } from "../containers";
import { createContext, useState } from "react";

export const DashContext = createContext();

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  return (
    <DashContext.Provider value={[activeComponent, setActiveComponent]}>
      <main className="h-screen overflow-y-hidden">
        <Navbar />
        <div className="flex h-screen w-full justify-between items-start">
          <LeftMenu />
          <DashboardMain />
        </div>
      </main>
    </DashContext.Provider>
  );
}
