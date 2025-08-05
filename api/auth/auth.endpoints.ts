import { UserLogin, UserLoginResponse } from "openapi/generated";
import api from "../interceptors/request-interceptor";

export const loginEndpoint = async (data: {
  handle: string;
  password: string;
}): Promise<UserLogin> => {
  const response = await api.post<UserLogin>("/auth/login", data);
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
