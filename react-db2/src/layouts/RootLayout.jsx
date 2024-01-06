import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "@mantine/core";

const RootLayout = () => {
  return (
    <div>
      <header>
        <h1>DB2 Project</h1>
        <NavLink href="/" label="Home" />
        <NavLink href="practices" label="Veterinary Practices" />
        <NavLink href="customers" label="Customers" />
        <NavLink href="pets" label="Pets" />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
