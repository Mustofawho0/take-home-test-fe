'use client';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios-instance';

export const useGetMonthlyQuery = (startMonth: string, endMonth: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['summaryMonthly', startMonth, endMonth],
    queryFn: async () => {
      return await axiosInstance.get(
        '/api/dashboard/common/v1/summaries/orders/monthly?',
        {
          params: {
            start_month: startMonth,
            end_month: endMonth,
          },
        }
      );
    },
  });
  return {
    data,
    isLoading,
  };
};
