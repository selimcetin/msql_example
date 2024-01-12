export const getData = async (url, method) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not OK.");
    }

    return response.json();
  } catch (error) {
    console.log("Error:", error);
  }
};
