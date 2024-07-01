import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ac82c64f5ef74d18a3c9cb04dbf301e7",
  },
});
