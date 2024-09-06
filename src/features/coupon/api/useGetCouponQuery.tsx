'use client';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios-instance';

export const useGetCouponQuery = (page: number, perPage: number) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['getCoupon', page, perPage],
    queryFn: async () => {
      return await axiosInstance.get(
        `/api/dashboard/customer-service/v1/coupons?page=${page}&per_page=${perPage}&sort_by=name&sort_direction=asc&search_by=name&search_query=`
      );
    },
  });
  return {
    data,
    isLoading,
    refetch,
  };
};
