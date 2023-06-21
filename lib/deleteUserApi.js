import axios from "axios";

const deleteUserApi = async (id) => {
  const response = await axios.delete(`/api/user?id=${id}`);
  if (!response.data) throw new Error("user not deleted");
  return id;
};

export default deleteUserApi;
