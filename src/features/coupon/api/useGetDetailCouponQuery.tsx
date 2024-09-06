'use client';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios-instance';

export const useGetDetailCouponQuery = (code: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['detailCoupon', code],
    queryFn: async () => {
      return await axiosInstance.get(
        `/api/dashboard/customer-service/v1/coupons/${code}`
      );
    },
  });
  return {
    data,
    isLoading,
  };
};
