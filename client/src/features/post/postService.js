import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";
import axios from "axios";

const addPost = async (post) => {
  const res = await axios.post(
    `${base_url}post/add-post`,
    post,
    config
  );
  if (res.data) {
    return res.data;
  }
};
const getAllPost = async () => {
  const res = await axios.get(
    `${base_url}post/all-post`,
    config
  );
  if (res.data) {
    return res.data;
  }
};
const getPost = async (id) => {
  const res = await axios.get(
    `${base_url}post/get-post/${id}`,
    config
  );
  if (res.data) {
    return res.data;
  }
};
export const postService = {
  addPost,
  getAllPost,
  getPost,
};
