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

export const postData = async (url, element) => {
  getData(url, "POST", element);
};

export const putData = async (url, element) => {
  getData(url, "PUT", element);
};

export const deleteData = async (url) => {
  getData(url, "DELETE");
};
