'use client';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios-instance';

export const useGetProfileQuery = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      return await axiosInstance.get('/api/dashboard/common/v1/auth/profile');
    },
  });

  return {
    data,
    isLoading,
    refetch,
  };
};
