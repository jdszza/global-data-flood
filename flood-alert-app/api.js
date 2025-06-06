
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.60.33.250:8080', // Altere para o IP do seu backend
  timeout: 5000,
});

export const getSensorData = async () => {
  const response = await api.get('/sensordata');
  return response.data;
};

export const getAlerts = async () => {
  const response = await api.get('/alertas');
  return response.data;
};

export const getHistory = async () => {
  const response = await api.get('/historico');
  return response.data;
};

export const sendControlAction = async (acao) => {
  const response = await api.post('/controle', {
    acao,
    executado: true,
    dataHora: new Date().toISOString(),
  });
  return response.data;
};
