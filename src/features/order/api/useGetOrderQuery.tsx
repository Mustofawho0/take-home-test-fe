'use client';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios-instance';

export const useGetOrderQuery = (page: number, perPage: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getOrder', page, perPage],
    queryFn: async () => {
      const res = await axiosInstance.get(
        '/api/dashboard/customer-service/v1/orders?',
        {
          params: {
            page: page,
            per_page: perPage,
            sort_by: 'created_at',
            sort_direction: 'desc',
            start_date: '2022-10-01',
            end_date: '2024-12-31',
            search_by: 'invoice_no',
            search_query: '',
          },
        }
      );
      return res;
    },
  });
  return {
    data,
    isLoading,
  };
};
