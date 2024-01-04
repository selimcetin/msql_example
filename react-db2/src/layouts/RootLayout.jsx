import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>DB2 Project</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="practices">Practices</NavLink>
          <NavLink to="customers">Customers</NavLink>
          <NavLink to="pets">Pets</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
