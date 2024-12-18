import axios from "axios";

// const headers = localStorage.getItem("token");

export const callApi = async ({ url, body, method }) => {
  try {
    const data = await axios({
      url: "http://localhost:4000/" + url,
      data: body,
      // headers: {...headers},
      method,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
