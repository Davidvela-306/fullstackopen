import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAll = async () => {
  const req = axios.get(baseUrl);
  const res=await req;
    return res.data;
};

export default { getAll };
