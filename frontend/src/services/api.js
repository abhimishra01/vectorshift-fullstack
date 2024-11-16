import axios from "axios";

import { apiRoutes } from "@utils/constants";

const API_URL = process.env.REACT_APP_API_URL;

export const parsePipeline = async (payload) => {
  try {
    const response = await axios.post(`${API_URL}/${apiRoutes.parse}`, payload);
    return { isError: false, data: response.data };
  } catch (error) {
    return { isError: true, message: error.message };
  }
};
