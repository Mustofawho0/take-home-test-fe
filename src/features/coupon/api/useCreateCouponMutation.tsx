'use client';
import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios-instance';

export const useCreateCouponMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['createCoupon'],
    mutationFn: async ({
      code,
      name,
      start_date,
      end_date,
    }: {
      code: string;
      name: string;
      start_date: string;
      end_date: string;
    }) => {
      return await axiosInstance.post(
        '/api/dashboard/customer-service/v1/coupons',
        {
          code,
          name,
          start_date,
          end_date,
        }
      );
    },
    onSuccess,
    onError,
  });
  return {
    mutateAsync,
  };
};
