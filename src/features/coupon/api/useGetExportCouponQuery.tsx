'use client';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios-instance';

export const useGetExportCouponQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['exportCoupon'],
    queryFn: async () => {
      return await axiosInstance.get(
        '/api/dashboard/customer-service/v1/coupons/export?sort_by=name&sort_direction=asc&search_by=name&search_query='
      );
    },
  });
  return {
    data,
    isLoading,
  };
};
