import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";
import axios from "axios";

const registerUser = async (
  userData
) => {
  const res = await axios.post(
    `${base_url}auth/register`,
    userData
  );
  if (res.data) {
    return res.data;
  }
};

const loginUser = async (userData) => {
  const res = await axios.post(
    `${base_url}auth/login`,
    userData
  );
  if (res.data) {
    return res.data;
  }
};
const updateUser = async (dataUser) => {
  const res = await axios.put(
    `${base_url}auth/update-user/${dataUser._id}`,
    dataUser.values,
    config
  );
  return res.data;
};
const updatePass = async (dataUser) => {
  const res = await axios.put(
    `${base_url}auth/password/${dataUser._id}`,
    dataUser.values,
    config
  );
  return res.data;
};

const getUser = async (id) => {
  const res = await axios.put(
    `${base_url}auth/get-user/${id}`
  );
  if (res.data) {
    return res.data;
  }
};

export const authService = {
  registerUser,
  loginUser,
  getUser,
  updateUser,
  updatePass,
};
