import { useQuery } from '@tanstack/react-query';
import { getProfile } from './profile.endpoints';
import { profilekeys } from './profile.keys';

export const useProfile = () => {
  return useQuery({
    queryKey: profilekeys.profile(),
    queryFn: getProfile,
  });
};
