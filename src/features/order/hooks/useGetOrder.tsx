import { useGetOrderQuery } from '../api/useGetOrderQuery';

export const useGetOrder = (page: number, perPage: number) => {
  const { data, isLoading } = useGetOrderQuery(page, perPage);

  return {
    dataOrder: data?.data,
    isLoading,
  };
};
