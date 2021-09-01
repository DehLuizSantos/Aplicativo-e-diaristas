import axios from "axios";

const url = "http://ediaristas-workshop.herokuapp.com";

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});
