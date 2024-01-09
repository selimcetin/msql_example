const getData = async (url, method) => {
  const result = await fetch(method, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (result.ok) {
    return res;
  }
};
