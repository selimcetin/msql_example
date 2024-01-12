import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container, Grid } from "@mantine/core";

const spanProps = { base: 12, md: 6, lg: 3 };

const RootLayout = () => {
  return (
    <div>
      <Container>
        <h1>DB2 Project</h1>
        <Grid>
          <Grid.Col span={spanProps}>
            <NavLink to="/">Home</NavLink>
          </Grid.Col>
          <Grid.Col span={spanProps}>
            <NavLink to="veterinary_practices">Veterinary Practices</NavLink>
          </Grid.Col>
          <Grid.Col span={spanProps}>
            <NavLink to="customers">Customers</NavLink>
          </Grid.Col>
          <Grid.Col span={spanProps}>
            <NavLink to="pets">Pets</NavLink>
          </Grid.Col>
        </Grid>
      </Container>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
