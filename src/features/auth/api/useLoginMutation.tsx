'use client';
import { axiosInstance } from '@/utils/axios-instance';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['loginMutation'],
    mutationFn: async ({
      phone,
      password,
    }: {
      phone: string;
      password: string;
    }) => {
      try {
        const res = await axiosInstance.post(
          '/api/dashboard/common/v1/auth/login',
          {
            phone,
            password,
          }
        );
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess,
    onError,
  });

  return {
    mutateAsync,
  };
};
