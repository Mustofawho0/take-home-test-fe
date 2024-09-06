'use client';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios-instance';

export const useGetTopBuyerMutation = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['topBuyer'],
    queryFn: async () => {
      return await axiosInstance.get(
        '/api/dashboard/common/v1/summaries/top/buyers?limit=10'
      );
    },
  });
  return {
    data,
    isLoading,
  };
};
