import { useGetTopProductQuery } from '../api/useGetTopProductQuery';

export const useGetTopProduct = () => {
  const { data, isLoading } = useGetTopProductQuery();

  return {
    dataTopProduct: data?.data.items,
    isLoading,
  };
};
