import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "18777575cf83443fa8870793204c1d17",
  },
});
