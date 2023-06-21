const { default: axios } = require("axios");

const getAllUSerApi = async () => {
  const response = await axios.get("/api/user");
  if (!response.data) {
    throw new Error("data not available");
  }

  return response.data;
};

export default getAllUSerApi;
