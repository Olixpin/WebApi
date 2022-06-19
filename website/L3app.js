const postData = async (url = "", data = {}) => {
  console.log(data);

  const response = await fetch(url, {
    method: "POST", // GET, POST, PUT, DELETE, etc.
    credentials: "same-origin", // Include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

postData("/add", { movie: "the matrix", score: 5 });
postData("/add", { movie: "Pitch Perfect", score: 4.5 });

export default postData;
