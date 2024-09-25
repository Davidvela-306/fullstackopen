import axios from "axios";
const baseUrl = "/api/persons";

const getAll = async () => {
  const request = axios.get(baseUrl);
  const res = await request;
  return res.data;
};

const create = async (newObject) => {
  const request = axios.post(baseUrl, newObject);
  const res = await request;
  return res.data;
};

const remove = async (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  const res = await request;
  return res.data;
};
const update = async (id, updatedPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedPerson);
  const res = await request;
  return res.data;
};

export default { getAll, create, remove, update };
