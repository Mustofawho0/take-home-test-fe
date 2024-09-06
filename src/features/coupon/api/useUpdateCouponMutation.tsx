'use client';
import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios-instance';

interface UpdateCouponProps {
  start_date: string;
  end_date: string;
  code: string;
}

export const useUpdateCouponMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['updateCoupon'],
    mutationFn: async ({ start_date, end_date, code }: UpdateCouponProps) => {
      return await axiosInstance.put(
        `/api/dashboard/customer-service/v1/coupons/${code}`,
        {
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
