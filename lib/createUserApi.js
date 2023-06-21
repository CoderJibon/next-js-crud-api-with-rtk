const { default: axios } = require("axios");

const createUserApi = async (data) => {
  const response = await axios.post("/api/user", data);
  if (!response.data) throw new Error("Couldn't create user");
  return response.data;
};

export default createUserApi;
