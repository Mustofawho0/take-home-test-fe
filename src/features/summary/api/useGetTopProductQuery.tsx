'use client';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios-instance';

export const useGetTopProductQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['topProduct'],
    queryFn: async () => {
      return await axiosInstance.get(
        '/api/dashboard/common/v1/summaries/top/products?limit=10'
      );
    },
  });
  return {
    data,
    isLoading,
  };
};
