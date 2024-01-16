export const getData = async (url, method, body) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (!response.ok) {
      throw new Error("Network response was not OK.");
    }

    return response.json();
  } catch (error) {
    console.log("Error:", error);
  }
};

export const updateData = async (url, element) => {
  console.log("element", element);
  getData(url, "PUT", element);
};
