'use client';
import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios-instance';

export const useUpdateProfileMutation = ({ onSuccess, onError }: any) => {
  const { mutateAsync } = useMutation({
    mutationKey: ['updateProfile'],
    mutationFn: async (fd: any) => {
      return await axiosInstance.post(
        '/api/dashboard/common/v1/auth/profile',
        fd
      );
    },
    onSuccess,
    onError,
  });
  return {
    mutateAsync,
  };
};
