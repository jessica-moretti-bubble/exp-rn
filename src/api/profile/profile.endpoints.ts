import { UserInfo } from 'src/openapi/generated';
import api from '../interceptors/request-interceptor';


export const getProfile = async (): Promise<UserInfo> => {
  const response = await api.get<UserInfo>('/profile');
  return response.data;
};
