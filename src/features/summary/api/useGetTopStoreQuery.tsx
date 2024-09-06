'use client';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios-instance';

export const useGetTopStoreQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['topStore'],
    queryFn: async () => {
      return await axiosInstance.get(
        '/api/dashboard/common/v1/summaries/top/stores?limit=10'
      );
    },
  });
  return {
    data,
    isLoading,
  };
};
