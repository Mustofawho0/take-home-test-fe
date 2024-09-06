'use client';
import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios-instance';

export const useUpdatePasswordMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['updatePassword'],
    mutationFn: async ({
      current_password,
      new_password,
      new_password_confirmation,
    }: {
      current_password: string;
      new_password: string;
      new_password_confirmation: string;
    }) => {
      return await axiosInstance.put('/api/dashboard/common/v1/auth/password', {
        current_password,
        new_password,
        new_password_confirmation,
      });
    },
    onSuccess,
    onError,
  });
  return {
    mutateAsync,
  };
};
