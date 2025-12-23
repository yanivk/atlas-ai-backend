import axios from 'axios';

export async function callPythonPost(path: string, data: any, headers: any = {}) {
  const url = `${process.env.PYTHON_SERVICE_URL}/${path}`;
  const response = await axios.post(url, data, { headers });
  return response.data;
}

export async function callPythonGet(path: string, headers: any = {}) {
  const url = `${process.env.PYTHON_SERVICE_URL}/${path}`;
  const response = await axios.get(url, { headers });
  return response.data;
}