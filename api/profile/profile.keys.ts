export const profilekeys = {
  all: ['user'] as const,
  profile: () => [...profilekeys.all, 'profile'] as const,
};
