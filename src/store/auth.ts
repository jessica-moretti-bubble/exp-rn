import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthState {
  accessToken: string | null;
  idToken: string | null;
  refreshToken: string | null;
  isFirstLogin: boolean;
  hydrated: boolean;
  setHydrated: () => void;
  setLogin: (tokens: {
    accessToken: string;
    idToken: string;
    refreshToken: string;
    isFirstLogin: boolean;
  }) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      idToken: null,
      refreshToken: null,
      isFirstLogin: false,
      hydrated: false,
      setHydrated: () => set({ hydrated: true }),

      setLogin: ({ accessToken, idToken, refreshToken, isFirstLogin }) =>
        set({
          accessToken,
          idToken,
          refreshToken,
          isFirstLogin,
        }),

      logout: () =>
        set({
          accessToken: null,
          idToken: null,
          refreshToken: null,
          isFirstLogin: false,
        }),

    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
      
      
    }
  )
);
