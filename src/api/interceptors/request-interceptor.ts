import axios from "axios";
import { useAuthStore } from "src/store/auth";

const api = axios.create({
  baseURL: "https://90f5sks4df.execute-api.eu-west-1.amazonaws.com/Api",
});

api.interceptors.request.use(
  async (config) => {
    const { idToken } = useAuthStore.getState();
    if (idToken) {
      config.headers.Authorization = `Bearer ${idToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    const { refreshToken, setLogin, logout } = useAuthStore.getState();

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      refreshToken
    ) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(
          "https://90f5sks4df.execute-api.eu-west-1.amazonaws.com/Api/auth/refresh",
          { refreshToken }
        );

        const {
          accessToken,
          idToken,
          refreshToken: newRefresh,
        } = response.data;

        setLogin({ accessToken, idToken, refreshToken: newRefresh });

        originalRequest.headers.Authorization = `Bearer ${response.data.idToken}`;

        return api(originalRequest);
      } catch (err) {
        logout();
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
