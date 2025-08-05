import api from '../interceptors/request-interceptor';

export const loginEndpoint = async (data: { handle: string; password: string }) => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

export const refreshEndpoint = async (refreshToken: string) => {
  const response = await api.post('/auth/refresh', { refreshToken });
  return response.data;
};
