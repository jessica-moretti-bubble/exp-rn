import api from '../interceptors/request-interceptor';

export const getProfile = async () => {
  const response = await api.get('/profile');
  return response.data;
};
