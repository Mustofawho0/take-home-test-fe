'use client';
import { useGetProfileQuery } from '../api/useGetProfileQuery';

export const useGetProfile = () => {
  const { data, isLoading, refetch } = useGetProfileQuery();

  return {
    dataProfile: data?.data,
    isLoading,
    refetch,
  };
};
