import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { useAuthStore } from "src/store/auth";
import { loginEndpoint, refreshEndpoint } from "./auth.endpoints";
import { authKeys } from "./auth.keys";

export const useLogin = () => {
  const setLogin = useAuthStore((s) => s.setLogin);
  const router = useRouter();

  return useMutation({
    mutationKey: authKeys.login(),
    mutationFn: loginEndpoint,
    onSuccess: (data) => {
      const { accessToken, idToken, refreshToken, isFirstLogin } = data;

      setLogin({ accessToken, idToken, refreshToken, isFirstLogin });

      router.replace("/(app)/jukebox");
    },
  });
};

export const useRefreshToken = () => {
  const setLogin = useAuthStore((s) => s.setLogin);

  return useMutation({
    mutationKey: authKeys.refresh(),
    mutationFn: refreshEndpoint,
    onSuccess: (data) => {
      const { accessToken, idToken, refreshToken, isFirstLogin} = data;
      setLogin({ accessToken, idToken, refreshToken, isFirstLogin });
    },
  });
};
