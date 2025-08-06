import { UserLogin, UserLoginResponse } from "src/openapi/generated";
import api from "../interceptors/request-interceptor";


export const loginEndpoint = async (
  data: UserLogin
): Promise<UserLoginResponse> => {
  const response = await api.post<UserLoginResponse>("/auth/login", data);
  return response.data;
};


export const refreshEndpoint = async (
  refreshToken: string
): Promise<UserLoginResponse> => {
  const response = await api.post<UserLoginResponse>("/auth/login/refresh", {
    refreshToken,
  });
  return response.data;
};
