'use client';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios-instance';

export const useGetYearsQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['yearsOrder'],
    queryFn: async () => {
      return await axiosInstance.get(
        '/api/dashboard/common/v1/summaries/orders/yearly?start_year=2024&end_year=2024'
      );
    },
  });
  return {
    data,
    isLoading,
  };
};
