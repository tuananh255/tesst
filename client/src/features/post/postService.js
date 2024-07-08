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

export const postService = {
  addPost,
};
