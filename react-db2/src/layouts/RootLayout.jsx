import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "@mantine/core";

const RootLayout = () => {
  return (
    <div>
      <header>
        <h1>DB2 Project</h1>
        <nav>
          <NavLink href="/" label="Home" />
          <NavLink href="veterinary_practices" label="Veterinary Practices" />
          <NavLink href="customers" label="Customers" />
          <NavLink href="pets" label="Pets" />
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
