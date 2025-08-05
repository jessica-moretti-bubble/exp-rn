export const authKeys = {
    all: ['auth'] as const,
    login: () => [...authKeys.all, 'login'] as const,
    refresh: () => [...authKeys.all, 'refresh'] as const,
  };
  