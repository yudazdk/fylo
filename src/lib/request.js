import axios from "axios";
// import mocks from "./mocks";

export default function weatherReportApi(q) {
  console.log("q", q);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=9cff733aee57cb05b63dd4f731c46bc4`;
  return axios.get(url).then((res) => res.data);
  // return Promise.resolve(mocks[q]);
}
