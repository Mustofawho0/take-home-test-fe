'use client';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios-instance';

export const useGetDetailOrderQuery = (order: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['detailCoupon', order],
    queryFn: async () => {
      return await axiosInstance.get(
        `/api/dashboard/customer-service/v1/orders/${order}`
      );
    },
  });
  return {
    data,
    isLoading,
  };
};
