import React from "react";

export default function Customers() {
  return <div></div>;
}

export const customersLoader = async () => {
  const res = await fetch("/api/customer", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("result:", res);

  return res.json();
};
